import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor( private router: Router ) { }

  ngOnInit() {
  }

  gotoCreateUser() {
    this.router.navigate(['/create-user']);
  }

  gotoUserPortal() {
    this.router.navigate(['/user-portal']);
  }

}
