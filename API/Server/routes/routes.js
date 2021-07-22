

const { signup, signin } = require("../controllers/authentication");
const { channelPost, getChannelPost, getAllChannelAvailable} = require("../controllers/channelController");
const { createComment } = require("../controllers/commentController");
const { getAllUsers, getUser } = require("../controllers/userController");
const  { 
    verifyUniqueUserEmail, 
    validateSignupFormData, 
    verifyUniqueUsername, 
    validateSigninFormData,
    validateChannelPost,
    validateCookies, 
    signUserIn
} = require('../middleware/middleware');


const initRoutes = (app) => { 
    // app.use(validateCookies) 
    // app.use(signUserIn)   
    app.post('/api/v1/auth/signup', validateSignupFormData, verifyUniqueUsername,  signup)  //testing
    app.post('/api/v1/auth/signin', validateSigninFormData, signin)   //testing
    app.get('/api/v1/users', getAllUsers)   //testing
    app.get('/api/v1/:username', getUser)     //render USER PROFILE

    
   
    //// CHANNEL API
    app.post('/api/v1/:username/channel', validateChannelPost, channelPost)
    app.get('/api/v1/channel/:channelId', getChannelPost)
    app.get('/api/v1/:username/channel', getAllChannelAvailable)  //fetch all the channels and display

    //COMMENT API

    app.post('/api/v1/:channel/comment', createComment)
}    
   
    

module.exports = initRoutes