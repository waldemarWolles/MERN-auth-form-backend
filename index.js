import express from 'express'
import dotenv from 'dotenv'
import cors from 'cors'
import mongoose from 'mongoose'

import { loginValidator, registerValidator } from './validators.js'
import checkAuth from './utils/checkAuth.js'
import { UserController } from './controllers/index.js'
import handleValidationErrors from './utils/handleValidationErrors.js'

mongoose
  .connect('mongodb+srv://chooter1999:DrGko8ZVYE5PE84j@cluster-fullstack-login.auueljo.mongodb.net/?retryWrites=true&w=majority')
  .then(() => console.log('db ok!'))
  .catch((err) => console.log(err + 'error'))

dotenv.config()

const PORT = process.env.PORT || 2222
const app = express()

app.use(express.json())
app.use(cors())

app.post('/auth/register', registerValidator, handleValidationErrors, UserController.register)

app.post('/auth/login', loginValidator, handleValidationErrors, UserController.login)

app.get('/auth/me', checkAuth, UserController.getUser)

app.listen(PORT, (err) => {
  if (err) {
    return console.log(err)
  }

  console.log('Server is running on port: ' + PORT)
})
