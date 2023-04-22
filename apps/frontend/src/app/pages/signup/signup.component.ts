import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NbStepperComponent } from '@nebular/theme';

import Web3 from 'web3';

declare let window: any;
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
})
export class SignupComponent {
  private web3: Web3 | undefined;
  isConnected: Boolean = false;

  async connectMetaMask(stepper: NbStepperComponent) {
    if (window.ethereum) {
      this.web3 = new Web3(window.ethereum);
      try {
        await window.ethereum.request({ method: 'eth_requestAccounts' });
        const accounts = await this.web3.eth.getAccounts();
        const address = accounts[0];
        this.isConnected = true;
        console.log('Connected address:', address);
        stepper.next();
      } catch (error) {
        console.error('MetaMask connection failed:', error);
      }
    } else {
      console.error('MetaMask is not installed.');
    }
  }

  insuranceForm: FormGroup;

  constructor(private fb: FormBuilder, private router: Router) {
    this.insuranceForm = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', Validators.required],
      address: ['', Validators.required],
      city: ['', Validators.required],
      state: ['', Validators.required],
      zipCode: ['', Validators.required],
      insuranceType: ['', Validators.required],
    });
  }

  ngOnInit(): void {}

  onSubmit() {
    this.router.navigate(['/dashboard']);
    if (this.insuranceForm.valid) {
      console.log('Form submitted:', this.insuranceForm.value);
    }
  }
}
