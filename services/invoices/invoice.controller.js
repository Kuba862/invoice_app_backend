const Invoice = require('./invoice.model');

const addInvoice = async (app) => {
  app.post('/api/invoice/add', async (req, res) => {
    try {
      console.log(req.body.params)
      // const {
      //   invoiceNumber,
      //   invoiceDate,
      //   invoiceSellDate,
      //   invoiceSellPlace,
      //   carMileage,
      // } = req.body.params;
      // const invoice = new Invoice({
      //   invoiceNumber,
      //   invoiceDate,
      //   invoiceSellDate,
      //   invoiceSellPlace,
      //   carMileage,
      // });

      // await invoice.save();

      // res.status(201).send({ saved: true, invoice });
    } catch (error) {
      console.log(error);
      res.status(500).send({ saved: false });
    }
  });
};
module.exports = addInvoice;
