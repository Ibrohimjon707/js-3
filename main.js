let text = prompt("String typedagi malumot kiriting");
let malumot = prompt("Number typedagi malumot kiriting");
let tel = prompt("Boolean typedagi malumot kiriting");
console.log(text, malumot, tel);

let savol = confirm("Hamma malumot kiritganingizga ishonchingiz komilmi")
console.log(savol);

alert(`Siz kiritgan ${text} sozi, ${typeof text} typega tegishli\nSiz kiritgan ${malumot} soni ${  typeof Number( malumot)} typega tegishli\nSiz kiritga ${tel} sozi ${ typeof  Boolean(malumot)} typega tegishli`);           

