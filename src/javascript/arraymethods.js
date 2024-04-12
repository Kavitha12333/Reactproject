// multi dimensionalarray
let marks = [50,60,70,80]
document.write(marks[2])
var persentage = [[100,200,300,400],
[1000,2000,300],
[10,20,3040],
["kavitha","kushi","suresh"]

]
document.write(persentage[3][2])
//three dimentional array
let user=[
    [
        ["anil","amar"],
        ["sd","sdf"]
    ],
    [
[12,23,3],
[45,34,23]
    ]
]
document.write(user[1][0][2])
// push
let ab = [1,3,4,"access"]
document.write(ab.reverse()[0])
let array =["kavitha","kushi","suresh"]
document.write(typeof array)
let a 
document.write(typeof a +"<br>")
let sports=["koko","kabadi","chess"]
sports.push("footbal")
document.write(sports +"<br>")
//iwant to see added value
var sport=["koko","kabadi","chess"]
  sport.push("footbal")
document.write(sport)
document.write(sport.length +"<br>")
let popmethod=[12,45,56,78,89]
let method = popmethod.pop()
document.write(popmethod)
document.write( "deleting value", method)
// concat method
let value = ['kavitha']
let players=[12,34,45]
newdata= value.concat(players) 
document.write(newdata +"<br>")
const slicemethod=[1,2,3,4,5,6]
 slice =slicemethod.slice(1,3)
document.write(slice)
const replace=["kushi","suresh","kavitha"]
replace.splice(0,1,'daughter')
// document.write(replay)
document.write(replace)
let students = ["anil","sunil","sumanth"
]
document.write(students.indexOf("sunil"))
pushm = [1,3,5,6]
 pushm.splice(0,3,"sf")
document.write(pushm)
// foreachmethod
let arr= [10,20,40,50,60]
arr.forEach(function(num, index){
document.write(index+1 +"-" + num*2 + "<br>")
})
let names=["kavitha","navan"]
names.forEach(function(item, index){
    document.write( index+1 + "." + item +"<br>")
})
let cond =["a","b","c","a"
]
// document.write(cond.length)
for(i=0; i<cond.length; i++){
    document.write([i])
}