class Player {
  constructor(name, hitsPerMinute) {
    this.name = name;
    this.hitsPerMinute = hitsPerMinute;
    this.balloonCount = 100;
  }
  status() {
    console.log(`Player: ${this.name} -- Balloons Left: ${this.balloonCount}`)
  }
}

const p1 = new Player('p1', 11);
const p2 = new Player('p2', 12);

function balloonAttack(firstPlayer, secondPlayer) {
  firstPlayer.balloonCount -= (secondPlayer.hitsPerMinute * 10);
  secondPlayer.balloonCount -= (firstPlayer.hitsPerMinute * 10);
  if (firstPlayer.balloonCount === secondPlayer.balloonCount) {
    return "Tie";
  } else if (firstPlayer.balloonCount > secondPlayer.balloonCount) {
    return "p1";
  } else {
    return "p2";
  }
}

console.log("\nPlayer:")
// console.log(balloonAttack(p1, p2));
console.log(balloonAttack(p1, p2));
