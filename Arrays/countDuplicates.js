function countDuplicates(nums){
    let count =0;
    let seen = {}
       for (let i = 0; i < nums.length; i++) {
        if (seen[nums[i]]) {
            continue;
        }
        
        for(let j=i+1;j<nums.length;j++){
             if (nums[i] === nums[j]) {
            seen [nums[i]] = true;
            count++
            break;
        }
        }
    }
       
    
    return count;
}
const nums = [2, 5, 2, 8, 5, 9, 2, 10];
console.log("Count of Duplicates: " + countDuplicates(nums));