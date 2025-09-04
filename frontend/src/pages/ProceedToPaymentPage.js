"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const ProceedToPaymentPage = () => {
    return (<div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-50 to-blue-100 py-10">
      <div className="max-w-md w-full rounded-3xl shadow-2xl bg-white/90 p-8 md:p-12">
        <h1 className="text-3xl md:text-4xl font-extrabold text-center text-blue-700 tracking-wide mb-4">
          Confirmar y Proceder al Pago
        </h1>
        <div className="w-16 h-1 bg-blue-300 rounded mx-auto mb-6"/>
        <p className="text-base md:text-lg text-center text-gray-600 mb-6">
          Por favor revisa los detalles de tu compra antes de continuar.
        </p>
        {/* Aquí puedes agregar detalles del pedido, resumen, etc. */}
        <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold text-lg py-3 rounded-xl shadow-md transition-colors duration-200 mt-2">
          Proceder al Pago
        </button>
      </div>
    </div>);
};
exports.default = ProceedToPaymentPage;
