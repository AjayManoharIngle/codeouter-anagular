import { Injectable } from "@angular/core"

@Injectable({
    providedIn:'root'
})
export class GlobalFooterComponent{

    // change name of app
    public app_name : string = "CodeOuter"

    // Add address line 
    public address :any = ["Codeouter, Sector 21","Ulwe,Navi Mumbai - 410206"]

    // add phone no
    public phone :string = " +91 8692803088"

    // add email address
    public email : string = " codeouter987@gmail.com"

    // add social Link
    public addSocialLink : {}= [
        {"facebook":"https://www.facebook.com/profile.php?id=100075925807919"},
        {"instagram":"https://www.instagram.com/code.outer/"},
        {"linkedin":"https://www.linkedin.com/company/codeouter/?viewAsMember=true"},
        {"whatsapp":"#"}
    ]

    // add useful url and name
    public headerLink :string = "Use-Ful Links"
    public usefulLinks :{}= [
        {
            "name" : "Home",
            "url" : "/home"
        },
        {
            "name" : "About us",
            "url" : "/about"
        },
        {
            "name" : "Terms of service",
            "url" : "/terms"
        },
        {
            "name" : "Privacy policy",
            "url" : "/policy"
        }
    ]

    // take all services
    public headerService :string = "Our Services"
    //public allservices : any = GlobalComponent.GlobalServiceComponent.serviceObj;

    // add limit to services to show
    public limit : number = 5

    // add name of designer of application
    public designer_name : string ="Ajay Ingle"

    // add new letter info
    public headerNewsLetter :string = "Subscribe to codeouter"
    public descNewsLetter :string = "Please subscribe to get more updates of latest courses."
    public buttonNameNewsLetter : string = "Subscribe"

    // add script url for storing in excel sheet
    public excelSheetEmail : string  = "https://sheetdb.io/api/v1/nvtb1ri9o749s"

    // Add success message
    public msg : string = "You have subscribed email list successfully."

    // https://docs.google.com/spreadsheets/d/1P92uUXFJvD7kntlWeP3VZhnkVJuRg2R0T8M7ldxoBgQ/edit#gid=0
}