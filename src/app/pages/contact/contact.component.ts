import { Component } from '@angular/core';
import { ContactService } from 'src/app/global-services/contact-form-data';
import { GlobalContactPage } from 'src/app/GlobalComponent/contact-properties';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {

  header!:string
  desc!:any
  mapSrc!:string
  column1Label!:any
  column2Label!:any
  oneFieldLabel!:any
  messageFieldLabel!:string
  messageRow!:number
  nameButton!:string
  msg !: string
  

  constructor(private globalContactPage:GlobalContactPage, private contactService : ContactService) {
    this.header=this.globalContactPage.header
    this.desc=this.globalContactPage.desc
    this.mapSrc=this.globalContactPage.mapSrc
    this.column1Label=this.globalContactPage.column1Label
    this.column2Label=this.globalContactPage.column2Label
    this.oneFieldLabel=this.globalContactPage.oneFieldLabel
    this.messageFieldLabel=this.globalContactPage.messageFieldLabel
    this.messageRow=this.globalContactPage.messageRow
    this.nameButton=this.globalContactPage.nameButton
    this.msg = this.globalContactPage.msg
  }

  saveContactUser(data : FormData){
    this.contactService.saveUserData(data).subscribe((result)=>{
      console.log(result.created)
      if(result.created == 1){
        alert(this.msg)
      }
    }
    )
  }
}
