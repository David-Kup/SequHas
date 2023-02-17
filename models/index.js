const Sequelize = require('sequelize');
const getUserModel = require('./user.model')
const getInvoiceModel = require('./invoice.model');

const sequelize = new Sequelize(
    process.env.DEV_MODE == 'true' ? process.env.POSTGRES_DB_DEV       : process.env.POSTGRES_DB_PROD,
    process.env.DEV_MODE == 'true' ? process.env.POSTGRES_USER_DEV     : process.env.POSTGRES_USER_PROD,
    process.env.DEV_MODE == 'true' ? process.env.POSTGRES_PASSWORD_DEV : process.env.POSTGRES_PASSWORD_PROD,
    {
        host : process.env.DEV_MODE == 'true' ? process.env.POSTGRES_HOST_DEV : process.env.POSTGRES_HOST_PROD,
        dialect : "postgres",
        operatorAliases: false,
        
        pool : {
            max: 5,
            min: 0,
            acquire: 30000,
            idle: 10000
        }
    },
);

const models = {
    User: getUserModel(sequelize, Sequelize),
    Invoice: getInvoiceModel(sequelize, Sequelize)
};

models.User.hasOne(models.Invoice);
// models.Invoice.belongsTo(models.User);



module.exports = {sequelize, ...models }
