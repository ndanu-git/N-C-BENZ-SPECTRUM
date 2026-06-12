import { useState } from 'react';
import { cars } from '../data/cars.js';
import { Link } from 'react-router-dom';

const filters = [
  { id: 'all', label: 'All Cars' },
  { id: 'new', label: 'New Cars' },
  { id: 'demo', label: 'Demo Cars' },
  { id: 'used', label: 'Used Cars' }
];

export default function Stock() {
  const [filter, setFilter] = useState('all');
  const visibleCars = cars.filter((car) => filter === 'all' || car.type === filter);

  return (
    <div className="page-content">
      <section className="page-hero page-hero-compact">
        <div>
          <div className="section-label">Stock</div>
          <h2>Find the right Benz listing.</h2>
          <p>Filter stock by new, demo and used collections for clear availability.</p>
        </div>
        <div className="stock-filter">
          <label>
            View stock
            <select value={filter} onChange={(event) => setFilter(event.target.value)}>
              {filters.map((option) => (
                <option key={option.id} value={option.id}>{option.label}</option>
              ))}
            </select>
          </label>
        </div>
      </section>

      <section className="section section-highlight vehicles-grid">
        {visibleCars.map((car) => (
          <article className="vehicle-card" key={car.id}>
            <div className="vehicle-card-image" style={{ backgroundImage: `url(${car.mainImage})` }} />
            <div className="vehicle-card-body">
              <div className="vehicle-category">{car.status}</div>
              <h3>{car.name}</h3>
              <p>{car.overview}</p>
              <div className="vehicle-card-meta">
                <span>{car.year}</span>
                <span>{car.price}</span>
              </div>
              <Link to={`/collections/${car.id}`} className="btn btn-secondary btn-sm">View details</Link>
            </div>
          </article>
        ))}
      </section>

      <div className="page-footer-actions">
        <Link to="/" className="btn btn-primary">Home</Link>
      </div>
    </div>
  );
}
