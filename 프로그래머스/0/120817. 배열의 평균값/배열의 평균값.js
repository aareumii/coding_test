function solution(numbers) {
    const sum = numbers.reduce((acc, cur) => acc + cur, 0);
   const average = sum / numbers.length;
    return average;
}