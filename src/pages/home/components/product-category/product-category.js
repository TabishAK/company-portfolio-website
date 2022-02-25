import "./product-category.scss";
import Button from "../../../../components/button/button";
import zigzag from "../../../../images/zigzag.png";

const ProductCategory = () => {
  return (
    <div className="product-categories">
      <h1>Products Category</h1>
      <img className="zigzag" src={zigzag} alt="" />

      <div className="container">
        <div className="row">
          <div className="col-xl-4 col-lg-4 col-md-4 col-sm-6 ">
            <div className="product-1">
              <h3>Jeans</h3>
            </div>
          </div>
          <div className="col-xl-4 col-lg-4 col-md-4 col-sm-6 ">
            <div className="product-2">
              <h3>Denim Fabrics</h3>
            </div>
          </div>
          <div className="col-xl-4 col-lg-4 col-md-4 col-sm-6 ">
            <div className="product-3">
              <h3>Home Textiles</h3>
            </div>
          </div>
          <div className="col-xl-4 col-lg-4 col-md-4 col-sm-6 ">
            <div className="product-4">
              <h3>Printed Fabrics</h3>
            </div>
          </div>
          <div className="col-xl-4 col-lg-4 col-md-4 col-sm-6 ">
            <div className="product-5">
              <h3>Shirting Fabrics</h3>
            </div>
          </div>
          <div className="col-xl-4 col-lg-4 col-md-4 col-sm-6 ">
            <div className="product-6">
              <h3>Yarn</h3>
            </div>
          </div>
        </div>

        <Button style={{ marginTop: "3rem" }} label="Download PDF" />
      </div>
    </div>
  );
};

export default ProductCategory;
