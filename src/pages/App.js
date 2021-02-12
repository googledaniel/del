import React, { useState, useEffect, useRef } from 'react';
// import SlateCreator from './SlateCreator';
import rubricModel from '.././models/rubricMnodel';

export default function App(props) {
	const [rubric, setRubric] = useState({});
	const [slate, setSlate] = useState([]);

	// useEffect(() => {
	// 	(async () => {
	// 		try {
	// 			const response = await fetch('/api/questions')
	//
	// 		} catch {
	//
	// 		}
	// 	})();
	// }, [rubric]);

	// const handleSubmit = async (e) => {
	// 	e.preventDefault();
	// 	const
	// 	setRubric()
	// }

	//form - handle submit gets the rubricModel and set rubric

	//** This is the logic to create a slate. Split into models and components later

	const SlateCreator = (level, domain) => {
		const slateMap = rubricModel[level].domain;
		console.log(`the rubric model is: ${slateMap}`);
	};

	// for testing:
	SlateCreator(3, 'FE');

	// return <div className="AppPage">This is the {props.page} page</div>;
}
