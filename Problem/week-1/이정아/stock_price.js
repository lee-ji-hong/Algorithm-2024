// [프로그래머스] - 주식가격 (stock price)
// https://school.programmers.co.kr/learn/courses/30/lessons/42584
// codepen : https://codepen.io/jeongahlee/pen/BaedPyq?editors=0011

/*  문제 설명
    초 단위로 기록된 주식가격이 담긴 배열 prices가 매개변수로 주어질 때, 가격이 떨어지지 않은 기간은 몇 초인지를 return 하도록 solution 함수를 완성하세요.

    제한사항
    prices의 각 가격은 1 이상 10,000 이하인 자연수입니다.
    prices의 길이는 2 이상 100,000 이하입니다.

    입출력 예
    prices	        return
    [1, 2, 3, 2, 3]	[4, 3, 1, 1, 0]

    입출력 예 설명
    1초 시점의 ₩1은 끝까지 가격이 떨어지지 않았습니다.
    2초 시점의 ₩2은 끝까지 가격이 떨어지지 않았습니다.
    3초 시점의 ₩3은 1초뒤에 가격이 떨어집니다. 따라서 1초간 가격이 떨어지지 않은 것으로 봅니다.
    4초 시점의 ₩2은 1초간 가격이 떨어지지 않았습니다.
    5초 시점의 ₩3은 0초간 가격이 떨어지지 않았습니다.
*/

function solution(prices) {
    var answer = [];
    
    for( let i = 0; i < prices.length; i++) {
        let cnt = 0;
        // console.log(`${i} : 현재가격 ${prices[i]}`);
        for (let j = i + 1; j < prices.length; j++) {
            cnt ++;
			// console.log(`${j} : 다음 가격 ${prices[j]}`);
            if( prices[i] > prices[j]) {
                // console.log(`가격이 떨어졌습니다. ${prices[i]} >> ${prices[j]}`);
                break;
            }
        }

        answer.push(cnt);
    }
    return answer;
}