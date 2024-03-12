function solution(money) {
const price = 5500;
    let cups = Math.floor(money/price);
    let remain = money%price;
    return [cups,remain];
}