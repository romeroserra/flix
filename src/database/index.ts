import { Sequelize } from "sequelize"

export const sequelize = new Sequelize({
    dialect: 'postgres',
    host: 'localhost',
    port: 5432,
    database: 'flix_development',
    username: 'flix',
    password: 'flix',
    define: {
        underscored: true
    }
})