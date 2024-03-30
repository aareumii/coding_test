function solution(array) {

    const max_value = Math.max(...array);

    const max_index = array.indexOf(max_value);


    return [max_value, max_index];
}

