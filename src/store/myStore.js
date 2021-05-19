import create from 'zustand';
import { devtools, persist } from 'zustand/middleware';
import produce from 'immer';

// IMMER WRAPPER, roda produce no set
export const immer = (config) => (set, get) =>
	config((fn) => set(produce(fn)), get);

const quizStore = (set) => ({
	quiz: {
		question: '',
	},

	updateQuestionName: (questionName) =>
		set((state) => {
			state.quiz.question = questionName;
		}),
});

export const useQuizStore = create(immer(quizStore));

// aplicando redux devtool, extensao de navegador compativel com zustand
// store = devtools(store);
// persist mantem os dados
// store = persist(store, { name: 'dataName' });
