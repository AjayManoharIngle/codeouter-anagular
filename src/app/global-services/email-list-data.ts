import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core"
import { GlobalFooterComponent } from "../GlobalComponent/footer-properties";


@Injectable({
    providedIn:'root'
})
export class EmailSubscribeService {

    execlUrl !: string

    constructor(private http: HttpClient,private globalFooterComponent:GlobalFooterComponent) {
        this.execlUrl = this.globalFooterComponent.excelSheetEmail;
    }
  
    public saveEmailData(user: FormData){
      return this.http.post<any>(this.execlUrl, user);
    }
}