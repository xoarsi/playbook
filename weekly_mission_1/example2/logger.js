// logger.js

// Esta es una función que se guardara en este módulo como info
exports.info = (message) => {
    console.log(`info: ${message}`)
  }
  
  // Esta es una función que se guardara en este módulo como verbose
  exports.verbose = (message) => {
    console.log(`verbose: ${message}`)
  }
  
  // Esta es una nueva función que se guardara en este módulo como xoarsi
  exports.xoarsi = (message) => {
    console.log(`xoarsi: ${message}`)
  }

  /*
    const logger = require('./logger')
    logger.info('This is an informational message')
    logger.verbose('This is a verbose message')
    logger.xoarsi('This is a message written by xoarsi')
   * */
  