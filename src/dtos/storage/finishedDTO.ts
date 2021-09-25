import React from "react";
import { AnswersProps, QuestionsProps } from "../answered/questionAnsweredDTO";

export type CompleteChallengeProps = {
    amount: number;
    allQuestions: QuestionsProps[];
    pick: AnswersProps[];
    correctAnswers: number;
    date: string;
}