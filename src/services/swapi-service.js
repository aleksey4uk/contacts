export default class swapiService {
  users = [
    {
      name: 'vasilii',
      password: 'test'
    },
    {
      name: 'petr',
      password: 'test',
    }
  ]
 data = [
    {
      key: '1',
      name: 'Василий Иванов',
      email: 'vas@mail.ru',
      number: '89197777777',
      tags: ['nice', 'developer'],
    },
    {
      key: '2',
      name: 'Иван Николаев',
      email: 'ivan@ivan.ru',
      number: '89555555555',
      tags: ['loser'],
    },
    {
      key: '3',
      name: 'Михаил Снопкин',
      email: 'mikhail@mikhail.ru',
      number: '88005553535',
      tags: ['cool', 'teacher'],
    },
    {
      key: '4',
      name: 'Кузьма Кузьмин',
      email: 'kuzma@kuzmin.ru',
      number: '89999999999',
      tags: ['cool', 'teacher'],
    },
    {
      key: '5',
      name: 'Владимир Путевый',
      email: 'vladimir@vlad.ru',
      number: '89628887272',
      tags: ['cool', 'teacher'],
    },
  ];

  getUsers = () => {
    //Имитация сервера
    return new Promise((resolve, reject) => {
      setTimeout(() => resolve(this.users), 500);
    });
  }

  getData = () => {
    //Имитация сервера
    return new Promise((resolve, reject) => {
      setTimeout(() => resolve(this.data), 500);
    });
  }
}
