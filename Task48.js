function isPrime(n) {
    if (n < 2) return false;
    for (let i = 2; i <= Math.sqrt(n); i++) {
        if (n % i === 0) return false;
    }
    return true;
}

for (let i = 1; i <= 1000; i++) {
    let reversed = Number(String(i).split('').reverse().join(''));
    if (isPrime(reversed)) {
        console.log(i);
    }
}
