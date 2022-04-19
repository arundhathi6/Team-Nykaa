const express = require('express');
const router = express.Router();
const Product = require('../models/productmodel');


// router.get('/', async (req, res) => {
//   const page = +req.query.page || 1;
//   // console.log('page:', page)
//   const size = +req.query.limit || 10;
//   // console.log('size:', size)
//   const offset = (page - 1) * size;
//   // console.log('offset:', offset)
//   const products = await Product.find().skip(offset).limit(size).lean().exec();
//   const totalPages = Math.ceil((await Product.find().countDocuments().lean().exec())/size);
     
//   // console.log('totalPages:', totalPages)
//   return res.status(200).send({ products: products, totalPages: totalPages });
// });

router.post('/',async(req, res)=>{
    try {
      const products = await Product.create(req.body);
        return res.status(201).send(products);
    }catch(err) {
        return res.status(500).send({message:err.message});
    }
})

router.get('/:id', async (req, res) => {
  try {
    const products = await Product.findById(req.params.id).lean().exec();
    res.status(200).send(products);
  } catch (e) {
    res.send(e.message);
  }
});

router.get('/', async (req, res) => {
    try {
      const products = await Product.find().lean().exec();
      res.status(200).send(products);
    } catch (e) {
      res.send(e.message);
    }
  });

  router.delete('/:id', async (req, res) => {
    try {
      const products = await Product.findById(req.params.id);
      res.status(200).send(products);
    } catch (e) {
      res.send(e.message);
    }
  });
module.exports = router;