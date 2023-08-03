import * as yup from 'yup'
const pwordRegExp = /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{6,}$/

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

export const countrySchema = yup.object().shape({
    country: yup.string().required('Required')
})

export const stateSchema = yup.object().shape({
    state: yup.string().required('Required')
})

export const dobSchema = yup.object().shape({
    day: yup.string().required('Select a Day'),
    month: yup.string().required('Select a month'),
    year: yup.string().required('Select a year')
})

export const bestDescribeSchema = yup.object().shape({
    bestDescribe: yup.string().required('Choose an option')
})

export const passwordSchema = yup.object().shape({
    password: yup.string().matches(pwordRegExp, {message: 'Combine upper and lowercase letters, symbols and numbers'}).min(6, '6 characters or longer.').required('Required'),
    confirmPassword: yup.string().oneOf([yup.ref('password'), null], 'Password must match').required('Required')
})

export const confirmationCodeSchema = yup.object().shape({
    code: yup.string().required('Enter the confirmation code sent to you')
})

export const howToPublishSchema = yup.object().shape({
    how: yup.string().required('Choose an option')
})

export const uploadPoemSchema = yup.object().shape({
    bookFile: yup.string().required('Choose a sample book file'),
    coverImage: yup.string().required('Choose a cover image')
})

export const addTitleSchema = yup.object().shape({
    title: yup.string().required('Required'),
    poet: yup.string().required('Required'),
    poem_desc: yup.string().required('Required')
})

export const otherInfoSchema = yup.object().shape({
    category: yup.string().required('All fields are required'),
    lang: yup.string().required('All fields are required'),
    explicitContent: yup.string().required('All fields are required')
})

export const OtherDetailsSchema = yup.object().shape({
    publisherName: yup.string().required('All fields are required'),
    ISBN: yup.string().required('All fields are required'),
    publicationDate: yup.string().required('All fields are required')
})

export const poemVisibilitySchema = yup.object().shape({
    releaseDate: yup.string().required('All fields are required'),
    baseCurrency: yup.string().required('All fields are required'),
    price: yup.string().required('All fields are required'),
    visibility: yup.string().required('All fields are required')
})