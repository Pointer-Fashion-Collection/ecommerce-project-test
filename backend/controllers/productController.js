const fs = require('fs');
const DATA_FILE = './backend/data.json';

function readData() {
    return JSON.parse(fs.readFileSync(DATA_FILE));
}

function writeData(data) {
    fs.writeFileSync(DATA_FILE, JSON.stringify(data, null, 2));
}

exports.getAll = (req, res) => {
    res.json(readData().products);
};

exports.getById = (req, res) => {
    const product = readData().products.find(p => p.id == req.params.id);
    product ? res.json(product) : res.status(404).send('Product not found');
};

exports.create = (req, res) => {
    const data = readData();
    const newProduct = req.body;
    newProduct.id = Date.now();
    data.products.push(newProduct);
    writeData(data);
    res.status(201).json(newProduct);
};

exports.update = (req, res) => {
    const data = readData();
    const index = data.products.findIndex(p => p.id == req.params.id);
    if (index !== -1) {
        data.products[index] = {...data.products[index], ...req.body};
        writeData(data);
        res.json(data.products[index]);
    } else {
        res.status(404).send('Product not found');
    }
};

exports.remove = (req, res) => {
    let data = readData();
    data.products = data.products.filter(p => p.id != req.params.id);
    writeData(data);
    res.status(204).send();
};