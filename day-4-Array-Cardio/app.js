// Array of object
const inventors = [
	{ first: 'Nadir', last: 'Bakhsh', year: 1996, passed: 2012 },
	{ first: 'Ali', last: 'Khan', year: 2000, passed: 2016 },
	{ first: 'Sana', last: 'Baloch', year: 1996, passed: 2019 },
	{ first: 'Romi', last: 'Sultan', year: 2002, passed: 2022 },
]

// array of People
const people = [
	'Charlotte Jones',
	'Rebecca Smith',
	'Harry Smith',
	'John Smithy',
	'Smith Jones',
	'Debbie',
	'Jake',
	'Dohm',
]

// Array.prototype.filter()
// 1. filter the first of inventor for those who ware born in the
const ninetyNineSix = inventors.filter((inventor) => {
	if (inventor.year > 1995 && inventor.year < 1997) {
		return true
	}
})
console.table(ninetyNineSix)

// array.prototype.map()
// 2. give us an array of inventory first name and last name
const fullName = inventors.map((inventor) => `${inventor.first} ${inventor.last}`)
console.log(fullName)

// array.prototype.sort()
// 3. sort the inventors, oldest to youngest
const order = inventors.sort((a, b) => (a.year > b.year ? 1 : 1))
console.log('order By', order)

// array.prototype.reducer()
// 4. how many years did all the inventor live
const totalYears = inventors.reduce((total, inventor) => {
	return total + (inventor.passed - inventor.year)
}, 0)
console.log('totalYears', totalYears)

// 5. sort the inventors by years lived
const oldest = inventors.sort((a, b) => {
	const lastGuy = a.passed - a.year
	const nextGuy = b.passed - b.year
	lastGuy > nextGuy ? 1 : -1
})
console.table(oldest)

// 6 Reducer Exercise
// sum up the instance of each of the these

const data = [
	'car',
	'truck',
	'car',
	'truck',
	'car',
	'truck',
	'bike',
	'walk',
	'bike',
	'walk',
	'bike',
	'walk',
	'bike',
	'walk',
]

const transportation = data.reduce((obj, item) => {
	if (!obj[item]) {
		obj[item] = 0
	}
	obj[item]++
	return obj
}, {})

console.log('transportation', transportation)
