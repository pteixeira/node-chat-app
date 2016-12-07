const expect = require('expect');
const {Users} = require('./users');

describe('Users', () => {
  // Seed data
  var users;
  beforeEach(() => {
    users = new Users();
    users.users = [{
      id: '1',
      name: 'Mr Derp',
      room: 'Node Course'
    }, {
      id: '2',
      name: 'El Derp',
      room: 'React Course'
    }, {
      id: '3',
      name: 'Super Derp',
      room: 'Node Course'
    }];
  });

  it('should add new user', () => {
    var users = new Users();
    var user = {
      id: '132123askdjnaskdjn',
      name: 'Derp',
      room: 'Room1'
    };

    var resUsers = users.addUser(user.id, user.name, user.room);
    expect(users.users).toEqual([user]);
  });

  it('should remove a user', () => {
    var userId = '1';
    var user = users.removeUser(userId);

    expect(user.id).toBe(userId);
    expect(users.users.length).toBe(2);
  });

  it('should not remove a user (non-existing id)', () => {
    var userId = '99';
    var user = users.removeUser(userId);

    expect(user).toNotExist();
    expect(users.users.length).toBe(3);
  });

  it('should find a user', () => {
    var userId = '1';
    var user = users.getUser(userId);
    expect(user.id).toBe(userId);
  });

  it('should not find a user (non-existing id)', () => {
    var userId = '123';
    var user = users.getUser(userId);
    expect(user).toNotExist();
  });

  it('should return names for a room', () => {
    var userList = users.getUserList('Node Course');

    expect(userList).toEqual(['Mr Derp', 'Super Derp']);
  });

  it('should return names for another room', () => {
    var userList = users.getUserList('React Course');

    expect(userList).toEqual(['El Derp']);
  });
});
