import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const UserProfile = new Schema({
  userId: {
    type: String,
    required: true,
    minlength: 6,
    maxlength: 20,
    trim: true,
  },
  name: {
    type: String,
    required: true,
    minlength: 2,
    maxlength: 60,
    trim: true,
  },
  phone: {
    type: String,
    required: true,
    minlength: 10,
    maxlength: 15,
    trim: true,
  },
  address: {
    type: String,
    required: false,
    maxlength: 150,
    trim: true,
  },
  country: {
    type: String,
    required: true,
    maxlength: 60,
    trim: true,
  },
  province: {
    type: String,
    required: false,
    maxlength: 60,
    trim: true,
  },
  canton: {
    type: String,
    required: false,
    maxlength: 60,
    trim: true,
  },
  district: {
    type: String,
    required: false,
    maxlength: 60,
    trim: true,
  },
}, { timestamps: true });

export default mongoose.model('userprofiles', UserProfile);
