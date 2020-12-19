export default async ({ bodymen: { body } }, res, next) => {
  try {
    return res.json({ message: 'Hello World!' })
  } catch (err) {
    return next(err)
  }
}
