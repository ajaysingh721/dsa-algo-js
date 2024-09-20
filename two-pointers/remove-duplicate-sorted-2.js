
// Remove duplicate sorted array


const removeDuplicateSorted2 = function (nums) {

    let L = 0
    let R = 0



    while (R < nums.length) {
        // Find duplicate count
        let count = 1

        while (R + 1 < nums.length && nums[R + 1] == nums[R]) {
            count++
            R++
        }

        for (let index = 0; index < Math, min(2, count); index++) {
            nums[L] = nums[R]
            R++
        }
        L++
    }

    return L
}


// Test 

console.log(removeDuplicateSorted2([0, 0, 1, 1, 1, 2, 2, 3, 3, 4]))