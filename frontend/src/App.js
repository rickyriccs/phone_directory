import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Banner from './components/Banner';
import Footer from './components/Footer';

function App() {
  const featuredVendors = [
    { id: 1, name: 'Vendor 1', description: 'Quality products and services', image: 'vendor1.jpg' },
    { id: 2, name: 'Vendor 2', description: 'Specialized solutions', image: 'vendor2.jpg' },
    { id: 3, name: 'Vendor 3', description: 'Innovative offerings', image: 'vendor3.jpg' },
  ];

  return (
    <div className="App">
      <Navbar />
      <Banner />
      <header className="hero-section">
        <h1>Welcome to Our Directory</h1>
        <p>Your One-Stop Solution for Quality Services</p>
      </header>

      <section className="featured-vendors">
        <h2>Featured Vendors</h2>
        <div className="vendor-grid">
          {featuredVendors.map(vendor => (
            <div key={vendor.id} className="vendor-card">
              <img src={vendor.image} alt={vendor.name} className="vendor-image" />
              <h3>{vendor.name}</h3>
              <p>{vendor.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="company-info">
        <h2>About Our Company</h2>
        <div className="info-content">
          <div className="mission">
            <h3>Our Mission</h3>
            <p>To connect businesses and customers through a comprehensive directory platform that promotes growth and success.</p>
          </div>
          <div className="values">
            <h3>Our Values</h3>
            <ul>
              <li>Quality Service</li>
              <li>Customer Satisfaction</li>
              <li>Innovation</li>
              <li>Integrity</li>
            </ul>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default App;
