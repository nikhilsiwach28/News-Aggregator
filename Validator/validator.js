const jwt = require('jsonwebtoken');


function authorizeUser(req,res,next){
  const token = req.headers.authorization || req.query.token;
  if (!token) {
      res.status(403).send("No Token Provided")
      }
  const tokenParts = token.split(' ');
  jwt.verify(tokenParts[1], 'nikhiluniquesecretkey',(err,decoded)=>{
  if (err){
      res.status(401).send("Faild to Authorize")
    }
    req.decoded = decoded 
    next()
  })
}
// Assuming 'user' is the authenticated user object
const generateToken = (user) => {
  try{
     const token = jwt.sign({userId:user.userId}, 'nikhiluniquesecretkey', { expiresIn: '2h' });
     return token
  }catch(e){
      throw new Error("Internal Server Error =")
  }
};

function validateUserRegisteration(req,res,next){
    const { userId, password, email } = req.body;
    if (!userId || !password || !email) {
        return res.sendStatus(400).send('Invalid registration data');
      }
    next();
      
}

module.exports = {validateUserRegisteration,
                  generateToken,
                  authorizeUser
                }