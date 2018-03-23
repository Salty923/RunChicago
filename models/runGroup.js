module.exports = function (sequelize, DataTypes) {
    var RunGroup = sequelize.define("RunGroup", {
        groupName: {
            type: DataTypes.STRING,
            allowNull: false,
            len: [1, 100]
        },
        date: {
            type: DataTypes.STRING,
            allowNull: false,
            len: [1, 100]
        },
        time: {
            type: DataTypes.STRING,
            allowNull: false,
            len: [1, 200]
        },
        location: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        distance: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        pace: {
            type: DataTypes.STRING,
            allowNull: false
        },
        numRun: {
            type: DataTypes.INTEGER,
            allowNull: false,
            defaultValue: 1
        },
        createdBy: {
            type: DataTypes.INTEGER,
            allowNull: true,
        }
    });
    return RunGroup;
};