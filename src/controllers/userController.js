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
exports.registerUser = exports.loginUser = void 0;
const db_1 = __importDefault(require("../config/db"));
const bcrypt_1 = __importDefault(require("bcrypt"));
const loginUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { email, password } = req.body;
    if (!email || !password) {
        return res.status(400).json({ message: 'Email y contraseña requeridos.' });
    }
    try {
        const result = yield db_1.default.query('SELECT * FROM users WHERE email = $1', [email]);
        console.log('Resultado búsqueda usuario:', result.rows);
        if (result.rows.length === 0) {
            console.log('Usuario no encontrado para email:', email);
            return res.status(401).json({ message: 'Usuario no encontrado.' });
        }
        const user = result.rows[0];
        const match = yield bcrypt_1.default.compare(password, user.password);
        console.log('Comparación bcrypt:', match);
        if (!match) {
            console.log('Contraseña incorrecta para email:', email);
            return res.status(401).json({ message: 'Contraseña incorrecta.' });
        }
        // Aquí podrías generar y devolver un token JWT si lo deseas
        res.status(200).json({ message: 'Login exitoso.', user: { id: user.id, name: user.name, email: user.email } });
    }
    catch (error) {
        console.error('Error en login:', error);
        res.status(500).json({ message: 'Error al iniciar sesión.' });
    }
});
exports.loginUser = loginUser;
// ...existing code...
const registerUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { name, email, password } = req.body;
    if (!name || !email || !password) {
        return res.status(400).json({ message: 'Todos los campos son obligatorios.' });
    }
    // No se aplican restricciones de complejidad al password
    try {
        const hashedPassword = yield bcrypt_1.default.hash(password, 10);
        const result = yield db_1.default.query('INSERT INTO users (name, email, password, created_at) VALUES ($1, $2, $3, NOW()) RETURNING id', [name, email, hashedPassword]);
        res.status(201).json({ id: result.rows[0].id, message: 'Usuario registrado exitosamente.' });
    }
    catch (error) {
        console.error('Error en registro:', error);
        if (error.code === '23505') {
            return res.status(409).json({ message: 'El email ya está registrado.' });
        }
        res.status(500).json({ message: 'Error al registrar usuario.' });
    }
});
exports.registerUser = registerUser;
