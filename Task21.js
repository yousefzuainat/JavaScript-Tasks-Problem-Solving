for (let i = 1; i <= 200; i++) {
   let sum = 0;
   let temp = i;  //23
   // temp = 104
   while (temp > 0) {
      sum += temp % 10; // Add the last digit  //sum = 3   sum=4
      temp = Math.floor(temp / 10); // Remove the last digit //temp = 2 temp=10
   }
   
   if (sum === 5) {
      console.log(i); 
   }
}
