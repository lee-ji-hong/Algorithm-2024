function solution(prices) {
  var answer = Array.from({length:prices.length}, ()=>0);
  
  for(let i=0; i<prices.length; i++){
      for(let j=0; j<prices.length; j++){
          if(prices[i]<prices[j+i+1]){
              answer[i]+=1;
              console.log(answer)
          }
      }
  }
  return answer;
}

//현재 요소와 다음 배열과 비교..