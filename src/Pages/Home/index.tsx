import { useEffect, useState } from "react"
import Layout from "../../Components/Layout"
import Card from '../../Components/Card'
import { getProducts } from "../../Services/products.service";
import { Product } from "../../Types/product";
import ProductDetail from "../../Components/ProductDetail";

function Home() {
    const [items, setItems] = useState<Product[]>([]);

    useEffect(() => {
    const loadProducts = async () => {
      try {
        const products = await getProducts();
        setItems(products);
      } catch (error) {
        console.error(error);
      } finally {
        console.log(false);
      }
    };

    loadProducts();
  }, []);

  return (
      <Layout>
        <div className="font-bold">Home</div>
         <div className="grid grid-cols-4 gap-6 p-6">
          {items.map(item => (
            <Card key={item.id} data={item} />
          ))}
        </div>
        <ProductDetail/>
      </Layout>
    )
}

export default Home
