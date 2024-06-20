import { Request, Response } from 'express';
import { Submission } from '../models/Submission';

export const pingController = (req: Request, res: Response) => {
    res.send(true);
};

export const submitController = async (req: Request, res: Response) => {
    const { name, email, phone, github_link, stopwatch_time } = req.body;

    try {
        const newSubmission = new Submission({ name, email, phone, github_link, stopwatch_time });
        await newSubmission.save();
        res.status(201).send('Submission saved successfully.');
    }
    catch (error) {
        res.status(500).send('Error saving submission.');
    }
};

export const readController = async (req: Request, res: Response) => {
    const index = parseInt(req.query.index as string, 10);

    try {
        const submissions = await Submission.find();
        if (index < 0 || index >= submissions.length) {
            res.status(404).send('Submission not found.');
        } else {
            res.status(200).json(submissions[index]);
        }
    } catch (error) {
        res.status(500).send('Error retrieving submissions.');
    }
};

export const deleteController = async (req: Request, res: Response) => {
    const { email } = req.query;

    try {
        const result = await Submission.deleteOne({ email });
        if (result.deletedCount === 0) {
            res.status(404).send('Submission not found.');
        } else {
            res.status(200).send('Submission deleted successfully.');
        }
    } catch (error) {
        res.status(500).send('Error deleting submission.');
    }
};

export const updateController = async (req: Request, res: Response) => {
    const { email } = req.query;
    const { name, phone, github_link, stopwatch_time } = req.body;

    try {
        const result = await Submission.findOneAndUpdate({ email }, { name, phone, github_link, stopwatch_time }, { new: true });
        if (!result) {
            res.status(404).send('Submission not found.');
        } else {
            res.status(200).send('Submission updated successfully.');
        }
    } catch (error) {
        res.status(500).send('Error updating submission.');
    }
};

export const searchController = async (req: Request, res: Response) => {
    const { email } = req.query;

    try {
        const submission = await Submission.findOne({ email });
        if (!submission) {
            res.status(404).send('Submission not found.');
        } else {
            res.status(200).json(submission);
        }
    } catch (error) {
        res.status(500).send('Error searching for submission.');
    }
};
