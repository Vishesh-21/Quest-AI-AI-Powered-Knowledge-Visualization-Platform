import mongoose from "mongoose";

export interface IUserModel extends mongoose.Document {
  name: string;
  email: string;
  credits: number;
  imageURL: string;
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
    imageURL: {
      type: String,
      default:
        "https://i.pinimg.com/736x/32/23/ae/3223ae7efbcd98dadbe20465fcd6b7ab.jpg",
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
