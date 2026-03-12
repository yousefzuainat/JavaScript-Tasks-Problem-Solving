let n = 5; 

for (let i = 1; i <= n; i++) {
  let line = "";

  for (let j = 1; j <= n; j++) {
    line += (j <= n - i ? "1 " : i + " ");
  }

  console.log(line);
}
