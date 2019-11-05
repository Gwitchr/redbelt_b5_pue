import express from 'express';
import * as articleCtrl from '../controllers/article';

const router = express.Router();

router.route('/')
  .post(articleCtrl.addOne)
  .get(articleCtrl.listAll)

module.exports = router;
