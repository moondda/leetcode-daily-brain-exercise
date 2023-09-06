/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function(ransomNote, magazine) {

    let maga_arr = magazine.split("");
    let temp = ""

    for(let i = 0 ; i< ransomNote.length; i++) {
        for(let j = 0; j < magazine.length; j++) {
            if(ransomNote[i] == maga_arr[j]) {
                maga_arr[j] = "0";
                temp += ransomNote[i];
                break; //고친부분
            }
        }

    }

    return (temp == ransomNote) ? true: false;
};