

module.exports = (sequelize: any, DataTypes: any) => {
    const User = sequelize.define('User', {
        name: DataTypes.STRING
    }, {});
    User.associate = function(models: any) {
    };
    return User;
};