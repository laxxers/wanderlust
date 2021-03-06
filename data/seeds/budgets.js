var uuid = require('node-uuid');

exports.seed = function(knex, Promise) {
  return Promise.join(
    knex('budgets').del(),
    knex('budgets').insert([{
      uuid: uuid.v4(),
      name: 'Febuary',
      type: 'monthly',
      amount: '250.00',
      user_id: 1,
      created_at: new Date().getTime(),
      updated_at: new Date().getTime()
    },
    {
      uuid: uuid.v4(),
      name: 'Bangkok Trip',
      type: 'event',
      amount: '1700.00',
      user_id: 1,
      created_at: new Date().getTime(),
      updated_at: new Date().getTime()
    },
    {
      uuid: uuid.v4(),
      name: 'March',
      type: 'monthly',
      amount: '300.00',
      user_id: 2,
      created_at: new Date().getTime(),
      updated_at: new Date().getTime()
    }])
  );
};
