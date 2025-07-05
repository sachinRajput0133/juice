import * as yup from 'yup';

const addressSchema = (t) =>
  yup
    .object({
      houseNumber: yup.string().required(t`houseNumberReq`),
      zipcode: yup.string().required(t`zipReq`),
      state: yup.string(),
      country: yup.string().required(t`countryReq`),
      city: yup.string().required(t`cityReq`),
      label: yup.string().required(t`label`),
    })
    .noUnknown(false);

export default addressSchema;
