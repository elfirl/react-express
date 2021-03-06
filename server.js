const express = require('express');

const app = express();

app.get('/api/customers', (req, res) => {
  const customers = [
    {
      id: 1,
      firstName: 'Jon',
      lastName: 'Doe'
    },
    {
      id: 2,
      firstName: 'Bruce',
      lastName: 'Wayne'
    },
    {
      id: 3,
      firstName: 'Malfurion',
      lastName: 'Stormrage'
    },
  ];

  res.json(customers);

});

const port = 5000;

app.listen(port, () => console.log(`Server started on port ${port}`));