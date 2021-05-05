class Network {
  constructor(data, users) {
    this.data = data;
    this.users = users;
  }
  movieTime() {
    let maxData = this.data - 10;
    let dataUsed = this.users * 5;
    if (dataUsed > maxData) {
      return false;
    } else {
      return true;
    }
  }
};

console.log("\nNetwork:")
const library_1 = new Network(80, 9);
const library_2 = new Network(50, 9);
console.log(library_1.movieTime());
console.log(library_2.movieTime());


