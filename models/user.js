module.exports = function (sequelize, DataTypes) {
    var User = sequelize.define("User", {
        firstName: {
            type: DataTypes.STRING,
            allowNull: false,
            len: [1, 100]
        },
        LastName: {
            type: DataTypes.STRING,
            allowNull: false,
            len: [1, 100]
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
            len: [1, 100]
        },
        password: {
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