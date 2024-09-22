const historyTab = document.getElementById("history-tab");
const assistantTab = document.getElementById("assistant-tab");

const resultSection = document.getElementById("results");
const historySection = document.getElementById("history-section");
let totalIncome = 0;
let savings = 0;
let remainingBalance = 0;

historyTab.addEventListener("click", function () {
  historyTab.classList.add(
    "bg-gradient-to-r",
    "from-blue-500",
    "to-purple-600",
    "text-white"
  );
  assistantTab.classList.remove(
    "bg-gradient-to-r",
    "from-blue-500",
    "to-purple-600",
    "text-white"
  );
  document.getElementById("expense-form").classList.add("hidden");
  historySection.classList.remove("hidden");
});
assistantTab.addEventListener("click", function () {
  assistantTab.classList.add(
    "bg-gradient-to-r",
    "from-blue-500",
    "to-purple-600",
    "text-white"
  );
  historyTab.classList.remove(
    "bg-gradient-to-r",
    "from-blue-500",
    "to-purple-600",
    "text-white"
  );
  document.getElementById("expense-form").classList.remove("hidden");
  historySection.classList.add("hidden");
});

document.getElementById("calculate").addEventListener("click", function () {
  // calculation section
  const income = getInputValueById("income");
  const software = getInputValueById("software");
  const courses = getInputValueById("courses");
  const internet = getInputValueById("internet");
  let expense = software + courses + internet;
  totalIncome = income - expense;
  if (income < expense) {
    document.getElementById("logic-error").classList.remove("hidden");
    return;
  }

  //   results section comes

  resultSection.classList.remove("hidden");

  document.getElementById("total-expenses").innerText = expense;
  document.getElementById("balance").innerText = totalIncome;

  const historyList = document.getElementById("history-list");
  const row = `
    <div
      class="bg-white p-3 rounded-md shadow-sm border-l-2 border-green-500">
              <p class="text-xs text-gray-500">
              ${new Date().toLocaleDateString()}
              </p>
              <p class="text-sm font-bold text-gray-800">Income: ৳${income}
              </p>
              <p class="text-sm font-bold text-gray-800">Expense:৳${expense}
                
              </p>
              <p class="text-sm font-bold text-gray-800">Balance:৳${totalIncome}
               
              </p>
              
            </div>
  `;
  historyList.insertAdjacentHTML("afterbegin", row);
});

// saving events and calculations

document
  .getElementById("calculate-savings")
  .addEventListener("click", function () {
    let savingsValue = getInputValueById("savings");
    savings = (totalIncome * savingsValue) / 100;

    remainingBalance = totalIncome - savings;
    document.getElementById("savings-amount").innerText = savings;
    document.getElementById("remaining-balance").innerText = remainingBalance;
  });

//   income error
document.getElementById("income").addEventListener("input", function (event) {
  if (event.target.value < 0) {
    document.getElementById("income-error").classList.remove("hidden");
    return;
  } else {
    document.getElementById("income-error").classList.add("hidden");
  }
});

// software error
document.getElementById("software").addEventListener("input", function (event) {
  if (event.target.value < 0) {
    document.getElementById("software-error").classList.remove("hidden");
    return;
  } else {
    document.getElementById("software-error").classList.add("hidden");
  }
});

// courses error
document.getElementById("courses").addEventListener("input", function (event) {
  if (event.target.value < 0) {
    document.getElementById("courses-error").classList.remove("hidden");
    return;
  } else {
    document.getElementById("courses-error").classList.add("hidden");
  }
});

// internet error
document.getElementById("internet").addEventListener("input", function (event) {
  if (event.target.value < 0) {
    document.getElementById("internet-error").classList.remove("hidden");
    return;
  } else {
    document.getElementById("internet-error").classList.add("hidden");
  }
});
