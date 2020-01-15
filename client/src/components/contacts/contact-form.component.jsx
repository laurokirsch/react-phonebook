import React, { useState, useContext, useEffect } from 'react';

import ContactContext from '../../context/contact/contact-context';

const ContactForm = () => {
  const contactContext = useContext(ContactContext);

  const { addContact, updateContact, clearCurrent, current } = contactContext;

  useEffect(() => {
    if (current !== null) {
      setContact(current);
    } else {
      setContact({
        name: '',
        email: '',
        phone: '',
        type: 'personal'
      });
    }
  }, [contactContext, current]);

  const [contact, setContact] = useState({
    name: '',
    email: '',
    phone: '',
    type: 'personal'
  });

  const { name, email, phone, type } = contact;

  const onChange = e =>
    setContact({ ...contact, [e.target.name]: e.target.value });

  const onSubmit = e => {
    e.preventDefault();
    if (current === null) {
      addContact(contact);
    } else {
      updateContact(contact);
    }
    clearAll();
  };

  const clearAll = () => {
    clearCurrent();
  };

  return (
    <form onSubmit={onSubmit}>
      <h2 className='text-primary'>
        {current ? 'Atualizar Contato' : 'Adicionar Contato'}
      </h2>
      <input
        type='text'
        name='name'
        placeholder='Nome'
        value={name}
        onChange={onChange}
        id=''
      />
      <input
        type='text'
        name='email'
        placeholder='Email'
        value={email}
        onChange={onChange}
        id=''
      />
      <input
        type='text'
        name='phone'
        placeholder='Telefone'
        value={phone}
        onChange={onChange}
        id=''
      />
      {/* <h5>Tipo</h5> */}
      <input
        type='radio'
        name='type'
        value='personal'
        checked={type === 'personal'}
        onChange={onChange}
      />{' '}
      Pessoal{' '}
      <input
        type='radio'
        name='type'
        value='professional'
        checked={type === 'professional'}
        onChange={onChange}
      />{' '}
      Profissional
      <div>
        <input
          type='submit'
          value={current ? 'Atualizar Contato' : 'Adicionar Contato'}
          className='btn btn-primary btn-block'
        />
      </div>
      {current && (
        <div>
          <button className='btn btn-light btn-block' onClick={clearAll}>
            Limpar
          </button>
        </div>
      )}
    </form>
  );
};

export default ContactForm;
