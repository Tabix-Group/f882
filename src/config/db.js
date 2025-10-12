"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const pg_1 = require("pg");
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const connectionString = process.env.DATABASE_URL;
const pool = connectionString
    ? new pg_1.Pool({ connectionString, ssl: { rejectUnauthorized: false } })
    : new pg_1.Pool({
        user: process.env.DB_USER || 'postgres',
        host: process.env.DB_HOST || 'localhost',
        database: process.env.DB_NAME || 'f88',
        password: process.env.DB_PASSWORD || 'postgres',
        port: Number(process.env.DB_PORT) || 5432,
        ssl: false
    });
exports.default = pool;
