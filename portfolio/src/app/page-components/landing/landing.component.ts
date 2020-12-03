import { Component, ElementRef, Injector, OnInit, ViewChild } from '@angular/core';
import { NgbProgressbarConfig } from '@ng-bootstrap/ng-bootstrap'

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css'],
  providers: [NgbProgressbarConfig],
  styles: [`
    ngb-progressbar {
      margin-top: 5rem;
    }
  `]
})
export class LandingComponent implements OnInit {

  constructor(
    config: NgbProgressbarConfig) {
    // customize default values of progress bars used by this component tree
    config.max = 100;
    config.striped = true;
    config.animated = true;
    config.type = 'success';
    config.height = '20px';
  }
  ngOnInit(): void {

  }
  ngAfterViewInit() {
    console.log(this.wMsg.nativeElement.innerHTML);
    // this.alertMsg();
  }


  @ViewChild('welcomeMessage') wMsg: ElementRef;
  // alertMsg() {
  //   if (this.wMsg.nativeElement.innerHTML.trim() == "Welcome...") {
  //     setTimeout(() => {
  //       this.wMsg.nativeElement.innerHTML = "My name is Jordan Parker, a Java full stack developer..."
  //       this.wMsg.nativeElement.style.transition()
  //     }, 5000);
  //   }
  // }

}
