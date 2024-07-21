import { Component } from '@angular/core';
import { GlobalAboutPage } from 'src/app/GlobalComponent/about-properties';
import { ImageBaseUrl } from 'src/app/global-services/all-image-base-url';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent {

  aboutImage!:string
  header!:string
  desc!:string
  points!:any

  constructor(private globalAboutPage:GlobalAboutPage,imageBaseUrl:ImageBaseUrl){
    this.aboutImage=imageBaseUrl.baseUrl+this.globalAboutPage.aboutImage
    this.header=this.globalAboutPage.header
    this.desc=this.globalAboutPage.desc
    this.points=this.globalAboutPage.points
  }  
}
