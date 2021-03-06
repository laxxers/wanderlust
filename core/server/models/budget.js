var Lust = require('./base'),

  Budget,
  Budgets;

Budget = Lust.Model.extend({
  tableName: 'budgets',

  initialize: function() {
    this.on('saving', this.saving);
  },

  saving: function() {
    Lust.Model.prototype.saving.call(this);
  },
    // Relations
  user: function user() {
  	return this.belongsTo('User', 'user_id');
  },

  expenses: function expenses() {
    return this.hasMany('Expense', 'budget_id')
  }
}, {
  findAll: function findAll(options) {
    options = options || {};
    options.withRelated = ['user', 'expenses'];
    return Lust.Model.findAll.call(this, options);
  },

  findOne: function findOne(args, options) {
    options = options || {};
    options.withRelated = ['user', 'expenses'];
    return Lust.Model.findOne.call(this, args, options);
  }
});

Budgets = Lust.Collection.extend({
	model: Budget
});

module.exports = {
  Budget: Lust.model('Budget', Budget),
	Budgets: Lust.collection('Budgets', Budgets),
}
