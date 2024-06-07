import { isEmpty, isEmptyArray, isNullOrUndefined } from './index';

// 👉 Required Validator
export const requiredValidator = (value: unknown) => {
    if (isNullOrUndefined(value) || isEmptyArray(value) || value === false) return 'Ce champ est requis';

    return !!String(value).trim().length || 'Ce champ est requis';
};

// 👉 Email Validator
export const emailValidator = (value: unknown) => {
    if (isEmpty(value)) return true;

    const re =
        /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    if (Array.isArray(value)) return value.every((val) => re.test(String(val))) || 'Le champ Email doit être un email valide';

    return re.test(String(value)) || 'Le champ Email doit être un email valide';
};

// 👉 Password Validator
export const passwordValidator = (password: string) => {
    const regExp = /(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%&*()]).{8,}/;

    const validPassword = regExp.test(password);

    return (
        // eslint-disable-next-line operator-linebreak
        validPassword ||
        'Le champ doit contenir au moins une majuscule, une minuscule, un caractère spécial et un chiffre avec un minimum de 8 caractères.'
    );
};

// 👉 Confirm Password Validator
export const confirmedValidator = (value: string, target: string) =>
    value === target || 'La confirmation du champ Confirmer le mot de passe ne correspond pas';

// 👉 Between Validator
export const betweenValidator = (value: unknown, min: number, max: number) => {
    const valueAsNumber = Number(value);

    return (Number(min) <= valueAsNumber && Number(max) >= valueAsNumber) || `Entrez un nombre entre ${min} et ${max}`;
};

// 👉 Integer Validator
export const integerValidator = (value: unknown) => {
    if (isEmpty(value)) return true;

    if (Array.isArray(value)) return value.every((val) => /^-?[0-9]+$/.test(String(val))) || 'Ce champ doit être un nombre entier';

    return /^-?[0-9]+$/.test(String(value)) || 'Ce champ doit être un nombre entier';
};

// 👉 Regex Validator
export const regexValidator = (value: unknown, regex: RegExp | string): string | boolean => {
    if (isEmpty(value)) return true;

    let regeX = regex;
    if (typeof regeX === 'string') regeX = new RegExp(regeX);

    if (Array.isArray(value)) return value.every((val) => regexValidator(val, regeX));

    return regeX.test(String(value)) || 'The Regex field format is invalid';
};

// 👉 Alpha Validator
export const alphaValidator = (value: unknown) => {
    if (isEmpty(value)) return true;

    return /^[A-Z]*$/i.test(String(value)) || 'The Alpha field may only contain alphabetic characters';
};

// 👉 URL Validator
export const urlValidator = (value: unknown) => {
    if (isEmpty(value)) return true;

    const re = /^(http[s]?:\/\/){0,1}(www\.){0,1}[a-zA-Z0-9\.\-]+\.[a-zA-Z]{2,5}[\.]{0,1}/;

    return re.test(String(value)) || 'URL is invalid';
};

// 👉 Length Validator
export const lengthValidator = (value: unknown, length: number) => {
    if (isEmpty(value)) return true;

    return String(value).length === length || `Le champ Min Character doit contenir au moins ${length} caractères.`;
};

// 👉 Alpha-dash Validator
export const alphaDashValidator = (value: unknown) => {
    if (isEmpty(value)) return true;

    const valueAsString = String(value);

    return /^[0-9A-Z_-]*$/i.test(valueAsString) || 'Tous les caractères ne sont pas valides';
};
