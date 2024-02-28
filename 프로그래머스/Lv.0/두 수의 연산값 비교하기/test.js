function solution(a, b) {
	// 두 정수를 문자열로 변환 후 연결하고, 다시 정수로 변환하여 a ⊕ b 계산
	var ab = parseInt(`${a}${b}`);
	// 2 * a * b 계산
	var mul = 2 * a * b;
	// a ⊕ b와 2 * a * b 중 더 큰 값 반환, 같을 경우 a ⊕ b 반환
	return Math.max(ab, mul);
}
