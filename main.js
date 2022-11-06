function power(num,n) {
    var s = 1;
    for (let i = 0; i < n; i++) {
        s = s * num;
    }
    console.log(s);
}

function array2d(arr) {
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr[i].length; j++) {
            console.log(arr[i][j])
        }
    }
}

function isodd(arr) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 !== 0) console.log(arr[i]);
    }
}

function vowels(str) {
    const v = "aeiouyAEIOUY"
    for (let i = 0; i < str.length; i++) {
        if (v.includes(str[i])) console.log(str[i])
    }
}

function smallestLargest(arr) {
    var smollest = arr[0];
    var largest = arr[0];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < smollest) smollest = arr[i];
        if (arr[i] > largest) largest = arr[i];
    }
    console.log("smolest: "+smollest.toString())
    console.log("largest: "+largest.toString())
}


console.log("1. Write a function that finds the power of a number using loop.")
power(3,3)

console.log("2. Write a function that prints a 2D array.")
const arr2d = [
    [1,2,3,4,5],
    [6,7,8,9,10],
    [11,12,13,14,15]
]
array2d(arr2d)
console.log("3. Write a function that prints odd numbers in given array.")
const arr2 = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]
isodd(arr2)
console.log("4. Write a function that prints all the vowels of a given string.")
vowels("function that prints all the vowels")
console.log("5. Write a function that finds the largest/smallest number in an array.")
smallestLargest([214,1,2,4,25,117])


