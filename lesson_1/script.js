'use strict';

let money = +prompt("Ваш бюджет на месяц", "");
let time = prompt("Введите дату в формате YYYY-MM-DD");

let appData = {
    budget: money,
    timeData: time,
    expenses: {},
    optionalExpenses: {},
    income: [],
    saving: false
};

let expense1 = prompt("Введите обязательную статью расходов в этом месяце","");
let price1 = +prompt("Во сколько обойдется?", "");
let expense2 = prompt("Введите обязательную статью расходов в этом месяце","");
let price2 = +prompt("Во сколько обойдется?", "");

//console.log(typeof(price1));
appData.expenses[expense1] = price1;
appData.expenses[expense2] = price2;
console.log(appData);

let moneyPerDay = appData.budget / 30;

alert(`Ваш бюджет на день составляет ${moneyPerDay} рублей`);