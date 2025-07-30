import * as React from "react";
import { graphql } from "gatsby";
import "../styles/global.css";
import ItemProduct from "../components/ItemProduct";
import Layout from "../components/Layout";
import Search from "../components/Search";

const IndexPage = ({ data }) => {
  const [filterProducts, setFilterProducts] = React.useState(
    data.allProductsJson.nodes
  );
  const [clickedProduct, setClickedProduct] = React.useState();
  const [showModal, setShowModal] = React.useState(false);
  const [search, setSearch] = React.useState("");

  const products = data.allProductsJson.nodes;
  const handlerChange = (value) => {
    setSearch(value);
    const filteredItems = products.filter((item) =>
      item.name.toLowerCase().includes(value.toLowerCase())
    );
    setFilterProducts(filteredItems);
  };
  console.log(filterProducts);

  const handlerClick = (item) => {
    setClickedProduct(item);
    setShowModal(true);
    console.log(clickedProduct);
  };
  React.useEffect(() => {}, [clickedProduct]);
  return (
    <Layout>
      <div>
        <Search
          className={showModal ? " blur" : " no_blur"}
          onChange={handlerChange}
          search={search}
        />
        <div className="container mx-auto p-4">
          <div
            className={[
              "grid  sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-10" +
                (showModal ? " blur" : " no_blur"),
            ]}
          >
            {filterProducts?.length > 0 ? (
              filterProducts.map((item, index) => {
                return (
                  <ItemProduct
                    click={(item) => {
                      handlerClick(item);
                    }}
                    key={item.id}
                    item={item}
                    title={item.name}
                    image={item.image}
                    price={item.price}
                    index={index}
                  />
                );
              })
            ) : (
              <h2 className="text-white font-bold text-center text-4xl absolute left-[50%] top-[50%] translate-[-50%]">
                De esos no tenenos 😅
              </h2>
            )}
          </div>
          <div
            className={
              showModal ? "modal showModal_true" : "modal showModal_false"
            }
          >
            <div className="bg-white max-w-[700px] max-h-[80vh] relative top-[50%] left-[50%] translate-[-50%] rounded-lg">
              <h2 className="text-center font-bold text-2xl p-4">
                {clickedProduct?.name}
              </h2>
              <img
                className="max-h-[40vh] float-none m-[auto]"
                src={clickedProduct?.image}
                alt=""
              />
              <p className="p-4 max-w-[400px] float-none mt-[20px] m-[auto]">
                {clickedProduct?.description}
              </p>
              <p className="p-5 font-bold text-3xl max-w-[400px] float-none text-center m-[auto]">
                Q{clickedProduct?.price}
              </p>
              <button
                className="absolute top-[10px] right-[10px] cursor-pointer"
                type="button"
                onClick={() => setShowModal(false)}
              >
                Cerrar
              </button>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export const query = graphql`
  {
    allProductsJson(limit: 25) {
      totalCount
      nodes {
        id
        name
        price
        image
        description
      }
    }
  }
`;

export default IndexPage;
