//
module.exports = (sequelize: any, DataTypes: any) => {
    const Task = sequelize.define('Task',
    {
        title: DataTypes.STRING,
        content: DataTypes.TEXT,
        uid: DataTypes.BIGINT(11)
    }, {});
    Task.associate = function(models: any) {
    };
    return Task;
};
