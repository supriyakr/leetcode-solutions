class SolutionUsingSort {
  isAnagram(s, t) {
    if (s.length == t.length) {
      let sorteds = this.sortString(s);
      let sortedt = this.sortString(t);
      if (sorteds == sortedt) return true;
      else return false;
    }
    return false;
  }
  sortString(s2) {
    return s2
      .split("")
      .sort((a, b) => a.localeCompare(b))
      .join("");
  }
}
class SolutionUsingMap {
  isAnagram(s, t) {
    if (s.length == t.length) {
      let map = new Map();
      for (let i of s) {
        map.set(i, (map.get(i) || 0) + 1);
      }
    
      for (let j of t) {
        map.set(j, (map.get(j) || 0) - 1);
      
      }

  for (let value of map.values()) {
        if (value != 0) {
          return false;
        }
      }
      return true;
    }
    return false;
  }
}

const output1 = new SolutionUsingSort();
const output2 = new SolutionUsingMap();
//console.log(output2.isAnagram("anagram","nagaram"));
console.log(output2.isAnagram("rat", "tara"));
