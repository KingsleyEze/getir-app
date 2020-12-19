// Validates if the value is a string
export default (val) => {
  return !!val && (typeof (val) === 'string' || val instanceof String)
}
