import re

# Read the file
with open('frontend/src/utils/trainingActivities.ts', 'r') as f:
    content = f.read()

def merge_videos_in_details(match):
    details_content = match.group(1)
    
    # Find all videos objects in this details block
    videos_pattern = r'videos:\s*\{([^}]+)\}'
    videos_matches = re.findall(videos_pattern, details_content, re.DOTALL)
    
    if len(videos_matches) <= 1:
        return match.group(0)  # No merging needed
    
    # Combine all video entries
    combined_videos = {}
    for videos_str in videos_matches:
        # Parse each videos object
        entries = re.findall(r"'([^']+)':\s*'([^']+)'", videos_str)
        for key, value in entries:
            combined_videos[key] = value
    
    # Create merged videos object
    merged_videos_str = ',\n                    '.join([f"'{k}': '{v}'" for k, v in combined_videos.items()])
    merged_videos = f'videos: {{\n                    {merged_videos_str}\n                }}'
    
    # Remove all original videos objects and add the merged one
    details_without_videos = re.sub(videos_pattern, '', details_content, flags=re.DOTALL)
    # Remove extra commas that might be left
    details_without_videos = re.sub(r',\s*,', ',', details_without_videos)
    details_without_videos = re.sub(r',\s*\}', '}', details_without_videos)
    
    # Find where to insert the merged videos (after warmup if present, otherwise at the beginning)
    if 'warmup:' in details_without_videos:
        # Insert after warmup
        details_merged = re.sub(r'(warmup:[^,]+),\s*', rf'\1,\n                {merged_videos},\n                ', details_without_videos)
    else:
        # Insert at the beginning after type
        details_merged = re.sub(r'(type:\s*[^,]+),\s*', rf'\1,\n                {merged_videos},\n                ', details_without_videos)
    
    return f'details: {{\n                {details_merged}\n            }}'

# Pattern to match details objects
pattern = r'details:\s*\{([^}]+(?:\{[^}]*\}[^}]*)*)\}'

content = re.sub(pattern, merge_videos_in_details, content, flags=re.DOTALL)

# Write back
with open('frontend/src/utils/trainingActivities.ts', 'w') as f:
    f.write(content)

print('Merged videos objects within details blocks')