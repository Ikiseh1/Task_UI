import React from 'react';
 import'./pricing.css'

function Pricing() {
  return (
    <section className="pricing__container" id="pricing">
      <div className="pricing__header">
        <h1>Fair, simple pricing for all businesses.</h1>
        <p>If you’re not satisfied, contact us within the first 14 days and we’ll send you a full refund.</p>
      </div>
      <div className="pricing__card__container">
        <div className="pricing__card">
          <h2>Freelancer</h2>
          <p>All the basics for starting a new business</p>
          <div className="price__list">
            <h1>$24</h1>
            <p>Billed Monthly</p>
          </div>
          <ul>
            <li>Invoices</li>
            <li>Expenses</li>
            <li>Taxes</li>
          </ul>
          <a href="#" className="pricing__btn">Buy Now</a>
        </div>
        <div className="pricing__card">
          <h2>Small business</h2>
          <p>All the basics for starting a new business</p>
          <div className="price__list">
            <h1>$24</h1>
            <p>Billed Monthly</p>
          </div>
          <ul>
            <li>Invoices</li>
            <li>Expenses</li>
            <li>Taxes</li>
          </ul>
          <a href="#" className="pricing__btn">Buy Now</a>
        </div>
        <div className="pricing__card">
          <h2>Enterprise</h2>
          <p>All the basics for starting a new business</p>
          <div className="price__list">
            <h1>$24</h1>
            <p>Billed Monthly</p>
          </div>
          <ul>
            <li>Invoices</li>
            <li>Expenses</li>
            <li>Taxes</li>
          </ul>
          <a href="#" className="pricing__btn">Buy Now</a>
        </div>
      </div>
    </section>
  );
}

export default Pricing;
