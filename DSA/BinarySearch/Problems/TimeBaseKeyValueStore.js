// A normal key-value store gives you the current value for a key.
// A time-based key-value store lets you ask: “What was the value of this key at this time?”

// Solution: Basically, when you try to get a key, you will be returned a sorted array,
// in which you need to find the value of a key at time t.

class TimeMap {
    constructor() {
        this.keyStore = new Map();
    }

    /**
     * @param {string} key
     * @param {string} value
     * @param {number} timestamp
     * @return {void}
     */
    set(key, value, timestamp) {
        if(!this.keyStore.get(key))
        {
            this.keyStore.set(key, []);
        }

        this.keyStore.get(key).push([timestamp, value]);
    }

    /**
     * @param {string} key
     * @param {number} timestamp
     * @return {string}
     */
    get(key, timestamp) {
        const arr = this.keyStore.get(key); // [[timestamp,value]]
        if(!arr) return "";
        let l = 0;
        let r = arr.length -1;
        let result = "";
        while(l <= r )
        {
            let mid = Math.floor((l + r)/2);
            if(arr[mid][0] <= timestamp)
            {
                // For arr = [  [1, "a"],  [4, "b"],  [8, "c"]]; and timestamp = 6; 
                // the correct answer is [4,b] i.e. b
                // so we assign the left answer as on option ( because it less than timestamp)
                result = arr[mid][1];
                l = mid + 1;
            }
            else
            {
                r = mid - 1;
            }
        }

        return result;
    }
}
