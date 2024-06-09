function solution(progresses, speeds) {
  const result = [];

  while (progresses.length !== 0) {
    progresses = updateProgress(progresses, speeds);

    const count = getDeployCount(progresses, speeds);

    if (count !== 0) {
      result.push(count);
    }
  }
  return result;
}

function updateProgress(progresses, speeds) {
  return progresses.map((item, index) => item + speeds[index]);
}

function getDeployCount(progresses, speeds) {
  let count = 0;

  while (progresses[0] >= 100) {
    progresses.shift();
    speeds.shift();

    count++;
  }

  return count;
}
