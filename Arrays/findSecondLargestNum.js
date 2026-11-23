
function findSecondLargest(nums) {
    let largest = -Infinity;
    let secondLargest = -Infinity;

    for (let i = 0; i < nums.length; i++) {
        if (nums[i] > largest) {
            secondLargest = largest;
            largest = nums[i];
        }
        else if (nums[i] > secondLargest && nums[i] < largest) {
            secondLargest = nums[i];
        }
    }

    return secondLargest;
}

const nums = [12, 45, 7, 89, 34, 67, 89, 23];

console.log("Second Largest number: " + findSecondLargest(nums));
