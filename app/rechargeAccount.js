var razorpay = require("razorpay");
var x =0
const { updateWallet } = require("./Wallet");
const crypto = require('crypto');
exports.rechargeAccount = async(req) => {
    x+=1
    str=JSON.stringify(req.body)
    signature = req.headers["x-razorpay-signature"]
    const mySecret = "abc"
    if(razorpay.validateWebhookSignature(str, signature, mySecret))
    {
        if(req.body.event == 'payment.captured')
        {
            WalletUUID = '94afadeb2bdfc9bb688ed78f043c2738cf14ac147a4a551dc335314a6df13f68'; 
            Balance = (req.body.payload.payment.entity.amount/100.0)
            result = await updateWallet(WalletUUID,Balance)
            //console.log(result)
        }
    }
    console.log(x)
}
