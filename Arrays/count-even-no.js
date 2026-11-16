const nums = [10, 7, 25, 30, 12, 9, 8];

function countEvenNumbers(nums){
    let count = 0;
    for(let i=0;i<nums.length;i++){
        if(nums[i] % 2 === 0){
            count++;
        }
    }
    return count;
}
console.log("Count of even numbers: " + countEvenNumbers(nums)); 