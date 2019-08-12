const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const { APP_SECRET, getUserId } = require('../utils')

async function createUser(parent, args, context) {
  const newUser = new User({
    username: args.username,
    password: args.password,
    createdAt: args.createdAt,
    authType: args.authType,
    role: args.role,
    organization: args.organization,
  })

  const error = await newUser.save()

  if (error) return error
  return newUser
}

module.exports = {
  createUser,
}
