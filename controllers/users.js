const { response, request } = require('express')

const usersGet = (req = request, res = response) => {
  const { q, name = 'No name', apikey, page = 1, limit } = req.query
  res.status(403).json({
    ok: true,
    msg: 'get Api - controller',
    q,
    name,
    apikey,
    page,
    limit
  })
}

const userPost = (req, res = response) => {
  const { name } = req.body

  res.status(201).json({
    ok: true,
    msg: 'post Api - controller',
    name
  })
}

const usersPut = (req, res = response) => {
  const id = req.params.id

  res.status(403).json({
    ok: true,
    msg: 'put Api - controller'
  })
}

const usersPatch = (req, res = response) => {
  res.status(403).json({
    ok: true,
    msg: 'patch Api - controller'
  })
}

const usersDelete = (req, res = response) => {
  res.status(403).json({
    ok: true,
    msg: 'delete Api - controller'
  })
}

module.exports = {
  usersGet,
  userPost,
  usersPut,
  usersPatch,
  usersDelete
}
