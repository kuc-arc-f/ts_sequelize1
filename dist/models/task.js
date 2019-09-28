"use strict";
//
module.exports = (sequelize, DataTypes) => {
    const Task = sequelize.define('Task', {
        title: DataTypes.STRING,
        content: DataTypes.TEXT,
        uid: DataTypes.BIGINT(11)
    }, {});
    Task.associate = function (models) {
    };
    return Task;
};
