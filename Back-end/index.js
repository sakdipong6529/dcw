let express = require('express');
let bodyParser = require('body-parser');
let router = express.Router();
let cors = require('cors');
let app = express();
app.use(cors());

// all of our routes will be prefixed with /api
app.use('/api', bodyParser.json(), router);   //[use json]
app.use('/api', bodyParser.urlencoded({ extended: false }), router);

let products = [  { 'no': 1,'name': "Kito" ,'price':159, 'src':'https://www.kito.co.th/app/uploads/2019/07/Kito-Dance-AH21-Sandals-Red_.jpg'},
                  { 'no': 2,'name': "Adidas",'price':1599,'src':'https://assets.adidas.com/images/w_600,f_auto,q_auto:sensitive,fl_lossy/dc833a76e03e4c70bbb3a9cf013871ea_9366/Coast_Star__EE8900_01_standard.jpg'},
                  { 'no': 3,'name': "Lacoste",'price':2359,'src':'https://www.lacoste.co.th/pub/media/catalog/product/cache/c687aa7517cf01e65c009f6943c2b1e9/3/6/36cam0012_147_01.jpg'},
                  { 'no': 4,'name': "TKS300",'price':1239,'src':'data:image/jpeg;base64,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'},
                  { 'no': 5,'name': "ASICS",'price':6500,'src':'https://www.trihub.store/wp-content/uploads/2019/12/Slide1-15.jpg'}
                ];
router.route('/products')
    // get all products
    .get((req, res) => res.json(products))
    // insert a new product
    .post((req, res) => {
    var product = {};
    product.no = products.length > 0 ? products[products.length - 1].no + 1 : 0;
    product.name = req.body.name
    product.price = req.body.price
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
        products[index].price = req.body.price;
        products[index].src = req.body.src;
        res.json({ message: 'product updated!' + req.params.product_no });
    })
    .delete((req, res) => {                   // Delete a product
        let no = req.params.product_no
        let index = products.findIndex(product => product.no === +no)
        products.splice(index, 1)
        res.json({ message: 'product deleted: ' + req.params.product_no });
    })


app.use("*", (req, res) => res.status(404).send('404 Not found'));
app.listen(process.env.PORT || 80, () => console.log("Server is running"));