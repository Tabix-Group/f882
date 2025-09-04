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
const api_1 = require("../services/api");
const VideosTestimonialsPage = () => {
    const [videos, setVideos] = (0, react_1.useState)([]);
    (0, react_1.useEffect)(() => {
        (0, api_1.getVideos)().then(res => {
            const data = res.data;
            setVideos(data.videos);
        });
    }, []);
    return (<div className="max-w-3xl mx-auto mt-12 p-6 md:p-10 rounded-3xl shadow-2xl bg-slate-50/90">
      <h1 className="text-3xl md:text-4xl font-extrabold text-blue-700 mb-6 text-center">Videos & Testimonios</h1>
      <div className="space-y-6">
        {videos.map(video => (<div key={video.id} className="bg-white rounded-xl shadow-md p-4">
            <h2 className="text-xl font-bold mb-2 text-blue-700">{video.title}</h2>
            <div className="aspect-w-16 aspect-h-9 w-full mb-2">
              <iframe className="w-full h-64 rounded-lg" src={video.url.replace('watch?v=', 'embed/')} title={video.title} frameBorder="0" allowFullScreen></iframe>
            </div>
          </div>))}
      </div>
    </div>);
};
exports.default = VideosTestimonialsPage;
