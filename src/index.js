"use strict";
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
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const userRoutes_1 = __importDefault(require("./routes/userRoutes"));
const paymentRoutes_1 = __importDefault(require("./routes/paymentRoutes"));
const audioRoutes_1 = __importDefault(require("./routes/audioRoutes"));
const videoRoutes_1 = __importDefault(require("./routes/videoRoutes"));
const textRoutes_1 = __importDefault(require("./routes/textRoutes"));
const chatRoutes_1 = __importDefault(require("./routes/chatRoutes"));
const trainingRoutes_1 = __importDefault(require("./routes/trainingRoutes"));
const databaseInit_1 = require("./utils/databaseInit");
const app = (0, express_1.default)();
const allowedOrigins = [
    'http://localhost:3000',
    'https://frontend-production-1b9f.up.railway.app'
];
app.use((0, cors_1.default)({ origin: allowedOrigins, credentials: true }));
const PORT = process.env.PORT || 4000;
app.use(express_1.default.json());
app.use('/api/users', userRoutes_1.default);
app.use('/api/payments', paymentRoutes_1.default);
app.use('/api/audios', audioRoutes_1.default);
app.use('/api/videos', videoRoutes_1.default);
app.use('/api/texts', textRoutes_1.default);
app.use('/api/training', trainingRoutes_1.default);
app.use(chatRoutes_1.default);
app.get('/', (req, res) => {
    res.send('F88 Landing Page API funcionando');
});
app.listen(PORT, () => __awaiter(void 0, void 0, void 0, function* () {
    console.log(`🚀 Servidor escuchando en puerto ${PORT}`);
    // Inicializar base de datos
    try {
        yield (0, databaseInit_1.initializeDatabase)();
    }
    catch (error) {
        console.error('Error al inicializar la base de datos:', error);
        process.exit(1);
    }
}));
