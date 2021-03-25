const team = {
  _players: [{
    firstName: 'Kobe',
    lastName: 'Bryant',
    age: 41
  },
  {
    firstName: 'Magic',
    lastName: 'Johnson',
    age: 61
  },
  {
    firstName: 'Larry',
    lastName: 'Bird',
    age: 64
  }
], 
  _games: [{
    opponent: 'Monstars',
    teamPoints: 99,
    opponentPoints: 79
  },
  {
    opponent: 'Tune Squad',
    teamPoints: 89,
    opponentPoints: 90
  },
  {
    opponent: 'Warriors',
    teamPoints: 85,
    opponentPoints: 96
  }],
  get players() {
    return this._players;
  },
  get games() {
    return this._games;
  },
  addPlayer(firstName, lastName, age) {
    var player = {
      firstName: firstName,
      lastName: lastName,
      age: age
    }
    this.players.push(player);
  },
  addGame(opponent, teamPoints, opponentPoints) {
    var game = {
      opponent: opponent,
      teamPoints: teamPoints,
      opponentPoints: opponentPoints
    }
    this.games.push(game);
  }
};

team.addPlayer('Steph', 'Curry', 28)
team.addPlayer('Lisa', 'Leslie', 44)
team.addPlayer('Bugs', 'Bunny', 76)
console.log(team.players);

team.addGame('Duke', 88, 75);
team.addGame('UNC', 75, 55);
team.addGame('UCLA', 68, 65);
console.log(team.games);

