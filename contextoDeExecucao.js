let a = 3
console.log(this.a)
console.log(global.a)
console.log(a)

var x = 4
console.log(global.x)
console.log(this.x)
console.log(x)

let y = 5
console.log(global.y)
console.log(this.y)
console.log(y)

global.b = 123
console.log(global.b)
console.log(this.b)
console.log(b)

this.c = 456
console.log(global.c)
console.log(this.c)
console.log(module.exports.c)
console.log(module.exports === this)

console.log("----------------------------------------------------------------------------------------------")

this.d = 1234
this.e = false
this.f = 'teste'

console.log(module.exports)