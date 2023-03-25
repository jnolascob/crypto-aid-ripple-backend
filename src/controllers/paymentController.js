const { XummSdk } = require('xumm-sdk');
const { handleError } = require('../utils/helpers/expressHelper');
const config = require('../config/config');

const Sdk = new XummSdk(config.xummApiKey, config.xummApiSecret);

let completed = false;
let txid = '';

/**
 * Make donation, consider 1000000 = 1 XRP
 *
 * @param {amount} donation amount
 * @param {*} res
 * @returns result
 */
async function payment(req, res) {
  try {
    const { amount } = req.body;
    const convertedAmount = (amount * 1000000).toString();
    const request = {
      TransactionType: 'Payment',
      Destination: 'rEuJHQnTHq2YGPXUtHBweApRR12ocZaNLN',
      Amount: convertedAmount,
      Memos: [
        {
          Memo: {
            MemoData: '56616d6f7320706f72206d6173',
          },
        },
      ],
    };
    const payload = await Sdk.payload.createAndSubscribe(request, (event) => {
      console.log('New payload event:', event.data);

      if (event.data.signed === true) {
        console.log('Woohoo! The sign request was signed :)');
        completed = true;
        txid = event.data.txid;
        return event.data;
      }

      if (event.data.signed === false) {
        console.log('The sign request was rejected :(');
        completed = false;
        return false;
      }
    });
    const result = payload.created;
    console.log('=> payload:', result);
    return res.json({
      qrCode: result.refs.qr_png,
    });
  } catch (error) {
    const errorMessage = handleError(error);
    return res.json(errorMessage);
  }
}

/**
 * Check payment status
 * @param {*} req
 * @param {*} res
 * @returns
 */
async function checkPayment(req, res) {
  try {
    return res.json({ completed, txid });
  } catch (error) {
    const errorMessage = handleError(error);
    return res.json(errorMessage);
  }
}

module.exports = {
  payment,
  checkPayment,
};
