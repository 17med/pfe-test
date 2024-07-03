import ProductModel from "../Models/ProductModel.js";
class SearchEngineController {
  
    static async searchProduct(req, res) {
        try {
        const { search,category,price } = req.body;
        if(category==="all" && price==="all"){
            const products = await ProductModel.find({name:{$regex:search,$options:"i"}});
            res.json(products);
        }else if(category==="all"){
            const products = await ProductModel.find({name:{$regex:search,$options:"i"},price:{$lte:price}});
            res.json(products);
        }
        else if(price==="all"){
            const products = await ProductModel.find({name:{$regex:search,$options:"i"},category:category});
            res.json(products);
        }
        else{
            const products = await ProductModel.find({name:{$regex:search,$options:"i"},category:category,price:{$lte:price}});
            res.json(products);
        }
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
}
  
  
}