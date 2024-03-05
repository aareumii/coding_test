function solution(ineq, eq, n, m) {
	// 조건에 따라 비교 연산을 수행하고 결과를 반환
	if (ineq === '<') {
		return eq === '=' ? (n <= m ? 1 : 0) : n < m ? 1 : 0;
	} else {
		// ineq === ">"
		return eq === '=' ? (n >= m ? 1 : 0) : n > m ? 1 : 0;
	}
}
