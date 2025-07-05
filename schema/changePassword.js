import * as yup from 'yup';

import { AUTH } from '@/utils/messages';

const changePasswordSchema = yup
  .object({
    currentPassword: yup
      .string()
      .matches(/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[#?!@$%^&*-]).{6,}$/, AUTH.PASSWORD_VALIDATION)
      .required('Current password is required')
      .transform((value, originalValue) => (originalValue ? originalValue.trim() : '')),
    newPassword: yup
      .string()
      .matches(/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[#?!@$%^&*-]).{6,}$/, AUTH.PASSWORD_VALIDATION)
      .required('New password is required')
      .transform((value, originalValue) => (originalValue ? originalValue.trim() : ''))
      .test(
        'is-different',
        'New password must be different from the current password',
        function (value) {
          return value !== this.parent.currentPassword;
        },
      ),
    confirmPassword: yup
      .string()
      .oneOf([yup.ref('newPassword')], 'Passwords do not match')
      .matches(/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[#?!@$%^&*-]).{6,}$/, AUTH.PASSWORD_VALIDATION)
      .required('Confirm password is required')
      .transform((value, originalValue) => (originalValue ? originalValue.trim() : '')),
  })
  .noUnknown(false);

export default changePasswordSchema;
