const router = require("express").Router();
const { getProductos,
  getProducto,
  createProducto,
  deleteProducto,
  updateProducto,
  getProductosPaginacion } = require("../Controlers/productoControler");

router.get("/", getProductos);
router.get("/paginacion",getProductosPaginacion)
router.post("/", createProducto);
router.put("/:id", updateProducto);
router.delete("/:id", deleteProducto);
router.get("/:id", getProducto);

module.exports = router;
