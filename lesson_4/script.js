"use strict";

let money;
let time;

function start() {
    money = +prompt("Ваш бюджет на месяц", "");
    time = prompt("Введите дату в формате YYYY-MM-DD");

    while(isNaN(money) || money == "" || money == null) {
        money = +prompt("Ваш бюджет на месяц", "");
    }
};
start();

let appData = {
    budget: money,
    timeData: time,
    expenses: {},
    optionalExpenses: {},
    income: [],
    savings: true,
    chooseExpenses: function() {
        for (let i = 0; i < 2; i++) {
            let a = prompt("Введите обязательную статью расходов в этом месяце","");
            let b = +prompt("Во сколько обойдется?", "");
        
            if ((typeof(a)) === "string" && (typeof(a)) != null && (typeof(b)) != null && a != "" && b != "" && a.length < 50) {
                
                console.log("done");
                
                appData.expenses[a] = b;
            } else {
                alert("Некорректные данные");
                i--;
            }
        }
    },
    detectDayBudget: function() {
        appData.moneyPerDay = (appData.budget / 30).toFixed();
        alert(`Ваш бюджет на день составляет ${appData.moneyPerDay} рублей`);
    },
    detectLevel: function() {
        if (appData.moneyPerDay < 100) {
            console.log("Минимальный уровень достатка");
        } else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
            console.log("Средний уровень достатка");
        } else if (appData.moneyPerDay > 2000) {
            console.log("Высокий уровень достатка");
        } else {
            console.log("Некорректные данные!");
        }
    },
    checkSavings: function() {
        if (appData.savings == true) {
            let save = +prompt("Какова сумма накоплений?", ""),
                percent = +prompt("Под какой процент?", "");
            appData.monthIncome = save/100/12*percent;
            alert("Доход в месяц с вашего депозита: " +appData.monthIncome);
        }
    },
    chooseOptExpenses: function() {
        for (i = 0; i < 3; i++) {
            let a = prompt("Статья необязательных расходов?", "");
                b = prompt("Во сколько это обойдется?", "");
             if ((typeof(a)) === "string" && (typeof(a)) != null && (typeof(b)) != null && a != "" && b != "" && a.length < 50) {
                
                console.log("done");
                
                appData.optionalExpenses[a] = b;
            } else {
                alert("Некорректные данные");
                i--;
            }
        }
    },
    chooseIncome: function() {
        let items = prompt("что принесет дополнительный доход (Перечислите через запятую)", "");
        if (typeof(items) != "string" || items == "" || items == null) {
            console.log("Некорректные данные! Повторите ввод!");
        } else {
            appData.income = items.split(", ");
            appData.income.push(prompt("Может что-то еще?", ""));
            appData.income.sort();
        }
        appData.income.forEach(function(itemmassive, i) {
            console.log("Способы доп. заработка: " + (i+1) + " - " + itemmassive);
        }); 
    }
};

