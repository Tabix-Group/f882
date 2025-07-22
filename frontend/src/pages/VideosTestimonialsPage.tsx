import React, { useEffect, useState } from 'react';
import { Box, Typography, Card, CardContent } from '@mui/material';
import { getVideos } from '../services/api';

const VideosTestimonialsPage: React.FC = () => {
  const [videos, setVideos] = useState<any[]>([]);

  useEffect(() => {
    getVideos().then(res => {
      const data = res.data as { videos: any[] };
      setVideos(data.videos);
    });
  }, []);

  return (
    <Box maxWidth={800} mx="auto" mt={5}>
      <Typography variant="h4" mb={2}>Videos & Testimonials</Typography>
      {videos.map(video => (
        <Card key={video.id} sx={{ mb: 2 }}>
          <CardContent>
            <Typography variant="h6">{video.title}</Typography>
            <iframe width="100%" height="315" src={video.url.replace('watch?v=', 'embed/')} title={video.title} frameBorder="0" allowFullScreen></iframe>
          </CardContent>
        </Card>
      ))}
    </Box>
  );
};

export default VideosTestimonialsPage;
