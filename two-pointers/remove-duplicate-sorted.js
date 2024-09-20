
// Remove duplicate sorted array


const removeDuplicateSorted = function (nums) {

    let L = 0
    let R = 0



    while (L < nums.length - 1) {
        // Find duplicate count
        let count = 1

        while (L < R + 1 && nums[R + 1] == nums[R]) {
            count++
            R++
        }

        for (let index = 0; index < Math, min(1, count); index++) {
            nums[L] = nums[R]
            R++
        }
        L++
    }

    return L
}


// Test 

console.log(removeDuplicateSorted([0, 0, 1, 1, 1, 2, 2, 3, 3, 4]))