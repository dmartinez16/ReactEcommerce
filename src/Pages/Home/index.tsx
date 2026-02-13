import { useShoppingCar } from "../../Hooks/useShoppingCar";
import { useLocation } from "react-router-dom";
import Layout from "../../Components/Layout"
import Card from '../../Components/Card'
import ProductDetail from "../../Components/ProductDetail";

const CATEGORY_MAP: Record<string, string> = {
  '/': '',
  '/mensclothing': "men's clothing",
  '/jewelery': 'jewelery',
  '/electronics': 'electronics',
  '/womensclothing': "women's clothing",
};

function Home() {
 
  const { items, search, setSearch } = useShoppingCar();
  const { pathname } = useLocation();

  const category = CATEGORY_MAP[pathname] ?? '';

  const filteredItems = items.filter(item => {
    const matchesSearch = item.title.toLowerCase().includes(search.toLowerCase());
    const matchesCategory = category === '' || item.category === category;
    return matchesSearch && matchesCategory;
  });

  return (
      <Layout>
        <div className="flex items-center justify-center relative w-80 mb-4">
          <h1 className="font-medium text-xl">
            {category ? category.charAt(0).toUpperCase() + category.slice(1).toLowerCase() : 'Home'}
          </h1>
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
