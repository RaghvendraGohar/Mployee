import { Schema, model } from 'mongoose';

const JobSchema = new Schema({
  title: String,
  company: String,
  location: String,
  job_link: String,
  employment_type: String,
  experience: String,
  source: String,
  postedDateTime: Date,
  companyImageUrl: String,
  min_exp: Number,
  max_exp: Number,
  country: String,
});

export default model('Job', JobSchema);
