import { Component } from '@angular/core';
import { GlobalServiceComponent } from 'src/app/GlobalComponent/services-properties';
import { GlobalSwitchOnOffComponent } from 'src/app/GlobalComponent/switch-on-off-component';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css']
})
export class ServicesComponent {

  title !: string
  desc !: string
  serviceObj !: any
  switch !: boolean

   constructor(private globalServiceComponent:GlobalServiceComponent,private globalSwitchOnOffComponent:GlobalSwitchOnOffComponent){
    this.title = this.globalServiceComponent.title;
    this.desc=this.globalServiceComponent.desc;
    this.serviceObj =this.globalServiceComponent.serviceObj;
    this.switch=this.globalSwitchOnOffComponent.serviceSection
   }
}
