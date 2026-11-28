function findMissingNumber(nums, n) {

    for(let i=1;i<=n;i++){
        if(!nums.includes(i)){
            return i
        }
    }
 
}

const nums = [1, 2, 3, 5, 6];

console.log(findMissingNumber(nums, 6));