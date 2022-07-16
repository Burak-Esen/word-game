declare interface IWord {
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
