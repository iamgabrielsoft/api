'use strict';


module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define("User", {
    userId: {
      type: DataTypes.UUID,
        allowNull: false,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true
    }, 

    username: {
      type: DataTypes.TEXT, 
      allowNull: false, 
      required: true 
    }, 

    email: {
      type: DataTypes.TEXT, 
      allowNull: false, 
      required: true 
    },

    password: {
      type: DataTypes.TEXT, 
      // allowNull: false 
    }, 

  }, {  timestamps: false})  


  User.associate = (models) => {
    User.hasMany(models.ChannelData, { foreignKey: 'channelId', onDelete: 'CASCADE'})
  }

  return User; 
};

