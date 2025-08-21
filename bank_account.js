
function bankAcount(name, amount){
    this.name = name;
    this.amount = amount;
    let bank_Balance = amount;
    
    return {
        creditMoney(credit_amount){

            bankBalance += credit_amount;

            return bankBalance;
        },

        debitMoney(debit_amount){

            if (bank_Balance < debit_amount){

                console.log("Jeb Khali");
                return bankBalance;

            }

            bankBalance = bankBalance - debit_amount;

            return bankBalance;
        },

        totalBankBalance(){
            return bankBalance;
        }

    };
}

const NewAccount = bankAcount("PopatLal",2000);

console.log("Initial Balance:", NewAccount.totalBankBalance()); 

console.log("After Crediting 500:", NewAccount.creditMoney(500)); 

console.log("After Debiting 1000:", NewAccount.debitMoney(1000)); 

console.log("Trying to Debit 2000 (should fail):", NewAccount.debitMoney(2000)); 

console.log("Final Balance:", NewAccount.totalBankBalance()); 

