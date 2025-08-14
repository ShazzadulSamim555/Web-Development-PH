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

const player1 = { name: "Germany", foul: 10, cardY: 1, cardR: 1 };
const player2 = { name: "France", foul: 10, cardY: 2, cardR: 1 };

const team = bestTeam(
  { name: "Germany", foul: 12, cardY: 0, cardR: 0 },
  { name: "Sweden", foul: 7, cardY: 4, cardR: 1 }
);
console.log(team);
