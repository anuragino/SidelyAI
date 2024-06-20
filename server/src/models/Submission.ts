import { Schema, model } from 'mongoose';

const submissionSchema = new Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  phone: { type: String, required: true },
  github_link: { type: String, required: true },
  stopwatch_time: { type: String, required: true },
});

export const Submission = model('Submission', submissionSchema);
