const { respondWithSuccess, respondWithWarning } = require("../helpers/responseHandler")
const { createAChanelPost, getSinglePost, getAllChannelPost} = require("../services/channelServices")





const channelPost = (req, res) => {
    const _data = createAChanelPost(req.body)
}


const getChannelPost = async (req, res) => {
    const { channelId } = req.params;
    const _id = await getSinglePost({ channelId })
    if(!_id) return respondWithWarning(res, 401, 'Post NOT FOUND...')
    return respondWithSuccess(res, 200, 'POST FOUND', _id)
}



const getAllChannelAvailable = (req, res) => {
    const result = getAllChannelPost({gabriel: 'fff'}, 100, 10)
    console.log(result)
}

module.exports = {
    channelPost,
    getChannelPost,
    getAllChannelAvailable
}