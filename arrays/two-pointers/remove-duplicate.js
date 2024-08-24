
const removeDuplicate = function (nums, val) {

    let L = 0;

    for (let R = 0; R < nums.length; R++) {

        if (nums[R] != val) {
            nums[L] = nums[R]
            L++
        }
    }

    return L
}


// Test

console.log(removeDuplicate([1, 2, 3, 4, 5, 4, 4], 4));
