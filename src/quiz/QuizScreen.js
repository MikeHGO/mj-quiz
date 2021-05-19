import React, { useState } from 'react';
import QuestionsManager from './QuestionsManager';
// Data
import { quiz } from '../exempleData';
/* example quiz obj ->
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
// Desestruturando a prop quiz
const QuizScreen = () => {
	// Marcador de inicio do quiz
	const [start, setStart] = useState(false);

	// Extraindo as informacores relevantes
	const { quizTitle, quizSynopsis, questions } = quiz;
	console.log('quiz screen quiz:', quiz);

	// Intercalar info text com quiz card
	// No retorno: {isInfo ?? <info>}
	// Ou prop <info displayNow: "hidden"/>
	return (
		<>
			Quiz Screen
			<QuestionsManager questions={questions} />
		</>
	);
};

export default QuizScreen;
