"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const audioController_1 = require("../controllers/audioController");
const router = (0, express_1.Router)();
router.post('/upload', audioController_1.uploadAudio);
router.get('/', audioController_1.getAudios);
exports.default = router;
