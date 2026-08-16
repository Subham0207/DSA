function mergeTriplets(triplets, target)
{
    let good = new Set();

    for(let i =0;i<triplets.length;i++)
    {
        if(triplets[i][0] > target[0] || triplets[i][1] > target[1] || triplets[i][2] > target[2])
            continue;

        for(let j=0;j<triplets[i].length;j++)
        {
            let ele = triplets[i][j];
            if(ele === target[j])
                good.add(j);
        }
    }

    return good.size == 3;
}

console.log(mergeTriplets([[1,2,3],[7,1,1]], [7,2,3]));