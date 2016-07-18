'use strict'

module.exports = function (SuperClass) {
  return class BitBucket extends SuperClass {
    static getSubclassMap () {
      return { function: createFunction }
    }
    /* no backticks */
    static formatType (type) {
      return type
    }
    anchorTag () { return '' }
  }
}

function createFunction (SuperClass) {
  return class Function_ extends SuperClass {
    anchor () {
      return 'BITBUCKET-' + this.data.id
    }
  }
}
