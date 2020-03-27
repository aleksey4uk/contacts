import React from 'react';

const EditContact = (contact) => {
  return (
    <div className='edit-contact'>
      <h6>Введите данные <h6>
      <input type='text' id="Имя" placeholder="Имя..."/>
      <input type='text' id="Эл. почта" placeholder="Почта..."/>
      <input type="number" id="number" placeholder="Номер..." />
    </div>
  )
}

export default EditContact;
