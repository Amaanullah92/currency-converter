import inquirer from "inquirer";
const currency = {
    USD: 1, //Base currency
    EUR: 0.91,
    GBP: 0.76,
    INR: 74.57,
    PKR: 280
};
let user_answer = await inquirer.prompt([{
        name: "from",
        message: "Select the Currency To convert from:",
        type: "list",
        choices: ['USD', 'EUR', 'GBP', 'INR', 'PKR']
    },
    {
        name: "To",
        message: "Enter The Currency to convert To:",
        type: "list",
        choices: ['USD', 'EUR', 'GBP', 'INR', 'PKR']
    },
    {
        name: "amount",
        type: "number",
        message: "Enter Your Amount:"
    }
]);
let fromAmount = currency[user_answer.from];
let toAmount = currency[user_answer.To];
let amount = user_answer.amount;
let baseAmount = amount / fromAmount;
let convertedAmount = baseAmount * toAmount;
console.log(`Converted Amount:  ${convertedAmount.toFixed(2)} ${user_answer.To}`);
