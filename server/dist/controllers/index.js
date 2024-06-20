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
Object.defineProperty(exports, "__esModule", { value: true });
exports.searchController = exports.updateController = exports.deleteController = exports.readController = exports.submitController = exports.pingController = void 0;
const Submission_1 = require("../models/Submission");
const pingController = (req, res) => {
    res.send(true);
};
exports.pingController = pingController;
const submitController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { name, email, phone, github_link, stopwatch_time } = req.body;
    try {
        const newSubmission = new Submission_1.Submission({ name, email, phone, github_link, stopwatch_time });
        yield newSubmission.save();
        res.status(201).send('Submission saved successfully.');
    }
    catch (error) {
        res.status(500).send('Error saving submission.');
    }
});
exports.submitController = submitController;
const readController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const index = parseInt(req.query.index, 10);
    try {
        const submissions = yield Submission_1.Submission.find();
        if (index < 0 || index >= submissions.length) {
            res.status(404).send('Submission not found.');
        }
        else {
            res.status(200).json(submissions[index]);
        }
    }
    catch (error) {
        res.status(500).send('Error retrieving submissions.');
    }
});
exports.readController = readController;
const deleteController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { email } = req.query;
    try {
        const result = yield Submission_1.Submission.deleteOne({ email });
        if (result.deletedCount === 0) {
            res.status(404).send('Submission not found.');
        }
        else {
            res.status(200).send('Submission deleted successfully.');
        }
    }
    catch (error) {
        res.status(500).send('Error deleting submission.');
    }
});
exports.deleteController = deleteController;
const updateController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { email } = req.query;
    const { name, phone, github_link, stopwatch_time } = req.body;
    try {
        const result = yield Submission_1.Submission.findOneAndUpdate({ email }, { name, phone, github_link, stopwatch_time }, { new: true });
        if (!result) {
            res.status(404).send('Submission not found.');
        }
        else {
            res.status(200).send('Submission updated successfully.');
        }
    }
    catch (error) {
        res.status(500).send('Error updating submission.');
    }
});
exports.updateController = updateController;
const searchController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { email } = req.query;
    try {
        const submission = yield Submission_1.Submission.findOne({ email });
        if (!submission) {
            res.status(404).send('Submission not found.');
        }
        else {
            res.status(200).json(submission);
        }
    }
    catch (error) {
        res.status(500).send('Error searching for submission.');
    }
});
exports.searchController = searchController;
