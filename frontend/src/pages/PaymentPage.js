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
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importStar(require("react"));
const api_1 = require("../services/api");
const PaymentPage = () => {
    const [method, setMethod] = (0, react_1.useState)('credit');
    const [details, setDetails] = (0, react_1.useState)({ card: '', paypal: '', mercado: '', crypto: '', bank: '', other: '' });
    const [loading, setLoading] = (0, react_1.useState)(false);
    const [message, setMessage] = (0, react_1.useState)('');
    const handleChange = (e) => {
        setDetails(Object.assign(Object.assign({}, details), { [e.target.name]: e.target.value }));
    };
    const handleSubmit = (e) => __awaiter(void 0, void 0, void 0, function* () {
        e.preventDefault();
        setLoading(true);
        setMessage('');
        try {
            yield (0, api_1.processPayment)({ method, details });
            setMessage('Pago procesado correctamente.');
        }
        catch (err) {
            setMessage('Error al procesar el pago.');
        }
        setLoading(false);
    });
    return (<div className="bg-black text-white">
      <div className="min-h-screen flex items-center justify-center px-4 py-16">
        <div className="max-w-2xl w-full bg-white/5 backdrop-blur-md border border-white/10 rounded-3xl shadow-xl p-8 md:p-12">
          <h1 className="text-3xl md:text-4xl font-extrabold text-center bg-clip-text text-transparent bg-gradient-to-r from-white to-blue-300 mb-4">
            Pago del Programa F88
          </h1>
          <p className="text-gray-300 text-center mb-8">
            Completa tu pago para desbloquear todos los materiales y la mentoría personalizada.
          </p>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="payment-method" className="block font-semibold mb-1">Método de pago</label>
              <select id="payment-method" value={method} onChange={e => setMethod(e.target.value)} className="w-full px-4 py-3 rounded-xl border border-gray-300 text-black focus:ring-2 focus:ring-blue-400 focus:outline-none text-base bg-white shadow-sm">
                <option value="credit">💳 Tarjeta de crédito</option>
                <option value="mercado">💵 Mercado Pago</option>
                <option value="crypto">₿ Criptomonedas</option>
                <option value="paypal">💼 PayPal</option>
              </select>
            </div>

            {method === 'credit' && (<input type="text" name="card" value={details.card} onChange={handleChange} className="w-full px-4 py-3 rounded-xl border border-gray-300 text-black focus:ring-2 focus:ring-blue-400 focus:outline-none text-base bg-white shadow-sm" placeholder="Datos de la tarjeta" required/>)}

            {method === 'mercado' && (<input type="text" name="mercado" value={details.mercado} onChange={handleChange} className="w-full px-4 py-3 rounded-xl border border-gray-300 text-black focus:ring-2 focus:ring-blue-400 focus:outline-none text-base bg-white shadow-sm" placeholder="Correo o teléfono de Mercado Pago" required/>)}

            {method === 'crypto' && (<input type="text" name="crypto" value={details.crypto} onChange={handleChange} className="w-full px-4 py-3 rounded-xl border border-gray-300 text-black focus:ring-2 focus:ring-blue-400 focus:outline-none text-base bg-white shadow-sm" placeholder="Dirección de billetera" required/>)}

            {method === 'paypal' && (<input type="text" name="paypal" value={details.paypal} onChange={handleChange} className="w-full px-4 py-3 rounded-xl border border-gray-300 text-black focus:ring-2 focus:ring-blue-400 focus:outline-none text-base bg-white shadow-sm" placeholder="Correo de PayPal" required/>)}

            <button type="submit" disabled={loading} className="w-full py-3 text-lg font-bold rounded-xl shadow-md bg-blue-600 hover:bg-blue-700 text-white transition-transform hover:scale-105">
              {loading ? 'Procesando...' : 'Pagar'}
            </button>

            {message && (<div className="text-blue-400 text-center mt-4 font-medium">{message}</div>)}
          </form>

          <button type="button" onClick={() => window.location.href = '/steps-to-do'} className="w-full mt-6 text-blue-400 hover:underline font-semibold text-center">
            ← Volver a los pasos
          </button>
        </div>
      </div>
    </div>);
};
exports.default = PaymentPage;
