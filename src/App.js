import React, { lazy, Suspense } from 'react';
import { Link, Route, Switch } from 'react-router-dom';

// Components
const Editor = lazy(() => import('./editor/Editor'));
const QuizScreen = lazy(() => import('./quiz/QuizScreen'));

function App() {
	return (
		<div>
			<nav>
				<Link to="/">EDITOR</Link>
				<Link to="/quiz">QuizScreen</Link>
			</nav>
			<Suspense fallback={<div>LOADING...</div>}>
				<Switch>
					<Route exact path="/" component={Editor} />
					<Route exact path="/quiz" component={QuizScreen} />
				</Switch>
			</Suspense>
		</div>
	);
}

export default App;
