/*
* Given an array nums. We define a running sum of an array as runningSum[i] = sum(nums[0]…nums[i]).

Return the running sum of nums.
*
* Input: Number[]
* Output: Number[]
*
* Example:
* Input: nums = [1, 2, 3 , 4]
* Output: [1,3,6,10]
* Explanation: Running sum is obtained as follows: [1, 1+2, 1+2+3, 1+2+3+4]
*
* Notes:
* Remember to account for negative numbers
* Add input validation to make sure we are actually getting an array of numbers and not trying to add strings
* An array could have mixed values, so should check at each iteration if it is a number.
* Careful with JS potentially converting '1' into 1
* */

function runningSum1DArray(inputNums){
    const result = [];
    let sum = 0;
    // iterate through the input array
    for (let num of inputNums){
        // check if the value is a number
        if (typeof num === 'number'){
        // if it is, add it to sum and push that number to result
         sum += num;
         result.push(sum)
        }
        else {
            return false;
        }
    }
    return result;
}

module.exports = runningSum1DArray;