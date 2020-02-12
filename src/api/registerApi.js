
import {Connection} from './connectionApi'

export  async function signup (data)
{
try{const db =Connection()
const res = await db.collection('user').insertOne({password :data.password ,user_name : data.user_name ,user_email :data.user_email ,location : data.location  , verified :false},{security: {authorization : "disabled"}})
console.log("Found docs",res)
return res}catch(err)
{
    console.warn(err)
}
}
export async function checkEmail(email)
{
    try{const db = Connection();
    const res = await db.collection('user').count({user_email:email})
    return res}
    catch(err)
    {
        console.warn(err)
    }
    return
}
