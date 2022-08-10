import { connectToDatabase } from '../../utils/mongodb'

export default async function handler(req, res) {
  switch (req.method) {
    case 'POST': {
      try {
        const { db } = await connectToDatabase()
        const userAdded = req.body
        await db.collection('users').insertOne(userAdded)

        return res.json({
          message: userAdded,
          success: true,
        })
      } catch (error) {
        return res.json({
          message: new Error(error).message,
          success: false,
        })
      }
    }
  }
}
