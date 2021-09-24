import React from 'react';
import { UseData } from '../../context/UseQuestions';

import './styles.css';

const Result = () => {
  const {context} = UseData()
  const {questionsAnswered} = context

  console.log(questionsAnswered)
  return <div />;
}

export default Result;