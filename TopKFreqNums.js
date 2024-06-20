function topKFrequent(nums, k) {
    let map = new Map();

    for (let i = 0; i < nums.length; i++) {
        if (map.has(nums[i])) {
            let count = map.get(nums[i]);
            map.set(nums[i], count + 1);
        } else {
            map.set(nums[i], 1);
        }
    }

    let valueArray = Array.from(map.keys());
    valueArray.sort((a, b) => map.get(b) - map.get(a));
    return valueArray.slice(0, k);
}