import { Router } from 'express'
import bcrypt from 'bcrypt';

import * as db from '../db/users.ts'

const router = Router()

router.post('/add', async (req, res) => {
  const { username, password } = req.body
  const hashedPassword = await bcrypt.hash(password, 10);
  try {
    const users = await db.addUser({ username, password: hashedPassword })
    res.json(users)
  } catch (error) {
    console.log(error)
    res.status(500).json({ message: 'Something went wrong' })
  }
})

router.post('/login', async (req, res) => {
  const { username, password } = req.body;
  try {
    const user = await db.getUserByUsername(username);
    if (!user) {
      return res.status(401).json({ message: 'User not found' });
    }
    const match = await bcrypt.compare(password, user.password);
    if (!match) {
      return res.status(401).json({ message: 'Invalid credentials' });
    }
    res.json({ message: 'Login successful', user });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: 'Something went wrong' });
  }
});

export default router
