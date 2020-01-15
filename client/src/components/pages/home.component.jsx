import React, { useContext, useEffect } from 'react';
import Contacts from '../contacts/contacts.component';
import ContactForm from '../contacts/contact-form.component';
import ContactFilter from '../contacts/contact-filter.component';

import AuthContext from '../../context/auth/auth-context';

const Home = () => {
  const authContext = useContext(AuthContext);

  useEffect(() => {
    authContext.loadUser();
    // eslint-disable-next-line
  }, []);

  return (
    <div className='grid-2'>
      <div>
        <ContactForm />
      </div>
      <div>
        <ContactFilter />
        <Contacts />
      </div>
    </div>
  );
};

export default Home;
