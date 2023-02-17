const express = require('express');
const dotenv = require('dotenv');
dotenv.config();
const { sequelize } = require('./models');
const app = express();
const PORT = process.env.PORT || 8000

const { User, Invoice } = require('./models')

dotenv.config();

sequelize.sync({force: true}).then(() => {
    app.listen(PORT, () => console.log(`The server is listening on PORT ${PORT}`));
})

app.get('/', async(req, res) => {
    let users = await User.findAll({ include: [{model: Invoice}] });
    return res.status(200).json({success: true, users});
})

