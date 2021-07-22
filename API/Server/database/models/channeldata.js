'use strict';

module.exports = (sequelize, DataTypes) => {
  const ChannelData = sequelize.define('ChannelData', {
    channelId: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      allowNull: false,
      primaryKey: true, 
    }, 

    channelName: {
     type: DataTypes.STRING, 
     foreignKey: true
    },
 
    channelPost: {    
      type: DataTypes.BLOB, 
    }, 
    
    desc: {
      type: DataTypes.STRING
    }
  }, { timestamps : false })

  ChannelData.associate = model => {
    ChannelData.belongsTo(model.User, {
      foreignKey: 'channelId', 
      as: 'channel', 
      timestamps: false
    })
  }
  return ChannelData;
};