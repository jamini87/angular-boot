import {Component, OnDestroy, OnInit} from '@angular/core';
import {SignIn} from '../../model/dto/sign-in';
import {AuthService} from '../../endpoint/auth.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit, OnDestroy {

  constructor(public authService: AuthService,
              public router: Router,
              public activatedRoute: ActivatedRoute) {
  }

  ngOnInit() {
  }

  signIn() {

  }

  ngOnDestroy(): void {
  }
}
