nums = [1, 1, 2, 2, 3]

var removeDuplicates = function(nums) {
    if (nums.length === 0) return 0;
    let k = 1;
    for (let i = 1; i < nums.length; i++){
        if (nums[i] !== nums[i-1]){
            nums[k] = nums[i]
            k++;
        }
    }
    return k;
};

// i = 1

// nums[1] === nums[0] --> skip it 
// - bc we don't move K (still 1) we "ignore this duplicate"

// i = 2

// nums[2] !== nums[1] --> unique number found
// place it at index k --> nums[1] = 2

// move k -> k = 2

// [1,2,2,3]

// i = 3

// nums[3] === nums[2] (2 === 2) ---> skip removeDuplicates

// i = 4 

// nums[4] !== nums[3] (3 != 2) --> unique number found
// place it at index k --> nums[2] = 3
// move k --> k = 3

// [1,2,3,2,3]

// k = 3

// nums.slice(0,k) --> [1,2,3]