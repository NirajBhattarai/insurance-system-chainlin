import { Component } from '@angular/core';
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
}
