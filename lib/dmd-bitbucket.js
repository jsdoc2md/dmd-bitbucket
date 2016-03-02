'use strict'

module.exports = function (SuperClass) {
  return class BitBucket extends SuperClass {
    static getSubclassMap () {
      return { function: createBBFunction }
    }
    /* no backticks */
    static formatType (type) {
      return type
    }
  }
}

function createBBFunction (SuperClass) {
  return class BBFunction_ extends SuperClass {
    anchorName () {
      return 'BITBUCKET-' + this.data.id
    }
  }
}
