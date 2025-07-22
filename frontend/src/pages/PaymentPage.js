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
const material_1 = require("@mui/material");
const CreditCard_1 = __importDefault(require("@mui/icons-material/CreditCard"));
const AccountBalance_1 = __importDefault(require("@mui/icons-material/AccountBalance"));
const CurrencyBitcoin_1 = __importDefault(require("@mui/icons-material/CurrencyBitcoin"));
const AttachMoney_1 = __importDefault(require("@mui/icons-material/AttachMoney"));
const AccountBalanceWallet_1 = __importDefault(require("@mui/icons-material/AccountBalanceWallet"));
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
            setMessage('Payment processed successfully.');
        }
        catch (err) {
            setMessage('Error processing payment.');
        }
        setLoading(false);
    });
    return (<material_1.Box maxWidth={500} mx="auto" mt={5}>
      <material_1.Typography variant="h4" mb={2}>F88 Program Payment</material_1.Typography>
      <material_1.Typography mb={2}>Complete your payment to unlock all materials and personalized mentoring.</material_1.Typography>
      <form onSubmit={handleSubmit}>
        <material_1.TextField select label="Payment Method" value={method} onChange={e => setMethod(e.target.value)} fullWidth margin="normal">
          <material_1.MenuItem value="credit"><CreditCard_1.default sx={{ mr: 1 }}/>Credit Card</material_1.MenuItem>
          <material_1.MenuItem value="mercado"><AttachMoney_1.default sx={{ mr: 1, color: '#009EE3' }}/>Mercado Pago</material_1.MenuItem>
          <material_1.MenuItem value="crypto"><CurrencyBitcoin_1.default sx={{ mr: 1, color: '#F7931A' }}/>Cryptocurrency</material_1.MenuItem>
          <material_1.MenuItem value="bank"><AccountBalance_1.default sx={{ mr: 1, color: 'success.main' }}/>Bank Transfer</material_1.MenuItem>
          <material_1.MenuItem value="paypal"><AccountBalanceWallet_1.default sx={{ mr: 1, color: '#003087' }}/>PayPal</material_1.MenuItem>
          <material_1.MenuItem value="other">Other</material_1.MenuItem>
        </material_1.TextField>
        {method === 'credit' && (<material_1.TextField label="Card Details" name="card" value={details.card} onChange={handleChange} fullWidth margin="normal" required/>)}
        {method === 'mercado' && (<material_1.TextField label="Mercado Pago Email or Phone" name="mercado" value={details.mercado} onChange={handleChange} fullWidth margin="normal" required/>)}
        {method === 'crypto' && (<material_1.TextField label="Crypto Wallet Address" name="crypto" value={details.crypto} onChange={handleChange} fullWidth margin="normal" required/>)}
        {method === 'bank' && (<material_1.TextField label="Bank Account/CBU" name="bank" value={details.bank} onChange={handleChange} fullWidth margin="normal" required/>)}
        {method === 'paypal' && (<material_1.TextField label="PayPal Email" name="paypal" value={details.paypal} onChange={handleChange} fullWidth margin="normal" required/>)}
        {method === 'other' && (<material_1.TextField label="Other Method" name="other" value={details.other} onChange={handleChange} fullWidth margin="normal" required/>)}
        <material_1.Button type="submit" variant="contained" color="primary" fullWidth disabled={loading} sx={{ mt: 2 }}>
          {loading ? 'Processing...' : 'Pay'}
        </material_1.Button>
      </form>
      {message && <material_1.Typography color="secondary" mt={2}>{message}</material_1.Typography>}
      <material_1.Button variant="text" color="primary" onClick={() => window.location.href = '/steps-to-do'} sx={{ mt: 2 }}>
        Back to Steps
      </material_1.Button>
    </material_1.Box>);
};
exports.default = PaymentPage;
