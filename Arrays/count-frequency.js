    function countFrequency(nums, target) {
        let count = 0;

        for(let i=0;i<nums.length;i++){
            if(nums[i] === target){
                count++
            }
        }
        return count;
    }
    const nums = [10, 20, 10, 30, 10, 40, 20];
console.log("Frequency of 10: " + countFrequency(nums, 10));
console.log("Frequency of 20: " + countFrequency(nums, 20));
console.log("Frequency of 30: " + countFrequency(nums, 30));