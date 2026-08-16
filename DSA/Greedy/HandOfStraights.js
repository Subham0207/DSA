// Divide hand elements into groups. Each group contains groupsize elements.
// And each group should only consist of consecutive elements

function isNStraightHand(hand, groupSize) {
    if(hand.length % groupSize !== 0) return false;

    // 1. create count map
    const countMap = new Map();
    for(const card of hand)
    {
        countMap.set(card, (countMap.get(card) || 0) + 1);
    }

    // 2. get unique sorted elements
    const sortedCard = Array.from(countMap.keys()).sort((a,b)=> a-b);

    // For the current smallest card with count C,
    // try to decrease the counts of the next groupSize - 1 consecutive numbers by C.
    // If any card lacks sufficient frequency, return false
    for(let card of sortedCard)
    {
        const count = countMap.get(card);

        if(count > 0)
        {
            for(let i=0;i<groupSize;i++)
            {
                const currentCard = card + i; // card + 0, card + 1,... consecutive cards
                const currentCount = countMap.get(currentCard) || 0;

                if(currentCount < count)
                {
                    return false;
                }

                countMap.set(currentCard, currentCount - count);
            }
        }
    }

    return true;
    
}

console.log(isNStraightHand([1,2,4,2,3,5,3,4], 4));