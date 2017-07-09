import { InMemoryDbService } from 'angular-in-memory-web-api';

export class DevDbService implements InMemoryDbService{
  createDb(){
    const data = {
      test: 'test'
    };
    return {data};
  }
}
