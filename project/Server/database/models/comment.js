'use strict';

module.exports = (sequelize, DataTypes) => {
  const Comments = sequelize.define('Comments', {
    commentId: {
      type: DataTypes.UUID,
      allowNull: false,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
    }, 

    userId: { // The user who made the comment.
      type: DataTypes.UUID,
      // allowNull: false,  
      onDelete: 'CASCADE',
    },

    body: {   //body of the Comment
      type: DataTypes.TEXT,
      // allowNull: false,
    }
  }, { timestamps: false})

  Comments.associate = (models) => {
    Comments.belongsTo(models.User, { foreignKey: 'userId', as: 'user', timestamps: false });
  }
  
  return Comments;
};