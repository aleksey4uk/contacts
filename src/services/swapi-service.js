export default class swapiService {
  data = [
    {
      name: 'Вася'},
    {
      name: 'Петя'},
    {
      name: 'Гена'},
  ]

  getData = () => {
    return new Promise((resolve, reject) => {
      setTimeout(() => resolve(this.data), 500);
    });
  }
}
