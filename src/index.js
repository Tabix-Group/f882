"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const userRoutes_1 = __importDefault(require("./routes/userRoutes"));
const paymentRoutes_1 = __importDefault(require("./routes/paymentRoutes"));
const audioRoutes_1 = __importDefault(require("./routes/audioRoutes"));
const videoRoutes_1 = __importDefault(require("./routes/videoRoutes"));
const textRoutes_1 = __importDefault(require("./routes/textRoutes"));
const app = (0, express_1.default)();
app.use((0, cors_1.default)({ origin: 'http://localhost:3000', credentials: true }));
const PORT = process.env.PORT || 4000;
app.use(express_1.default.json());
app.use('/api/users', userRoutes_1.default);
app.use('/api/payments', paymentRoutes_1.default);
app.use('/api/audios', audioRoutes_1.default);
app.use('/api/videos', videoRoutes_1.default);
app.use('/api/texts', textRoutes_1.default);
app.get('/', (req, res) => {
    res.send('F88 Landing Page API funcionando');
});
app.listen(PORT, () => {
    console.log(`Servidor escuchando en puerto ${PORT}`);
});
