import React, { useState, useEffect } from 'react';
import SlateCreator from './SlateCreator';

export default function App(props) {
	const [rubric, setRubric] = useState({});

	useEffect(() => {
		(async () => {
			try {

			} catch {

			}
		})();
	}, [rubric]);

	const handleSubmit = async (e) => {
		e.preventDefault();
		const
		setRubric()
	}

//form - handle submit gets the rubricModel and set rubric



	return <div className="AppPage">This is the {props.page} page</div>;
}
