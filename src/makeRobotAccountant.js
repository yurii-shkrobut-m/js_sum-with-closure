'use strict';

/**
 *
 * @return {function}
 */

function makeRobotAccountant() {
  let count = 0;

  function getSum(x) {
    return (y) => {
      count++;

      if (count % 2 === 0 && count >= 3) {
        return 'Bzzz... Error!';
      }

      return x + y;
    };
  };

  return getSum;
}

module.exports = makeRobotAccountant;
