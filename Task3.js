let r ='';
for (let i = 1; i <= 50; i++) {
    if (i % 2 == 0) {
        r += i;
        if (i < 50) {
            r += "-";
        }
    }
}
console.log(r);