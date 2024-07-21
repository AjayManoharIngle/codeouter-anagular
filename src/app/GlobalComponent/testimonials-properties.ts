import { Injectable } from "@angular/core";

@Injectable({
    providedIn:'root'
})
export class GlobalTestimonialsComponent {

    // header name
    public header : string = "Testimonials"

    // desc 
    public desc : string = "Get inspired by the testimonials of aspiring coders who found their coding prowess with our Java Mastery course. Discover how our course empowered them to overcome initial hesitations and equipped them with the knowledge and skills to tackle complex Java projects with ease."

    // reviews of codeouter app
    public reviews : any = [
        {
            "id":1,
            "name" : "Namrata Mohite",
            "content":"I was a complete beginner in coding, but Java Mastery turned my fear into excitement! The course was well-structured and easy to follow, making complex Java concepts understandable. If you want to learn Java effectively and enjoy the journey, this course is a game-changer!",
            "img":"test-1.jpg",
            "position" : "System Engineer In TCS"
        },
        {
            "id":2,
            "name" : "Satshil Kate",
            "content":"As an experienced Java developer, I wanted to upskill and stay updated. The hands-on projects challenged me and improved my problem-solving skills. Java Mastery is the go-to course for any serious developer looking to take their Java skills to the next level. I highly recommend it!.",
            "img":"test-2.jpg",
            "position" : "Software Developer In Newgen Software"
        },
        {
            "id":3,
            "name" : "Sampoorna Kotha",
            "content":"The course has clear explanations and fun projects. The instructors were patient and quick to respond to questions. Java Mastery covers Whether you're a beginner or an experienced developer, this course will elevate your Java skills and ignite your passion for coding.",
            "img":"test-3.jpg",
            "position" : "Java Software Engineer in TCS"
        },
        {
            "id":4,
            "name" : "Arpit Kongare",
            "content":"The step-by-step approach helped me build a strong foundation in Java. The practical projects were fun and relevant, and I loved seeing my progress as I completed each one. The instructors were knowledgeable and made complex topics easy to grasp",
            "img":"test-4.jpg",
            "position" : "Sr. Software Engineer in Capgemini"
        },
        {
            "id":5,
            "name" : "Vijay Ingle",
            "content":" The course materials were well-organized, and the videos were concise yet thorough. The course provided me with the skills and knowledge to tackle real-world Java projects. I can't thank Java Mastery enough for transforming my coding abilities",
            "img":"test-5.jpg",
            "position" : "Sr. JAVA Developer In Newgen Soft"
        },
        {
            "id":6,
            "name" : "Sneha Khatke",
            "content":"The projects were practical and allowed me to apply what I learned immediately. The support team was quick to respond to any inquiries, creating a positive and encouraging learning environment. I never felt overwhelmed, and the course's pace was perfect.",
            "img":"test-6.jpg",
            "position" : "Software Engineer in Capgemini"
        },
    ]
}