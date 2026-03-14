for (let i = 1; i <= 5; i++) {
  let row = ""; // to be zero every time the outer loop runs
  for (let j = 1; j <= 5; j++) {
    if (j <= 5 - i) {
      //Row 1: J =1    condition 1 ≤ 4  A  &  j=2  condition 2 ≤ 4  A  &  j=3  condition 3 ≤ 4  A  &  j=4  condition 4 ≤ 4  A  &  j=5  condition 5 ≤ 4  false
      //Row 2: J =1  i=2  condition 1 ≤ 3  A  &  j=2  condition 2 ≤ 3  A  &  j=3  condition 3 ≤ 3  A  &  j=4  condition 4 ≤ 3  false
      //Row 3: J =1  i=3  condition 1 ≤ 2  A  &  j=2  condition 2 ≤ 2  A  &  j=3  condition 3 ≤ 2  false
      //Row 4: J =1  i=4  condition 1 ≤ 1  A  &  j=2  condition 2 ≤ 1  false
      //Row 5: J =1  i=5  condition 1 ≤ 0  false
      row += "A ";
    } else {
      row += String.fromCharCode(64 + i) + " ";
    }
  }
  console.log(row);
}
//Row 2: 64 + 2 = 66 -> 'B'
//Row 3: 64 + 3 = 67 -> 'C'
//Row 4: 64 + 4 = 68 -> 'D'
//Row 5: 64 + 5 = 69 -> 'E'
//fromCharCode() converts a number to a character
