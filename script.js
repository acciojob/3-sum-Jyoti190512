function threeSum(arr, target) {
  //your code here
	    // Sort the array
    arr.sort((a, b) => a - b);

    // Initialize closestSum to store the sum closest to the target
    let closestSum = Infinity;

    // Iterate through the array
    for (let i = 0; i < arr.length - 2; i++) {
        let left = i + 1;
        let right = arr.length - 1;

        // Two pointer approach
        while (left < right) {
            // Calculate current sum
            let sum = arr[i] + arr[left] + arr[right];

            // Update closestSum if current sum is closer to target
            if (Math.abs(sum - target) < Math.abs(closestSum - target)) {
                closestSum = sum;
            }

            // Adjust pointers based on current sum
            if (sum < target) {
                left++;
            } else if (sum > target) {
                right--;
            } else {
                // If sum equals target, return immediately
                return sum;
            }
        }
    }

    return closestSum;
}
}

module.exports = threeSum;
