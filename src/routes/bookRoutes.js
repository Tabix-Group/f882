"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const bookController_1 = require("../controllers/bookController");
const router = (0, express_1.Router)();
router.get('/highlights/:userId', bookController_1.getHighlights);
router.post('/highlights', bookController_1.addHighlight);
router.delete('/highlights/:id', bookController_1.deleteHighlight);
exports.default = router;
