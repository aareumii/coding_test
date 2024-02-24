function solution(my_string, overwrite_string, s) {
	var startPart = my_string.substring(0, s);
	var endPart = my_string.substring(s + overwrite_string.length);

	var answer = startPart + overwrite_string + endPart;
	return answer;
}
