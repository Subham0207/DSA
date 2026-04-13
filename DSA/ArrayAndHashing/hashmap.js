// hashing
// check if array is half full - if yes double its size ( Efficient is to choose the prime number after doubling )
// rehasing
// hashing...
// handling collision:
// 1. Chaining: use linked list.
// 2. Open Addressing: store in next available address.

//Struggled: Yes

class Pair{
    constructor(key, value){
        this.key = key;
        this.value = value;
    }
}

class HashMap{
    constructor(){
        this.size = 0;
        this.capacity = 2;
        this.map = [undefined, undefined];
    }

    hash(key)
    {
        let index = 0;
        key.split('').forEach(element => {
            index += element.charCodeAt(0);
        });

        return index % this.capacity;
    }

    get(key)
    {
        let index = this.hash(key);
        
        while(this.map[index])
        {
            if(this.map[index].key === key)
            {
                return this.map[index].value;
            }

            index+=1;
            index = index % this.capacity;
        }
        return undefined;
    }

    put(key, value)
    {
        let index = this.hash(key);
        while(true)
        {
            if(this.map[index] === undefined)
            {
                this.map[index] = new Pair(key, value);
                this.size +=1;
                if(this.size > this.capacity / 2)
                {
                    this.rehash();
                }
                return;
            }
            else if(this.map[index].key === key)
            {
                this.map[index].value = value;
                return;
            }

            index +=1;
            index = index % this.capacity; // so index stays in 0 to this.capacity.
        }
    }

    rehash()
    {
        this.capacity = 2 * this.capacity;
        const newMap = [];
        for (let index = 0; index < this.capacity; index++) {
            newMap.push(undefined);            
        }

        const oldMap = this.map;
        this.map = newMap;
        this.size = 0;

        oldMap.forEach(pair=>{
            if(pair)
            {
                this.put(pair.key, pair.value)
            }
        })
    }
}

map = new HashMap();
map.put("alice", 24);
map.put("brad", 100);

console.log("Result: ", map.get("alice"));