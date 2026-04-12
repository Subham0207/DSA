
function apartmentHunting(blocks, reqs) {
  // 1. Get the minimum distances for each requirement individually
  const minDistancesFromBlocks = reqs.map(req => getMinDistances(blocks, req));
  
  // 2. For each block, find the maximum distance to any requirement
  const maxDistancesAtBlocks = getMaxDistancesAtBlocks(blocks, minDistancesFromBlocks);
  
  // maximum distance because it returns the worst case i.e. that is the amenety that is farthest for each block.
  // This gaurantees that other ameneties distances are smaller than this. So look for min in worst case distances returned,
  // 3. Return the index of the block with the smallest "maximum distance"
  return getIdxOfMinVal(maxDistancesAtBlocks);
}

function getMinDistances(blocks, req) {
  const minDistances = new Array(blocks.length);
  let closestReqIdx = Infinity;

  // Left-to-right pass
  for (let i = 0; i < blocks.length; i++) {
    if (blocks[i][req]) 
    {
        closestReqIdx = i
        console.log(`Min distances(${req})...`, closestReqIdx);
    };
    minDistances[i] = Math.abs(i - closestReqIdx);
  }

  // Right-to-left pass
  closestReqIdx = Infinity;
  for (let i = blocks.length - 1; i >= 0; i--) {
    if (blocks[i][req]) closestReqIdx = i;
    minDistances[i] = Math.min(minDistances[i], Math.abs(i - closestReqIdx));
  }

  console.log(`Min distances(${req})`, JSON.stringify(minDistances));

  return minDistances;
}

function getMaxDistancesAtBlocks(blocks, minDistancesFromBlocks) {
  const maxDistancesAtBlocks = new Array(blocks.length);
  for (let i = 0; i < blocks.length; i++) {
    const distancesAtBlock = minDistancesFromBlocks.map(distances => distances[i]);
    maxDistancesAtBlocks[i] = Math.max(...distancesAtBlock);
  }
  console.log("Max Distances", maxDistancesAtBlocks);
  return maxDistancesAtBlocks;
}

function getIdxOfMinVal(array) {
  let idxOfMinVal = 0;
  let minVal = Infinity;
  for (let i = 0; i < array.length; i++) {
    if (array[i] < minVal) {
      minVal = array[i];
      idxOfMinVal = i;
    }
  }
  return idxOfMinVal;
}

const result = apartmentHunting(
    [
  {
    "gym": false,
    "school": true,
    "store": false
  },
  {
    "gym": true,
    "school": false,
    "store": false
  },
  {
    "gym": true,
    "school": true,
    "store": false
  },
  {
    "gym": false,
    "school": true,
    "store": false
  },
  {
    "gym": false,
    "school": true,
    "store": true
  }
],
["gym", "school", "store"]
)

console.log("Result: ", result);