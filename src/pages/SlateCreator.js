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

	const slateMap = rubricModel[level][domain]
	// console.log('slatemap is:' + slateMap);

	let num = 0;
	const usedQuestion = [];

	const NewSlate = slateMap.map(item => {

		//This is a recursive callback to make sure each question is unique for this slate:
		const getNum = () => {
			num = Math.floor(Math.random()*(Question[item].length))
			const uniqueItem = item + num
			if (usedQuestion.indexOf(uniqueItem) >= 0) {
				console.log(`caught duplicate ${item+num}`)
				getNum()
			} else {
				usedQuestion.push(uniqueItem)
			}
		}


			getNum();


			return (Question[item][num])



	})

	console.log(NewSlate)

};

// for testing:
SlateCreator(3, 'BE');
