import { Component } from '@angular/core';

import Web3 from 'web3';

declare let window: any;

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  private web3: Web3 | undefined;

  async connectMetaMask() {
    if (window.ethereum) {
      this.web3 = new Web3(window.ethereum);
      try {
        await window.ethereum.request({ method: 'eth_requestAccounts' });
        const accounts = await this.web3.eth.getAccounts();
        const address = accounts[0];
        console.log('Connected address:', address);
      } catch (error) {
        console.error('MetaMask connection failed:', error);
      }
    } else {
      console.error('MetaMask is not installed.');
    }
  }
}
