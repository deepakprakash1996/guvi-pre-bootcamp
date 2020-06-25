var myobj1 = {fname:"Ramu", lname:"Bahi", mark:[44,22,35,66], age:17, sports:["soccer","100m"],
name: function(){ return this.fname + " " + this.lname; }
};
console.log(myobj1);
console.log(myobj1.mark,myobj1.sports);
console.log(myobj1.sports[0]);
console.log(myobj1.name());
