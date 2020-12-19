import Record from '../../../models/Record'

export default async ({ bodymen: { body } }, res, next) => {
  try {
    const { startDate, endDate, minCount, maxCount } = body
    console.log(startDate, endDate, minCount, maxCount)

    Record.aggregate([
      {
        $project: {
          _id: false,
          key: 1,
          createdAt: 1,
          totalCount: {
            $reduce: {
              input: '$counts',
              initialValue: 0,
              in: { $add: ['$$value', '$$this'] }
            }
          }
        }
      },
      {
        $match: {
          $and: [
            { createdAt: { $gte: new Date(startDate), $lte: new Date(endDate) } },
            { totalCount: { $gt: minCount, $lt: maxCount } }
          ]
        }
      }
    ])
      .exec()
      .then(data => {
        res.status(200).json({
          code: 0,
          msg: 'Success',
          records: data
        })
      })
      .catch(next)
  } catch (err) {
    return next(err)
  }
}
