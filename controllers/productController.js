import Product from "../models/Product.js";

export function getProduct(req, res) {

    getProduct.find().then(
        (data)=>{
            res.json(data)
        }
    )
}

export function saveProduct(req, res) {
console.log(req.body);
    const product=new Product({
        name:req.body.name,
        price:req.body.price,
        description:req.body.description
    })

    product
    .save()
    .then((data)=>{
        res.json(data)
    })
    .catch((error)=>{
        res.json({message:error})
    })
}