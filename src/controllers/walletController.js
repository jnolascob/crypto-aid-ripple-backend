const { XummSdk } = require('xumm-sdk');
const { handleError } = require('../utils/helpers/expressHelper');
const config = require('../config/config');

const Sdk = new XummSdk(config.xummApiKey, config.xummApiSecret);
let signed = false;
const address = 'rLSiqvVF5tEirCAnJbTccfqpL57L3iViCA';
const balance = 20000;

async function signin(req, res) {
  try {
    const request = {
      txjson: {
        TransactionType: 'SignIn',
      },
    };
    const signinResult = await Sdk.payload.createAndSubscribe(request, (event) => {
      console.log('=> event:', event.data);

      if (event.data.signed === true) {
        signed = true;
        console.log('Woohoo! The sign request was signed :)');
        return event.data;
      }

      if (event.data.signed === false) {
        signed = false;
        console.log('The sign request was rejected :(');
        return false;
      }
    });
    const result = signinResult.created;
    return res.json({
      qrCode: result.refs.qr_png,
    });
  } catch (error) {
    const errorMessage = handleError(error);
    return res.json(errorMessage);
  }
}

async function checkSignin(req, res) {
  try {
    return res.json({ signed, address, balance });
  } catch (error) {
    const errorMessage = handleError(error);
    return res.json(errorMessage);
  }
}

module.exports = {
  signin,
  checkSignin,
};
