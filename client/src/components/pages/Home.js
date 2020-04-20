import React, { useContext } from 'react';
import Books from '../books/Books';
import BookContext from '../../context/book/bookContext';

const Home = () => {
	const bookContext = useContext(BookContext);

	const { allState } = bookContext;
	console.log('home page', allState);
	return (
		<div>
			<h1>Home Section to display all books</h1>
			<Books />
		</div>
	);
};

export default Home;
