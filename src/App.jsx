import Header from './components/Header/Header';
import ProductCard from './components/ProductCard/ProductCard';
import product1 from './assets/product1.jpg';
import product2 from './assets/product2.jpg';
import './App.css';

function App() {
  return (
    <>
      <Header />
      <main className="app">
        <div className="catalog">
          <ProductCard
            id="web-design-basics"
            title="Основы веб-дизайна"
            description="Курс по современному веб-дизайну для начинающих"
            price={50}
            rating={5}
            image={product1}
          />
          <ProductCard
            id="uiux-design-pro"
            title="UI/UX дизайн PRO"
            description="Продвинутый курс по проектированию интерфейсов"
            price={79}
            rating={4}
            image={product2}
          />
        </div>
      </main>
    </>
  );
}

export default App;
