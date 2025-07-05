import * as yup from 'yup';

export const settingSchema = (t) =>
  yup.object().shape({
    first_name: yup
      .string()
      .min(3, t`firstNameMin`)
      .required(t`firstNameReq`),
    lastName: yup.string(),
    email: yup.string().email(t`invalidEmail`),
    phone: yup
      .string()
      .min(4, t`phoneMin`)
      .max(15, t`phoneMax`)
      .required(t`phoneReq`),
  });
