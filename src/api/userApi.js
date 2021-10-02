import Api from './api';

export default class UserApi extends Api {
  constructor() {
    super('auth');
  }

  letMeIn = () => {
    return this.post(
      {
        data: {
          uuid: 'hello',
        },
      },
      'uuidLogin',
    );
  };

  getUser = () => {
    return this.get('user', {});
  };
}
