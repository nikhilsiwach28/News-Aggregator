function validateUserRegisteration(req,res,next){
    const { username, password, email } = req.body;
    if (!username || !password || !email) {
        return res.status(400).send('Invalid registration data');
      }

    next();
}

module.exports = {validateUserRegisteration
                }