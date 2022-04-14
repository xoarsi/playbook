/*La constante logger requiere del archivo logger.js, 
en este hay una clase llamada Logger. Dentro de Logger se usa un constructor, con el cual
se crea un objeto y se inicializa a partir de una clase (Logger). En el objeto () se almacenan count y name,
en este caso el objeto sería new Logger */
const logger = require('./logger')

// Ya se puede usar directamente el objeto instanciado en el módulo logger
/* logger.log('This is an informational message, por ejemplo si alguien inicia sesión podría decir: Bienvenid@') */

logger.log('Bienvenid@ de nuevo')


/*
También pueder instanciar uno nuevo de esta manera:
  const customLogger = new logger.constructor('CUSTOM')
  customLogger.log('This is an informational message')
*/
