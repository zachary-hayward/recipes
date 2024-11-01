import db from './connection.ts'

export async function addUser(userInfo: { username: string, password: string }) {
  return db('users').insert(userInfo)
}

export async function getUserByUsername(username: string) {
  return db('users').where({ username }).first();
}
