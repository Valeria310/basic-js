import { NotImplementedError } from '../extensions/index.js';

/**
 * Create name of dream team based on the names of its members
 *  
 * @param {Array} members names of the members 
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 * 
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
export default function createDreamTeam(members) {
  if (members != undefined) {
    let arr = [];
    for (let i = 0; i < members.length; i++) {
      if (typeof members[i] == "string") {
        arr.push(members[i].trim().toUpperCase()[0]);
      }
    }
    arr = arr.sort().join("");
    return arr;
  } else {
    return false;
  }
}
