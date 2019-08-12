async function users(parent, args, context) {
  return [{ id: 1 }, { id: 2 }]
}

module.exports = {
  users,
}
