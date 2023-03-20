/**
 * @param {string} s
 * @return {boolean}
 */

 var isValid = function(s) {
    const opening = [];
    for (let i = 0; i < s.length; i++){
        console.log('opening ', opening)
        console.log(s[i])
        if (s[i] === '(' ) {opening.push(s[i], ')');}

        else if (s[i] === '[' ) {opening.push(s[i], ']');}

        else if (s[i] === '{' ) {opening.push(s[i], '}');}
        
        else if (s[i] === opening[opening.length -1]) {
            opening.pop();
            opening.pop();
        }
        else {
            console.log('length - 1: ',opening[opening.length -1])
            console.log('opening: ', opening);
            return false;
        }
        
    }
    return true;
}

console.log(isValid('()'));