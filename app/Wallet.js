var pgsql = require('../lib/pgsql')
//var hash =require('../lib/hash')

exports.updateWallet = async (WalletUUID,Balance) => {
    var qarg=[WalletUUID,Balance]
    qname='update "Wallet" set "Balance"="Balance"+$2 where "WalletUUID" = $1' 
    try{
        result =await pgsql.conquery(qname,qarg)
        if (result.rowCount == 1)
        {    
            data = {'WalletUUID':WalletUUID}
            return [null,data,"Successfully updated Wallet"]
        }
        else
            return [null,null,"No Wallet found"]
    }
    catch(err)
    {
        return [err,null,"Error updating Wallet to the database :"+err.detail]
    }

};





