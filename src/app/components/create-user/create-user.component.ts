import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/user';
import { UserService } from 'src/app/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.css']
})
export class CreateUserComponent implements OnInit {

  user: User = new User();
  submitted = false;

  constructor(private userService: UserService,
    private router: Router) { }

  ngOnInit() {
    this.newUser();
  }

  newUser(): void {
    this.submitted = false;
    this.user = new User();
    this.user.password = null;
    this.user.username = null;
  }

  save() {
    this.userService.createUser(this.user)
      .subscribe(data => console.log(data), error => console.log(error));
    this.user = new User();
    this.gotoUserPortal();
  }

  onSubmit() {
    this.submitted = true;
    this.save();    
  }

  gotoUserPortal() {
    this.router.navigate(['/user-portal']);
  }
}