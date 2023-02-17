module.exports = getUserModel = ( sequelize, {DataTypes} ) => {
    const User = sequelize.define("users", {
        firstName: {
            type: DataTypes.STRING,
            unique: true
        }
    }, {timestamps: false});

    // User.associate = (models) => {
    //     User.hasMany(models.Invoice)
    // }

    return User;
}