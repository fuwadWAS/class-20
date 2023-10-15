// class 19 start
let boyos = 22
let number =80
let vaiba = 80

if(boyos=22){
    if(number==80){
       if(vaiba==80){
        console.log("congratulation")
       }
       else{
        console.log("tumi pass koro nai")
       }
    }
    else{
        console.log("tumi kom number paico")
    }
}
else{
    console.log("tomar boyos hoi nai")
}
// class 19 end


// class 20 start

let i =0
for(i=0; i<=10; i++)
console.log(i)

let j =15
for(k=1; k<=10; k++){
    console.log(j+"x"+k+"="+j*k)
}

let a =["Arif", "Simu", "shubarna", "Fuwad","Toslim",]
for(b=1; b<=3; b++){
    console.log(a[b])
}

let c =["Arif", "Simu", "shubarna", "Fuwad","Toslim",]
for(d=0; d<=c.length; d++){
    console.log(c[d])
}

// CLASS =21 *************

// Array ty object use 
let data ={
    'name' : "Fuwad",
    'age' : 17,
    'mobile' : 01994111272,
    'address' : "Mohammadpur, Dhaka",
}
console.log(data)

// array ty object use kory sob data theky akta data show kora 
let inf ={
    'name' : "fuwad",
    'roll' : 01,
    'Class' : "Eleven",
    'Collage' :"Dhaka Polyteknic Institute",
}
console.log(inf["name"])

// akta array ty multiple object use 
let text =[
    {
        'name' : "Fuwad",
        'age' : 18,
        'mobile' : 01994111272,
        'address' : "Mohammadpur, Dhaka",
    },
    {
        'name' : "Raihan",
        'age' : 16,
        'mobile' : 109697833352,
        'address' : "Mohammadpur, Dhaka",
    },
    {
        'name' : "Shakil",
        'age' : 19,
        'mobile' : 01402820968,
        'address' : "Mohammadpur, Dhaka",
    },
]
console.log(text)

// function syntex 
function fuwad(){
    console.log(5+5)
    console.log("ami khub valo kaj koreci")
    console.log(10,20,30,40,50,60,70,80,)
}
fuwad()

// function ar map o ForEach
let o = [10,20,30,40,90]
o.map(function(fuwad){
     console.log(fuwad)
}) 
