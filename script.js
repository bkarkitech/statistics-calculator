const calculateBtn = document.querySelector('#calculateBtn')
calculateBtn.addEventListener('click', (e) => {
    e.preventDefault()
    const value = document.querySelector('#textArea').value
    const arr = value.split(',')
    const numArr = arr.map(value => {
        return Number(value)
    })
    const sortedArray = numArr.sort((a, b) => a - b)
    
    document.querySelector('#count').innerHTML =  count(sortedArray);
    document.querySelector('#sum').innerHTML =  sum(sortedArray);
    document.querySelector('#mean').innerHTML =  mean(sortedArray);
    document.querySelector('#median').innerHTML =  median(sortedArray);
    document.querySelector('#sorted-data').innerHTML = sortedArray.join(', ');
    document.querySelector('#max').innerHTML = max(sortedArray)
    document.querySelector('#min').innerHTML =  min(sortedArray)
    document.querySelector('#range').innerHTML = range(sortedArray)
    document.querySelector('#variance').innerHTML = variance(sortedArray)
    document.querySelector('#standard-deviation').innerHTML = standardDeviation(variance(sortedArray))
})  

function count(arr) {
    return arr.length
}
function sum(arr) {
    const initialValue = 0
    return arr.reduce((previousValue, currentValue) => previousValue + currentValue, initialValue )
}

function mean(arr) {
    return sum(arr) / arr.length
}

function median(arr) {
    const { length } = arr
    const half = Math.floor(length / 2)
    if (length % 2) {
        return arr[half]
    } else {
        return ((arr[half - 1] + arr[half]) / 2)
    }
}

function max(arr) {
    return Math.max(...arr)
}

function min(arr) {
    return Math.min( ...arr)
}

function range(arr) {
    return Math.max(...arr) - Math.min(...arr)
}

function variance(arr) {
    const average = mean(arr)
    const squareDiffs = arr.map((value) => {
        const diff = value - average
        return diff * diff
    })

    const variance = mean(squareDiffs)
    return variance
}

function standardDeviation(variance) {
    return Math.sqrt(variance)
}

// 1, 2, 3, 4, 6, 7, 8, 9         // Median = 5
// 1, 2, 3, 4, 6, 20, 7, 8, 10      // Median = 6 