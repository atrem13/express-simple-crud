import {Sequelize} from 'sequelize';

const db = new Sequelize('express_simple_crud', 'root', '', {
    host: 'localhost',
    dialect: 'mysql'
});

export default db;