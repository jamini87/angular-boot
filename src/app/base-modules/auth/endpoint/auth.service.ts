import {Injectable} from '@angular/core';
import {SignIn} from '../model/dto/sign-in';

@Injectable()
export class AuthService{

  constructor() {
  }

  signIn(signIn: SignIn) {
    return null;
  }

  signOut() {
    // // Worked VVG
    // LocalStorage.ClearLocalStorage();
    // Worked VVG Too
    return null;
  }
}
