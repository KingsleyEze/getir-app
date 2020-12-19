export default (val) => {
  return !!val && (typeof (val) === 'string' || val instanceof String)
}
