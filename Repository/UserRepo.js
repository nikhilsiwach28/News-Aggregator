class UserRepository {
    constructor() {
      this.users = [];
    }
    

    getAllUsers(){
      return this.users
    }

   addUser(user) {
      this.users.push(user);
    } 

    findUser(userId) {
      return this.users.find(user => user.userId == userId)
    }

    findUserByEmail(emailId) {
      return this.users.find(user => user.email == emailId)
    }
  
    getUserPreferences(id){
      const user = this.findUser(id)
      if (!user){
        throw new Error("User Not Found")
      }
      return user.preferences;
    }

    updateUserPreferences(id,preferences){
      user = this.findUser(id)
      user.preferences = preferences
      return user; 
    }

    // Implement other user-related methods as needed
  }
  
  module.exports = UserRepository;
  