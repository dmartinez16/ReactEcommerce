import { useShoppingCar } from "../../Hooks/useShoppingCar";
import Layout from "../../Components/Layout"
import Card from '../../Components/Card'
import ProductDetail from "../../Components/ProductDetail";

function Home() {
 
  const { items, search, setSearch } = useShoppingCar();
  const filteredItems = items.filter(item => item.title.toLowerCase().includes(search.toLowerCase()));

  return (
      <Layout>
        <div className="flex items-center justify-center relative w-80 mb-4">
          <h1 className="font-medium text-xl">Home</h1>
        </div>

        <input 
          type="text"
          placeholder="Busca un producto"
          className="rounded-lg border border-black w-80 p-4 mb-4 focus:outline-none"
          value={search}
          onChange={(event) => setSearch(event.target.value)} 
        />

          <div className="grid grid-cols-4 gap-6 p-6">
            {filteredItems.map(item => (
              <Card key={item.id} data={item} />
            ))}
          </div>
          
        <ProductDetail/>
      </Layout>
    )
}

export default Home
