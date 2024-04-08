"use strict";
function areStringEqualsIgnoreCase(str1, str2) {
    return str1.toLowerCase() === str2.toLowerCase();
}
;
console.log(areStringEqualsIgnoreCase('shehzad', 'ShEhzaD'));
console.log(areStringEqualsIgnoreCase('rahim', 'raheems'));
