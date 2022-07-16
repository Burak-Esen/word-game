import mongoose from 'mongoose';

const wordSchema = new mongoose.Schema<IWord>(
  {
    en: [String],
    tr: [String],
    dt: [String],
    word_type: [String],
    art: String,
    verb: [{}],
    adj: [{}],
    adv: [String],
    noun: [String],
  },
  {
    timestamps: true,
    toJSON: {
      transform: (_, doc) => {
        doc.id = doc._id.toString();
        delete doc._id;
        delete doc.__v;
      }
    }
  }
);

export const WordModel: mongoose.Model<IWord> = mongoose.models.word || mongoose.model<IWord>('word', wordSchema);
