const initialState = {
  users: [],
  loading: false,
  login: false,
}

const reducer = (state=initialState, action) => {
  switch (action.type) {
    case 'LOAD':
      console.log('начинаем загрузку...')
      return {
        ...state,
        users: action.payload,
        loading: true};

    case 'COMPLETE':
      console.log('загрузка завершена', state.users);
      return {
        ...state,
        users: state.users,
        loading: false,
      }

    case 'ON-LOGIN':
      console.log('Данные попали в reducer ', action.payload);
      return {
        ...state,
        login: true,
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
