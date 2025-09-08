import {Webhook} from 'svix';
import User from '../models/user.model.js';
const clerkWebhooks = async(req,res)=>{

    try {

        // create svix instance
        const whook = new Webhook(process.env.CLERK_WEBHOOK_SECRET);
        await whook.verify(JSON.stringify(req.body),{
            "svix-id": req.headers['svix-id'],
            "svix-timestamp": req.headers['svix-timestamp'],
            "svix-signature": req.headers['svix-signature'] 
        })
        const {data, type} = req.body;
        console.log(data, type)

        switch(type){
            case "user.created": {

                const userData = {
                    clerkId:data.id,
                    email:data.email_addresses[0].email_addresses,
                    photo:data.image_url,
                    firstName:data.first_name,
                    lastName:data.last_name,
                    
                }
                await User.create(userData);
                res.json({message:"user created"})

                break;
            }
             case "user.updated": {
                 const userData = {
                    email:data.email_addresses[0].email_address,
                    photo:data.image_url,
                    firstName:data.first_name,
                    lastName:data.last_name,
                    
                }
                await User.findOneAndUpdate({clerkId:data.id},userData);
                res.json({message:"user updated"})
                break;
            }
             case "user.deleted": {

                await User.findOneAndDelete({clerkId:data.id});
                res.json({message:"user deleted"})

                break;
            }
            default:{
                break;
            }
        }
       
        
    } catch (error) {
        
    }

}

export {clerkWebhooks}