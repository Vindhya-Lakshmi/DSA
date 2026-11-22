function countGreater(nums, target){
    let count = 0;
    for(let i=0;i<nums.length;i++){
        if(nums[i] > target){
            count ++;
        }
    }
    return count;
}
const nums = [12,5,8,10,7.34,15,45,15];
console.log("Count of numbers greater than target : " + countGreater(nums, 10));
