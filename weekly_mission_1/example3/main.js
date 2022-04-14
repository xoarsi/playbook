/*
  node main.js
*/

const logger1 = require('./logger_1')
const logger2 = require('./logger_2')

logger1('Hola, soy un mensaje de info, exportado desde logger_1 ')
logger2.verbose('Soy un mensaje de verbose, exportado de logger_2')
