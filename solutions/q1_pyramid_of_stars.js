/* Write a program to build a `Pyramid of stars` of given height */

const buildPyramid = (x) => {
    // Write your code here
    if (x === null || typeof x === 'undefined' || typeof x !== 'number') {
        return '';
    }
    let printStr = '';
    for (let i = 1; i <= x; i = i + 1) {
        for (let j = 1; j <= x - i; j = j + 1) {
          printStr = printStr + ' ';
        }
        for (let k = 1; k <= i; k = k + 1) {
          printStr = printStr + ' *';
        }
        printStr = printStr + '  \n';
    }
    return printStr;
};

/* For example,
INPUT - buildPyramid(6)
OUTPUT -
     *
    * *
   * * *
  * * * *
 * * * * *
* * * * * *

*/

module.exports = buildPyramid;
