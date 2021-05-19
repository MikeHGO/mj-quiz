import React from 'react';
import QuestionCard from './QuestionCard';
/*
{
	quizTitle: 'RICH TEXT, This is a quiz title',
	quizSynopsis:
		'RICH TEXT, Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim',
	questions: [
		{
			infoBefore: {
				// character, emote, text, bg....
			},
			infoAfter: {
				// character, emote, text, bg....
			},
			question: {
*/
const QuestionsManager = ({ questions }) => {
	console.log('Question manager questions:', questions);
	return (
		<>
			_Question manager
			{questions.map((item, index) => {
				console.log('question manager item:', item.question);
				return <QuestionCard key={index} question={item.question} />;
				// return <QuestionCard key={index} question={{ ...item.question }} />;
			})}
			{/* <QuestionCard question={questions[0].question} /> */}
		</>
	);
};

export default QuestionsManager;
