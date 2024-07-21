import { Injectable } from "@angular/core"

@Injectable({
    providedIn:'root'
})
export class GloablAboutCourse{

    // course about - should have 1 point at least in about json
    // mention course ID

    public courseAbout : any = [
        {
            "id":1,
            "about":[
                {
                    1:'In this course, you will embark on an exciting journey to discover the power and versatility of Java Strings. Starting with the basics, you\'ll quickly progress to advanced techniques, exploring various methods to manipulate, concatenate, and search for specific substrings. Learn how to use String buffer & bulider in depth, understand SCP concept in depth, and efficiently build text util project.',
                },
                {
                    2:'Our expert instructors will guide you through a series of real-world projects, enabling you to apply your newfound knowledge in practical scenarios. Whether you\'re building web applications, data processing systems, or software solutions, this course will equip you with the skills needed to tackle any text-related challenge.'
                },
                
            ],
        },
        {
            "id":2,
            "about":[
                {
                    1:'The course begins with a solid introduction to arrays, exploring their syntax, declaration, initialization, and common pitfalls. As the course progresses, participants will dive into multi-dimensional arrays, enabling them to work with complex data sets and tackle more advanced programming challenges. They will master the concepts of jagged arrays, 2D arrays, and arrays of objects, gaining the skills necessary to build more application.',
                },
                {
                    2:'Throughout the course, participants will engage in a series of practical projects, ensuring a hands-on approach to learning. Unlock the true potential of arrays in Java and become a proficient programmer capable of handling complex data structures with confidence. Enroll in the Array Mastery Course today and take a significant step forward in your Java programming journey.'
                }
            ],
        },
        {
            "id":3,
            "about":[
                {
                    1:'The Basic Java Course is a comprehensive introduction to programming using the Java language. This course is designed for beginners with little to no prior programming experience. Participants will learn the fundamental concepts of Java and gain practical skills to write simple Java programs.',
                },
                {
                    2:'Throughout the course, participants will engage in hands-on projects and exercises that reinforce the concepts learned. These practical projects will cover various real-world scenarios and challenges, helping learners apply their knowledge effectively.'
                }
            ],
        },
        {
            "id":4,
            "about":[
                {
                    1:'You\'ll use Spring Cloud Config to manage your applications configuration.You\'ll send and receive messages with Pub/Sub and SpringIntegration. You\'ll also use Cloud SQL as a managed relational database for your Java applications, and learn how to migrate to Cloud Spanner,which is Google Cloud\'s globally-distributed strongly consistent database service. You\'ll also learn about tracing and debugging your Spring applications with Google Cloud\'s operations suite.',
                },
            ],
        }
    ]
}