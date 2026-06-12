import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { cars } from '../data/cars.js';

export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const sliderImages = [cars[0].heroImage, cars[1].heroImage, cars[3].heroImage, cars[5].heroImage, cars[7].heroImage];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % sliderImages.length);
    }, 2000);
    return () => clearInterval(interval);
  }, [sliderImages.length]);

  const uniqueCollections = Array.from(new Set(cars.map((car) => car.collection)));
  const carsByCollection = {};
  uniqueCollections.forEach((collection) => {
    carsByCollection[collection] = cars.find((car) => car.collection === collection);
  });

  return (
    <div style={{ minHeight: '100vh' }}>
      {/* Hero Section with Auto Slideshow */}
      <section style={{
        position: 'relative',
        height: '60vh',
        backgroundImage: `url(${sliderImages[currentSlide]})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        transition: 'background-image 0.8s ease-in-out',
        overflow: 'hidden'
      }}>
        <div style={{
          position: 'absolute',
          inset: 0,
          background: 'linear-gradient(135deg, rgba(10, 15, 31, 0.8) 0%, rgba(124, 58, 237, 0.2) 100%)'
        }} />
        <div style={{
          position: 'relative',
          zIndex: 2,
          textAlign: 'center',
          color: '#ffffff',
          maxWidth: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        }}>
          <h1 style={{ fontSize: '3.5rem', fontWeight: 'bold', margin: 0, whiteSpace: 'nowrap', textShadow: '0 0 30px rgba(0, 245, 212, 0.6)' }}>Pure color. Pure luxury.</h1>
        </div>
        {/* Slide Indicators */}
        <div style={{
          position: 'absolute',
          bottom: '2rem',
          left: '50%',
          transform: 'translateX(-50%)',
          display: 'flex',
          gap: '0.5rem',
          zIndex: 3
        }}>
          {sliderImages.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              style={{
                width: '12px',
                height: '12px',
                borderRadius: '50%',
                border: 'none',
                background: currentSlide === index ? '#00F5D4' : 'rgba(255, 255, 255, 0.1)',
                boxShadow: currentSlide === index ? '0 0 15px rgba(0, 245, 212, 0.8)' : 'none',
                cursor: 'pointer',
                transition: 'background 0.3s'
              }}
            />
          ))}
        </div>
      </section>

      {/* Featured Collections */}
      <section style={{ padding: '4rem 2rem', background: 'linear-gradient(135deg, rgba(10, 15, 31, 0.9) 0%, rgba(124, 58, 237, 0.15) 100%)' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <h2 style={{ textAlign: 'center', fontSize: '2.5rem', marginBottom: '3rem' }}>Featured Mercedes-Benz Classes</h2>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '2rem'
          }}>
            {uniqueCollections.map((collection) => {
              const car = carsByCollection[collection];
              return (
                <Link key={collection} to={`/vehicles/${car.id}`} style={{ textDecoration: 'none', color: 'inherit' }}>
                  <div style={{
                    background: 'rgba(124, 58, 237, 0.15)',
                    borderRadius: '12px',
                    overflow: 'hidden',
                    transition: 'transform 0.3s, box-shadow 0.3s',
                    cursor: 'pointer',
                    border: '1px solid rgba(0, 245, 212, 0.3)',
                    backdropFilter: 'blur(10px)'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'translateY(-8px)';
                    e.currentTarget.style.boxShadow = '0 0 40px rgba(0, 245, 212, 0.4), 0 0 20px rgba(124, 58, 237, 0.3)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'translateY(0)';
                    e.currentTarget.style.boxShadow = '0 0 20px rgba(124, 58, 237, 0.2)';
                  }}>
                    <div style={{
                      height: '250px',
                      backgroundImage: `url(${car.exterior[0]})`,
                      backgroundSize: 'cover',
                      backgroundPosition: 'center'
                    }} />
                    <div style={{ padding: '1.5rem' }}>
                      <h3 style={{ margin: '0 0 0.5rem 0', fontSize: '1.3rem' }}>{collection}</h3>
                      <p style={{ margin: '0.5rem 0', color: '#A0B0D8', fontSize: '0.9rem' }}>{car.name}</p>
                      <p style={{ margin: '0.5rem 0', color: '#00F5D4', fontSize: '1rem', fontWeight: 'bold', textShadow: '0 0 10px rgba(0, 245, 212, 0.4)' }}>{car.price}</p>
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section style={{ padding: '4rem 2rem', textAlign: 'center' }}>
        <div style={{ maxWidth: '800px', margin: '0 auto' }}>
          <h2 style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>Ready to Experience Luxury?</h2>
          <p style={{ fontSize: '1.1rem', color: '#A0B0D8', marginBottom: '2rem' }}>
            Explore our full collection of Mercedes-Benz vehicles
          </p>
          <Link to="/collections" className="btn btn-primary" style={{
            display: 'inline-block',
            padding: '0.75rem 2rem',
            borderRadius: '8px',
            fontWeight: 'bold',
            fontSize: '1rem',
            cursor: 'pointer',
            border: 'none'
          }}>
            Browse Collections
          </Link>
        </div>
      </section>
    </div>
  );
}
