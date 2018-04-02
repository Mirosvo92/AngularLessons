import {Injectable} from '@angular/core';
import {HttpClient, HttpErrorResponse, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';


@Injectable()
export class MyServerService {
  constructor(private httpClient: HttpClient) {}

  getCars() {
    const headers = new HttpHeaders({
      'Miron': 'asdasdsadaddsfsdfsdfsdfdfggfdgsdf',
      'sex': 'a'
    });
    return this.httpClient.get('http://localhost:3000/cars', {
      headers: headers
    }).catch((err: HttpErrorResponse) => {
      // return Observable.throw(err.error);
      return Observable.throw('Сервер не доступен');
    });
  }

  getTitle() {
    return this.httpClient.get('http://localhost:3000/title');
  }

  addCar(carName: string, colorsCars: string) {
    const data = {
      name: carName,
      color: colorsCars
    };
    return this.httpClient.post('http://localhost:3000/cars', data);
  }

  newColor(el: object, color: string) {
    el['color'] = color;
    return this.httpClient.put(`http://localhost:3000/cars/${el['id']}`, el);
  }

  delCarFromServer(el: object) {
    return this.httpClient.delete(`http://localhost:3000/cars/${el['id']}`, el);
  }

}
