import mongoose from 'mongoose';
import mongooseUniqueValidator from 'mongoose-unique-validator';

const userSchema = new mongoose.Schema<IUser>(
  {
    username: {
      type: String,
      unique: true
    },
    password_hash: String,
    role: [String],
  },
  {
    timestamps: true,
    toJSON: {
      transform: (_, doc) => {
        doc.id = doc._id.toString();
        delete doc._id;
        delete doc.__v;
        delete doc.password_hash;
      }
    }
  }
);

userSchema.plugin(mongooseUniqueValidator);

export const UserModel: mongoose.Model<IUser> = mongoose.models.user || mongoose.model<IUser>('user', userSchema);
