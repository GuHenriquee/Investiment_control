import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';


@Component({
  selector: 'app-create-account',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './create-account.html',
  styleUrl: './create-account.css'
})
export class CreateAccount implements OnInit {
    
  constructor(private fb: FormBuilder) {} 
  userForm!: FormGroup;

  ngOnInit(): void {
      this.userForm = this.fb.group({
        name: ['', Validators.required],
        email: ['', Validators.email],
        password: ['', Validators.minLength(6)]
      })  

    }

  onSubmit(): void {
      console.log('Dados do formulário:', this.userForm.value);

  }





}
