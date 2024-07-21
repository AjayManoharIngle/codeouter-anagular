import { Injectable } from "@angular/core"

@Injectable({
    providedIn:'root'
})
export class GloablLearnPointCourse{

    // write learning points of courses
    // mention course ID

    public learningPoint : any = [
        {
            "id":1,
            "points": [
                "Understand the fundamentals of Java Strings and their importance in programming",
                "Master essential String methods for modification, comparison, and retrieval of data",
                "Understand SCP Concept and heap concept in depth",
                "Solve Assignment programs on string for master in string concept",
                "Build real-world applications like text utils to handle opeartions on text",
                "Receive dedicated support from instructors for clarifications and guidance"
            ]
        },
        {
            "id":2,
            "points": [
                "Understand the concept of arrays as a fundamental & learn the syntax for declaring and initializing arrays",
                "Master the use of one & multi-dimensional arrays for storing and accessing data & jagged array",
                "Solve practical problems using arrays, applying problem-solving skills to real-world scenarios.",
                "Gain insights into memory allocation and management for arrays in Java.",
                "Develop debugging skills to identify and resolve array-related issues.",
                "Receive dedicated support from instructors for clarifications and guidance"
            ]
        },
        {
            "id":3,
            "points": [
                "Understand the core concepts of programming, such as variables, data types, and basic syntax.",
                "Learn about conditional statements (if-else, switch) and looping constructs to control program flow.",
                "Grasp the concept of methods and functions to modularize code and improve code reusability."
            ]
        },
    ]
}