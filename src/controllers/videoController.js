"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getVideos = void 0;
const getVideos = (req, res) => {
    // Mock: retorna lista de videos de YouTube
    res.status(200).json({
        videos: [
            { id: 1, title: 'Video ejemplo', url: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ' }
        ]
    });
};
exports.getVideos = getVideos;
