const nums = [10, -5, 20, -3, 15, -8, 0, -2];
function countNegativeNumbers(nums){
    let count = 0;
    for(let i=0;i<nums.length;i++){
        if(nums[i] < 0){
            count ++;
        }
    }
    return count;
}

console.log("Count of negative no : " + countNegativeNumbers(nums));