


var minEatingSpeed = function(piles, h) {
    function eatBanana(piles, m)
    {
        let eatTimehr = 0
        for(let pile of piles)
        {
            //Math.ceil because we need hours returned for eating each piles.
            eatTimehr += Math.ceil(pile/m);
        }
        return eatTimehr;
    }

    let l = 1;
    let r = Math.max(...piles);
    let result = r;
    while(l <= r)
    {
        let m = Math.floor((l + r)/2);
        //... banana eating function...
        const eatTimehr = eatBanana(piles,m);
        if(eatTimehr > h)
        {
            l=m+1;
        }
        else if (eatTimehr <= h)
        {
            //since we need to find the minimum speed. m will smaller here than last result.
            result = m;
            r=m-1;
        }
    }

    return result;
};


const result = minEatingSpeed([3,6,7,11], 8);
const result2 = minEatingSpeed([312884470], 312884469);
console.log("Result", result);
console.log("Result2", result2);