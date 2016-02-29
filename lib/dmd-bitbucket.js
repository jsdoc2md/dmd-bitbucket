'use strict'

module.exports = function (SuperClass) {
  class BitBucket extends SuperClass {
    static getSubclassMap () {
      return {
        function: BBFunction_
      }
    }
  }

  class BBFunction_ extends SuperClass {
    /* no backticks */
    static formatType (type) {
      return type
    }
    anchorName () {
      return 'bitbucket-' + this.data.id
    }
  }

  return BitBucket
}
