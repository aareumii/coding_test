function solution(str1, str2) {
	var answer = '';
	for (var i = 0; i < str1.length; i++) {
		answer += str1[i] + str2[i]; // str1과 str2의 i번째 문자를 번갈아가면서 answer에 추가힘
	}
	return answer; // 완성된 문자열을 반환
}
