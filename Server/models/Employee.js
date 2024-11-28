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
    })
    return Employee
}