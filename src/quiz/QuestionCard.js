import React from 'react';

/*
    question: {
        title: 'RICH TEXT',
        image: 'PROCESSED IMAGE',
        answerType: 'single, multiple or none',
        answers: ['RICH TEXT', 'RICH TEXT', 'RICH TEXT'],
        correctAnswer: '3',
        explanation: 'RICH TEXT',
    },
*/
const QuestionCard = ({ question }) => {
	// const QuestionCard = (title,
	// 		image,
	// 		answerType,
	// 		answers,
	// 		correctAnswer,
	// 		explanation) => {
	const {
		title,
		image,
		answerType,
		answers,
		correctAnswer,
		explanation,
	} = question;
	console.log('Question card:', question);
	return (
		<>
			<div className="">{title}</div>
		</>
	);
};

export default QuestionCard;
