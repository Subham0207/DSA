


var minEatingSpeed = function(piles, h) {
    function eatBanana(piles, m)
    {
        let eatTimehr = 0
        for(let pile of piles)
        {
            //Math.ceil because we need hours returned for eating each piles.
            //say pile = 7 and m = 3, eat= [3,3,1] i.e. 7/3 = 2.33 hrs => 3 hrs
            eatTimehr += Math.ceil(pile/m);
        }
        return eatTimehr;
    }

    let l = 1; // at min eat 1 banana an hr.
    let r = Math.max(...piles); // at max eat max of piles an hr.
    // search space [l,...,r] // sorted speeds
    let result = r;
    while(l <= r)
    {
        let m = Math.floor((l + r)/2);
        //... banana eating function...
        const eatTimehr = eatBanana(piles,m);
        if(eatTimehr > h) // if speed m is too slow throw away l to m speeds
        {
            l=m+1;
        }
        // if speed m is too fast or equal to h, 
        // i.e. we were able to eat all in h hrs, then throw away m to r speeds
        // Important part is this m speed worked, so we are saving it in result.
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