

const { createUser,  fetchSingleUser } = require("../services/userServices")
const { passwordHash, comparePassword } = require("../helpers/hash")
const { generateToken } = require("../helpers/jwt")
const crypto = require("crypto")
const { respondWithSuccess, respondWithWarning } = require("../helpers/responseHandler")

/**
 * Create New User
 * @param {Express.Request } req  
 * @param {Express.Response} res 
 */


// const createHash = (email) => crypto.createHash('md5').update(email).digest('hex')
// const createGravatar = (email) => `https://www.gravatar.com/avatar/${createHash(email)}?d=identicon`;
// const image = user.profileImage || `https://www.gravatar.com/avatar/${createHash(user.email)}?d=identicon`;

const signup = async (req, res) => {

    const { username, email, password } = req.body;
    const hashedPassword = await passwordHash(password);
    console.log(req.body)

    console.log(hashedPassword)
      // const gravatar = createGravatar(email);
      const _user = await createUser({
        username,
        email,   
        password: hashedPassword,
        // profileImage: gravatar
      });
    
      if (_user.success) {
        const payload = {
          userId: _user
        //   isAdmin: _user.user.dataValues.isAdmin
        };

        const token = await generateToken(payload);
        _user.token = token;
    
        // const mailBody = newUserVerificationEmail(
        //   req.user.name, SITE_URL, token, req.body.email
        // );
        // const sendEmail = sendMail(req.body.email, 'ITARJ - Verify Email', mailBody);
    

        return respondWithSuccess(
          res,
          200,
          'User signup successful',
          payload    
        //   _.omit(_user.user.dataValues, ['password'])
        );
    }

      return respondWithWarning(res, 400, 'Error creating User :(');
}


/**
 * Login The User
 * @param {object} req 
 * @param {object} res 
 */


const signin = async (req, res) => { 
    const { username, password } = req.body; 

    const user = await fetchSingleUser({ username })  
    console.log('user', user.password)

    const _comparePassword = await comparePassword(password, user.password)
    if(!_comparePassword) return respondWithWarning(res, 401, 'Incorrect Username or password...')

    const { userId } = req.body; 
    const token = await generateToken(userId)
    return respondWithSuccess(res, 200, 'Login Successful...', token)  
}
    

   
module.exports = {signup, signin }
    
