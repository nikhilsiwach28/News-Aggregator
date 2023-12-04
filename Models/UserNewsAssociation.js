class UserNewsAssociation {
    constructor(userId, newsId) {
      this.userId = userId;
      this.newsId = newsId;
      this.read = false;
      this.favorite = false;
    }
  }
  
  module.exports = UserNewsAssociation;
  