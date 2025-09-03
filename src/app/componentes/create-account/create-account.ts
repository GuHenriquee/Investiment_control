import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { UserService } from '../../services/user-service';
import { User } from '../interfaces';


@Component({
  selector: 'app-create-account',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './create-account.html',
  styleUrl: './create-account.css'
})
export class CreateAccount implements OnInit {
    
  constructor(private fb: FormBuilder, private userService: UserService) {} 
  userForm!: FormGroup;

  ngOnInit(): void {
      this.userForm = this.fb.group({
        name: ['', Validators.required],
        email: ['', Validators.email],
        password: ['', Validators.minLength(6)]
      })  
    }

  onSubmit(): void {
      const userData: User = this.userForm.value 

      this.userService.register(userData).subscribe({ 
        next: (newUser) => {
          console.log('Usuário criado com sucesso!', newUser);
        },
        error: (err) => {
          console.error('Ocorreu um erro:', err);
        }
      });
  }

}
