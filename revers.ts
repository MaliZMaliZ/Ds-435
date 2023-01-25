//const x = "hello"
//console.log(x.substring(1)) //ello
//console.log(x.charAt(0)) //h

function reverseString(text: string) {
    let reverseText = ""
    for (let i = text.length - 1; i >= 0; i--) {
        reverseText += text[i]
    }
    return reverseText
}
//console.log(reverseString(x))//olleh

function RrSt(text: string):string {
    if (text === '')     
         return ''
    return RrSt(text.slice(1)) +  text.charAt(0)    
}

console.log(RrSt('hello'))//olleh
console.log(RrSt('prayuth'))//htuyarp
