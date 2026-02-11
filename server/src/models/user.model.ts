import mongoose from "mongoose";

export interface IUserModel extends mongoose.Document {
  name: string;
  email: string;
  credits: number;
  isCreditAvailable: boolean;
  notes: mongoose.Types.ObjectId[];
}

export const UserSchema = new mongoose.Schema<IUserModel>(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    credits: {
      type: Number,
      default: 50,
      min: 0,
    },
    isCreditAvailable: {
      type: Boolean,
      default: true,
    },
    notes: {
      type: [mongoose.Schema.Types.ObjectId],
      ref: "Notes",
      default: [],
    },
  },
  {
    timestamps: true,
  },
);

export const UserModel = mongoose.model<IUserModel>("User", UserSchema); 
