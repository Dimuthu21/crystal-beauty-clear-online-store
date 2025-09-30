import Product from "../models/Product.js";

export function getProduct(req, res) {
  Product.find()
    .then((data) => {
      res.json(data);
    })
    .catch((error) => {
      res.json({ message: error });
    });
}

export function saveProduct(req, res) {
  if (req.user == null) {
    res.status(403).json({
      message: "Unauthorized Access",
    });
    return;
  }

  if (req.user.role != "admin") {
    res.status(403).json({
      message: "Only Admins are allowed to add products",
    });
    return;
  }

  console.log(req.body);
  const product = new Product({
    name: req.body.name,
    price: req.body.price,
    description: req.body.description,
  });

  product
    .save()
    .then((data) => {
      res.json(data);
    })
    .catch((error) => {
      res.json({ message: error });
    });
}
