import { Injectable } from "@angular/core"

@Injectable({
    providedIn:'root'
})
export class GlobalNavbarComponent{

    // fixed menu - change name
    public app_name : string = "CodeOuter"
    public homeName : string = "Home"
    public aboutName : string = "About"
    public courseName : string = "Courses"
    public contactName : string = "Contact"

    // on and off - dropdown
    public showDropDown : boolean = false

    // Add your drop down
    public addDropDownItem : {} =[
        "Core JAVA",
        "Spring Framework"
    ]
}