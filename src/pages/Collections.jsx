import { Link } from 'react-router-dom';
import { cars } from '../data/cars.js';

export default function Collections() {
  return (
    <div className="page-content">
      <section className="page-hero page-hero-compact">
        <div>
          <div className="section-label">Collections</div>
          <h2>Explore Mercedes-Benz collections.</h2>
          <p>Browse every class and choose the luxury model that matches your style.</p>
        </div>
      </section>

      <section className="section section-highlight vehicles-grid">
        {cars.map((car) => (
          <article className="vehicle-card" key={car.id}>
            <Link to={`/collections/${car.id}`} className="vehicle-card-image" style={{ backgroundImage: `url(${car.mainImage})` }} />
            <div className="vehicle-card-body">
              <div className="vehicle-category">{car.collection}</div>
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
    </div>
  );
}
