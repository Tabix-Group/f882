"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const textController_1 = require("../controllers/textController");
const router = (0, express_1.Router)();
router.get('/', textController_1.getTexts);
exports.default = router;
