import { ajax } from 'rxjs/ajax';

const users = ajax<any>('https://random-data-api.com/api/name/random_name');

users.subscribe((data) => console.log(data.response.first_name));
