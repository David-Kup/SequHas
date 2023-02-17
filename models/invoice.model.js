module.exports = getInvoiceModel = ( sequelize, {DataTypes} ) => {
    const Invoice = sequelize.define("invoices", {
        amount: {type: DataTypes.INTEGER},
        // UserId: {type: DataTypes.INTEGER}
    }, {timestamps: false});

    // Invoice.associate = (models) => {
    //     Invoice.belongsTo(models.User)
    // }

    return Invoice;
}