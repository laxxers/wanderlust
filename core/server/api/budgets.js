var dataProvider = require('../models'),
  _ = require('lodash'),

  budgets;

budgets = {
  browse: function browse() {
    return dataProvider.Budget.findAll().then(function(budgets) {
      var i = 0,
        omitted = {};

      if (budgets) {
        omitted = budgets.toJSON();
      }

      for (i; i < omitted.length; i = i + 1) {
        omitted[i].user = _.omit(omitted[i].user, ['password']);
      }

      return {
        budgets: omitted
      };
    })
  },

  read: function(args) {
    return dataProvider.Budget.findOne(args).then(function(budget) {
      var omitted;

      if (budget) {
        omitted = budget.toJSON();
        omitted.user = _.omit(omitted.user, ['password']);
        return {
          budget: budget
        };
      }
    });
  }
}

module.exports = budgets;
