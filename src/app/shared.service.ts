import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  message:string;

  constructor() { }

  setMessage(data){
    debugger;
    this.message=data;
  }
  
  getMessage(){
    debugger;
    return this.message;
  }
}
