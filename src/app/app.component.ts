import { Component, ViewChild } from '@angular/core';
import { Router, NavigationExtras } from '@angular/router';
import { ChildComponent } from './child/child.component';
import { SharedService } from './shared.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'SharingComponent';

  Message = "  Welcome to family";

  serviecMessage = 'Hi Ganesh';
  ChiledMessage: string;

  variable:any;

  @ViewChild(ChildComponent) child;

  constructor(private sharedService: SharedService, private router: Router) { }

  ngOnInit(): void {
    //Sharing Data With Service
    this.sharedService.setMessage(this.serviecMessage);    
    this.variable = this.child.variable;
  }

  //Getting Data By using @ViewChild
  

  //Getting the data by @Output Decorater and EventEmitter
  recieveMessage($event) {
    debugger;
    this.ChiledMessage = $event;
  }

  //Sharing Data by URL Parameter
  gotoChild() {
    debugger;
    this.router.navigateByUrl('/child/JaiHind');
  }

  //Sharing Data By Query Parameter
  gotochildwithparam() {
    debugger;
    this.router.navigate(['/child/Ganesh'],
      {
        queryParams:
          { source: 'Application' }
      }
    );
  }

  //Sharing the Data By Extra State
  GotoUser2() {
    debugger;
    let user = { name: 'Raja', age: 20, email: 'raja@mail.com' }
    let navigationExtras: NavigationExtras = {
      state: {
         user: 
         user }
    };
    this.router.navigate(['/child/Ganesh'], navigationExtras);
  }

}
