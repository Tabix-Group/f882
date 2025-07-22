"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importStar(require("react"));
const material_1 = require("@mui/material");
const api_1 = require("../services/api");
const VideosTestimonialsPage = () => {
    const [videos, setVideos] = (0, react_1.useState)([]);
    (0, react_1.useEffect)(() => {
        (0, api_1.getVideos)().then(res => {
            const data = res.data;
            setVideos(data.videos);
        });
    }, []);
    return (<material_1.Box maxWidth={800} mx="auto" mt={5}>
      <material_1.Typography variant="h4" mb={2}>Videos & Testimonials</material_1.Typography>
      {videos.map(video => (<material_1.Card key={video.id} sx={{ mb: 2 }}>
          <material_1.CardContent>
            <material_1.Typography variant="h6">{video.title}</material_1.Typography>
            <iframe width="100%" height="315" src={video.url.replace('watch?v=', 'embed/')} title={video.title} frameBorder="0" allowFullScreen></iframe>
          </material_1.CardContent>
        </material_1.Card>))}
    </material_1.Box>);
};
exports.default = VideosTestimonialsPage;
