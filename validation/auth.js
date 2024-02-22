import { body } from "express-validator";

export const registerValidation = [
    body('email', 'Некорректный email').isEmail(),
    body('password', 'Пароль должен быть больше 5 символов').isLength({min: 5}),
    body('name', 'Имя должно быть больше 1 символа').isLength({min: 1}),
    body('avatarUrl', 'Некорректная ссылка на аватар').optional().isURL(),
]