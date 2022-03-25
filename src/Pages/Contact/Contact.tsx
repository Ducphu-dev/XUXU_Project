import React from 'react';
import Banner from '../../Component/Banner/Banner';
import ContactMain from '../../Component/ContactSection/ContactMain';
import './Contact.scss';

function Contact() {
  return (
    <section className="contact" id="contact">
      <Banner />
      <ContactMain />
    </section>
  );
}

export default Contact;
