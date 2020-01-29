import mongoose from 'mongoose';


const Agent = mongoose.Schema;

let agent = new Schema(
    {
        agentId : 
        {
            type: String
        },
        insCompany: 
        {
            type: String
        },

        Product: 
        {
            type: String
        },
        custName:
        {
            type: String
        },
        custEmail:
        {
            type: String
        },
        policyNumber:
        {
            type: String
        },
        premiumFrequency:
        {
            type: String
        },
        premiumAmount:
        {
            type: Number
        },
        Advances :
        {
            type: Number
        },
        asEarned:
        {
            type: Number
        },
        sevenLevel:
        {
            type: Number
        }
    }
);


export default mongoose.model('Agent', Agent);