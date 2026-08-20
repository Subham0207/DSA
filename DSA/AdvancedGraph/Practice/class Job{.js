// Initially I thought about binary searching. but our target words can be in both left and right array since they can occur multiple times.
// Then thought about inverted index in elastic search, and went ahead with it.

class Job{
    constructor(description)
    {
        this.desc = description;
        this.arr = this.desc.split('');


        this.map = new Map(); // inverted index: map word to indexes

        for(let i=0;i<this.arr.length;i++)
        {
            let key = this.arr[i];
            if(!this.map.has(key))
            {
                this.map.set(key, []);
            }

            this.map.get(key).push(i);
        }
    }


    getSnippet(w1,w2){
        let arr1 = this.map.get(w1);
        let arr2 = this.map.get(w2);

        let ansW1 = 0;
        let ansW2 = 0;
        let minDiff = Infinity;

        for(let x in arr1)
        {
            for(let y in arr2)
            {
                let temp = Math.abs(y - x);
                if(temp < minDiff)
                {
                    ansW1 = x;
                    ansW2 = y;

                    minDiff = temp;
                }
            }
        }

        return this.arr.slice(ansW1 - 3, ansW2 + 4).join('');
    }
}