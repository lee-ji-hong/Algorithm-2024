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
