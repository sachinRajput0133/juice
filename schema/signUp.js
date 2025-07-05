import * as yup from 'yup';

import { AUTH } from '@/utils/messages';

const signupSchema = (t) =>
  yup
    .object({
      first_name: yup
        .string()
        .min(3, t`firstNameMin`)
        .max(30, t`firstNameMax`)
        .required(t`firstNameReq`),
      last_name: yup.string().required(t`lastNameReq`), // `nullable` allows null values
      email: yup
        .string()
        .email(t`invalidEmail`)
        .required(t`emailReq`),
      phone: yup
        .string()
        .matches(/^[0-9]*$/, t`phoneValidation`)
        .transform((value) => value.replace(/^0/, ''))
        .min(4, t`phoneMin`)
        .max(15, t`phoneMax`)
        .required(t`phoneReq`),
      // howAcquired: yup.string().required("This field is required"),
      // referralCode: yup.string().nullable(), // Optional and can be null
      // zipcode: yup.string().nullable().label("Zip code"),
      password: yup
        .string()
        .matches(/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[#?!@$%^&*-]).{6,}$/, AUTH.PASSWORD_VALIDATION)
        .required(t`passwordReq`)
        .transform((value, originalValue) => (originalValue ? originalValue.trim() : '')),
      confirmPassword: yup
        .string()
        .oneOf([yup.ref('password')], t`passwordMatch`)
        .matches(/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[#?!@$%^&*-]).{6,}$/, AUTH.PASSWORD_VALIDATION)
        .required(t`currentPasswordReq`)
        .transform((value, originalValue) => (originalValue ? originalValue.trim() : '')),
      termsAndCondition: yup
        .boolean()
        .oneOf([true], t`termsConditionReq`)
        .required(t`termsConditionReq`),
      // isSendEmail: yup.boolean().default(false),
      // isSendText: yup.boolean().default(false),
    })
    .noUnknown(false);

export default signupSchema;
