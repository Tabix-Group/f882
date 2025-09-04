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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importStar(require("react"));
const api_1 = require("../services/api");
const react_router_dom_1 = require("react-router-dom");
const useToast_1 = require("../hooks/useToast");
const AuthContext_1 = require("../contexts/AuthContext");
const Spinner_1 = __importDefault(require("../components/Spinner"));
const LoginPage = () => {
    const [form, setForm] = (0, react_1.useState)({ email: '', password: '' });
    const [showPassword, setShowPassword] = (0, react_1.useState)(false);
    const [loading, setLoading] = (0, react_1.useState)(false);
    const navigate = (0, react_router_dom_1.useNavigate)();
    const { show } = (0, useToast_1.useToast)();
    const { login } = (0, AuthContext_1.useAuth)();
    const handleChange = (e) => {
        setForm(Object.assign(Object.assign({}, form), { [e.target.name]: e.target.value }));
    };
    const handleSubmit = (e) => __awaiter(void 0, void 0, void 0, function* () {
        var _a, _b;
        e.preventDefault();
        setLoading(true);
        // message handled via toasts
        try {
            const response = yield (0, api_1.loginUser)(form);
            login(response.data.user);
            show('Ingreso exitoso', 'success');
            setTimeout(() => navigate('/dashboard'), 800);
        }
        catch (err) {
            const msg = ((_b = (_a = err.response) === null || _a === void 0 ? void 0 : _a.data) === null || _b === void 0 ? void 0 : _b.message) || 'Error al ingresar.';
            show(msg, 'error');
        }
        setLoading(false);
    });
    return (<div className="bg-black text-white">
      <div className="min-h-screen flex items-center justify-center px-4 py-16">
        <div className="max-w-2xl w-full grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="hidden md:flex flex-col justify-center px-6">
            <h2 className="text-3xl font-extrabold text-white mb-3">Bienvenido de nuevo</h2>
            <p className="text-gray-300">Accede a tu cuenta para continuar tu proceso en F88. Si no tienes cuenta, regístrate.</p>
            <ul className="mt-6 text-sm text-gray-300 space-y-2">
              <li>• Acceso a materiales exclusivos</li>
              <li>• Seguimiento con tu mentor</li>
              <li>• Recursos de entrenamiento y lectura</li>
            </ul>
          </div>

          <div className="max-w-md w-full bg-white/5 backdrop-blur-md border border-white/10 rounded-3xl shadow-xl p-8 md:p-12 fadein show">
            <h1 className="text-3xl font-extrabold text-center bg-clip-text text-transparent bg-gradient-to-r from-white to-blue-300 mb-2">
              Ingresar
            </h1>
            <div className="w-16 h-1 bg-blue-400 rounded mx-auto mb-4"/>

            <form onSubmit={handleSubmit} className="space-y-4" aria-label="Formulario de ingreso">
              <div>
                <label htmlFor="email" className="block font-semibold mb-1">Correo electrónico</label>
                <input id="email" name="email" type="email" value={form.email} onChange={handleChange} placeholder="tucorreo@ejemplo.com" autoComplete="email" required className="w-full px-4 py-3 rounded-xl border border-gray-300 text-black focus:ring-2 focus:ring-blue-400 focus:outline-none text-base bg-white shadow-sm"/>
              </div>

              <div>
                <label htmlFor="password" className="block font-semibold mb-1">Contraseña</label>
                <div className="relative">
                  <input id="password" name="password" type={showPassword ? 'text' : 'password'} value={form.password} onChange={handleChange} placeholder="Ingresa tu contraseña" autoComplete="current-password" required className="w-full px-4 py-3 rounded-xl border border-gray-300 text-black focus:ring-2 focus:ring-blue-400 focus:outline-none text-base bg-white shadow-sm"/>
                  <button type="button" onClick={() => setShowPassword((s) => !s)} aria-label={showPassword ? 'Ocultar contraseña' : 'Mostrar contraseña'} className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-600 hover:text-gray-900">
                    {showPassword ? '🙈' : '👁️'}
                  </button>
                </div>
              </div>

              <div className="flex items-center justify-between text-sm">
                <label className="flex items-center gap-2">
                  <input type="checkbox" className="accent-blue-500"/>
                  <span className="text-gray-300">Recordarme</span>
                </label>
                <button type="button" onClick={() => navigate('/forgot')} className="text-blue-300 hover:underline">Olvidé mi contraseña</button>
              </div>

              <button type="submit" disabled={loading} className="w-full py-3 text-lg font-bold rounded-xl shadow-md bg-blue-600 hover:bg-blue-700 text-white transition-transform hover:scale-105 flex items-center justify-center gap-3">
                {loading ? <><Spinner_1.default size={18}/> Iniciando...</> : 'Iniciar sesión'}
              </button>
            </form>

            <div className="mt-4 text-center text-sm text-gray-300">
              ¿No tienes cuenta? <button onClick={() => navigate('/register')} className="text-blue-300 hover:underline font-semibold">Regístrate</button>
            </div>
          </div>
        </div>
      </div>
    </div>);
};
exports.default = LoginPage;
