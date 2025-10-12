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
const db_1 = __importDefault(require("./config/db"));
const fs_1 = __importDefault(require("fs"));
const path_1 = __importDefault(require("path"));
const runMigrations = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        console.log('🚀 Iniciando migraciones de base de datos...');
        // Leer el archivo SQL
        const sqlPath = path_1.default.join(__dirname, '../db_init.sql');
        const sqlContent = fs_1.default.readFileSync(sqlPath, 'utf8');
        // Ejecutar las sentencias SQL
        yield db_1.default.query(sqlContent);
        console.log('✅ Migraciones completadas exitosamente');
        console.log('📋 Tablas creadas:');
        console.log('  - users (existente)');
        console.log('  - chat_sessions (nueva)');
        console.log('  - chat_messages (nueva)');
        console.log('  - Índices de rendimiento');
    }
    catch (error) {
        console.error('❌ Error en migraciones:', error);
    }
    finally {
        yield db_1.default.end();
    }
});
runMigrations();
