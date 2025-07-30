import * as React from "react";
import { graphql } from "gatsby";
// import { getImage } from "gatsby-plugin-image";
import "../styles/global.css";
import ItemProduct from "../components/ItemProduct";
import Layout from "../components/Layout";

const IndexPage = ({ data }) => {
  const products = data.allProductsJson.nodes;
  return (
    <Layout>
      <div className="container mx-auto p-4">
        <h1 className="text-3xl font-bold text-center mb-8">Our Products</h1>
        <div className="grid  sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {products.map((item, index) => {
            return (
              <ItemProduct
                key={item.id}
                title={item.name}
                image={item.image}
                price={item.price}
                index={index}
              />
            );
          })}
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
      }
    }
  }
`;

export default IndexPage;
