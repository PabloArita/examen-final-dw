const { Sequelize } = require('sequelize');

// Cargar configuración desde las variables de entorno
const config = {
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
  host: process.env.DB_HOST,
  dialect: process.env.DB_DIALECT
};

// Imprimir configuración para debug (opcional)
console.log('Configuración cargada:', config);

// Crear instancia de Sequelize
const sequelize = new Sequelize(config.database, config.username, config.password, {
  host: config.host,
  dialect: config.dialect
});

// Probar conexión
sequelize
  .authenticate()
  .then(() => {
    console.log('Conexión exitosa a la base de datos.');
  })
  .catch(err => {
    console.error('No se pudo conectar a la base de datos:', err);
  });

module.exports = sequelize;
