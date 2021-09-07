// Here when webpack does not find product in node module it will try to check in Module federation instance in webpack config,
// It will match the key  in remote ->'products' and try to fetch from there.
import "products/ProductsIndex";
import "cart/CartShow";

console.log("Container");
