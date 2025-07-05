import * as yup from 'yup';

export const cardSchema = yup.object().shape({
  // firstName: yup
  //   .string()
  //   .required('First Name is required')
  //   .matches(/^[a-zA-Z\s]*$/, 'First Name must contain only letters and spaces'),
  // lastName: yup
  //   .string()
  //   .required('Last Name is required')
  //   .matches(/^[a-zA-Z\s]*$/, 'Last Name must contain only letters and spaces'),
  // zip: yup.string().required('Zip is required'),
  cardNumber: yup
    .string()
    .required('Card Number is required')
    .matches(/^[0-9]{16}$/, 'Card Number must be 16 digits'),
  expiryDate: yup
    .date()
    .nullable()
    .required('Expiry Date is required')
    .min(new Date(), 'Expiry Date cannot be in the past'),
  cvv: yup
    .string()
    .required('CVV is required')
    .matches(/^[0-9]{3,4}$/, 'CVV must be 3 or 4 digits'),
});
