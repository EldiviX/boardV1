import { body } from "express-validator";

export const loginValidation = [
    body('email', 'Некорректный email').isEmail(),
    body('password', 'Пароль должен быть больше 5 символов').isLength({min: 5}),
]

export const registerValidation = [
    body('email', 'Некорректный email').isEmail(),
    body('password', 'Пароль должен быть больше 5 символов').isLength({min: 5}),
    body('name', 'Имя должно быть больше 1 символа').isLength({min: 1}),
    body('avatarUrl', 'Некорректная ссылка на аватар').optional().isURL(),
]

export const adCreateValidation = [
    body('title', 'Введите название').isLength({min: 2}).isString(),
    body('text', 'Введите описание').isLength({min: 10}).isString(),
    body('category', 'Выберите категорию').isString(),
    body('price', 'Укажите цену').isNumeric(),
    body('phone', 'Укажите контактный телефонный номер').isString(),
    body('location', 'Укажите город').isString(),
    body('avatarUrl', 'Некорректная ссылка на изображение').optional().isString(),
]