class Users {
  constructor() {
    this.users = [];
  }

  addUser(id, name, room) {
    var user = {id, name, room};
    this.users.push(user);
    return user;
  }

  removeUser(id) {
    var user = this.users.filter(user => user.id === id)[0];

    if (user) {
      this.users = this.users.filter(user => user.id !== id);
    }

    return user;
  }

  getUser(id) {
    var user = this.users.filter(user => user.id === id)[0];
    return user;
  }

  getUserList(room) {
    var userList = this.users.filter(user => user.room === room);
    var namesArray = userList.map(user => user.name);

    return namesArray;
  }
}

module.exports = {Users};



// class Person {
//   constructor(name, age) {
//     console.log(name, age);
//     this.name = name;
//     this.age = age;
//   }

//   getUserDescription() {
//     return `${this.name} is ${this.age} year(s) old.`;
//   }
// }

// var me = new Person('Derp', 25);
// console.log('this.name', me.name)
// console.log(me.getUserDescription());
