for (let i = 1; i <= 1000; i++) {
    let sumOfCubes = String(i).split('').reduce((acc, d) => acc + Math.pow(Number(d), 3), 0);
    if (sumOfCubes === i) {
        console.log(i);
    }
}
