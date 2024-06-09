function solution(prices) {
  let result = [];
  for (let i = 0; i < prices.length; i++) {
    const cur = prices[i];
    let day = 0;

    for (let j = i + 1; j < prices.length; j++) {
      day++;
      const target = prices[j];
      if (target < cur) {
        break;
      }
    }
    result.push(day);
  }
  return result;
}

/**
 *
 * @param {number[]} prices
 */
function solution(prices) {
  let result = [];

  prices.forEach((price, index) => {
    const remainArr = prices.slice(index + 1);

    const day = getDay(remainArr, price);

    result.push(day);
  });

  return result;
}

function getDay(remain, target) {
  let day = 0;

  for (const cmp of remain) {
    day++;

    if (cmp < target) {
      return day;
    }
  }
  return day;
}

function solution(prices) {
  const stack = [];
  const dp = Array.from(
    { length: prices.length },
    (_, i) => prices.length - i - 1
  );

  prices.forEach((price, index) => {
    while (stack.length && prices[stack[stack.length - 1]] > price) {
      const tempIndex = stack[stack.length - 1];
      dp[tempIndex] = index - tempIndex;
      stack.pop();
    }

    stack.push(index);
  });

  return dp;
}

// console.log(solution([1, 2, 3, 2, 3])); // [4, 3, 1, 1, 0]
