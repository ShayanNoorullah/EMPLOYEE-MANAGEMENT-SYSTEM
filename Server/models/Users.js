module.exports = (sequelize, DataTypes) => {
    //CREATING USER TABLE:
    const Users = sequelize.define("Users", {
        username: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false,
        },
    });

    //ASSOCIATING USER TABLE WITH EMPLOYEE TABLE
    Users.associate = (models) => {
        Users.hasMany(models.Employee, {
            onDelete: "cascade",
        }); //EACH USER CAN HAVE MANY EMPLOYEES
    };
    

    return Users;
}