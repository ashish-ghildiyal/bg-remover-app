import {Webhook} from 'svix';
import userModel from '../models/user.model';
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

        switch(type){
            case "user.created":{

                const userData = {
                    clerkId:data.id,
                    email:data.email_addresses,
                    photo:data.image_url,
                    firstName:data.first_name,
                    lastName:data.last_name,
                    
                }
                await userModel.create(userData);
                res.json({message:"user created"})

                break;
            }
             case "user.updated":{
                 const userData = {
                    email:data.email_addresses,
                    photo:data.image_url,
                    firstName:data.first_name,
                    lastName:data.last_name,
                    
                }
                await userModel.findOneAndUpdate({clerkId:data.id},userData);
                res.json({message:"user updated"})
                break;
            }
             case "user.deleted":{

                await userModel.findOneAndDelete({clerkId:data.id});
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