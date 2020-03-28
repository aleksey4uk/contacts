const initialState = {
  contacts: [],
  users:[],
  loading: false,
  login: null,
}

const reducer = (state=initialState, action) => {
  switch (action.type) {
    case 'LOAD':
      console.log('начинаем загрузку...')
      return {
        ...state,
        contacts: action.payload,
        loading: true};

    case 'COMPLETE':
      console.log('загрузка завершена', state.users);
      return {
        ...state,
        contacts: state.contacts,
        loading: false,
      }

    case 'ON-LOGIN-LOAD':
      console.log('логины и пароли загружены')
      return {
        ...state,
        loading: true,
        users: action.payload,
      }

    case 'ON-LOGIN':
      console.log('Данные попали в reducer ', action.payload);
      let idx = state.users.findIndex((item) => item.name === action.payload.username && item.password === action.payload.password);
      console.log(idx)
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
      return {
        ...state
      }

    case 'EDIT-CONTACT-COMPLETE':
      console.log("Новые данные такие: ", action.payload);
      return {
        ...state,
      }

    default: return state;
  }
}

export default reducer;
