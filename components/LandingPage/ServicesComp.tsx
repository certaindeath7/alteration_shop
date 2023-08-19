import React from 'react';

const ServicesComp: React.FC = () => {
  return (
    <section className="features">
      <div className="feature">
        <img src="icon-1.png" alt="Feature Icon" />
        <h2>Easy to Use</h2>
        <p>Our platform is designed with simplicity in mind.</p>
      </div>
      <div className="feature">
        <img src="icon-2.png" alt="Feature Icon" />
        <h2>24/7 Support</h2>
        <p>Our dedicated support team is always ready to assist you.</p>
      </div>
      <div className="feature">
        <img src="icon-3.png" alt="Feature Icon" />
        <h2>Secure and Reliable</h2>
        <p>Your data is safe with us, backed by robust security measures.</p>
      </div>
    </section>
  );
};

export default ServicesComp;
