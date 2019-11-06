import express from 'express';
import {articleCtrl} from '../controllers';

const router = express.Router();

router.route('/')
  .post(articleCtrl.addOne)
  .get(articleCtrl.listAll)

module.exports = router;
