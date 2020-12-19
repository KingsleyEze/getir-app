import validString from '../stringValidator'

// Validates the value is an actual date in the format - YYYY-MM-DD
export default (val, param) => ({
  valid: !!val && validString(val) && /\d{4}-\d{2}-\d{2}/.test(val) && !isNaN(new Date(val)),
  message: `${param.name} must be in the format "YYYY-MM-DD"`
})
