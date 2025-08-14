//solution-1
function totalFine( fare ) {
    if(typeof fare !== 'number' || fare <= 0){
        return "Invalid";
    }
    else{
        const fine= fare + ((20*fare)/100) + 30;
        return fine;
    }
}

//solution-2
function onlyCharacter(str) {
  if (typeof str !== "string") {
    return "Invalid";
  } else {
    const splitStr = str.split(" ");
    const join = splitStr.join("");
    const upperCase = join.toUpperCase();

    return upperCase;
  }
}

//solution-3
function bestTeam(player1, player2) {
  if (typeof player1 !== "object" || typeof player2 !== "object") {
    return "Invalid";
  }

  const plr1 = player1.foul + player1.cardR + player1.cardY;
  const plr2 = player2.foul + player2.cardR + player2.cardY;

  if (plr1 > plr2) {
    return player2.name;
  } else if (plr2 > plr1) {
    return player1.name;
  } else {
    return "Tie";
  }
}

//solution-4
function isSame(arr1, arr2) {
  if (Array.isArray(arr1) && Array.isArray(arr2)) {
    if (arr1.length === arr2.length && arr1.every((value, index) => value === arr2[index])) {
      return true;
    } else {
      return false;
    }
  } else {
    return "Invalid";
  }
}

//solution-5
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