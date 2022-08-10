import { connectToDatabase } from '../../utils/mongodb'

export default async function handler(req, res) {
  switch (req.method) {
    case 'POST': {
      try {
        const { username, user } = req.body
        console.log(username, user)
        const { db } = await connectToDatabase()
        const findResult = await db
          .collection('users')
          .findOne({ username: username, user: user })
        if (findResult === null) {
          return res.json({
            message: 'User not found',
            success: false,
          })
        } else {
          return res.json({
            message: JSON.parse(JSON.stringify(findResult)),
            success: true,
          })
        }
      } catch (error) {
        return res.json({
          message: new Error(error).message,
          success: false,
        })
      }
    }
  }
}
