"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Submission = void 0;
const mongoose_1 = require("mongoose");
const submissionSchema = new mongoose_1.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true },
    phone: { type: String, required: true },
    github_link: { type: String, required: true },
    stopwatch_time: { type: String, required: true },
});
exports.Submission = (0, mongoose_1.model)('Submission', submissionSchema);
