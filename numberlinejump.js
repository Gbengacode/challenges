https://www.hackerrank.com/challenges/kangaroo/problem?isFullScreen=true



function kangaroo(x1, v1, x2, v2) {
    // Write your code here
      //Number Line Jumps hackerrank solution javascript
      // v1 = x1 / j
     // v2 = x2 / j
      //x1 = v2 
    if(v1 < v2)  return "NO"
    // 0, 3, 4, 2
    const difference = (x2 - x1) % (v2 - v1)
    if(difference === 0) return "YES"
    return "NO"
        
    
}
