let express = require('express');
let bodyParser = require('body-parser');
let router = express.Router();
let cors = require('cors');
let app = express();
app.use(cors());

// all of our routes will be prefixed with /api
app.use('/api', bodyParser.json(), router);   //[use json]
app.use('/api', bodyParser.urlencoded({ extended: false }), router);

let products = [  { 'no': 1, 'id': "5635512000", 'name': "Alizz" ,'surname':"Qii" ,'Major':"CoE", 'GPA':3.32},
                  { 'no': 2, 'id': "5635512036", 'name': "Sakdipong",'surname':"Jaema"  ,'Major':"CoE",'GPA':2.50}
               ];
router.route('/home')
    // get all products
    .get((req, res) => res.json(products))
    // insert a new product
    .post((req, res) => {
    var product = {};
    product.no = products.length > 0 ? products[products.length - 1].no + 1 : 0;
    product.name = req.body.name
    product.surname = req.body.surname
    product.id = req.body.id
    product.Major = req.body.Major
    product.GPA = req.body.GPA
    products.push(product);
    res.json({ message: 'products created!' })
    })
router.route('/products/:product_no')
    .get((req, res) => {
        let no = req.params.product_no
        let index = products.findIndex(product => (product.no === +no))
        res.json(products[index])                   // get a product
    })
    .put((req, res) => {                               // Update a bear
        let no = req.params.product_no
        let index = products.findIndex(product => (product.no === +no))
        products[index].name = req.body.name;
        products[index].surname = req.body.surname;
        products[index].id = req.body.id;
        products[index].Major = req.body.Major;
        products[index].GPA = req.body.GPA;
        res.json({ message: 'product updated!' + req.params.product_no });
    })
    .delete((req, res) => {                   // Delete a bear
        let no = req.params.product_no
        let index = products.findIndex(product => product.no === +no)
        products.splice(index, 1)
        res.json({ message: 'product deleted: ' + req.params.product_no });
    })


app.use("*", (req, res) => res.status(404).send('404 Not found'));
app.listen(80, () => console.log("Server is running"));