import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators, ɵInternalFormsSharedModule, ReactiveFormsModule } from '@angular/forms';
import { OperationsService } from '../../services/operations-service';
import { Operation } from './operation';

@Component({
  selector: 'app-dealer',
  imports: [ɵInternalFormsSharedModule, ReactiveFormsModule],
  templateUrl: './dealer.html',
  styleUrl: './dealer.css'
})

export class Dealer implements OnInit {

  operation!: FormGroup

  constructor(private fb:FormBuilder, private op: OperationsService){}

   ngOnInit() {
    this.operation = this.fb.nonNullable.group({
      amount: [0, Validators.min(1)],
      operationType: [''],
      previousValue:[0],
    })
}
  
  onSubmit(){
    const data: Operation = this.operation.value
    console.log("Enviando para a API:", data);

    this.op.sendOperation(data).subscribe({ 
        next: (newOperation) => {
          console.log('Usuário criado com sucesso!', newOperation);
        },
        error: (err) => {
          console.error('Ocorreu um erro:', err);
        }
      });
  }

}
