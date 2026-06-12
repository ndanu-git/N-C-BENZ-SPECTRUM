import { useEffect, useState } from 'react';
import { Link, useSearchParams } from 'react-router-dom';

export default function Request() {
  const [params] = useSearchParams();
  const requestType = params.get('type') || 'quote';
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    setSubmitted(false);
  }, [requestType]);

  const title = requestType === 'test-drive' ? 'Book a test drive' : 'Get a quote';
  const description = requestType === 'test-drive'
    ? 'Fill in the form to schedule a Mercedes-Benz test drive with our Nairobi team.'
    : 'Complete the form and we will prepare a personalized Benz quote for you.';

  const handleSubmit = (event) => {
    event.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="page-content request-page">
      <section className="page-hero page-hero-compact">
        <div>
          <div className="section-label">{title}</div>
          <h2>{title} for your Benz selection</h2>
          <p>{description}</p>
        </div>
      </section>

      <section className="section section-highlight request-section">
        {!submitted ? (
          <form className="request-form" onSubmit={handleSubmit}>
            <div className="form-grid">
              <label>
                First name
                <input type="text" required placeholder="First name" />
              </label>
              <label>
                Last name
                <input type="text" required placeholder="Last name" />
              </label>
            </div>

            <label>
              Email address
              <input type="email" required placeholder="you@example.com" />
            </label>
            <label>
              Mobile number
              <input type="tel" required placeholder="+254 700 000 000" />
            </label>
            <label>
              Message (optional)
              <textarea placeholder="Preferred date or questions" rows="4" />
            </label>
            <label className="checkbox-label">
              <input type="checkbox" />
              Yes, I will subscribe to receive latest offers and product updates.
            </label>
            <div className="request-actions">
              <button type="submit" className="btn btn-primary">Submit request</button>
              <Link to="/" className="btn btn-secondary">Back to home</Link>
            </div>
          </form>
        ) : (
          <div className="confirmation-panel">
            <h3>Thanks! You will be contacted shortly.</h3>
            <p>Our team will reach out to you soon about your Mercedes-Benz inquiry.</p>
            <div className="request-actions">
              <Link to="/" className="btn btn-secondary">Back to home</Link>
            </div>
          </div>
        )}
      </section>
    </div>
  );
}
