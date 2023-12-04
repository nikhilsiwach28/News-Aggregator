class UserRepository {
    constructor() {
      this.users = [];
    }
  
    addUser(user) {
      this.users.push(user);
    }

    findUser(id) {
      this.users.filter(user => user.id == id)
    }
  
    getUserPreferences(id){
      user = this.findUser(id)
      return user.preferences;
    }

    updateUserPreferences(id){
      user = this.findUser(id)
      user.preferences = preferences
      return user; 
    }

    // Implement other user-related methods as needed
  }
  
  module.exports = UserRepository;
  