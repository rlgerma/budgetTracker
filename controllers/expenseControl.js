const User = require("../models/User");
const ExpenseTransaction = require("../models/ExpenseTransaction");

let addExpense = async (req, res) => {
  try {
    let newTransaction = new ExpenseTransaction(req.body);
    let user = await User.findById(req.auth.id);
    newTransaction.user = user;
    let category = user.expense_categories.find(
      category => category.name === req.body.category.name.trim()
    );

    if (!category) {
      user.expense_categories.push(req.body.category);
      await user.save();
      category = user.expense_categories.find(
        category => category.name === req.body.category.name.trim()
      );
    }

    newTransaction.category = category;
    await newTransaction.save();
    return res.json(newTransaction);
  } catch (e) {
    console.log(e);
    return res.status(400).json({ error: e });
  }
};

getExpense = async (req, res) => {
  try {
    if (req.params.expenseId) {
      let expense = await ExpenseTransaction.findById(
        req.params.expenseId
      ).populate("user", "id");
      let hasAuthorization = expense && expense.user.id == req.auth.id;
      if (!hasAuthorization) {
        return res.status(401).json({
          error:
            "Could not find the transaction or you don't have the permission"
        });
      } else {
        return res.json(expense);
      }
    } else {
      let expenses = await ExpenseTransaction.find({
        user: await User.findById(req.auth.id)
      });

      return res.json(expenses);
    }
  } catch (e) {
    console.log(e);
    return res.status(400).json({ error: e });
  }
};

module.exports = {
  addExpense,
  getExpense
};
