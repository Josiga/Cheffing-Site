import React, { useState } from 'react';
import { Calendar, Users, MapPin, Utensils, ChefHat, Clock, Mail, Phone, User, MessageSquare } from 'lucide-react';

const ChefBookingApp = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    eventDate: '',
    eventTime: '',
    numberOfGuests: '',
    cuisine: '',
    eventType: '',
    location: '',
    dietaryRestrictions: '',
    specialRequests: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const cuisineOptions = [
    'Italian', 'French', 'Japanese', 'Mediterranean', 'Mexican', 
    'Indian', 'Thai', 'Chinese', 'American BBQ', 'Fusion'
  ];

  const eventTypes = [
    'Private Dinner', 'Wedding', 'Corporate Event', 'Birthday Party', 
    'Anniversary', 'Holiday Gathering', 'Cooking Class', 'Meal Prep Service'
  ];

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await fetch('http://localhost:3001/api/bookings', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmitted(true);
        setTimeout(() => {
          setFormData({
            name: '',
            email: '',
            phone: '',
            eventDate: '',
            eventTime: '',
            numberOfGuests: '',
            cuisine: '',
            eventType: '',
            location: '',
            dietaryRestrictions: '',
            specialRequests: '',
          });
          setSubmitted(false);
        }, 5000);
      }
    } catch (error) {
      console.error('Error submitting form:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={styles.container}>
      <style>
        {`
          @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;600;700;900&family=Inter:wght@300;400;500;600&display=swap');
          
          :root {
            --color-primary: #B85C38;
            --color-primary-foreground: #FFFFFF;
            --color-secondary: #7A8471;
            --color-secondary-foreground: #FFFFFF;
            --color-accent: #D4A574;
            --color-accent-foreground: #2C2C2C;
            --color-background: #FEFCFA;
            --color-foreground: #2C2C2C;
            --color-card: #F8F5F2;
            --color-card-foreground: #2C2C2C;
            --color-muted: #F8F5F2;
            --color-muted-foreground: #5A5A5A;
            --color-border: rgba(184, 92, 56, .15);
            --color-input: #F8F5F2;
            --color-ring: #D4A574;
            --color-success: #6B8E5A;
            --color-error: #C85A54;
            --shadow-sm: 0 2px 4px rgba(184, 92, 56, .08);
            --shadow-md: 0 4px 8px rgba(184, 92, 56, .1);
            --shadow-lg: 0 8px 16px rgba(184, 92, 56, .12);
            --shadow-xl: 0 16px 32px rgba(184, 92, 56, .15);
          }
          
          * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
          }
          
          @keyframes fadeInUp {
            from {
              opacity: 0;
              transform: translateY(30px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }
          
          @keyframes float {
            0%, 100% {
              transform: translateY(0px);
            }
            50% {
              transform: translateY(-10px);
            }
          }
          
          @keyframes shimmer {
            0% {
              background-position: -1000px 0;
            }
            100% {
              background-position: 1000px 0;
            }
          }

          @keyframes successPulse {
            0%, 100% {
              transform: scale(1);
              opacity: 1;
            }
            50% {
              transform: scale(1.05);
              opacity: 0.9;
            }
          }
          
          .fade-in-up {
            animation: fadeInUp 0.8s ease-out forwards;
          }
          
          .fade-in-up-delay-1 { animation-delay: 0.1s; opacity: 0; }
          .fade-in-up-delay-2 { animation-delay: 0.2s; opacity: 0; }
          .fade-in-up-delay-3 { animation-delay: 0.3s; opacity: 0; }
          .fade-in-up-delay-4 { animation-delay: 0.4s; opacity: 0; }
          
          .input-group {
            position: relative;
            transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          }
          
          .input-group:hover {
            transform: translateX(4px);
          }
          
          .input-group input:focus,
          .input-group select:focus,
          .input-group textarea:focus {
            outline: none;
            border-color: var(--color-accent);
            box-shadow: 0 0 0 3px rgba(212, 165, 116, 0.1);
          }
          
          .submit-button {
            transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
            position: relative;
            overflow: hidden;
          }
          
          .submit-button::before {
            content: '';
            position: absolute;
            top: 0;
            left: -100%;
            width: 100%;
            height: 100%;
            background: linear-gradient(90deg, transparent, rgba(255,255,255,0.2), transparent);
            transition: left 0.5s;
          }
          
          .submit-button:hover::before {
            left: 100%;
          }
          
          .submit-button:hover {
            transform: translateY(-2px);
            box-shadow: var(--shadow-xl);
          }
          
          .submit-button:active {
            transform: translateY(0);
          }

          .success-message {
            animation: successPulse 2s ease-in-out infinite;
          }
        `}
      </style>

      {/* Decorative Background Elements */}
      <div style={styles.backgroundDecor}>
        <div style={{...styles.decorCircle, top: '10%', left: '5%', width: '300px', height: '300px', opacity: 0.03}}></div>
        <div style={{...styles.decorCircle, bottom: '5%', right: '10%', width: '400px', height: '400px', opacity: 0.04}}></div>
        <div style={{...styles.decorLine, top: '30%', left: 0, width: '200px', transform: 'rotate(45deg)'}}></div>
        <div style={{...styles.decorLine, bottom: '20%', right: 0, width: '250px', transform: 'rotate(-30deg)'}}></div>
      </div>

      {/* Header */}
      <header style={styles.header} className="fade-in-up">
        <div style={styles.logoContainer}>
          <ChefHat size={48} color="var(--color-primary)" strokeWidth={1.5} style={{animation: 'float 3s ease-in-out infinite'}} />
          <div>
            <h1 style={styles.logo}>Culinary Moments</h1>
            <p style={styles.tagline}>Extraordinary Chefs for Unforgettable Events</p>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main style={styles.main}>
        <div style={styles.formContainer}>
          {/* Hero Section */}
          <div style={styles.hero} className="fade-in-up fade-in-up-delay-1">
            <h2 style={styles.heroTitle}>Book Your Private Chef</h2>
            <p style={styles.heroSubtitle}>
              Transform your event into a gastronomic experience. Our curated chefs bring 
              restaurant-quality cuisine to your doorstep, tailored perfectly to your vision.
            </p>
          </div>

          {submitted ? (
            <div style={styles.successCard} className="success-message">
              <div style={styles.successIcon}>
                <ChefHat size={64} color="var(--color-success)" />
              </div>
              <h3 style={styles.successTitle}>Request Submitted Successfully!</h3>
              <p style={styles.successText}>
                Thank you for your booking request. Our culinary concierge will review your 
                details and reach out within 24 hours to discuss your perfect chef pairing.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} style={styles.form}>
              {/* Personal Information */}
              <div style={styles.section} className="fade-in-up fade-in-up-delay-2">
                <h3 style={styles.sectionTitle}>
                  <User size={24} style={styles.sectionIcon} />
                  Your Information
                </h3>
                <div style={styles.formGrid}>
                  <div className="input-group">
                    <label style={styles.label}>Full Name *</label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      style={styles.input}
                      placeholder="Enter your name"
                    />
                  </div>
                  <div className="input-group">
                    <label style={styles.label}>Email *</label>
                    <div style={styles.inputWithIcon}>
                      <Mail size={18} style={styles.inputIcon} />
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        style={{...styles.input, paddingLeft: '42px'}}
                        placeholder="your.email@example.com"
                      />
                    </div>
                  </div>
                  <div className="input-group">
                    <label style={styles.label}>Phone Number *</label>
                    <div style={styles.inputWithIcon}>
                      <Phone size={18} style={styles.inputIcon} />
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                        style={{...styles.input, paddingLeft: '42px'}}
                        placeholder="+1 (555) 000-0000"
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* Event Details */}
              <div style={styles.section} className="fade-in-up fade-in-up-delay-3">
                <h3 style={styles.sectionTitle}>
                  <Calendar size={24} style={styles.sectionIcon} />
                  Event Details
                </h3>
                <div style={styles.formGrid}>
                  <div className="input-group">
                    <label style={styles.label}>Event Date *</label>
                    <input
                      type="date"
                      name="eventDate"
                      value={formData.eventDate}
                      onChange={handleChange}
                      required
                      style={styles.input}
                      min={new Date().toISOString().split('T')[0]}
                    />
                  </div>
                  <div className="input-group">
                    <label style={styles.label}>Event Time *</label>
                    <div style={styles.inputWithIcon}>
                      <Clock size={18} style={styles.inputIcon} />
                      <input
                        type="time"
                        name="eventTime"
                        value={formData.eventTime}
                        onChange={handleChange}
                        required
                        style={{...styles.input, paddingLeft: '42px'}}
                      />
                    </div>
                  </div>
                  <div className="input-group">
                    <label style={styles.label}>Number of Guests *</label>
                    <div style={styles.inputWithIcon}>
                      <Users size={18} style={styles.inputIcon} />
                      <input
                        type="number"
                        name="numberOfGuests"
                        value={formData.numberOfGuests}
                        onChange={handleChange}
                        required
                        min="1"
                        style={{...styles.input, paddingLeft: '42px'}}
                        placeholder="e.g., 8"
                      />
                    </div>
                  </div>
                  <div className="input-group">
                    <label style={styles.label}>Event Type *</label>
                    <select
                      name="eventType"
                      value={formData.eventType}
                      onChange={handleChange}
                      required
                      style={styles.select}
                    >
                      <option value="">Select event type</option>
                      {eventTypes.map(type => (
                        <option key={type} value={type}>{type}</option>
                      ))}
                    </select>
                  </div>
                  <div className="input-group" style={{gridColumn: '1 / -1'}}>
                    <label style={styles.label}>Location *</label>
                    <div style={styles.inputWithIcon}>
                      <MapPin size={18} style={styles.inputIcon} />
                      <input
                        type="text"
                        name="location"
                        value={formData.location}
                        onChange={handleChange}
                        required
                        style={{...styles.input, paddingLeft: '42px'}}
                        placeholder="Full address or venue name"
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* Culinary Preferences */}
              <div style={styles.section} className="fade-in-up fade-in-up-delay-4">
                <h3 style={styles.sectionTitle}>
                  <Utensils size={24} style={styles.sectionIcon} />
                  Culinary Preferences
                </h3>
                <div style={styles.formGrid}>
                  <div className="input-group">
                    <label style={styles.label}>Preferred Cuisine *</label>
                    <select
                      name="cuisine"
                      value={formData.cuisine}
                      onChange={handleChange}
                      required
                      style={styles.select}
                    >
                      <option value="">Select cuisine</option>
                      {cuisineOptions.map(cuisine => (
                        <option key={cuisine} value={cuisine}>{cuisine}</option>
                      ))}
                    </select>
                  </div>
                  <div className="input-group">
                    <label style={styles.label}>Dietary Restrictions</label>
                    <input
                      type="text"
                      name="dietaryRestrictions"
                      value={formData.dietaryRestrictions}
                      onChange={handleChange}
                      style={styles.input}
                      placeholder="e.g., Vegetarian, Gluten-free, Allergies"
                    />
                  </div>
                  <div className="input-group" style={{gridColumn: '1 / -1'}}>
                    <label style={styles.label}>
                      <MessageSquare size={18} style={{marginRight: '8px', verticalAlign: 'middle'}} />
                      Special Requests or Menu Ideas
                    </label>
                    <textarea
                      name="specialRequests"
                      value={formData.specialRequests}
                      onChange={handleChange}
                      style={styles.textarea}
                      rows="4"
                      placeholder="Tell us about your vision, favorite dishes, or any special requirements..."
                    />
                  </div>
                </div>
              </div>

              {/* Submit Button */}
              <button 
                type="submit" 
                style={{...styles.submitButton, ...(loading && styles.submitButtonDisabled)}}
                className="submit-button"
                disabled={loading}
              >
                {loading ? (
                  <span>Processing Your Request...</span>
                ) : (
                  <>
                    <ChefHat size={20} style={{marginRight: '12px'}} />
                    Request Your Chef Experience
                  </>
                )}
              </button>
            </form>
          )}
        </div>

        {/* Features Section */}
        <div style={styles.features}>
          <div style={styles.featureCard} className="fade-in-up fade-in-up-delay-2">
            <div style={styles.featureIcon}>🔪</div>
            <h4 style={styles.featureTitle}>Master Chefs</h4>
            <p style={styles.featureText}>Professionally trained chefs with years of fine dining experience</p>
          </div>
          <div style={styles.featureCard} className="fade-in-up fade-in-up-delay-3">
            <div style={styles.featureIcon}>🌟</div>
            <h4 style={styles.featureTitle}>Personalized Menus</h4>
            <p style={styles.featureText}>Custom-designed menus tailored to your tastes and dietary needs</p>
          </div>
          <div style={styles.featureCard} className="fade-in-up fade-in-up-delay-4">
            <div style={styles.featureIcon}>🏠</div>
            <h4 style={styles.featureTitle}>Your Location</h4>
            <p style={styles.featureText}>Restaurant-quality cuisine in the comfort of your home or venue</p>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer style={styles.footer}>
        <p style={styles.footerText}>© 2024 Culinary Moments. Creating extraordinary dining experiences.</p>
      </footer>
    </div>
  );
};

const styles = {
  container: {
    minHeight: '100vh',
    backgroundColor: 'var(--color-background)',
    fontFamily: "'Inter', sans-serif",
    color: 'var(--color-foreground)',
    position: 'relative',
    overflow: 'hidden',
  },
  backgroundDecor: {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    pointerEvents: 'none',
    zIndex: 0,
  },
  decorCircle: {
    position: 'absolute',
    borderRadius: '50%',
    background: `radial-gradient(circle, var(--color-primary) 0%, transparent 70%)`,
  },
  decorLine: {
    position: 'absolute',
    height: '2px',
    background: `linear-gradient(90deg, transparent, var(--color-accent), transparent)`,
    opacity: 0.1,
  },
  header: {
    position: 'relative',
    zIndex: 10,
    padding: '40px 20px',
    borderBottom: '1px solid var(--color-border)',
    backgroundColor: 'rgba(254, 252, 250, 0.9)',
    backdropFilter: 'blur(10px)',
  },
  logoContainer: {
    maxWidth: '1200px',
    margin: '0 auto',
    display: 'flex',
    alignItems: 'center',
    gap: '20px',
  },
  logo: {
    fontFamily: "'Playfair Display', serif",
    fontSize: '42px',
    fontWeight: '700',
    color: 'var(--color-primary)',
    letterSpacing: '-0.5px',
    margin: 0,
  },
  tagline: {
    fontSize: '14px',
    color: 'var(--color-muted-foreground)',
    fontWeight: '400',
    letterSpacing: '0.5px',
    marginTop: '4px',
  },
  main: {
    position: 'relative',
    zIndex: 10,
    maxWidth: '1200px',
    margin: '0 auto',
    padding: '60px 20px',
  },
  formContainer: {
    backgroundColor: 'var(--color-card)',
    borderRadius: '24px',
    padding: '60px',
    boxShadow: 'var(--shadow-xl)',
    border: '1px solid var(--color-border)',
    marginBottom: '60px',
  },
  hero: {
    textAlign: 'center',
    marginBottom: '60px',
    paddingBottom: '40px',
    borderBottom: '2px solid var(--color-border)',
  },
  heroTitle: {
    fontFamily: "'Playfair Display', serif",
    fontSize: '56px',
    fontWeight: '700',
    color: 'var(--color-primary)',
    marginBottom: '20px',
    lineHeight: '1.2',
  },
  heroSubtitle: {
    fontSize: '18px',
    color: 'var(--color-muted-foreground)',
    maxWidth: '700px',
    margin: '0 auto',
    lineHeight: '1.7',
    fontWeight: '400',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    gap: '48px',
  },
  section: {
    display: 'flex',
    flexDirection: 'column',
    gap: '24px',
  },
  sectionTitle: {
    fontFamily: "'Playfair Display', serif",
    fontSize: '28px',
    fontWeight: '600',
    color: 'var(--color-foreground)',
    display: 'flex',
    alignItems: 'center',
    gap: '12px',
    paddingBottom: '16px',
    borderBottom: '1px solid var(--color-border)',
  },
  sectionIcon: {
    color: 'var(--color-accent)',
  },
  formGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
    gap: '24px',
  },
  label: {
    display: 'block',
    fontSize: '14px',
    fontWeight: '500',
    color: 'var(--color-foreground)',
    marginBottom: '8px',
    letterSpacing: '0.3px',
  },
  inputWithIcon: {
    position: 'relative',
  },
  inputIcon: {
    position: 'absolute',
    left: '14px',
    top: '50%',
    transform: 'translateY(-50%)',
    color: 'var(--color-muted-foreground)',
    pointerEvents: 'none',
  },
  input: {
    width: '100%',
    padding: '14px 16px',
    fontSize: '15px',
    border: '2px solid var(--color-border)',
    borderRadius: '12px',
    backgroundColor: 'var(--color-input)',
    color: 'var(--color-foreground)',
    fontFamily: "'Inter', sans-serif",
    transition: 'all 0.3s ease',
  },
  select: {
    width: '100%',
    padding: '14px 16px',
    fontSize: '15px',
    border: '2px solid var(--color-border)',
    borderRadius: '12px',
    backgroundColor: 'var(--color-input)',
    color: 'var(--color-foreground)',
    fontFamily: "'Inter', sans-serif",
    cursor: 'pointer',
    transition: 'all 0.3s ease',
  },
  textarea: {
    width: '100%',
    padding: '14px 16px',
    fontSize: '15px',
    border: '2px solid var(--color-border)',
    borderRadius: '12px',
    backgroundColor: 'var(--color-input)',
    color: 'var(--color-foreground)',
    fontFamily: "'Inter', sans-serif",
    resize: 'vertical',
    lineHeight: '1.6',
    transition: 'all 0.3s ease',
  },
  submitButton: {
    padding: '18px 40px',
    fontSize: '16px',
    fontWeight: '600',
    color: 'var(--color-primary-foreground)',
    backgroundColor: 'var(--color-primary)',
    border: 'none',
    borderRadius: '12px',
    cursor: 'pointer',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontFamily: "'Inter', sans-serif",
    boxShadow: 'var(--shadow-md)',
    marginTop: '24px',
  },
  submitButtonDisabled: {
    opacity: 0.6,
    cursor: 'not-allowed',
  },
  successCard: {
    textAlign: 'center',
    padding: '60px 40px',
  },
  successIcon: {
    marginBottom: '24px',
    display: 'flex',
    justifyContent: 'center',
  },
  successTitle: {
    fontFamily: "'Playfair Display', serif",
    fontSize: '36px',
    fontWeight: '700',
    color: 'var(--color-success)',
    marginBottom: '16px',
  },
  successText: {
    fontSize: '16px',
    color: 'var(--color-muted-foreground)',
    maxWidth: '600px',
    margin: '0 auto',
    lineHeight: '1.7',
  },
  features: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
    gap: '30px',
  },
  featureCard: {
    backgroundColor: 'var(--color-card)',
    padding: '40px 30px',
    borderRadius: '20px',
    textAlign: 'center',
    border: '1px solid var(--color-border)',
    boxShadow: 'var(--shadow-sm)',
    transition: 'all 0.3s ease',
  },
  featureIcon: {
    fontSize: '48px',
    marginBottom: '20px',
  },
  featureTitle: {
    fontFamily: "'Playfair Display', serif",
    fontSize: '22px',
    fontWeight: '600',
    color: 'var(--color-foreground)',
    marginBottom: '12px',
  },
  featureText: {
    fontSize: '15px',
    color: 'var(--color-muted-foreground)',
    lineHeight: '1.6',
  },
  footer: {
    position: 'relative',
    zIndex: 10,
    padding: '30px 20px',
    textAlign: 'center',
    borderTop: '1px solid var(--color-border)',
    backgroundColor: 'rgba(254, 252, 250, 0.9)',
  },
  footerText: {
    fontSize: '14px',
    color: 'var(--color-muted-foreground)',
    fontWeight: '400',
  },
};

export default ChefBookingApp;
