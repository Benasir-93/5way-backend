
import mongoose from "mongoose";

const formEntrySchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    maxlength: 32,
    trim: true,
  },
  phoneNo: {
    type: Number,
    required: true,
  },
  location: {
    type: String,
    required: true,
  },
  message: {
    type: String,
    default: "",
  },
  enquiryType: {
    type: String,
  },
  // New field for the nested radio button
  hardwareType: {
    type: String,
    // Include required constraint if necessary
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const userSchema = new mongoose.Schema({
  email: {
    type: String,
    unique: true,
    required: true,
  },
  formEntries: [formEntrySchema],
});

const User = mongoose.model("user", userSchema);

export { User, formEntrySchema };
