const mongoose = require('mongoose');

const mongodb = async () => {
  try {
    await mongoose.connect('', {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
   
    console.log('Conexión a la base de datos establecida correctamente');
  } catch (error) {
    console.error('Error al conectar a la base de datos:', error.message);
    process.exit(1); 
  }
};

module.exports = mongodb;
