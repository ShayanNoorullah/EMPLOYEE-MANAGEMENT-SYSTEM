module.exports = (sequelize, DataTypes) => {
    //CREATING COMMENTS TABLE:
    const Comments = sequelize.define("Comments", {
        commentbody: {
            type: DataTypes.STRING,
            allowNull: false,
            default: "NULL",
        },
    });
    return Comments;
}