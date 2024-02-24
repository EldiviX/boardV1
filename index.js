import express from "express";
import mongoose from "mongoose";
import multer from 'multer';

import { registerValidation, loginValidation, adCreateValidation } from './validations.js';

import checkAuth from "./utils/checkAuth.js";

import * as UserController from "./controllers/UserController.js";
import * as AdController from "./controllers/AdController.js";

mongoose.connect("mongodb://127.0.0.1:27017/board")
    .then(() => console.log('DB Connected'))
    .catch((error) => console.log('Error', error))

const app = express();

const storage = multer.diskStorage({
    destination: (_, __, cd) => {
        cd(null, "uploads");
    },
    filename: (_, file, cd) => {
        cd(null, file.originalname);
    },
});

const upload = multer({ storage });

app.use(express.json());
app.use('/uploads', express.static('uploads'));

app.post('/auth/login', loginValidation, UserController.login);
app.post('/auth/register', registerValidation, UserController.register);
app.get('/auth/me', checkAuth, UserController.getMe);

app.post('/upload', checkAuth, upload.single('image'), (req, res) => {
    res.json({
        url: `/uploads/${req.file.originalname}`
    });
});

app.get('/ads', AdController.getAll);
app.get('/ads/:id', AdController.getOne);
app.post('/ads', checkAuth, adCreateValidation, AdController.create);
app.delete('/ads/:id', checkAuth, AdController.remove);
// app.patch('/ads', AdController.update);

app.listen(4444, (err) => {
    if (err) {
        return console.log(err)
    }
    console.log('Server OK')
});

