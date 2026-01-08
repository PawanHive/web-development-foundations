/*
Write a JavaScript function to extract unique characters from a string.
Example: str = "abcdabcdefgggh"
Output: "abcdefgh"
*/


let str = 'abcdabcdefgggh';

// function to get String with all unique elements
function getUnique(str) {
    let ans = "";
    for (let i = 0; i < str.length; i++) {
        let currChar = str[i];

        if (ans.indexOf(currChar) == -1) {      // means: “Is 'currChar' NOT already present in 'ans'?”
            // if current character is not added, then add it in ans.
            //otherwise it is a duplicate.
            ans = ans + currChar;
        }
    }
    return ans;
}
console.log(getUnique(str));



/*
🧪 Let’s DRY RUN the if condition
Input: "abcdabcdefgggh"
currChar	ans before	indexOf	    Condition	ans after
a	        ""	        -1	        true	        "a"
b	        "a"	        -1	        true	        "ab"
c	        "ab"	    -1	        true	        "abc"
d	        "abc"   	-1	        true	        "abcd"
a	        "abcd"  	0	        false	        "abcd"
b	        "abcd"  	1	        false	        "abcd"
e	        "abcd"	    -1	        true	        "abcde"
f	        "abcde"	    -1	        true	        "abcdef"
g	        "abcdef     -1	        true	        "abcdefg"
g	        "abcdefg"   6	        false	        "abcdefg"
h	        "abcdefg"	 -1	        true	        "abcdefgh"

*/