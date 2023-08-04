import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  contactFormGroup!: FormGroup;
  public isFormSubmitted: boolean = false;
  public submitBtn: boolean = false;

  constructor(
    private formbuilder: FormBuilder
  ) { }

  ngOnInit() {
    window.scroll({
      top: 0,
      left: 0
    });
    this.contactFormGroup = this.formbuilder.group({
      fName: [null, [Validators.required, Validators.pattern('[a-zA-Z ]*')]],
      lName: [null, [Validators.required, Validators.pattern('[a-zA-Z ]*')]],
      emailId: [null, [Validators.required, Validators.pattern("[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,3}$"), Validators.maxLength(50)]],
      contactNo: [null, [Validators.required, Validators.pattern('[0-9]*'), Validators.minLength(10),
      Validators.maxLength(10)]],
      message: [null, [Validators.required, Validators.pattern('[a-zA-Z ]*'), Validators.maxLength(250)]],
    })
  }

  get contactForm() {
    return this.contactFormGroup.controls;
  }

  OnSubmit() {
    this.isFormSubmitted = true;
  }

  MouseOver() {
    if (this.contactFormGroup.invalid) {
      this.submitBtn = !this.submitBtn;
    }
  }

}
