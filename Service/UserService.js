class UserService {
    constructor(userRepository) {
      this.userRepository = userRepository;
    }
  
    registerUser(user) {
      this.userRepository.addUser(user);
      // Additional logic for user registration
    }
  
    loginUser(user){
        this.userRepository.loginUser(user);
    }

    
    getUserPreferences(user){
      this.userRepository.getUserPreferences(user)
    }

    updateUserPreferences(user){
      this.userRepository.updateUserPreferences(user)
    }
    // Implement other user-related services
  }
  
  module.exports = UserService;
  