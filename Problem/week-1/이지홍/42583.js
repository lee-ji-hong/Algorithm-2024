function solution(bridge_length, weight, truck_weights) {
  const queue = [];
  const result = [];
  let count = 1;
  

  while(truck_weights.length > 0){
      let sum = queue.reduce((v, i) => v + i, 0);
      let first = truck_weights[0]; 
      // console.log(sum+first,weight)
      // console.log(queue.length,bridge_length)
       
      if(sum+first > weight || queue.length > bridge_length){ 
          //큐에 추가하면 안되는 상황
          // console.log('i')
          result.push(queue.shift());
          count++;
      }else{
          // console.log('ee')
          queue.push(truck_weights.shift());  
          count++;
      }
      sum = 0;
      if(truck_weights.length ===0){
          break;
      }
      
  }
// console.log(count)
  return count;
}