import { ContactService } from './../../../services/contact/contact.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NzMessageService } from 'ng-zorro-antd';

@Component({
  selector: 'contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.css']
})
export class ContactFormComponent implements OnInit {
  contactForm: FormGroup;
  inputValue: string;
  options: string[] = []; 
  loader = false;

  constructor(private fb: FormBuilder, private service: ContactService, private message: NzMessageService) { }

  ngOnInit(): void {
    this.contactForm = this.fb.group({
      username: [null, [Validators.required]],
      email: [null, [Validators.required]],
      title: [null, [Validators.required]],
      message: [null, [Validators.required]],
    });    
  }

  onInput(e: Event): void {
    const value = (e.target as HTMLInputElement).value;
    if (!value || value.indexOf('@') >= 0) {
      this.options = [];
    } else {
      this.options = ['gmail.com', 'yahoo.com', 'hotmail.com'].map(domain => `${value}@${domain}`);
    }
  } 
  
  contact() {
    this.loader = true;

    let obj = {
      "username": this.contactForm.get('username').value,
      "email": this.contactForm.get('email').value,
      "title": this.contactForm.get('title').value,
      "message": this.contactForm.get('message').value
    }
    
    this.service.contact(obj).subscribe(
      res => {
        this.message.success('شكرا لتواصلكم معنا');
        
        console.log(res);

        this.contactForm.reset();
        
        this.loader = false;
      },
      err => {
        this.message.error('حدث خطأ اثناء ارسال رسالتكم, بالرجاء المحاولة مرة اخرى');
        this.loader = false;
      }
    )    
  }

}
