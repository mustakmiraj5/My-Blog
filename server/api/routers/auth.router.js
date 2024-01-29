import express from 'express'
import { signUp_post } from '../controllers/signuUp.controller.js'

const signUp_auth = express.Router()

signUp_auth.post('/signup', signUp_post)

export default signUp_auth