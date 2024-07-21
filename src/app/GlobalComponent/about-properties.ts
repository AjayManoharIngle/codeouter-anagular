import { Injectable } from "@angular/core";

@Injectable({
    providedIn:'root'
})
export class GlobalAboutPage{

    // set image for about page
    public aboutImage:string="about.jpg"

    // set header line
    public header:string="Unleash the Power of Programming"

    // set desc for about
    public desc:string="Our mission is simple yet ambitious: to empower individuals with the knowledge and skills to excel in Java development. We envision a world where coding is accessible to all and where innovative solutions can transform industries."
    
    // keep points clear for about
    public points : {} = [
        "We firmly believe that the best way to learn Java is by doing. Our course is designed around practical, real-world projects that challenge and inspire learners.",
        "Learning is more enjoyable when you're part of a supportive community. Connect with fellow learners, participate in discussions, and get personalized assistance from our instructors.",
        "The world of technology is constantly evolving, and so are we. You'll receive lifetime access to the course materials, ensuring you stay up-to-date with the latest Java advancements."
    ]
}