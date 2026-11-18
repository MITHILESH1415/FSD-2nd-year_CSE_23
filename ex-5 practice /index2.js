const express = require('express');
const app = express();

app.use(express.json());
app.use(express.static(__dirname));

let products = [
    {id:1, name: "laptop",price: 50000},
    {id:2, name: "mouse",price: 800}
];

//GET
app.get('/products', (req, res) => {
    res.json(products);
});

//POST
app.post('/products', (req, res) => {
    products.push(req.body);
    res.json({message: "Product added successfully"});
});

//PUT
app.put('/products/:id', (req, res) => {
    const product = products.find(p => p.id == req.params.id);
    Obeject.assign(product, req.body);
    res.json({message: "Product updated successfully"});
});

//DELETE
app.delete('/products/:id', (req, res) => {
    products = products.filter(p => p.id != req.params.id);
    res.json({message: "Product deleted successfully"});
});

app.listen(3000, () => {
    console.log('Server is running on port 3000');
}); 