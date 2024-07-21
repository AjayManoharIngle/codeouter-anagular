import { Injectable } from "@angular/core"

@Injectable({
    providedIn:'root'
})
export class GlobalContactPage{

    // add header
    public header : string = "Contact Us"

    // Add your desc
    public desc :any = [
        {
            "icon":"bi bi-geo-alt",
            "title":"Location",
            "detail":"Codeouter, Sector 21 Ulwe,Navi Mumbai - 410206"
        },
        {
            "icon":"bi bi-envelope",
            "title":"Email",
            "detail":"codeouter987@gmail.com"
        },
        {
            "icon":"bi bi-phone",
            "title":"Call",
            "detail":"+91 8169485573"
        },
    ]
    
    // add your map source
    public mapSrc : string = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d60365.44076549955!2d73.00569414651753!3d18.98267020894915!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c2dfe25c1a09%3A0x484fc4d588630883!2sUlwe%2C%20Navi%20Mumbai%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1689520298602!5m2!1sen!2sin" 

    // add label to column 1
    public column1Label : {} = [
        "First Name","Last Name","Country"
    ]

    // add label to column 2
    public column2Label : {} = [
        "Email","Stream", "Phone Number"
    ]

    // add label for each field
    public oneFieldLabel : {} = [
        "Subject",
    ]

    // add message field
    public messageFieldLabel :string="Query"
    public messageRow : number = 5

    // name to button
    public nameButton : string = "SEND MESSAGE"

    // add script url for storing in excel sheet
    public excelSheet : string  = "https://sheetdb.io/api/v1/gcs3modtiwmvo"

    // Add success message
    public msg : string = "Your data successfully submitted. we will connect you soon."

    // https://docs.google.com/spreadsheets/d/1XE1KjZmGKExv7BP07wTy5RI5TmhJBzrKn2gH-enBZak/edit#gid=0
}