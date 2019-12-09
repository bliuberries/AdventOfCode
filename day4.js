const secureContainer = (range) => {
  let x = range[0].toString().split('').map(x => Number.parseInt(x)),
    y = range[1].toString().split('').map(x => Number.parseInt(x));
  let possiblePws = 0;
  for(let i = x[0]; i <= y[0]; i++) {
    for(let j = i == x[0] ? x[1] : i; j <= 9; j++) {
      if(i == y[0] && j > y[1]) break;
      for(let k = i == x[0] && j == x[1] ? x[2] : j; k <= 9; k++) {  
        if(i == y[0] && j == y[1] && k > y[2]) break;
        for(let l = i == x[0] && j == x[1] && k == x[2]? x[3] : k; l <= 9; l++) {    
          if(i == y[0] && j == y[1] && k == y[2] && l > y[3]) break;
          for(let m = i == x[0] && j == x[1] && k == x[2] && l == x[3] ? x[4] : l; m <= 9; m++) {      
            if(i == y[0] && j == y[1] && k == y[2] && l == y[3] && j > y[4]) break;
            for(let n = i == x[0] && j == x[1] && k == x[2] && l == x[3] && m == x[4]? x[5] : m; n <= 9; n++) {        
              let pw = [i, j, k, l, m, n], bigPairs = 0, bigNum = undefined;
              for(let x = 5; x > 0; x--) {
                if(bigNum == pw[x-1]) {
                  bigPairs++;
                } else if(bigNum === undefined && pw[x] == pw[x - 1]) {
                  bigNum = pw[x];
                  bigPairs++;
                }
              }
              if(bigPairs == 1) {
                possiblePws++;
                console.log(pw, possiblePws, 'line 26');
              }
            }
          }
        } 
      } 
    }
  }
  return possiblePws;
}

const range = [145852, 616942];
console.log(secureContainer(range));