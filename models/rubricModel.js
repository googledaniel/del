const rubricModel = {
	3: {
		FE: {
			coding: 2,
			systemDesign: 0,
			distributedSystems: 0,
			FETechnologies: 2,
			iOS: 0,
			android: 0
		},
		BE: {
			coding: 4,
			systemDesign: 0,
			distributedSystems: 0,
			FETechnologies: 0,
			iOS: 0,
			android: 0
		}
	}
}

console.log(rubric['3'].BE.coding)

module.exports = rubricModel;