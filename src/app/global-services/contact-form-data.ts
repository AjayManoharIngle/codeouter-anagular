import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core"
import { GlobalContactPage } from "../GlobalComponent/contact-properties";


@Injectable({
    providedIn:'root'
})
export class ContactService {

    execlUrl !: string

    constructor(private http: HttpClient,private globalContactPage:GlobalContactPage) {
        this.execlUrl = this.globalContactPage.excelSheet;
    }
  
    public saveUserData(user: FormData){
      return this.http.post<any>(this.execlUrl, user);
    }
}