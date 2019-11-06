import express from 'express';
import {ticketCtrl} from '../controllers';

const router = express.Router();

router.route('/')
  .post(ticketCtrl.addOne)
  .get(ticketCtrl.listAll)

  module.exports = router;
