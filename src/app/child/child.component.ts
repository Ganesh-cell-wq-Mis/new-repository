import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { SharedService } from '../shared.service';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss']
})
export class ChildComponent implements OnInit {

  //Getting Data From Parent 
  @Input() data: string;
  @Output() event = new EventEmitter<string>();

  message: string = "Hello From The From Other Side";
  serviceMessage: string;
  source: any;
  Passingdata: any;

  variable:'Hi Ganesh This is ViewChild';

  constructor(private sharedService: SharedService, private activatedroute: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    debugger;
    //Getting Data by using Service
    this.serviceMessage = this.sharedService.getMessage();

    //Getting Data by using URL Parameter
    this.activatedroute.paramMap.subscribe(params => {
      this.Passingdata = params.get('userId');
    });

    //Getting Data By Using Query Parameter
    this.source = this.activatedroute.snapshot.queryParamMap.get('source');

    //Getting Data By Using Extra State
    if (this.router.getCurrentNavigation().extras.state) {
      let user = this.router.getCurrentNavigation().extras.state.user;
      console.log(user);
    }
  }

  //Sending Data By Using @output Decorator & EventEmitter
  sendMessage() {
    this.event.emit(this.message);
  }

}
