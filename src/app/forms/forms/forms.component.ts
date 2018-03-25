import {Component, OnInit, ViewChild} from '@angular/core';
import {NgForm} from '@angular/forms';

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

  constructor() { }

  ngOnInit() {
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


}
