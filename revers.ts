
function RrSt(text: string):string {
    if (text === '')     
         return ''
    return RrSt(text.slice(1)) +  text.charAt(0)    
}

console.log(RrSt('hello'))//olleh
console.log(RrSt('prayuth'))//htuyarp
