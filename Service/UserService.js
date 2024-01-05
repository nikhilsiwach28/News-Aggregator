const bcrypt = require('bcrypt');
const validator = require("../Validator/validator")

class UserService {
    constructor(userRepository) {
      this.userRepository = userRepository;
    }

    getAllUserDetails(){
      return this.userRepository.getAllUsers()
    }
  
    getUserDetails(id){
      this.userRepository.findUser(id)
    }


    registerUser(user) {
      this.checkforRegisterValidations(user)
      this.userRepository.addUser(user);
      // Additional logic for user registration
    }
  

    loginUser(userId,password){
        const user = this.userRepository.findUser(userId);

        if (user == undefined || !bcrypt.compareSync(password, user.password)) {
          throw new Error("Invalid Credentials")
        }
        
        const token = validator.generateToken(user);
        return token
      } 


    
    getUserPreferences(user){
      return this.userRepository.getUserPreferences(user)
    }

    updateUserPreferences(user){
      this.userRepository.updateUserPreferences(user)
    }
    // Implement other user-related services


    checkforRegisterValidations(user){
        var existedUser = this.userRepository.findUser(user.userId)
        if (existedUser != undefined) {
          throw new Error("UserId Taken");
        }
        else if (this.userRepository.findUserByEmail(user.email) != undefined){
          throw new Error("Email Id already Exists")
        }
    }
  }
  
  module.exports = UserService;
  