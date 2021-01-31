// var person = {
//     firstName: "John",
//     lastName: "Doe",
//     age: 50,
//     eyeColor: "blue"
//   };

//   var car={
//       name:"wagonr"
//   }
//   console.log(person);
//   console.log(car["name"]);

var person={
   firstName: "Asheesh",
   lastName: "Sharma",
  fullname: function (){
      return this.firstName+this.lastName;
  }
}
console.log(person.fullname());