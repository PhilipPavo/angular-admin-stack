import { InMemoryDbService } from 'angular-in-memory-web-api';
import {Observable} from "rxjs/Observable";

export class DevDbService implements InMemoryDbService{
  createDb(){
    let users = [
      {
        id: '1',
        login: 'admin',
        password: 'admin'
      },
      {
        id: '2',
        login: 'test',
        password: 'test'
      }
    ];
    return {users};
  }
}
