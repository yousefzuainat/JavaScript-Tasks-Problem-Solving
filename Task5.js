let n = 5; // عدد الصفوف

for (let i = 1; i <= n; i++) {
  let line = "";
  for (let j = 1; j <= n; j++) {
    if (i === 1 || i === n) {
      line += "A ";
    } else if (i === 2) {
    line += j <= 2 ? "A " : "B ";
    } else if (i === 3) {
      line += j <= 2 ? "A " : "C ";
    } else if (i === 4) {
      line += j === 1 ? "A " : "D ";
    }
  }

  console.log(line.trim());
}