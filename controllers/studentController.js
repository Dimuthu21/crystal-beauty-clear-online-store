import Student from "../models/Product.js";

export function getStudent(req, res) {

    Student.find().then(
        (data)=>{
            res.json(data)
        }
    )
}

export function saveStudent(req, res) {
console.log(req.body);
    const product=new Product({
        name:req.body.name,
        age:req.body.age,
       stream:req.body.stream,
       email:req.body.email,

        
    })

  student
    .save()
    .then((data)=>{
        res.json(data)
    })
    .catch((error)=>{
        res.json({message:error})
    })
}