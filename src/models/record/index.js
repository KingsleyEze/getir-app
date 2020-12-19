import mongoose, { Schema } from 'mongoose'

const recordSchema = new Schema({
  key: {
    type: String
  },
  createdAt: {
    type: Date
  },
  counts: {
    type: [Number]
  }
})

recordSchema.methods = {
  view () {
    const view = {
      id: this.id,
      key: this.key,
      createdAt: this.createdAt,
      counts: this.counts
    }

    return view
  }
}

const model = mongoose.model('Record', recordSchema)

export const schema = model.schema
export default model
