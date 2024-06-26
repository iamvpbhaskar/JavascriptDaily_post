/**20. Valid Parentheses
Easy
Topics
Companies
Hint
Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

An input string is valid if:

Open brackets must be closed by the same type of brackets.
Open brackets must be closed in the correct order.
Every close bracket has a corresponding open bracket of the same type.
 

Example 1:

Input: s = "()"
Output: true
Example 2:

Input: s = "()[]{}"
Output: true
Example 3:

Input: s = "(]"
Output: false
 

Constraints:

1 <= s.length <= 104
s consists of parentheses only '()[]{}'.

**/

/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
  const stack =[];
  const validPairs='() {} []';
  let i = 0;
  
  while (i<s.length) {
      stack.push(s[i]);
      i++;
      let lastOpen =stack[stack.length - 2];
      let lastClose =stack[stack.length - 1];
      
      let potentialPair=lastOpen + lastClose;
      if (validPairs.includes(potentialPair)) {
          stack.pop();
          stack.pop();
      }
  }
  return stack.length === 0;
};
