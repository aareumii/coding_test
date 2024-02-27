function solution(a, b) {
	var ab = parseInt(String(a) + String(b));
	var ba = parseInt(String(b) + String(a));
	return Math.max(ab, ba);
}
