import { Card } from '@src/components/cards/Card';
import { api } from '@src/utils/api';
import { useEffect, useState } from 'react';

interface Props {
  exp?: string
}

export const CardGame: React.FC<Props> = (props: Props) => {
  const [showAns, setShowAns] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [word, setword] = useState<any>({});

  useEffect(() => {
    try {
      api<IWord>('/api/words/random')
        .then(data => {
          setword(data);
          setIsLoading(false);
        });
    } catch (error) {
      console.error(error);
    }
  }, []);

  const nextQuestHandler = () => {
    setIsLoading(true);
    try {
      api<IWord>('/api/words/random')
        .then(data => {
          setword(data);
          setIsLoading(false);
        });
    } catch (error) {
      console.error(error);
    }
    setShowAns(!showAns);
  };

  if (isLoading) {
    return (
      <div>...loading</div>
    );
  }
  return (
    showAns ?
      <Card cardText={word.en[0]} as='button' bg="green.100" onClick={nextQuestHandler}/>
      :
      <Card cardText={word.dt[0]} as='button' onClick={() => setShowAns(!showAns)}/>
  );
};
