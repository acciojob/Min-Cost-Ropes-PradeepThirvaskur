function mincost(arr){
     const minheap=[...arr].sort((a,b)=>a-b);

     let totalCost=0;

     while(minheap.length>1){
        let first = minheap.shift();
        let second = minheap.shift();
        let cost = first + second;
        totalCost += cost;
        
        minheap.push(cost);
        minheap.sort((a,b)=>a-b);
     }
     return totalCost;

    }
console.log(mincost([4,3,2,6]));
  


module.exports=mincost;
