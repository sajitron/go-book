import React, { Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import PrivateRoute from './components/routing/PrivateRoute';

import Landing from './components/pages/Landing';
import Register from './components/auth/Register';
import Login from './components/auth/Login';
import Book from './components/books/Book';
import Home from './components/pages/Home';
import NotFound from './components/pages/NotFound';
import Navbar from './components/layout/Navbar';

import AlertState from './context/alert/AlertState';
import AuthState from './context/auth/AuthState';
import BookState from './context/book/BookState';

const App = () => {
	return (
		<AuthState>
			<BookState>
				<AlertState>
					<Router>
						<Fragment>
							<Navbar />
							<div>
								<Switch>
									<PrivateRoute exact path="/book" component={Book} />
									<Route exact path="/" component={Landing} />
									<Route exact path="/register" component={Register} />
									<Route exact path="/login" component={Login} />
									<Route exact path="/home" component={Home} />
									<Route component={NotFound} />
								</Switch>
							</div>
						</Fragment>
					</Router>
				</AlertState>
			</BookState>
		</AuthState>
	);
};

export default App;
