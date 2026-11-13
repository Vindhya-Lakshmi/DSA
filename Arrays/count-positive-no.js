function countPositive(nums){

let count = 0;

for(let i=0;i<nums.length;i++){
    if(nums[i] > 0){
        count++;
    }
}
return count;
}
const nums = [10, -5, 20, -3, 0, 15, -8];

console.log("Positive no : " + countPositive(nums));