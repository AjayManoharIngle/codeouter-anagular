import { Component } from '@angular/core';
import { ImageBaseUrl } from 'src/app/global-services/all-image-base-url';
import { GlobalHeroSection } from 'src/app/GlobalComponent/hero-section-properties';
import { GlobalSwitchOnOffComponent } from 'src/app/GlobalComponent/switch-on-off-component';

@Component({
  selector: 'app-hero-section',
  templateUrl: './hero-section.component.html',
  styleUrls: ['./hero-section.component.css']
})
export class HeroSectionComponent {

  header1!:string 
  header2!:string
  buttonName!:string 
  buttonUrl!:string
  imageSrc!:string
  backImageSrc!:string 
  switch !: boolean

  constructor(private globalHeroSection:GlobalHeroSection, private imageBaseUrl:ImageBaseUrl,private globalSwitchOnOffComponent:GlobalSwitchOnOffComponent){
    this.header1=this.globalHeroSection.header1
    this.header2=this.globalHeroSection.header2
    this.buttonName=this.globalHeroSection.buttonName
    this.buttonUrl =this.globalHeroSection.buttonUrl
    this.imageSrc=this.imageBaseUrl.baseUrl+this.globalHeroSection.imageSrc
    this.backImageSrc= this.imageBaseUrl.baseUrl+this.globalHeroSection.backImageSrc
    this.switch=this.globalSwitchOnOffComponent.heroSection
  }
}
