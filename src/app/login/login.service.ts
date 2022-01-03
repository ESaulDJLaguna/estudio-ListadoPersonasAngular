import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { getAuth, signInWithEmailAndPassword, signOut } from 'firebase/auth';

@Injectable()
export class LoginService {
  token!: string;
  auth = getAuth();

  constructor(private router: Router) {}

  login(email: string, password: string) {
    signInWithEmailAndPassword(this.auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;

        user.getIdTokenResult().then((result) => {
          this.token = result.token;
          this.router.navigate(['/']);
        });
      })
      .catch((error) => {
        alert('Alguno de los datos es incorrecto\n' + error.message);
      });
  }

  getIdToken() {
    return this.token;
  }

  isAutenticado(): boolean {
    return this.token !== undefined && this.token !== '';
  }

  logout() {
    signOut(this.auth)
      .then(() => {
        this.token = '';
        this.router.navigate(['/login']);
      })
      .catch((error) => console.log('error logout: ' + error));
  }
}
