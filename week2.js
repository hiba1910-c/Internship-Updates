function fibSeries(n) {
    let arr = [], num;
    let num1 = 0, num2 = 1;

    for (let i = 0; i < n; i++) {
        arr.push(num1);
        num = num1 + num2;
        num1 = num2;
        num2 = num;
    }
    return arr;
}

console.log(fibSeries(10)); 