/*
* You have a long flowerbed in which some of the plots are planted, and some are not.
* However, flowers cannot be planted in adjacent plots.

Given an integer array flowerbed containing 0's and 1's, where 0 means empty and 1 means not empty, and an integer n,
* return if n new flowers can be planted in the flowerbed without violating the no-adjacent-flowers rule.
* Input: flowerbed: number[], n: number
* Output: boolean
*
* Example 1:
* Input: flowerbed = [1,0,0,0,1], n = 1
* Output: true
*
* Example 2:
* Input: flowerbed = [1,0,0,0,1], n = 2
* Output: false
*
* Notes:
* Check for single values
*  */

function canPlaceFlowers(flowerbed, n) {
    let count = 0;
        if (flowerbed.length === 1 && flowerbed[0] === 0) {
            count++
            return (count <= n)
        }

    //iterate through the array and count how many spaces there are for flowers
        // if we count a spot, we move ahead by 2, since we would plant something there and then the next spot would be adjacent
    for (let i = 0; i < flowerbed.length; i++) {
    // check for single value array
        if (flowerbed[i] === 0 && (i==0 || flowerbed[i-1]===0) && (i==flowerbed.length-1 || flowerbed[i+1]===0)) {
            count++;
            i++;
        }
    }
        // if n is greater than count, break and return false
        if (n > count){
            return false;
        }
    // We reached the end without having found enough spots
    return true;
}

canPlaceFlowers([1,0,0,0,1], 1)

module.exports = canPlaceFlowers