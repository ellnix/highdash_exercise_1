const highdash = {}

// Return the sum of the elements of an array
//
// array: array to be summed
highdash.sum = array => {
}


// Return array without the first n elements
//
// array: array to drop elements of
// n: the number of elements to be excluded
highdash.drop = (array, n) => {
}

// Check if every array element returns true for a predicate function
//
// array: array to check
// predicate: function to check truth
highdash.every = (array, predicate) => {
}

// Return elements of the array from the start
// for as long as predicate returns true for each element
//
// array: array to take items from
// predicate: function that must return true for every taken element
highdash.takeWhile = (array, predicate) => {
}

// Run a function n times and put the results in an array
//
// n: the number of times to run a function
// fn: the function to run
highdash.times = (n, fn) => {
}

// Return an array with only the unique elements
// remove duplicates
//
// array: array to remove duplicates from
highdash.uniq = array => {
}

// Return set union of two arrays
// do not keep duplicates
// maintain order of set_a then set_b
//
// set_a: the first set
// set_b: the second set
highdash.union = (set_a, set_b) => {
}

// Return the minimum value in an array based on a function
// the function should be used to find the comparison value,
// the value inside the array should be returned
//
// For instance a function such as `x => -x` will return the max
// of the array since it will take the smallest negative value
//
// highdash.minBy([1, 2, 3], x => -x) == 3
//
// array: array to min
// iteratee: function to call to determine comparison value
highdash.minBy = (array, iteratee) => {
}

export default highdash
