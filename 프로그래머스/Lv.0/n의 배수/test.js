function solution(num, n) {
	// num을 n으로 나누어 떨어지는지 확인
	if (num % n === 0) {
		return 1; // 나누어 떨어지면 1 반환
	} else {
		return 0; // 그렇지 않으면 0 반환
	}
}
