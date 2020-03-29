const initialState = {
  contacts: [],
  editContact: null,
  users:[],
  loading: null,
  login: null,
}

const reducer = (state=initialState, action) => {
  switch (action.type) {
    case 'LOAD':
      return {
        ...state,
        contacts: action.payload,
        loading: true};

    case 'COMPLETE':
      return {
        ...state,
        contacts: state.contacts,
        loading: false,
      }

    case 'ON-LOGIN-LOAD':
      return {
        ...state,
        loading: true,
        users: action.payload,
      }

    case 'ON-LOGIN':
      let idx = state.users.findIndex((item) => item.name === action.payload.username && item.password === action.payload.password);
      if (idx !== -1) {
        return {
          ...state,
          loading: false,
          login: true,
        }
      }
      return {
        ...state,
        login: false,
        loading: false,
      }

    case 'EDIT-CONTACT':
      console.log('edit', action.payload);

      let idxContact = state.contacts.findIndex(item=>item.name == action.payload.name);
      return {
        ...state,
        editContact: action.payload,
      }

    case 'EDIT-CONTACT-ITEM':
      console.log('Редактируем контакт', action.payload.target.value);
      let name = action.payload.target.id === 'name' ? action.payload.target.value : state.editContact.name;
      let number = action.payload.target.id === 'number' ? action.payload.target.value : state.editContact.number;
      let email = action.payload.target.id === 'email' ? action.payload.target.value : state.editContact.email;
      console.log(state.editContact);
      return {
        ...state,
        editContact: {
          ...state.editContact,
          name,
          number,
          email,
        }
      }

    case 'EDIT-CONTACT-COMPLETE':
      console.log(state.editContact.key);
      let idxC = state.contacts.findIndex(item=>item.key == state.editContact.key);
      return {
        ...state,
        contacts: [
          ...state.contacts.slice(0, idxC),
        state.editContact,
          ...state.contacts.slice(idxC+1)
        ],
        editContact: null,
      }

    default: return state;
  }
}

export default reducer;
