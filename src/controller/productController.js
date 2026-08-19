const { 
    createProductService,
    getAllProductService,
    getProductByIdService,
    updateProductService,
    deleteProductService,
} = require("../service/productService");

const createProduct =  async (req, res) => 
{  

  const { name, SKU, description, price, category } = req.body;
  if (!name || !SKU || !description || !price ||!category) 
  {
    return res.status(400).json({
    message:"All fields are Required"
    });
  }
  try 
  {
    const user = await createProductService
    ({
      name,
      SKU, 
      description, 
      price, 
      category
    });
    return res.status(201).json({ message: "Product successfully registered", user });
  }
  catch(err)
  {
    return res.status(err.status || 500).json({
        message: err.message
    });
  }
};  

const getAllProduct =  async (req, res) =>     
{
  try 
  {
    const allProduct = await getAllProductService(); 
    return res.status(200).json({ allProduct });
  }
  catch(err)
  { 
    return res.status(err.status || 500).json({
        message: err.message
    });
  }
};   

const getProductById =  async (req, res) => 
{   

    let id = req.params.id; 
  try 
  {
    const product = await getProductByIdService(id); 
    return res.status(200).json({ product });
  }
  catch(err)
  { 
    return res.status(err.status || 500).json({
        message: err.message
    });
  }
};   

const updateProduct =  async (req, res) =>
{ 
  let id = req.params.id;   
  try 
  {
    const product = await updateProductService(id, req.body); 
    return res.status(200).json({
    message: "Product updated successfully",
    product
    });
  }
  catch(err)
  { 
    return res.status(201).json({ message: "cannot update", product });
  }
};   

const deleteProduct =  async (req, res) => 
{   
  let id = req.params.id;   
  try 
  {
    const product = await deleteProductService(id, req.body); 
    return res.status(201).json({ message: "Product deleted successfully ", product });
  }
  catch(err)
  { 
    return res.status(201).json({ message: "cannot delete", product });
  }
};   


module.exports = { 
  createProduct,
  getAllProduct,
  getProductById,
  updateProduct,
  deleteProduct,
}; 