import express from 'express';
import { getProduct, saveProduct } from '../controllers/productController.js';


const productRouter=express.Router();

 productRouter.get("/",getProduct);
 
 productRouter.post("/",saveProduct);

 export default productRouter;
