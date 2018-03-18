import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterPipe'
})
export class FilterPipePipe implements PipeTransform {

  transform(carList, searchStr: string, description: string ) {
    if ( carList.length === 0 || searchStr === ' ') {
      return carList;
    }

    return carList.filter((car) => (car[description] + car.name).replace(/\s+/g,'').toLowerCase().indexOf(searchStr.toLowerCase()) !== -1);
  }

}
