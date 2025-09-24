import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { UserService } from '../../services/user-service';

@Component({
  selector: 'app-login',
  imports: [ReactiveFormsModule],
  templateUrl: './login.html',
  styleUrl: './login.css'
})
export class Login implements OnInit{

  constructor(private fb:FormBuilder, private us: UserService){}

  loginForm!: FormGroup

  ngOnInit() {
    this.loginForm = this.fb.group({
        email: ['', Validators.email],
        password: ['', Validators.minLength(6)]
      })  
    }

    onSubmit(){
      const loginData:Login = this.loginForm.value

      this.us.login(loginData).subscribe({ 
        next: (data) => {
          console.log('Usuário criado com sucesso!', data);
          // Você também pode salvar no localStorage para usar em toda a aplicação
          localStorage.setItem('accessToken', data.access_token);
        },
        error: (err) => {
          console.error('Ocorreu um erro:', err);
        }
      });

}
}