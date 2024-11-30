module.exports = (sequelize, DataTypes) => {
    //CREATING EMPLOYEE TABLE:
    const Employee = sequelize.define("Employee", {
        name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        address: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        phone: {
            type: DataTypes.STRING,
            allowNull: false,
        },
    });

    //ASSOCIATING EMPLOYEE TABLE WITH COMMENTS TABLE
    Employee.associate = (models) => {
        Employee.hasMany(models.Comments, {
            onDelete: "cascade",
        }); //EACH EMPLOYEE CAN HAVE MANY COMMENTS
    };
    

    return Employee;
}