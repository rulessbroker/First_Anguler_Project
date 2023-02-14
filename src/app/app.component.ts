import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Hello World';
  imgUrl = '../assets/BridgeLabz.jpg';
  blUrl = "https://www.bridgelabz.com/";
  userName : String = "";

  ngOnInit():void{
    this.title = "Hello from Bridgelabz";
  }


  onClick($event: any){
    console.log("logo is clicked", $event);
    window.open(this.blUrl, "_blank")
  }

}

