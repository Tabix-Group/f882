import React, { useEffect, useState } from 'react';
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
    <div className="max-w-3xl mx-auto mt-12 p-6 md:p-10 rounded-3xl shadow-2xl bg-slate-50/90">
      <h1 className="text-3xl md:text-4xl font-extrabold text-blue-700 mb-6 text-center">Videos & Testimonios</h1>
      <div className="space-y-6">
        {videos.map(video => (
          <div key={video.id} className="bg-white rounded-xl shadow-md p-4">
            <h2 className="text-xl font-bold mb-2 text-blue-700">{video.title}</h2>
            <div className="aspect-w-16 aspect-h-9 w-full mb-2">
              <iframe
                className="w-full h-64 rounded-lg"
                src={video.url.replace('watch?v=', 'embed/')}
                title={video.title}
                frameBorder="0"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default VideosTestimonialsPage;
