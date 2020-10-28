import { extend } from 'vee-validate'
import { required, max, min, email, numeric, alpha, alpha_spaces } from 'vee-validate/dist/rules'

extend('required', {
  ...required,
  message: '{_field_} is required',
})

extend('max', {
  ...max,
  message: '{_field_} may not be greater than {length} characters',
})

extend('min', {
  ...min,
  message: '{_field_} may not be less than {length} characters',
})

extend('email', {
  ...email,
  message: '{_field_} only accepts a valid email address',
})

extend('numeric', {
  ...numeric,
  message: '{_field_} should only contain numeric characters',
})

extend('alpha', {
  ...alpha,
  message: '{_field_} should only contain alphabetical characters',
})

extend('alpha_spaces', {
  ...alpha_spaces,
  message: '{_field_} should only contain alphabetical and space characters',
})

extend('alpha_num', {
  ...alpha_spaces,
  message: '{_field_} should only contain alphanumeric characters',
})
