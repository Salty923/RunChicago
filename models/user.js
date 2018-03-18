module.exports = function (sequelize, DataTypes) {
    var User = sequelize.define("User", {
        name: {
            type: DataTypes.STRING,
            allowNull: false,
            len: [1, 100]
        },
        address: {
            type: DataTypes.STRING,
            allowNull: false,
            len: [1, 200]
        },
        phoneNumber: {
            type: DataTypes.STRING,
            allowNull: false,
            len: [7, 20]
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
            len: [1, 100]
        },
        reminder: {
            type: DataTypes.BOOLEAN,
            defaultValue: true
        },
        points: {
            type: DataTypes.INTEGER,
            allowNull: true
        }
    });
    return User;
};