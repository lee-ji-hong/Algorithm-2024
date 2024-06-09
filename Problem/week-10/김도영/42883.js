function solution(progresses, speeds) {
  var answer = [];
  var daysLeft = [];

  for (var i = 0; i < progresses.length; i++) {
    var dayNeeded = Math.ceil(100 - progresses[i]) / speeds[i];
    daysLeft.push(dayNeeded);
  }

  var count = 1;
  var preDay = daysLeft[0];

  for (let i = 1; i < daysLeft.length; i++) {
    if (daysLeft[i] <= preDay) {
      count++;
    } else {
      answer.push(count);
      count = 1;
      preDay = daysLeft[i];
    }
  }

  answer.push(count);

  return answer;
}

function solution(prices) {
  var answer = new Array(prices.length).fill(0);

  for (let i = 0; i < prices.length; i++) {
    for (let j = i + 1; j < prices.length; j++) {
      answer[i]++;
      if (prices[i] > prices[j]) {
        break;
      }
    }
  }

  return answer;
}

// function solution(prices) {
//   const answer = new Array(prices.length).fill(0);
//   const stack = [];
//   let length = prices.length;

//   for (let i = 0; i < length; i++) {
//     while (stack.length && prices[i] < prices[stack[stack.length - 1]]) {
//       let temp = stack.pop();
//       answer[temp] = i - temp;
//     }
//     stack.push(i);
//   }

//   while (stack.length) {
//     let temp = stack.pop();
//     answer[temp] = length - temp - 1;
//   }

//   return answer;
// }
