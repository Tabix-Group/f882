"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const axios_1 = __importDefault(require("axios"));
const API_BASE = process.env.REACT_APP_API_URL || 'http://localhost:4000/api';
const axios = axios_1.default.create({
    baseURL: API_BASE,
    headers: {
        'Content-Type': 'application/json',
    },
    withCredentials: true,
});
// Request interceptor: attach token if present
axios.interceptors.request.use((config) => {
    try {
        const token = localStorage.getItem('f88_token');
        if (token && config.headers) {
            config.headers.Authorization = `Bearer ${token}`;
        }
    }
    catch (e) {
        // ignore
    }
    return config;
});
// Response interceptor: simple global error handling
axios.interceptors.response.use((resp) => resp, (error) => {
    var _a;
    const status = (_a = error === null || error === void 0 ? void 0 : error.response) === null || _a === void 0 ? void 0 : _a.status;
    if (status === 401) {
        // optional: clear token and redirect to login
        try {
            localStorage.removeItem('f88_token');
            // window.location.href = '/login'; // don't force redirect here, handle in app flow
        }
        catch (e) { }
    }
    return Promise.reject(error);
});
exports.default = axios;
