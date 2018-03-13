import {InMemoryDbService} from 'angular-in-memory-web-api';

export class InMemoryDataService implements InMemoryDbService {
    createDb() {
        const pros = [
            {id: 1, text: 'pros 1'},
            {id: 2, text: 'pros 2'},
            {id: 3, text: 'pros 3'}
        ];
        const cons = [
            {id: 1, text: 'cons 1'},
            {id: 2, text: 'cons 2'},
            {id: 3, text: 'cons 3'}
        ];
        
         
        return {pros, cons};
    }
}
