import * as yup from 'yup'

export const loginSchema = yup.object().shape({
    email: yup.string().email('Invalid Email').required('Email is required'),
    password: yup.string().required('Password is required')
})

export const emailSchema = yup.object().shape({
    email: yup.string().email('Invalid Email').required('Email is required')
})

export const nameSchema = yup.object().shape({
    firstName: yup.string().required('Required'),
    lastName: yup.string().required('Required')
})

export const usernameSchema = yup.object().shape({
    username: yup.string().required('Required')
})

export const bestDescribeSchema = yup.object().shape({
    bestDescribe: yup.string().required('Choose an option')
})