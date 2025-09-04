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
exports.processPayment = exports.getAudios = exports.getTexts = exports.getVideos = exports.loginUser = exports.registerUser = void 0;
const axios_1 = __importDefault(require("./axios"));
const registerUser = (data) => __awaiter(void 0, void 0, void 0, function* () {
    return axios_1.default.post(`/users/register`, data);
});
exports.registerUser = registerUser;
const loginUser = (data) => __awaiter(void 0, void 0, void 0, function* () {
    return axios_1.default.post(`/users/login`, data);
});
exports.loginUser = loginUser;
const getVideos = () => __awaiter(void 0, void 0, void 0, function* () {
    return axios_1.default.get(`/videos`);
});
exports.getVideos = getVideos;
const getTexts = () => __awaiter(void 0, void 0, void 0, function* () {
    return axios_1.default.get(`/texts`);
});
exports.getTexts = getTexts;
const getAudios = () => __awaiter(void 0, void 0, void 0, function* () {
    return axios_1.default.get(`/audios`);
});
exports.getAudios = getAudios;
const processPayment = (data) => __awaiter(void 0, void 0, void 0, function* () {
    return axios_1.default.post(`/payments/pay`, data);
});
exports.processPayment = processPayment;
