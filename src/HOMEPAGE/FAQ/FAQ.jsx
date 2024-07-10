import React from 'react';

function FAQ() {
    return (
      <section className="faq__container" id="faq">
        <div className="faq__wrapper">
          <h1>Frequently asked questions</h1>
          <p>If you can’t find what you’re looking for, email our support team and someone will get back to you.</p>
          <div className="faq__questions">
            <details>
              <summary>What’s the best thing about TaxPal?</summary>
              <p>Well, it depends on who you ask but we think it’s our incredible ease of use that makes our product the best out there. Others might tell you it’s the unique combination of features and customizability that set us apart. Either way, we guarantee you’ll love it!</p>
            </details>
            <details>
              <summary>How do I get started?</summary>
              <p>Getting started is easy. Simply sign up for an account and follow the on-screen instructions. If you need help, our support team is always here to assist you.</p>
            </details>
            <details>
              <summary>Is there a free trial available?</summary>
              <p>Yes, we offer a 14-day free trial for all new users. This gives you the opportunity to try out all of our features and see how TaxPal can benefit your business before committing to a paid plan.</p>
            </details>
          </div>
        </div>
      </section>
    );
  }
  
  export default FAQ;
