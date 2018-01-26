var TaxModule = function(expense,taxRate){
    var tax = expense*taxRate;
    return tax;
}

var BuyModule = function(accountBlance,price,accessory){
    var num = 0;
    while(accountBlance>=(price+accessory)){
        num++;
        accountBlance = accountBlance - num*(price+accessory);
    }
    var spend = num*(price+accessory);
    return spend;
}

var AffordModule = function(accountBlance,price,accessory,taxRate){
    var cost = BuyModule(accountBlance,price,accessory);
    var taxCost = TaxModule(cost,taxRate);
    if(cost+taxCost<=accountBlance){
        console.log('买得起');
    }else{
        console.log('买不起');
    }
}

AffordModule(10000,2999,30,0.01);