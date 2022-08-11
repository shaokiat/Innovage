import { connectToDatabase } from '../../utils/mongodb'

export default async function handler(req, res) {
  switch (req.method) {
    case 'GET': {
      try {
        const { db } = await connectToDatabase()
        const allUsers = await db.collection('users').find({}).toArray()
        console.log(allUsers)

        return res.json({
          message: allUsers,
          success: true,
        })
      } catch (error) {
        return res.json({
          message: new Error(error).message,
          success: false,
        })
      }
    }

    case 'POST': {
      try {
        const { username, user } = req.body
        const { db } = await connectToDatabase()
        const findResult = await db
          .collection('users')
          .findOne({ username: username, user: user })
        console.log('findresult', findResult)
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
