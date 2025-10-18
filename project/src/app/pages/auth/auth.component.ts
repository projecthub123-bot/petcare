import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
//import { MatInputModule } from '@angular/material/input';
//import { MatButtonModule } from '@angular/material/button';
//import { MatFormFieldModule } from '@angular/material/form-field';
//import { MatSelectModule } from '@angular/material/select';
import { trigger, state, style, transition, animate } from '@angular/animations';

@Component({
  selector: 'app-auth',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
  //  MatInputModule,
    //MatButtonModule,
    //MatFormFieldModule,
    //MatSelectModule
  ],
  templateUrl:[ './auth.component.html'],
  styleUrls: ['./auth.component.scss'],
  animations: [
    trigger('slideSwap', [
      state('login', style({
        transform: 'translateX(0)'
      })),
      state('signup', style({
        transform: 'translateX(0)'
      })),
      transition('login <=> signup', [
        animate('600ms cubic-bezier(0.4, 0.0, 0.2, 1)')
      ])
    ]),
    trigger('fadeSlide', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateX(30px)' }),
        animate('500ms ease-out', style({ opacity: 1, transform: 'translateX(0)' }))
      ]),
      transition(':leave', [
        animate('500ms ease-in', style({ opacity: 0, transform: 'translateX(-30px)' }))
      ])
    ])
  ]
})
export class AuthComponent {
  isLoginMode = true;

  loginData = {
    email: '',
    password: ''
  };

  signupData = {
    fullName: '',
    email: '',
    password: '',
    confirmPassword: '',
    petName: '',
    petType: ''
  };

  petTypes = ['Dog', 'Cat', 'Bird', 'Rabbit', 'Hamster', 'Fish', 'Other'];

  toggleMode(): void {
    this.isLoginMode = !this.isLoginMode;
  }

  onLogin(): void {
    console.log('Login:', this.loginData);
  }

  onSignup(): void {
    console.log('Signup:', this.signupData);
  }
}
