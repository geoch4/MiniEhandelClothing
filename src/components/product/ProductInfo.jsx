export const ProductInfo = ({ product }) => {
  return (
    <div className="product-info">
      <h1>{product.name}</h1>
      <p className="description">{product.description}</p>
      <p className="price">${product.price}</p>
    </div>
  );
};
