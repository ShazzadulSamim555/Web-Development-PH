function resultReport(marks) {
  if (Array.isArray(marks) === false) {
    return "Invalid";
  }

  else if (marks.length === 0){
    return { finalScore: 0, pass: 0, fail: 0 };
  }

  let total = 0;
  let pass = 0;
  let fail = 0;

  for (let i = 0; i < marks.length; i++) {
    total += marks[i];
    if (marks[i] >= 40) {
      pass++;
    } else {
      fail++;
    }
  }

  const finalScore = Math.round(total / marks.length);
  return { finalScore, pass, fail };
}

console.log(resultReport([98, 87, 67, 91, 92, 33, 87]));
