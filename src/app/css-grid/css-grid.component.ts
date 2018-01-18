import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, AbstractControl, ValidatorFn, FormArray } from '@angular/forms';

import 'rxjs/add/operator/debounceTime';

import { Customer } from './customer';

function emailMatcher(c: AbstractControl): {[key: string]: boolean} | null {
    let emailControl = c.get('email');
    let confirmControl = c.get('confirmEmail');

    if (emailControl.pristine || confirmControl.pristine) {
      return null;
    }

    if (emailControl.value === confirmControl.value) {
        return null;
    }
    return { 'match': true };
 }

@Component({
  selector: 'app-css-grid',
  templateUrl: './css-grid.component.html',
  styleUrls: ['./css-grid.component.scss']
})
export class CssGridComponent implements OnInit {
  customerForm: FormGroup;
  customer: Customer = new Customer();
  emailMessage: string;

  get addresses(): FormArray{
      return <FormArray>this.customerForm.get('addresses');
  }

  private validationMessages = {
      required: 'Please enter your email address.',
      pattern: 'Please enter a valid email address.'
  };

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
      this.customerForm = this.fb.group({
          firstName: ['', [Validators.required, Validators.minLength(3)]],
          lastName: ['', [Validators.required, Validators.maxLength(50)]],
          emailGroup: this.fb.group({
              email: ['', [Validators.required, Validators.pattern('[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+')]],
              confirmEmail: ['', Validators.required],
          }, {validator: emailMatcher}),
          phone: '',
          notification: 'email',
          sendCatalog: true,
          addresses: this.fb.array([this.buildAddress()])
      });

      this.customerForm.get('notification').valueChanges
                       .subscribe(value => this.setNotification(value));

      const emailControl = this.customerForm.get('emailGroup.email');
      emailControl.valueChanges.debounceTime(1000).subscribe(value =>
          this.setMessage(emailControl));
  }

  addAddress(): void {
      this.addresses.push(this.buildAddress());
  }

  removeAddress(index:number){
    this.addresses.removeAt(index);
  }

  buildAddress(): FormGroup {
      return this.fb.group({
              addressType: 'home',
              street1: '',
              street2: '',
              city: '',
              state: '',
              zip: ''
      });
  }

  populateTestData(): void {
      this.customerForm.patchValue({
          firstName: 'Jack',
          lastName: 'Harkness',
          emailGroup: {email: 'jack@torchwood.com', confirmEmail: 'jack@torchwood.com'}
      });
  }

  save(): void {
      console.log('Saved: ' + JSON.stringify(this.customerForm.value));
  }

  setMessage(c: AbstractControl): void {
      this.emailMessage = '';
      if ((c.touched || c.dirty) && c.errors) {
          this.emailMessage = Object.keys(c.errors).map(key =>
              this.validationMessages[key]).join(' ');
      }
  }

  setNotification(notifyVia: string): void {
      const phoneControl = this.customerForm.get('phone');
      if (notifyVia === 'text') {
          phoneControl.setValidators(Validators.required);
      } else {
          phoneControl.clearValidators();
      }
      phoneControl.updateValueAndValidity();
  }
}
