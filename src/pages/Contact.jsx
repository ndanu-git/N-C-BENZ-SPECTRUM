import { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <div style={{ minHeight: '100vh' }}>
      {/* Page Header */}
      <section style={{
        background: '#0A0F1F',
        padding: '4rem 2rem',
        textAlign: 'center'
      }}>
        <h2 style={{ fontSize: '2.5rem', marginBottom: '1rem', color: '#FFFFFF', textShadow: '0 0 20px rgba(0, 245, 212, 0.3)' }}>Get In Touch</h2>
        <p style={{ color: '#A0B0D8', fontSize: '1.1rem' }}>
          Our team is ready to help you find the perfect Mercedes-Benz
        </p>
      </section>

      {/* Contact Info & Form */}
      <section style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))',
        gap: '3rem',
        padding: '4rem 2rem',
        maxWidth: '1200px',
        margin: '0 auto'
      }}>
        {/* Contact Information */}
        <div>
          <h3 style={{ fontSize: '1.5rem', marginBottom: '2rem' }}>N&C Benz Spectrum</h3>
          <div style={{ marginBottom: '2rem' }}>
            <h4 style={{ color: '#00F5D4', marginBottom: '0.5rem', textShadow: '0 0 10px rgba(0, 245, 212, 0.5)' }}>Address</h4>
            <p style={{ color: '#A0B0D8', lineHeight: '1.6' }}>
              1010 Avenue of the Moon<br />
              New York, NY 10018<br />
              United States
            </p>
          </div>
          <div style={{ marginBottom: '2rem' }}>
            <h4 style={{ color: '#FF5E8A', marginBottom: '0.5rem', textShadow: '0 0 10px rgba(255, 94, 138, 0.4)' }}>Phone</h4>
            <a href="tel:+18789674455" style={{ color: '#A0B0D8', textDecoration: 'none', transition: 'all 0.3s', textShadow: '0 0 10px rgba(0, 245, 212, 0.2)' }} onMouseEnter={(e) => { e.currentTarget.style.color = '#00F5D4'; e.currentTarget.style.textShadow = '0 0 15px rgba(0, 245, 212, 0.6)'; }} onMouseLeave={(e) => { e.currentTarget.style.color = '#A0B0D8'; e.currentTarget.style.textShadow = '0 0 10px rgba(0, 245, 212, 0.2)'; }}>
              +1 (878) 967-4455
            </a>
          </div>
          <div>
            <h4 style={{ color: '#7C3AED', marginBottom: '0.5rem', textShadow: '0 0 10px rgba(124, 58, 237, 0.4)' }}>Email</h4>
            <a href="mailto:hello@ncbenzspectrum.com" style={{ color: '#A0B0D8', textDecoration: 'none', transition: 'all 0.3s', textShadow: '0 0 10px rgba(124, 58, 237, 0.2)' }} onMouseEnter={(e) => { e.currentTarget.style.color = '#7C3AED'; e.currentTarget.style.textShadow = '0 0 15px rgba(124, 58, 237, 0.6)'; }} onMouseLeave={(e) => { e.currentTarget.style.color = '#A0B0D8'; e.currentTarget.style.textShadow = '0 0 10px rgba(124, 58, 237, 0.2)'; }}>
              hello@ncbenzspectrum.com
            </a>
          </div>
        </div>

        {/* Contact Form */}
        <div>
          <h3 style={{ fontSize: '1.5rem', marginBottom: '2rem' }}>Send us a Message</h3>
          <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            <input
              type="text"
              placeholder="Your Name"
              required
              style={{
                padding: '0.75rem',
                background: '#ffffff',
                border: '1px solid rgba(14,14,20,0.08)',
                borderRadius: '8px',
                color: '#0e081b'
              }}
            />
            <input
              type="email"
              placeholder="Your Email"
              required
              style={{
                padding: '0.75rem',
                background: '#ffffff',
                border: '1px solid rgba(14,14,20,0.08)',
                borderRadius: '8px',
                color: '#0e081b'
              }}
            />
            <textarea
              placeholder="Your Message"
              rows="4"
              required
              style={{
                padding: '0.75rem',
                background: '#ffffff',
                border: '1px solid rgba(14,14,20,0.08)',
                borderRadius: '8px',
                color: '#0e081b',
                fontFamily: 'inherit',
                resize: 'vertical'
              }}
            />
            <button
              type="submit"
              style={{
                padding: '0.75rem',
                background: 'linear-gradient(135deg, #00F5D4, #7C3AED)',
                color: '#0A0F1F',
                border: 'none',
                borderRadius: '8px',
                fontWeight: 'bold',
                fontSize: '1rem',
                cursor: 'pointer',
                boxShadow: '0 0 20px rgba(0, 245, 212, 0.4)'
              }}
            >
              Send Message
            </button>
          </form>
        </div>
      </section>

      {/* Full-Width Map */}
      <section style={{ width: '100%', padding: '2rem 0' }}>
        <h2 style={{ textAlign: 'center', fontSize: '2rem', marginBottom: '2rem' }}>Visit Our Showroom</h2>
        <iframe
          title="N&C Benz Spectrum Location - 1010 Avenue of the Moon, New York"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3024.2219901290355!2d-73.9712!3d40.7549!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c259a9b3117469%3A0x6fdf3b8c2dc18!2s1010%20Avenue%20of%20the%20Americas%2C%20New%20York!5e0!3m2!1sen!2sus!4v1234567890"
          width="100%"
          height="600"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />

        <div style={{ textAlign: 'center', marginTop: '1.25rem' }}>
          <Link to="/" style={{ display: 'inline-block', padding: '0.75rem 1.5rem', background: '#CDB4DB', color: '#111111', borderRadius: 8, textDecoration: 'none', fontWeight: '700' }}>Home</Link>
        </div>
      </section>

      {/* Success Modal */}
      {submitted && (
        <div style={{
          position: 'fixed',
          inset: 0,
          background: 'rgba(0, 0, 0, 0.7)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          zIndex: 1000
        }}>
          <div style={{
            background: 'linear-gradient(135deg, rgba(10, 15, 31, 0.95) 0%, rgba(124, 58, 237, 0.1) 100%)',
            padding: '3rem',
            borderRadius: '12px',
            textAlign: 'center',
            border: '1px solid rgba(0, 245, 212, 0.35)',
            maxWidth: '400px',
            boxShadow: '0 0 40px rgba(0, 245, 212, 0.3)'
          }}>
            <h3 style={{ color: '#00F5D4', marginBottom: '1rem', textShadow: '0 0 15px rgba(0, 245, 212, 0.5)' }}>✓ Message Sent!</h3>
            <p style={{ color: '#A0B0D8', marginBottom: '0' }}>
              Thank you for reaching out. Our team will contact you shortly.
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
