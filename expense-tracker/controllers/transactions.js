const Transaction = require('../models/Transaction');

// @description Get all transactions
// @route GET /api/v1/transactions
exports.getTransactions = async (req, res, next) => {
    try {
      const transactions = await Transaction.find();
      
      return res.status(200).json({
          success: true,
          count: transactions.length,
          data: transactions
      });
    } catch (error) {
       return res.status(500).json({
           success: false,
           error: 'Server Error'
       });
    }
}

// @description     Add transaction
// @route           POST /api/v1/transactions
exports.addTransaction = async (req, res, next) => {
    try {
        const { text, amount } = req.body;

        const transaction = await Transaction.create(req.body);

        return res.status(201).json({
          success: true,
          data: transaction,
        });
    } catch (error) {
        console.log(err);
        
    }
    
}

// @description     Delete transaction
// @route           DELETE /api/v1/transactions/:id
exports.deleteTransaction = async (req, res, next) => {
    res.send('DELETE transactions');
}