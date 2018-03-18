module.exports = function (sequelize, DataTypes) {
    var UserRunList = sequelize.define("UserRunList", {
        userId: {
            type: DataTypes.INTEGER,
            allowNull: true,
        },
        runGroupId: {
            type: DataTypes.INTEGER,
            allowNull: true
        }
    });
    return UserRunList;
};