import mongoose from 'mongoose';

export interface IWord {
  en: Array<string>;
  tr: Array<string>;
  dt: Array<string>;
  word_type: Array<'noun' | 'verb' | 'adverb' | 'adjective' | 'idiom'>;
  verb?: Array<{
    verb: string;
    imperfectum?: Array<{ key: string; value: string}>;
    perfectum?: Array<{ key: string; value: string}>;
    is_regular_verb?: boolean;
  }>;
  art?: 'de' | 'het';
  adj?: Array<{
    adj: string;
    comperative?: string;
    superlative?: string;
  }>;
  adv?: Array<string>;
  noun?: Array<string>;
}

export type IWordFromDb = IWord & mongoose.Types.ObjectId;
export type IWordJson = IWord & { id: string };

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

export const WordModel = mongoose.models.word || mongoose.model('word', wordSchema);
