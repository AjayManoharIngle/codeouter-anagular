import { Injectable } from "@angular/core"

@Injectable({
    providedIn:'root'
})
export class GloablReviewCourse{

    // 

    public allReviews : any = [
        {
            "id" : 1,
            "reviews" : [
                {
                    "stars" : 4.5,
                    "name" : "Rajesh Kumar",
                    "date" : "June 5 2022",
                    "desc" : "The String Mastery course in Java was a fantastic learning experience. What sets this course apart is the emphasis on practical exercises and real-world applications. Each module provided hands-on challenges that helped me solidify my understanding of string concepts."
                },
                {
                    "stars" : 3,
                    "name" : "Priya Patel",
                    "date" : "Oct 10 2023",
                    "desc" : "The instructor's engaging teaching style made complex topics feel approachable. Whether you're a beginner or an experienced Java developer, this course will undoubtedly sharpen your string manipulation skills.."
                },
                {
                    "stars" : 4,
                    "name" : "Sanjay Sharma",
                    "date" : "Nov 1 2023",
                    "desc" : " The content is well-structured and delivered concisely. The practical tips and tricks shared throughout the course were invaluable. I can already see the positive impact on my daily programming tasks. Don't miss this course if you want to enhance your productivity as a Java developer."
                },
                {
                    "stars" : 5,
                    "name" : "Anjali Singh",
                    "date" : "Sept 17 2023",
                    "desc" : "I have taken several Java courses before, but none have delved into string manipulation as thoroughly as this one. The String Mastery course provided in-depth coverage of various string methods, string formatting, and regular expressions in Java."
                },
            ]
            
        },
        {
            "id" : 2,
            "reviews" : [
                {
                    "stars":5,
                    "name" : "Sanjay Sharma",
                    "date" : "Dec 5 2022",
                    "desc" : "The Java - Array Mastery Course exceeded my expectations. The hands-on projects were undoubtedly the highlight of the course. They taught me how to apply array concepts to real-world scenarios, which is exactly what I needed to take my Java programming skills to the next level."
                },
                {
                    "stars":4,
                    "name" : "Rakesh Varma",
                    "date" : "May 1 2022",
                    "desc" : "I thoroughly enjoyed the Java - Array Mastery Course! The course content was well-organized and covered everything from the basics to advanced techniques. The best part was the practical projects. They were challenging but immensely rewarding. By the end of the course, I felt much more confident in my ability to handle arrays efficiently in my Java projects."
                },
                {
                    "stars":4,
                    "name" : "Suhas Ingle",
                    "date" : "June 5 2020",
                    "desc" :"I particularly appreciated the sections on multi-dimensional arrays and working with objects, as they provided valuable insights into managing complex data. The instructor's support was prompt, and the engaging community added to the overall learning experience. I highly recommend this course to anyone looking to master arrays in Java!"
                }
            ]
        },
        {
            "id" : 3,
            "reviews" : [
                {
                    "stars":4,
                    "name" : "Sneha Katake",
                    "date" : "May 9 2021",
                    "desc" : "As someone completely new to programming, the Basic Java Course was exactly what I needed to kickstart my learning journey.The step-by-step explanations and practical examples helped me grasp fundamental programming concepts effortlessly."
                },
                {
                    "stars":5,
                    "name" : "Jubin Shaikh",
                    "date" : "Apr 4 2022",
                    "desc" : "I highly recommend the Basic Java Course to anyone starting their programming journey with Java. It is an excellent foundation that equips you with the essential skills to move forward confidently in the world of Java development. I can't wait to explore more advanced Java courses after completing this one!"
                },
            ]
        },

    ]

}