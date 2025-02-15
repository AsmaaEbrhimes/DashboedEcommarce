import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-verficationcode',
  templateUrl: './verficationcode.component.html',
  styleUrl: './verficationcode.component.scss'
})
export class VerficationcodeComponent implements OnInit{
  constructor(private FB:FormBuilder){ }
  ngOnInit(): void {
this.valueOtp()
  }
  otp!:FormGroup

  valueOtp(){
    this.otp = this.FB.group({
      valueotp:[0]
    })
  }
}
