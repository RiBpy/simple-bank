let Form=document.getElementById("fullForm");
let transaction=document.getElementById("transaction-area");
document.getElementById("enterBtn").addEventListener("click" ,function(){
          Form.style.display="none";
          transaction.style.display="block"
 })

 //deposit section
document.getElementById("depositBtn").addEventListener("click" ,function(){ 
let getInp=getInputNumber("addDeposit");
document.getElementById("addDeposit").value='';

getAccountBalance("currentDeposit",getInp)
getAccountBalance("currentBalance",getInp)
})


//withdraw section
document.getElementById("withdrawBtn").addEventListener("click",function(){
let getInp=getInputNumber("withdrawId");
document.getElementById("withdrawId").value='';

getAccountBalance("currentWithdraw",getInp)
getAccountBalance("currentBalance",-1*getInp)

})
function getInputNumber(id){
    let inpAmount=document.getElementById(id).value;
    let inpAmountNum=parseFloat(inpAmount)
    return inpAmountNum;
}

function getAccountBalance(id, addedNumber){
    let balanceValue=document.getElementById(id).innerText;
    let balanceNumber=parseFloat(balanceValue)
    let totalBalance=balanceNumber+addedNumber;
    document.getElementById(id).innerText=totalBalance;
}
