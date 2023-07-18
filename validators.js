import { body } from 'express-validator'

export const registerValidator = [
  body('email', 'Wrong email format').isEmail().isString(),
  body('password', 'Wrong password format').isString().isLength({ min: 5, max: 15 }),
  body('fullName', 'Wrong fullName format').isString().isLength({ min: 2 }),
  body('avatarUrl', 'Wrong avatarUrl format').isString().optional(),
]

export const loginValidator = [
  body('email', 'Wrong email format').isEmail().isString(),
  body('password', 'Wrong password format').isString().isLength({ min: 5, max: 15 }),
  body('fullName', 'Wrong fullName format').isString().optional().isLength({ min: 2 }),
  body('avatarUrl', 'Wrong avatarUrl format').isString().optional(),
]
