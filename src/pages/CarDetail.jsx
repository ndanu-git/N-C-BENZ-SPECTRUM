import { useState } from 'react';
import { useNavigate, useParams, Link } from 'react-router-dom';
import { cars } from '../data/cars.js';

export default function CarDetail() {
  const { carId } = useParams();
  const car = cars.find((item) => item.id === carId);
  const navigate = useNavigate();
  const [modalType, setModalType] = useState(null); // 'quote' | 'test-drive' | null
  const [submitted, setSubmitted] = useState(false);

  if (!car) {
    return (
      <div style={{ padding: '4rem 2rem' }}>
        <div style={{ maxWidth: 800, margin: '0 auto' }}>
          <div style={{ color: '#A0B0D8', marginBottom: '1rem' }}>Not found</div>
          <h2 style={{ marginBottom: '1rem' }}>Car not found</h2>
          <p style={{ marginBottom: '1.5rem' }}>The vehicle you requested does not exist in our Benz collection.</p>
          <button onClick={() => navigate('/')} style={{ padding: '0.75rem 1.25rem', background: 'linear-gradient(135deg, #00F5D4, #7C3AED)', color: '#0A0F1F', border: 'none', borderRadius: 8, boxShadow: '0 0 20px rgba(0, 245, 212, 0.4)', cursor: 'pointer', fontWeight: 'bold' }}>Back to home</button>
        </div>
      </div>
    );
  }

  const openModal = (type) => {
    setSubmitted(false);
    setModalType(type);
  };
  const closeModal = () => setModalType(null);
  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      closeModal();
    }, 2000);
  };

  return (
    <div style={{ width: '100%' }}>
      {/* Large hero showing whole car */}
      <section style={{ background: '#0A0F1F', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '2rem 0' }}>
        <div style={{ width: '100%', maxWidth: 1400, padding: '0 1rem' }}>
          <img
            src={car.heroImage}
            alt={car.name}
            style={{
              width: '100%',
              height: '80vh',
              objectFit: 'contain',
              display: 'block',
              margin: '0 auto'
            }}
          />
          <div style={{ marginTop: '1rem', color: '#A0B0D8' }}>
            <div style={{ fontSize: '0.9rem', color: '#00F5D4', textShadow: '0 0 10px rgba(0, 245, 212, 0.4)' }}>{car.collection}</div>
            <h1 style={{ margin: '0.25rem 0 0.5rem 0' }}>{car.name}</h1>
            <p style={{ margin: 0 }}>{car.overview}</p>
            <div style={{ display: 'flex', gap: '1rem', marginTop: '0.75rem', flexWrap: 'wrap' }}>
              <div style={{ color: '#A0B0D8' }}>{car.year}</div>
              <div style={{ color: '#00F5D4', fontWeight: '700', textShadow: '0 0 10px rgba(0, 245, 212, 0.4)' }}>{car.price}</div>
              <div style={{ color: '#A0B0D8' }}>{car.engine}</div>
            </div>
          </div>
        </div>
      </section>

      {/* Diagonal gallery: left column exterior (stacked top), right column interior (anchored bottom) */}
      <section style={{ padding: '3rem 2rem' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto' }}>
          <h3 style={{ marginBottom: '1rem' }}>Gallery</h3>
          <div style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: '1rem',
            minHeight: 500
          }}>
            {/* Left column: exterior images stacked top-to-bottom */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              {car.exterior.map((src, idx) => (
                <div key={`ext-${idx}`} style={{ flex: 1, overflow: 'hidden', borderRadius: 12, border: '1px solid rgba(255,255,255,0.05)' }}>
                  <img src={src} alt={`Exterior ${idx+1}`} style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
                </div>
              ))}
            </div>

            {/* Right column: interior images stacked but visually anchored to bottom to create diagonal alignment */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', justifyContent: 'flex-end' }}>
              {car.interior.map((src, idx) => (
                <div key={`int-${idx}`} style={{ flex: 1, overflow: 'hidden', borderRadius: 12, border: '1px solid rgba(255,255,255,0.05)', background: '#071023' }}>
                  <img src={src} alt={`Interior ${idx+1}`} style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Specs and features (clean, no heavy containers) */}
      <section style={{ padding: '0 2rem 3rem 2rem' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem' }}>
          <div style={{ padding: 0 }}>
            <h4>Model information</h4>
            <ul style={{ lineHeight: 1.8 }}>
              <li><strong>Transmission:</strong> {car.transmission}</li>
              <li><strong>Fuel:</strong> {car.fuel}</li>
              <li><strong>Seats:</strong> {car.seats}</li>
              <li><strong>Year:</strong> {car.year}</li>
            </ul>
          </div>

          <div style={{ padding: 0 }}>
            <h4>Features</h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
              {car.features.map((f) => (
                <div key={f} style={{ padding: '0.5rem 0', borderBottom: '1px solid rgba(255,255,255,0.03)' }}>{f}</div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Action buttons stacked vertically */}
      <section style={{ padding: '0 2rem 4rem 2rem' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          <Link to="/collections" style={{ padding: '0.75rem 1rem', background: 'transparent', color: '#00F5D4', textDecoration: 'none', borderRadius: 8, border: '1px solid rgba(0, 245, 212, 0.3)', boxShadow: '0 0 10px rgba(0, 245, 212, 0.3)', transition: 'all 0.3s' }} onMouseEnter={(e) => { e.currentTarget.style.boxShadow = '0 0 20px rgba(0, 245, 212, 0.6)'; }} onMouseLeave={(e) => { e.currentTarget.style.boxShadow = '0 0 10px rgba(0, 245, 212, 0.3)'; }}>Back to Collections</Link>
          <button onClick={() => openModal('quote')} style={{ padding: '0.75rem 1rem', background: 'linear-gradient(135deg, #FF5E8A, #7C3AED)', color: '#FFFFFF', border: 'none', borderRadius: 8, cursor: 'pointer', boxShadow: '0 0 20px rgba(255, 94, 138, 0.4)', fontWeight: 'bold', transition: 'all 0.3s' }} onMouseEnter={(e) => { e.currentTarget.style.boxShadow = '0 0 30px rgba(255, 94, 138, 0.6)'; }} onMouseLeave={(e) => { e.currentTarget.style.boxShadow = '0 0 20px rgba(255, 94, 138, 0.4)'; }}>Get a Quote</button>
          <button onClick={() => openModal('test-drive')} style={{ padding: '0.75rem 1rem', background: 'linear-gradient(135deg, #7C3AED, #00F5D4)', color: '#FFFFFF', border: 'none', borderRadius: 8, cursor: 'pointer', boxShadow: '0 0 20px rgba(124, 58, 237, 0.4)', fontWeight: 'bold', transition: 'all 0.3s' }} onMouseEnter={(e) => { e.currentTarget.style.boxShadow = '0 0 30px rgba(124, 58, 237, 0.6)'; }} onMouseLeave={(e) => { e.currentTarget.style.boxShadow = '0 0 20px rgba(124, 58, 237, 0.4)'; }}>Book a Test Drive</button>
        </div>
      </section>

      {/* Modal (fixed overlay) */}
      {modalType && (
        <div style={{ position: 'fixed', inset: 0, background: 'rgba(0,0,0,0.7)', display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 2000 }}>
          <div style={{ width: '100%', maxWidth: 640, background: '#fff', borderRadius: 12, padding: '1.5rem', boxShadow: '0 30px 60px rgba(0,0,0,0.5)' }}>
            {!submitted ? (
              <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <h3 style={{ margin: 0, color: '#111111' }}>{modalType === 'quote' ? 'Get a Quote' : 'Book a Test Drive'}</h3>
                  <button type="button" onClick={closeModal} style={{ background: 'transparent', border: 'none', fontSize: 20, cursor: 'pointer' }}>✕</button>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.75rem' }}>
                  <input type="text" placeholder="First name" required style={{ padding: '0.65rem', borderRadius: 8, border: '1px solid rgba(0,0,0,0.12)', background: '#ffffff', color: '#0e081b' }} />
                  <input type="text" placeholder="Last name" required style={{ padding: '0.65rem', borderRadius: 8, border: '1px solid rgba(0,0,0,0.12)', background: '#ffffff', color: '#0e081b' }} />
                </div>

                <input type="email" placeholder="Email address" required style={{ padding: '0.65rem', borderRadius: 8, border: '1px solid rgba(0,0,0,0.12)', background: '#ffffff', color: '#0e081b' }} />
                <input type="tel" placeholder="Mobile number" required style={{ padding: '0.65rem', borderRadius: 8, border: '1px solid rgba(0,0,0,0.12)', background: '#ffffff', color: '#0e081b' }} />
                <textarea placeholder="Message (optional)" rows={3} style={{ padding: '0.65rem', borderRadius: 8, border: '1px solid rgba(0,0,0,0.12)', background: '#ffffff', color: '#0e081b' }} />

                <div style={{ display: 'flex', gap: '0.5rem', marginTop: '0.5rem' }}>
                  <button type="submit" style={{ flex: 1, padding: '0.75rem', borderRadius: 8, border: 'none', background: '#CDB4DB', color: '#111111', cursor: 'pointer' }}>Submit</button>
                  <button type="button" onClick={closeModal} style={{ flex: 1, padding: '0.75rem', borderRadius: 8, border: '1px solid rgba(0,0,0,0.08)', background: '#FFFFFF', color: '#111111', cursor: 'pointer' }}>Cancel</button>
                </div>
              </form>
            ) : (
              <div style={{ textAlign: 'center', padding: '1rem' }}>
                <h3 style={{ color: '#111111' }}>Thanks! You will be contacted shortly.</h3>
                <p style={{ color: '#444' }}>Our team will reach out to you soon about your Mercedes-Benz inquiry.</p>
                <div style={{ display: 'flex', gap: '0.5rem', marginTop: '1rem' }}>
                  <button onClick={closeModal} style={{ padding: '0.6rem 1rem', background: '#CDB4DB', color: '#111111', border: 'none', borderRadius: 8 }}>Close</button>
                  <Link to="/collections" style={{ padding: '0.6rem 1rem', background: '#FFFFFF', color: '#111111', borderRadius: 8, textDecoration: 'none' }}>Back to Collections</Link>
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
