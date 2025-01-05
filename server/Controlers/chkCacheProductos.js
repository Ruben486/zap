const chkCacheProductos = (serverCache) => {
    const productosEnCache = serverCache.has("productos")
    return productosEnCache
}
module.exports = {chkCacheProductos};
