"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const react_router_dom_1 = require("react-router-dom");
const AccessProgramMaterialsPage = () => {
    const navigate = (0, react_router_dom_1.useNavigate)();
    return (<div className="max-w-xl mx-auto mt-12 p-8 rounded-3xl shadow-2xl bg-slate-50/90 text-center">
      <h1 className="text-3xl md:text-4xl font-extrabold text-blue-700 mb-2">Materiales del Programa F88</h1>
      <p className="mb-4 text-gray-600 text-lg">Aquí puedes descargar audios, ver videos de YouTube y leer textos exclusivos del programa.</p>
      <button className="bg-blue-700 hover:bg-blue-800 text-white font-bold py-3 px-8 rounded-xl shadow-md transition text-lg mb-2">
        Descargar Materiales
      </button>
      <button type="button" onClick={() => navigate('/steps-to-do')} className="w-full mt-4 text-blue-700 hover:underline font-semibold text-center">
        Volver a los pasos
      </button>
    </div>);
};
exports.default = AccessProgramMaterialsPage;
