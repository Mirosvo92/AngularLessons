import {Component, OnInit, ViewChild} from '@angular/core';
import {NgForm, FormGroup, FormControl, Validators} from '@angular/forms';
import {reject} from 'q';

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.css']
})
export class FormsComponent implements OnInit {
  @ViewChild('formCallback') formCallback: NgForm;
  answers = [{
    type: 'yes',
    text: 'Да'
  }, {
    type: 'no',
    text: 'Нет'
  }];
  defaultAnswer = 'no';
  defaultCountry = 'ua';
  isSubmit = false;
  dataForm = {};

  // реактивные формы
  formR: FormGroup;
  formR2: FormGroup;
  formR3: FormGroup;
  formR4: FormGroup;
  constructor() { }

  ngOnInit() {
    // реактивные формы
    this.formR = new FormGroup({
      emailR: new FormControl('', [Validators.required, Validators.email]),
      passR:  new FormControl('', Validators.required),
      answerR: new FormControl('no'),
      countryR: new FormControl('ua')
    });

    this.formR2 = new FormGroup({
      user: new FormGroup({
        emailR: new FormControl('', Validators.required),
        passR:  new FormControl('', Validators.required)
      }),
      answerR: new FormControl('no'),
      countryR: new FormControl('ua')
    });

    this.formR3 = new FormGroup({
      user: new FormGroup({
        emailR: new FormControl('', [Validators.required, Validators.email]),
        passR:  new FormControl('', [Validators.required, this.checkForLenghth])
      }),
      answerR: new FormControl('no'),
      countryR: new FormControl('ua')
    });

    this.formR4 = new FormGroup({
      emailR: new FormControl('asd', [Validators.required, Validators.email], this.checkForEmail),
      passR:  new FormControl('', [Validators.required])
    });
  }
  // реактивные формы
  onSubmitFormR() {

  }
  // реактивные формы создание валидатора
  checkForLenghth(control: FormControl) {
    // возвращает либо ничего либо объект
    if (control.value.length <= 4) {
      return {
        lengthError : true
      };
    }
    return null;
  }

  // реактивные формы Создание асинхронного валидатора

  checkForEmail(control: FormControl): Promise<any> {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (control.value === 'test@i.ua') {
          resolve({
            'EmailUseddfsf': true
          });
        } else {
          console.log('asd');
          resolve(null);
        }
      }, 1000);
    });
  }

  submitForm(form: NgForm) {
    console.log(form);
  }

  submitForm1(form: NgForm) {
    console.log(form);
  }

  // динамическое изменение форм
  addSomeComment() {
    const someText = 'some text';
    // this.formCallback.setValue({
    //   name: '',
    //   comment: someText
    // });
    // недостаток данного метода в том , что необходимо указывать все поля формы
    this.formCallback.form.patchValue({
      comment: someText
    });
  }

  submitFormComment() {
    this.isSubmit = true;
    this.dataForm = this.formCallback.value;
  }

  onSubmitFormR4() {
    console.log(this.formR4);
  }


}
