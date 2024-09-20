const subset = function (nums) {
    const result = [];

    const dfs = function (index, path) {
        result.push(path)
        for (let i = index; i < nums.length; i++) {
            dfs(i + 1, [...path, nums[i]]);
        }
    };

    dfs(0, []);
    return result;
}


//test 

console.log(subset([1, 2, 3]));
