function getInputValueById(id) {
  const inputValue = document.getElementById(id);
  const inputValueNum = Number(inputValue.value);
  return inputValueNum;
}

function calculateExpense() {
  const income = getInputValueById("income");
  const software = getInputValueById("software");
  const courses = getInputValueById("courses");
  const internet = getInputValueById("internet");
  let expense = software + courses + internet;
  return expense;
}
