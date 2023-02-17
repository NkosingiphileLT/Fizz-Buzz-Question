//DRY

let icount  = 1

while (icount <= 10) {
console.log(icount)
icount= icount + 1
}

for (let i = 0; i <= 10; i = i + 2) {
console.log(i)
}

for (let itwe = 1; itwe <= 15; itwe = itwe + 1) {
    
    if (itwe % 5 === 0 && itwe % 3 === 0){
        console.log(`${itwe} -> Frontend Simplified`)
     }
    
    else if (itwe % 5 === 0){
        console.log(`${itwe} -> Simplified`)
     }
    
     else if (itwe % 3 === 0){
        console.log(`${itwe} -> Frontend`)
     }
    
     else {
        console.log(`${itwe} -> ${itwe}`)
     }
  }   

