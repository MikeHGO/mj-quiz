import {
	Container,
	TextField,
	makeStyles,
	Typography,
	Button,
} from '@material-ui/core';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { saveAs } from 'file-saver';
import { useQuizStore } from '../store/myStore';

const useStyles = makeStyles((theme) => ({
	root: {
		margin: '2rem auto 7rem auto',
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center',
		gap: '1.1rem',
	},
}));

const Editor = () => {
	const styles = useStyles();
	const [submitedQuiz, setSubmitedQuiz] = useState({});
	const quiz = useQuizStore((state) => state.quiz);
	const updateQuestionName = useQuizStore((state) => state.updateQuestionName);

	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm({ mode: 'onBlur' });

	const onSubmit = (data) => {
		console.log('my data:', data.question);
		setSubmitedQuiz({ ...data });

		updateQuestionName(data.question);
		console.log('quiz', quiz);
		downloadQuestion(data);
	};

	const downloadQuestion = (data) => {
		const json = JSON.stringify(data, null, '\t');
		const blob = new Blob([json], { type: 'application/json' });
		saveAs(blob);
	};

	return (
		<Container component="main" maxWidth="xs">
			<Typography variant="h5" align="center">
				QUIZ EDITOR
			</Typography>
			<form onSubmit={handleSubmit(onSubmit)} className={styles.root}>
				<TextField
					{...register('question')}
					type="text"
					label="Question"
					variant="outlined"
					multiline
					fullWidth
					required
					error={!!errors.question}
				/>
				<Typography variant="h6">ANSWERS</Typography>
				<TextField
					{...register('answer1')}
					type="text"
					label="Answer 1"
					variant="outlined"
					fullWidth
					required
					error={!!errors.answer1}
				/>
				<TextField
					{...register('answer2')}
					type="text"
					label="Answer 2"
					variant="outlined"
					fullWidth
					required
					error={!!errors.answer2}
				/>
				<TextField
					{...register('answer3')}
					type="text"
					label="Answer 3"
					variant="outlined"
					fullWidth
					required
					error={!!errors.answer3}
				/>
				<TextField
					{...register('correctAnswer')}
					type="text"
					label="Correct answer"
					variant="outlined"
					fullWidth
					required
					error={!!errors.correctAnswer}
				/>
				<Typography variant="h6">Explanation</Typography>
				<TextField
					{...register('explanation')}
					type="text"
					label="Explanation"
					variant="outlined"
					multiline
					fullWidth
					required
					error={!!errors.explanation}
				/>
				<Button type="submit" variant="contained" color="primary">
					CREATE A QUESTION
				</Button>
			</form>
			{submitedQuiz.question && (
				<Typography variant="body1">
					{JSON.stringify(submitedQuiz, null, '\n')}
				</Typography>
			)}
		</Container>
	);
};

export default Editor;
