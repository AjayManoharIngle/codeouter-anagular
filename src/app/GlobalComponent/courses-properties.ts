import { Injectable } from "@angular/core"
import { ImageBaseUrl } from "../global-services/all-image-base-url"

@Injectable({
    providedIn:'root'
})
export class GlobalCourseComponent{

    // add title of course section
    public homePageTitle : string = "Popular Courses"
    public coursePagetitle : string = "All available Courses"

    // add desc 
    public desc : string = "Whether you're an aspiring professional seeking to upskill, an enthusiast exploring new passions, or a seasoned learner looking for the next level of expertise, our popular courses are your gateway to success. Embrace the opportunity to learn from the best, achieve your dreams, and excel in your chosen field with our Popular Course."

    // add your courses categeory
    public categeory : any = [
        "Java-string",
        "Java-array",
        "Core JAVA"
    ]

    // show categeory switch
    public switchCourseTag : boolean = false;

    // add your course details 
    public courses : any = [
        {
            "id":1,
            "imgUrl":"java-string.png",
            "title":"String Mastery",
            "categeory":this.categeory[0],
            "price":149,
            "currency":"Rs"
        },
        
        {
            "id":3,
            "imgUrl":"java-basic.png",
            "title":"Basic JAVA ",
            "categeory":this.categeory[2],
            "price":399,
            "currency":"Rs"
        },
        {
            "id":2,
            "imgUrl":"java-array.png",
            "title":"Array Mastery",
            "categeory":this.categeory[1],
            "price":149,
            "currency":"Rs"
            
        },
        {
            "id":4,
            "imgUrl":"course2.png",
            "title":"Full Java Mastery Course",
            "categeory":this.categeory[2],
            "price":500,
            "currency":"Rs"
        }
    ]

    // limit to show courses at home page 
    public homelimit : number = 3;

    // remove coureses from list of courses 
    public courseRemoveId : any=[4];

}