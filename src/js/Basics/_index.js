console.log('JS script its easy!');
console.log('Welcome to the JS review');
//
var text1 = 'Text 1';
let text2 = 'Text 2';
const text3 = 'Text 3';
//
console.log('text1', text1);
console.log('text2', text2)
console.log('text3', text3);
//
text2 = 'Change text 2 with new text'
//
console.log('text2', text2)
console.log('This will make an error when you try to change const value, const value declear only once its initilaized, text3="Error"')
//
const fun = () => {
    text1 = 'text1'
    text2 = 'text2'
    console.log(text1, text2)
    let text4 = 'text4'
    console.log(text4)
}
//
fun()
//
console.log('text4 out of scope then any call and change will make an error  text4="Error"')
//
// Objects
const obj = {
    name:'Ali Abu Ras',
    work:'Frontend engineer',
    location:'Jordan',
    job:{
        location:'Amman',
        position:'Frontend Engineer',
        department:'Web'
    }
}
console.table(obj)
console.log(obj['name'])
console.log(obj.job.department)
console.log(obj[location])
console.log(obj['undefined'])
console.log(obj.undefined)
console.log(typeof obj)
console.log( typeof null)
console.log(typeof 'ali')
console.log(typeof 100)
console.log(typeof [1,2,3])
const arry = [1,2,3,4]
console.log(typeof arry)
const array = new Array(1,2,3,4)
console.log(typeof array)

const names = ['Ali', 'Awad', 'Khalid', 'Abu Ras'];
console.log(names)

console.log(`Loop for 
                    using for var in array
                    for ... in will print the index of the array item, and will not print the values!`)
for( let name in names){
    console.log(name)
    console.log(` to print the each value of the each array inedx,
you need to do the following names[${name}]= ${names[name]}`)
}
console.log(`Loop for 
                    using for var in array
                    for ... of will print the value of the array item!`)
for( let name of names){
    console.log(name)
}

console.log(`Loop for 
                    using for var in array
                    foreach, using callback function to pring or add your logic`)
names.forEach( name => {
    console.log(name)
})

console.log(`Loop for 
                    using for var in array
                    array.map, to create new array values`)
const newNames = names.map(name=>{
    return `____ ${name}`
})

console.log(newNames)

console.log('Print object')
for(let item in obj){
    console.log(`item = ${item}, obj[item] = ${obj[item]}`)
}
