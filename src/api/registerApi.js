
import {Connection} from './connectionApi'

export  async function signup (data)
{
const db =Connection()
const res = await db.collection('user').insertOne({password :data.password ,user_name : data.user_name ,user_email :data.user_email ,location : data.location  , verified :false})
console.log("Found docs",res)
return res
}
export async function checkEmail(email)
{
    const db = Connection();
    const res = await db.collection('user').count({user_email:email})
    return res
}
