import Api from './api';

export default class JogsApi extends Api {
  constructor() {
    super('data');
  }

  getJogs = () => {
    return this.get('sync', {});
  };

  addJog = (data) => {
    return this.post({ data }, 'jog');
  };
}
