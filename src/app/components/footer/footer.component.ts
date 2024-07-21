import { Component } from '@angular/core';
import { GlobalFooterComponent } from 'src/app/GlobalComponent/footer-properties';
import { GlobalServiceComponent } from 'src/app/GlobalComponent/services-properties';
import { EmailSubscribeService } from 'src/app/global-services/email-list-data';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {

  appName !: string 
  phone!: string 
  email !: string
  address !: any 
  socialLink !: any
  links!:any
  headerLink !: string
  services !:any
  headerService!: string
  name !: string 
  limit !: number
  headerNewsLetter !: string
  descNewsLetter!:string
  buttonNameNewsLetter!:string
  keys !: string
  msg !: string
 
  constructor(private globalFooterComponent:GlobalFooterComponent,
    private globalServiceComponent:GlobalServiceComponent,
    private listOfEmailService : EmailSubscribeService ){
    this.appName = this.globalFooterComponent.app_name
    this.phone= this.globalFooterComponent.phone
    this.email= this.globalFooterComponent.email
    this.address= this.globalFooterComponent.address
    this.socialLink= this.globalFooterComponent.addSocialLink
    this.links=this.globalFooterComponent.usefulLinks
    this.headerLink=this.globalFooterComponent.headerLink
    this.services=this.globalServiceComponent.serviceObj
    this.headerService=this.globalFooterComponent.headerService
    this.name= this.globalFooterComponent.designer_name
    this.limit= this.globalFooterComponent.limit
    this.headerNewsLetter= this.globalFooterComponent.headerNewsLetter
    this.descNewsLetter=this.globalFooterComponent.descNewsLetter
    this.buttonNameNewsLetter=this.globalFooterComponent.buttonNameNewsLetter
    this.msg = globalFooterComponent.msg
  }

  getkeys(key:string) {
    return Object.keys(key)
  }

  getValues(value:string){
    return Object.values(value);
  }

  saveEmailUser(data : FormData){
    this.listOfEmailService.saveEmailData(data).subscribe((result)=>{
      console.log(result.created)
      if(result.created == 1){
        alert(this.msg)
      }
    }
    )
  }
}
