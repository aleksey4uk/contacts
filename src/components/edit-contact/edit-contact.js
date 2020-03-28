import React from 'react';
import './edit-contact.css';

const EditContact = (contact) => {
  return (
    <div className='edit-contact'>
      <h6>Введите данные </h6>
      <span>Имя:</span><input type='text' id="Имя" placeholder="Имя..."/><br/>
      <span>почта:</span><input type='text' id="Эл. почта" placeholder="Почта..."/>
      <span>номер:</span><input type="number" id="number" placeholder="Номер..." />
    </div>
  )
}

export default EditContact;
