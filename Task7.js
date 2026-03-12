let n = 5; 

for (let i = 1; i <= n; i++) {
  let line = "";

  for (let j = 1; j <= n; j++) {
    line += (i === j ? i + " " : "0 ");
  }

  console.log(line);
}
