const mongoose = require('mongoose');

const mongodb = async () => {
  try {
    await mongoose.connect('mongodb+srv://recirop:XC8p5YKLGpi09RIp@reci-rop.yx4viki.mongodb.net/?retryWrites=true&w=majority', {
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
