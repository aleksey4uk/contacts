const initialState = {
  contacts: [],
  editContact: null,
  searchContacts: [],
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
    console.log(state.actionType);
      let idxContact = state.contacts.findIndex(item=>item.name == action.payload.name);
      return {
        ...state,
        editContact: action.payload,
      }

    case 'EDIT-CONTACT-ITEM':
      let name = action.payload.target.id === 'name' ? action.payload.target.value : state.editContact.name;
      let number = action.payload.target.id === 'number' ? action.payload.target.value : state.editContact.number;
      let email = action.payload.target.id === 'email' ? action.payload.target.value : state.editContact.email;

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
      let idxC = state.contacts.findIndex(item=>item.key == state.editContact.key);
      let idxV;
      if(state.searchContacts.findIndex((item) => item.key == state.editContact.key) != -1) {
        idxV = state.searchContacts.findIndex((item) => item.key == state.editContact.key)
        return {
          ...state,
          contacts: [
            ...state.contacts.slice(0, idxC),
          state.editContact,
            ...state.contacts.slice(idxC+1)
          ],
          searchContacts: [
            ...state.searchContacts.slice(0, idxV),
            state.editContact,
            ...state.searchContacts.slice(idxV +1)
          ],
          editContact: null,
        }
      }
      if(state.actionType === 'ADD') {
        if(!state.editContact.number || !state.editContact.name) {
           return {
            ...state,
            editContact: null,
            actionType: null,
          }
        }

        return {
          ...state,
          contacts: [
            ...state.contacts,
            state.editContact,
          ],
          editContact: null,
          actionType: null
        }
      }

      return {
        ...state,
        contacts: [
          ...state.contacts.slice(0, idxC),
        state.editContact,
          ...state.contacts.slice(idxC+1)
        ],
        editContact: null,
        actionType: null,
      }

    case 'EDIT-CONTACT-REMOVE':
      const idxRemove = state.contacts.findIndex(item=>item.name==action.payload.name);
      let searchContIdx = null;
      if(state.searchContacts.findIndex(item=>item.name == action.payload.name) != -1) searchContIdx = state.searchContacts.findIndex(item=>item.name == action.payload.name);
      return {
        ...state,
        contacts: [
          ...state.contacts.slice(0, idxRemove),
          ...state.contacts.slice(idxRemove+1)
        ],
        searchContacts: [
          ...state.searchContacts.slice(0, searchContIdx),
          ...state.searchContacts.slice(searchContIdx + 1),
        ]
      }
    case 'EDIT-CONTACT-CANCEL':
      return {
        ...state,
        editContact: null,
      }

    case 'SEARCH-CONTACTS':
    if(action.payload.length<=0) {
      return {
        ...state,
        searchContacts: [],
        searchValues: null,
      }
    }
      return {
        ...state,
        searchValues: action.payload,
        searchContacts: [
          ...state.contacts.filter((item) => item.name.toLowerCase().includes(action.payload.toLowerCase()) || item.number.includes(action.payload)),
        ]
      }

    case 'ADD-CONTACT':
      return {
        ...state,
        editContact: {
          ...state.editContact,
          key: state.contacts.length + 1 + '',
        },
        actionType: 'ADD',
      }

    default: return state;
  }
}

export default reducer;
