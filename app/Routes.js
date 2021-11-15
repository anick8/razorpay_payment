
var utils = require('../common/utils')
var rechargeAccount = require('./rechargeAccount');
var razorpay = require("razorpay");
var rzp = new Razorpay({ key_id: 'YOUR_KEY_ID', key_secret: 'YOUR_SECRET' })

module.exports = (app, console) => {
    
    app.post('/',async (req, res) => {  
        console.log(req.body)
        await rechargeAccount.rechargeAccount(req);
        utils.handleresultdict(res,result)
        
       }
    )
}
    app.post('/createOrder',async (req,res) => {
        const rzpOrder = await rzp.orders.create({
            amount: amount * 100, // rzp format with paise
            currency: 'INR',
            receipt: "receipt#1", //Receipt no that corresponds to this Order,
            payment_capture: true,
            notes: {
             IdentityUUID: "Pre",
             OrderUUID : ""
            } 


           //Key-value pair used to store additional information
           });

        const rzpOrderID = rzpOrder.id;
        const status = rzpOrder.status;
        const {IdentityUUID,OrderUUID,BuyableUUID} = rzpOrder.notes; // or req.body.
        
        res = await requestLibrary.recharge({'data':'','Following':''}) // write to DB

        utils.handleresultdict(res,result);
           /*
           // To create recurring subscription
           const subscriptionObject = {
            plan_id: PLAN_ID,
            total_count: 60,
            quantity: 1,
            customer_notify: 1,
            notes,
           }
           const subscription = await rzp.subscriptions.create(subscriptionObject);
            */
           
    }
};


