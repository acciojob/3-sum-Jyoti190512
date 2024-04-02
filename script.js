function threeSum(arr, target) {
  //your code here
 // Sort the array
    nums.sort((a, b) => a - b);

    let closestSum = Infinity;

    for (let i = 0; i < nums.length - 2; i++) {
        let left = i + 1;
        let right = nums.length - 1;

        while (left < right) {
            const sum = nums[i] + nums[left] + nums[right];
            // Update closestSum if the current sum is closer to the target
            if (Math.abs(target - sum) < Math.abs(target - closestSum)) {
                closestSum = sum;
            }
            // If the sum is less than the target, move left pointer to the right
            if (sum < target) {
                left++;
            // If the sum is greater than the target, move right pointer to the left
            } else if (sum > target) {
                right--;
            // If the sum equals the target, return it immediately
            } else {
                return closestSum;
            }
        }
    }

    return closestSum;	
}

module.exports = threeSum;
