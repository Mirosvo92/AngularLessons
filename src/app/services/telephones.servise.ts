export class TelephonesService {

  telephones: [{name: string, isSold: boolean }] = [
    {name: 'Nokia', isSold: false},
    {name: 'Siemens', isSold: false},
    {name: 'Samsung', isSold: false}
  ];

  addTelephone(telephone: string) {
    this.telephones.push({name: telephone, isSold: false});
  }
}
