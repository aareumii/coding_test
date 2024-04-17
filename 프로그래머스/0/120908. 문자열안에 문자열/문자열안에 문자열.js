function solution(str1, str2) {
    // str1 안에 str2가 포함되어 있는지 검사
    if (str1.includes(str2)) {
        return 1; // str2가 str1에 존재한다면 1 반환
    } else {
        return 2; // 존재하지 않는다면 2 반환
    }
}