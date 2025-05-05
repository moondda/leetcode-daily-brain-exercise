/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
var minWindow = function(s, t) {
    //s의 길이 m
    //t의 길이 n

    //s의 최소 길이 부분집합 , t의 모든 문자들이 다 들어가있을때. 문자 개수까지 다 맞춰서
    //그런거 없으면 "" 반환

    //map으로 갯수

    let tCount = {};
    for(let i of t) {
        if(i in tCount) tCount[i] += 1;
        else tCount[i] = 1;
    }

    let isT = new Set();
    for(let i of t) {
        isT.add(i);
    }

    let left = 0;
    let minLength = Infinity;
    let subArr = '';

    function isAllZero(obj) {
  for (let key in obj) {
    if (obj[key] > 0) return false;
  }
  return true;
}

    //i는 right
    for(let i=0; i<s.length; i++) {
        if(s[i] in tCount) tCount[s[i]] -= 1;


        while(isAllZero(tCount)) {
            if(minLength >= i-left+1) {
                minLength = i-left+1;
                subArr = s.slice(left,i+1);
            }

            if( isT.has(s[left]) ) { tCount[s[left]] += 1;}
            left += 1;
        }
    }

    return subArr



};