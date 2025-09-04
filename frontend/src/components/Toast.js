"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Toast = void 0;
const react_1 = __importDefault(require("react"));
const bgFor = {
    info: 'bg-gray-800',
    success: 'bg-green-600',
    error: 'bg-red-600',
};
const Toast = ({ message, type = 'info', onClose }) => {
    return (<div className={`px-4 py-3 rounded-lg text-white shadow-lg ${bgFor[type]}`} role="status">
      <div className="flex items-center justify-between gap-4">
        <div className="text-sm">{message}</div>
        {onClose && (<button onClick={onClose} aria-label="Cerrar" className="text-white/80 hover:text-white">
            ✕
          </button>)}
      </div>
    </div>);
};
exports.Toast = Toast;
exports.default = exports.Toast;
