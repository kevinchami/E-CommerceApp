const Product = require('../models/Products');

module.exports = {
 
    createProduct: async(req, res) => {
        const newProduct = new Product(req.body);
        try{
            await newProduct.save();
            res.status(200).json("product created succesfully");
        } catch(error) {
            res.status(500).json("failed to create a product");
        }
    },


 /* 
   createProduct: async(req, res) => {
        //console.log(req.body);
        const newProduct = new Product(req.body);
        console.log(Product)
        return res.json({ok: true})
    },
*/
    getAllProduct: async(req, res) => {
        try {
            const products = await Product.find().sort({createdAt: -1});
            res.status(200).json(products);
        } catch (error) {
            res.status(500).json("failed to get the products");
        }
    },

    getProduct:  async(req, res) => {
        try {
            const product = await Product.findById(req.params.id);
            res.status(200).json(product);
        } catch (error) {
            res.status(500).json("failed to get the product");
        }
    },

    searchProduct:  async(req, res) => {
        try {
            const product = await Product.aggregate(
                [
                    {
                      $search: {
                        index: "marketplace",
                        text: {
                          query: req.params.key,
                          path: {
                            wildcard: "*"
                          }
                        }
                      }
                    }
                  ]
            )
            res.status(200).json(product);
        } catch (error) {
            res.status(500).json("failed to search the products");
            
        }
    },
}