import { useEffect, useState } from "react"
import Layout from "../../Components/Layout"
import Card from '../../Components/Card'
import { getProducts } from "../../Services/products.service";
import { Product } from "../../Types/product";

function Home() {
    const [items, setItems] = useState<Product[]>([]);

    useEffect(() => {
    const loadProducts = async () => {
      try {
        const products = await getProducts();
        console.log(products)
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
        Home
         <div className="grid grid-cols-4 gap-6 p-6">
          {items.map(item => (
            <Card key={item.id} data={item} />
          ))}
        </div>
      </Layout>
    )
}

export default Home
