const color = "green";
console.log(`Hello world color is ${color}`);

// document.getElementById("id"); // is not defined. Node nera document

// node app.js // paleidziam js faila su node ir gaunam output

// isikeliam failu sistemos moduli
const fs = require("fs");

// sukurti failus
function writeFile() {
  fs.writeFile("user1.txt", "username=Bob", (err) => {
    if (err) {
      console.log("err", err);
    } else {
      console.log("irasytas failas");
    }
  });
}

// nuskaityti failus

fs.readFile("user1.txt", (err, data) => {
  if (err) {
    console.log("err while reading file");
    return;
  }
  console.log("data", data.toString());
});
