let express = require('express');
let bodyParser = require('body-parser');
let router = express.Router();
let cors = require('cors');
let app = express();
app.use(cors());

// all of our routes will be prefixed with /api
app.use('/api', bodyParser.json(), router);   //[use json]
app.use('/api', bodyParser.urlencoded({ extended: false }), router);

let products = [  { 'no': 1, 'id': "5635512000", 'name': "Alizz" ,'surname':"Qii" ,'Major':"CoE", 'src':'https://www.kito.co.th/app/uploads/2019/07/Kito-Dance-AH21-Sandals-Red_.jpg'},
                  { 'no': 2, 'id': "5635512036", 'name': "Sakdipong",'surname':"Jaema"  ,'Major':"CoE",'src':'https://assets.adidas.com/images/w_600,f_auto,q_auto:sensitive,fl_lossy/dc833a76e03e4c70bbb3a9cf013871ea_9366/Coast_Star__EE8900_01_standard.jpg'}
               ];
router.route('/products')
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
    product.src = req.body.src
    products.push(product);
    res.json({ message: 'products created!' })
    })
router.route('/products/:product_no')
    .get((req, res) => {
        let no = req.params.product_no
        let index = products.findIndex(product => (product.no === +no))
        res.json(products[index])                   // get a product
    })
    .put((req, res) => {                               // Update a product
        let no = req.params.product_no
        let index = products.findIndex(product => (product.no === +no))
        products[index].name = req.body.name;
        products[index].surname = req.body.surname;
        products[index].id = req.body.id;
        products[index].Major = req.body.Major;
        products[index].src = req.body.src;
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