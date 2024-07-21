import { Injectable } from "@angular/core"

@Injectable({
    providedIn:'root'
})
export class GlobalFreqQueComponent{

    // change title
    public title: string = "Frequently Asked Questions";

    // fixed all frequent questions
    public queAnsObj : {} = [
        {   
            "que":"How much do I need to invest to start learning Core Java Course?",
            "ans":"Core Java courses don’t have to be expensive. You can start with your laptop/desktop and internet connection."
        },
        {   
            "que":"What I will learn in this course?",
            "ans":"You will learn all about core Java from the beginning as well as the collections framework in Java and the new latest features of Java 8. If you don’t know how to do programming in Java then in this course you will learn how to write code in Java and other Java concepts like OOPS, Exception Handling, Serialization, and many more which are used in industry."
        },
        {   
            "que":"Will I get help if I would have any questions?",
            "ans":"Yes, you will get lifetime free support from us and we will help you out with all your queries."
        },
        {   
            "que":"Will I get job if I complete this course?",
            "ans":"Well, to be very honest, you learn all the Java concepts here and then you will be ready for the job but we don’t guarantee as it is up to your abilities to get the job."
        }
    ];
}