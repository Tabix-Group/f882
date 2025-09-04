"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const ConfirmationPage = () => {
    return (<div className="max-w-xl mx-auto mt-12 p-8 rounded-3xl shadow-2xl bg-slate-50/90 text-center">
      <h1 className="text-3xl md:text-4xl font-extrabold text-blue-700 mb-2">¡Pago Confirmado!</h1>
      <p className="mb-4 text-gray-600 text-lg">Tu pago fue exitoso. ¡Bienvenido al programa!</p>
    </div>);
};
exports.default = ConfirmationPage;
