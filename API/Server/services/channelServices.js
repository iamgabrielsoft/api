
const Model = require('../database/models')
const { User, ChannelData} = Model


const createAChanelPost = (channelInfo) => {
    return Model.sequelize.transaction(t => ChannelData.create(channelInfo, { transaction: t}))
        .then((postData) => {
           console.log('post', postData.dataValues)
           return postData.dataValues //created post on  this channel
        })
        .catch(err => {
            console.log('err', err)
            const error = new Error()
            error.message("A Technical Error Occured!")
        })
}


/**@retuns all post to a channel */

const getAllChannelPost = (queryOption = {}, offset=0, limit = 10) => {
    var result; 
    try {
        
        if(offset >=0) {
            result =  ChannelData.findAndCountAll({
                where: queryOption, 
                
                // order: [['createAt', 'DESC']],
                offset, 
                logging: false 
            })
        }else {
            console.log('else bloock')
        }

        // result.row.map((data) => {
        //     report = report.dataValues; 
        //     console.log(report, data)
        //     return { reports: result.rows, count: result.count };
        // })
    } catch (error) {
        console.log(error)
    }
}


const getSinglePost = async (channelId) => {
    try {
        const _data = await ChannelData.findOne({
            where: channelId , 
            logging: false
        })

        const _post = _data.dataValues;
        console.log(_post)
        const payload  = _post ? _post : {}
        return payload; 

    } catch (error) {
        console.log('err', error)   
    }
    

}

module.exports = {
    getAllChannelPost, 
    createAChanelPost, 
    getSinglePost
}