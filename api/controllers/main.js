const {v4: uuid} = require('uuid');

const getTableData = (req, res, db) => {
  db.select('*').from('testtable1')
    .then(items => {
      res.json(items.length ? items : [])
    })
    .catch(err => {
      console.log(err);
      res.status(400).json({dbError: 'db error'})
    })
}

const postTableData = (req, res, db) => {
  const {first, last, email, phone, location, hobby} = req.body
  const added = new Date()
  db('testtable1').insert({id: uuid(), first, last, email, phone, location, hobby, added})
    .returning('*')
    .then(ids => {
      res.json(ids)
    })
    .catch(err => {
      console.log(err);
      res.status(400).json({dbError: 'db error'})
    })
}

const putTableData = (req, res, db) => {
  const {id, first, last, email, phone, location, hobby} = req.body
  db('testtable1').where({id}).update({first, last, email, phone, location, hobby})
    .returning('*')
    .then(id => {
      res.json([{id, first, last, email, phone, location, hobby}])
    })
    .catch(err => {
      console.log(err);
      res.status(400).json({dbError: 'db error'})
    })
}

const deleteTableData = (req, res, db) => {
  const {id} = req.body
  db('testtable1').where({id}).del()
    .then(() => {
      res.json({delete: 'true'})
    })
    .catch(err => {
      console.log(err);
      res.status(400).json({dbError: 'db error'})
    })
}

module.exports = {
  getTableData,
  postTableData,
  putTableData,
  deleteTableData
}
