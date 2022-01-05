import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  userName: any;
  userPassword: any;
   

  constructor(
    private router: Router,
 
  ) { }

  ngOnInit(): void {
    
    };
    
  
  onSubmit() {
    this.router.navigate(['']);
  }

  

}
