/**
 * Rank
 *
 * @module      :: Model
 * @description :: A short summary of how this model works and what it represents.
 * @docs		:: http://sailsjs.org/#!documentation/models
 */

module.exports = {

  schema: true,

  attributes: {

  	userId: {
  		type: 'integer'
  	},

  	game: {
  		type: 'string'
  	},

  	point: {
  		type: 'integer'
<<<<<<< HEAD
  	}

    /*toJSON: function(){
      var obj = this.toObject();
      return obj;
    }*/
=======
  	},

    toJSON: function(){
      var obj = this.toObject();
      return obj;
    }
>>>>>>> 8476547c998c7c331cca8b8084493b161430f7ab
  }

};
