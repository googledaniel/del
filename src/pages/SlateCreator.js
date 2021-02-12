const rubricModel = {
	3: {
		FE: ['coding3', 'coding3', 'FETech3', 'FETech3', 'culture3'],
		'BE': ['coding3', 'coding3', 'coding3', 'coding3', 'culture3']
	}
}

console.log(rubricModel[3].BE)



//backticks could be the issue here:
const Question = {
	coding3: [`Here's an L3 question A`, `Here's an L3 question B`, `Here's an L3 question C`, `Here's an L3 question D`],
	culture3: [`This is a culture add question A`, `This is a culture add question B`]
}



const SlateCreator = (level, domain) => {
	console.log(level, domain)

	const slateMap = rubricModel[level][domain]
	console.log('slatemap is:' + slateMap);

	const NewSlate = slateMap.map(item => {
		// let usedNum = {};
		// const num = Math.Floor(Math.random(Question.item.length))
		const num = Math.floor(Math.random()*2)

		return (Question[item][num])
	})

	console.log(NewSlate)

};

// for testing:
SlateCreator(3, 'BE');
