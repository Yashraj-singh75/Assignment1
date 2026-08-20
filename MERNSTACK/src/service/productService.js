const productModel = require("../model/productModel"); 

const createProductService = async ({  
   name,
   SKU, 
   description, 
   price, 
   category
 }) => {   
 let Product = await productModel.findOne({ SKU });

  if (Product) 
  {
    const error = new Error("Product already exists");
    error.status = 400;
    throw error;
  } 

  const product = await productModel.create({
      name ,
      SKU ,
      description ,
      price ,
      category
    });   

  return product;
};

const getAllProductService = async ()  => 
{ 
  let allProducts = await productModel.find();  

  if (allProducts.length === 0) 
  { 
    const error = new Error("No products found");
    error.status = 404;
    throw error;
  }
  return allProducts;
}; 

const getProductByIdService = async (id)  => 
{ 
  let product = await productModel.findById(id);  
  
  if (!product)
  { 
    const error = new Error("Product not found");
    error.status = 404;
    throw error;
  }
  
  return product;
}; 

const updateProductService = async (id, body)  => 
{  
  let product = await productModel.findByIdAndUpdate(id, body, { new: true ,
    runValidators: true
  }); 
  
 if (!product) 
  { 
    const error = new Error("Product not found");
    error.status = 404;
    throw error;
  }
  return product;
}; 

const deleteProductService = async (id)  => 
{ 
  let product = await productModel.findByIdAndDelete(id);  
  
  if (!product) 
  { 
    const error = new Error("Product not found");
    error.status = 404;
    throw error;
  }
  return product;
};  

module.exports = { 
    createProductService,
    getAllProductService,
    getProductByIdService,
    updateProductService,
    deleteProductService,
}; 