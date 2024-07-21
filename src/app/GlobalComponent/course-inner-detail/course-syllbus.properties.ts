import { Injectable } from "@angular/core"

@Injectable({
    providedIn:'root'
})
export class GloablSyllbusCourse{

    public courseSyllbus : any = [
        {
            "id":1,
            "content":[
                {
                    "title":"String 01 : String Need",
                        "duration":28,
                        "points" : [
                            "Need of String",
                            "Why string is immutable",
                            "How heap memory works with string",
                            "How SCP works with string",
                            "Type 1 : String Literals",
                            "Type 2 : String with new keyword",
                            "Basic Example"
                        ]
                },
                {
                    "title":"String 02 : Programs on SCP & HEAP Concept",
                        "duration":29,
                        "points" : [
                            "Six program on SCP & Heap to understand concept in-depth",
                        ]
                },
                {
                    "title":"String 03 : String Methods",
                        "duration":24,
                        "points" : [
                            "Method 1 : string charAt()",
                            "Method 2 : string length()",
                            "Method 3 : string trim()",
                            "Method 4 : string lowercase()",
                            "Method 5 : string uppercase()",
                            "Method 6 : string substring()",
                            "Method 7 : string replace()",
                            "Method 8 : string contains()",
                            "Method 9 : string indexOf()",
                        ]
                },
                {
                    "title":"String 04 : String Tokenizer",
                        "duration":14,
                        "points" : [
                            "Why we need string tokenizer",
                            "What is hasMoreTokens() & nextToken() method",
                            "What is countTokens() method",
                            "Program : To find sum of all numbers present in string"
                        ]
                },
                {
                    "title":"String 05 : String Joiner",
                        "duration":9,
                        "points" : [
                            "Why we need string joiner",
                            "How prefix & sufix works",
                            "How to use merge method in string joiner",
                        ]
                },
                {
                    "title":"String 06 : Assignment Program",
                        "duration":25,
                        "points" : [
                            "Program 1 : Count characters in string",
                            "Program 2 : Count of vowels & constants & number in string",
                            "Program 3 : Palindrome string",
                        ]
                },
                {
                    "title":"String 07 : String Buffer & Builder Concept",
                        "duration":27,
                        "points" : [
                            "What is String buffer",
                            "Discuss important points on string buffer",
                            "How equals & == method works with buffer & builder",
                            "Discuss capcity of string buffer & builder"
                        ]
                },
                {
                    "title":"String 08 : String Buffer & Builder Methods",
                        "duration":11,
                        "points" : [
                            "Method 1 : append()",
                            "Method 2 : insert()",
                            "Method 3 : replace()",
                            "Method 4 : delete()",
                            "Method 5 : reverse()"
                        ]
                },
                {
                    "title":"String 09 : Conversions in string",
                        "duration":12,
                        "points" : [
                            "Conversion 1 : String to String Buffer",
                            "Conversion 2 : String to String Builder",
                            "Conversion 3 : String Buffer to String",
                            "Conversion 4 : String Builder to string",
                            "Conversion 5 : String Buffer to String Builder",
                            "Conversion 6 : String Builder to String Buffer",
                        ]
                },
                {
                    "title":"String 10 : Important differences in string",
                        "duration":11,
                        "points" : [
                            "Difference 1 : String with String Buffer",
                            "Difference 2 : String Buffer with String Builder",
                        ]
                },
                {
                    "title":"String 11 : Project on string & methods concept",
                        "duration":57,
                        "points" : [
                            "Project Name : Text-utils in string",
                            "Understand problem statement of project",
                            "Overview of project output",
                            "Task 1 : craete menu for project",
                            "Task 2 : get strings from user",
                            "Task 3 : create switch case for each menu",
                            "Task 4 : write logic for convert into upperCase",
                            "Task 5 : write logic for convert into lowerCase",
                            "Task 6 : write logic for convert into sentenceCase",
                            "Task 7 : write logic for convert into titleCase",
                            "Task 8 : write logic for count total no of word",
                            "Task 9 : write logic for count total no of character",
                            "Task 10 : write logic to find digits in string",
                        ]
                },
            ]
        },
        {
            "id":2,
            "content":
                [
                    {
                        "title":"Array 01 : Inroduction to Array",
                        "duration":18,
                        "points" : [
                            "Need of Array",
                            "What is Array",
                            "Advantages of array",
                            "Disadvantages of array"
                        ]
                    },
                    {
                        "title":"Array 02 : One Dimensional",
                        "duration":27,
                        "points" : [
                            "Introduction on types of array",
                            "Why we need 1D array",
                            "Understand memory diagram of 1D",
                            "How to declare 1D array",
                            "How to initialize 1D array",
                            "Iterate array using for-loop & for each",
                            "Task on 1D array",
                        ]
                    },
                    {
                        "title":"Array 03 : Two Dimensional",
                        "duration":34,
                        "points" : [
                            "Introduction on 2D Array",
                            "Why we need 2D array",
                            "Understand memory diagram of 2D",
                            "How to declare 2D array",
                            "How to initialize 2D array",
                            "Discuss 3 important concept of 1D",
                            "Iterate array using for-loop & for each",
                        ]
                    },
                    {
                        "title":"Array 04 : Three & Multi Dimensional",
                        "duration":26,
                        "points" : [
                            "Introduction on 3D Array",
                            "Why we need 3D array",
                            "Understand memory diagram of 3D",
                            "How to declare 3D array",
                            "How to initialize 3D array",
                            "Iterate array using for-loop & for each",
                        ]
                    },
                    {
                        "title":"Array 05 : Jagged Array",
                        "duration":7,
                        "points" : [
                            "Introduction of Jagged Array",
                            "Why we need Jagged Array",
                            "Iterate array using for-loop",
                        ]
                    },
                    {
                        "title":"Array 06 : Final Array",
                        "duration":6,
                        "points" : [
                            "What is Final keyword",
                            "Why we need Final Array",
                            "Example of final array",
                        ]
                    },
                    {
                        "title":"Array 07 : Passing array to method",
                        "duration":16,
                        "points" : [
                            "Understand concept using examples",
                            "Program 1 : To find even and odd number from array",
                            "Program 2 : To find minimum number from array",
                        ]
                    },
                    {
                        "title":"Array 08 : Anonymous and return array",
                        "duration":13,
                        "points" : [
                            "What is anonymous array",
                            "Program 1: To find maximum number from array",
                            "How to return array from method",
                            "Program 2: Double each value in array"
                        ]
                    },
                    {
                        "title":"Array 09 : Arrays static methods",
                        "duration":18,
                        "points" : [
                            "What are the build-in array types",
                            "What is purpose of arrays library",
                            "Arrays toString() method",
                            "Arrays sort() method",
                            "Arrays binarySearch() method",
                            "Arrays copyOf() method",
                            "Arrays fill() method",
                            "Arrays equals() method"
                        ]
                    },
                    {
                        "title":"Array 10 : Array Reflection",
                        "duration":13,
                        "points" : [
                            "What is array reflection",
                            "Why we need array reflection concept",
                            "How to create instance with one dimensional",
                            "How to use in-build setter and getter methods in 1D",
                            "How to create instance with two dimensional",
                            "How to use in-build setter and getter methods in 2D"
                        ]
                    },
                    {
                        "title":"Array 11 : Practice Program on 1D",
                        "duration":19,
                        "points" : [
                            "Program 1 : Take string from user & calculate length of each string",
                            "Program 2 : Sort numbers in array by using two method" 
                        ]
                    },
                    {
                        "title":"Array 12 : Practice Program on 2D",
                        "duration":27,
                        "points" : [
                            "Program 1 : Sum of all rows in 2D",
                            "Program 2 : Take matrix from useer & write code for addition of matrix in 2D" 
                        ]
                    },
                    {
                        "title":"Array 13 : Project on array concept",
                        "duration":50,
                        "points" : [
                            "Project Name - Create Student Record Menu Driven",
                            "Understand problem statement of project",
                            "Overview of project output",
                            "Task 1 : craete menu for project",
                            "Task 2 : get student data from user\'s requirement",
                            "Task 3 : create switch case for each menu",
                            "Task 4 : write logic for get highest marks from student\'s data",
                            "Task 5 : write logic for get lowest marks from student\'s data",
                            "Task 6 : write logic for get avg marks from student\'s data"
                        ]
                    },
                ]
        },
        {
            "id":3,
            "content":
                [
                    {
                        "title":"Basic Java 01 : Overview",
                        "duration":0,
                        "points" : [
                        ]
                    },
                    {
                        "title":"Basic Java 02 : Roadmap of java developer",
                        "duration":0,
                        "points" : [
                        ]
                    },
                    {
                        "title":"Basic Java 03 : Introduction on JAVA",
                        "duration":0,
                        "points" : [
                        ]
                    },
                    {
                        "title":"Basic Java 04 : Installation of JDK",
                        "duration":0,
                        "points" : [
                        ]
                    },
                    {
                        "title":"Basic Java 05 : Working in JAVA",
                        "duration":0,
                        "points" : [
                        ]
                    },
                    {
                        "title":"Basic Java 06 : Features of JAVA",
                        "duration":0,
                        "points" : [
                        ]
                    },
                    {
                        "title":"Basic Java 07 : First Program in JAVA",
                        "duration":28,
                        "points" : [
                            "Overview of class and object",
                            "Explain keyword like public, static, void, main etc",
                            "Write first program in java with IDE",
                            "Write first program with Command prompt",
                            "Discuss interview questions"
                        ]
                    },
                    {
                        "title":"Basic Java 08 : Variables in JAVA",
                        "duration":29,
                        "points" : [
                            "What is variable",
                            "How variable works",
                            "Types of variable",
                            "What is local variable",
                            "What is instance variable",
                            "What is static variable",
                            "Task on variable"
                        ]
                    },
                    {
                        "title":"Basic Java 09 : Data Types in JAVA",
                        "duration":37,
                        "points" : [
                            "Why we need types",
                            "Types of data types",
                            "What are the min & max ranges of data type",
                            "Concept 1 : Integer (byte, short, int) data type",
                            "Concept 2 : Floating (float, long, double) data type",
                            "Concept 3 : String data type",
                            "Concept 4 : Boolean data type",
                            "Concept 5 : Character data type",
                            "Differences between primitive & non primitive"
                        ]
                    },
                    {
                        "title":"Basic Java 10 : Operators in JAVA",
                        "duration":42,
                        "points" : [
                            "Why we need opeartors",
                            "Concept 1 : Unary Opeartor",
                            "Concept 2 : Post & Pre Increment/Decrement Opeartor",
                            "Concept 3 : Arithmatic Opeartor",
                            "Concept 4 : Shift Opeartor",
                            "Concept 5 : Relational Opeartor",
                            "Concept 6 : Bitwise Opeartor",           
                            "Concept 7 : Logical Opeartor",  
                            "Concept 8 : Ternary Opeartor",    
                            "Concept 9 : Assignment Opeartor",            
                        ]
                    },
                    {
                        "title":"Basic Java 11 : Conversions 01",
                        "duration":13,
                        "points" : [
                            "Why we need conversions",
                            "Types of conversions",
                            "How automatic conversion or implicit conversion works"         
                        ]
                    },
                    {
                        "title":"Basic Java 12 : Conversions 02",
                        "duration":23,
                        "points" : [
                            "How explicit conversion works",
                            "Non Primitive Conversions",
                            "Concept 1 : String to Integer",
                            "Concept 2 : String to Long",
                            "Concept 3 : String to Float",
                            "Concept 4 : String to Double",
                            "Concept 5 : String to Char",
                            "Concept 6 : String to Booelan",
                            "Concept 7 : Binary to Decimal",
                            "Concept 8 : Decimal to Binary",
                        ]
                    },
                    {
                        "title":"Basic Java 13 : Get User Input 01",
                        "duration":28,
                        "points" : [
                            "How Scanner class works",
                            "Understand each scanner method",
                            "Difference between nextLine() & next()"
                        ]
                    },
                    {
                        "title":"Basic Java 14 : Get User Input 02",
                        "duration":14,
                        "points" : [
                            "What is command line argument",
                            "How to get input from CLI method",
                            "Task on command line argument"
                        ]
                    },
                    {
                        "title":"Control Statement 01 : If Statement",
                        "duration":21,
                        "points" : [
                            "What is control statement",
                            "Discuss different types on control statement",
                            "Why we need If Statement",
                            "Task : To check number is even or odd"
                        ]
                    },
                    {
                        "title":"Control Statement 02 : If Else Statement",
                        "duration":13,
                        "points" : [
                            "Why we need If Else Statement",
                            "Understand flow chart of if else statement",
                            "Task : To check number is even or odd",
                            "Task : Assignment Program using scanner and if-else",
                            "Use of Ternary Operator"
                        ]
                    },
                    {
                        "title":"Control Statement 03 : If Else Ladder Statement",
                        "duration":18,
                        "points" : [
                            "Why we need If Else Ladder Statement",
                            "Understand flow chart of if else ladder statement",
                            "Task : Assignment Program 1",
                            "Task : Assignment Program 2"
                        ]
                    },
                    {
                        "title":"Control Statement 04 : Nested If Statement",
                        "duration":17,
                        "points" : [
                            "Why we need Nested If Statement",
                            "Understand flow chart of Nested If statement",
                            "Nested If Program",
                            "Task : Assignment Program",
                            "Use of ternary with nested if"
                        ]
                    },
                    {
                        "title":"Control Statement 05 : Nested If ladder Statement",
                        "duration":18,
                        "points" : [
                            "Why we need Nested If ladder Statement",
                            "Understand flow chart of Nested If ladder statement",
                            "Nested Ternary Program",
                            "Nested If ladder Program",
                        ]
                    },
                    {
                        "title":"Control Statement 06 : For Loop",
                        "duration":44,
                        "points" : [
                            "Why we need loops concept",
                            "Understand syntax of for loop",
                            "Understand flow chart of for loop",
                            "Perform Seven programs on for loop concept",
                        ]
                    },
                    {
                        "title":"Control Statement 07 : Nested For Loop",
                        "duration":32,
                        "points" : [
                            "Why we need nested for loop concept",
                            "Perform Nine Star and Number Pattern programs",
                        ]
                    },
                    {
                        "title":"Control Statement 08 : While Loop",
                        "duration":37,
                        "points" : [
                            "Why we need while loops concept",
                            "Understand syntax of while loop",
                            "Understand flow chart of while loop",
                            "Perform Six programs on while loop",
                            "Perform Seven programs on nested while loop"
                        ]
                    },
                    {
                        "title":"Control Statement 09 : Do-While Loop",
                        "duration":22,
                        "points" : [
                            "Why we need do-while loops concept",
                            "Understand syntax of do-while loop",
                            "Understand flow chart of do-while loop",
                            "Perform programs on do-while loop",
                            "Perform programs on nested do-while loop"
                        ]
                    },
                    {
                        "title":"Control Statement 10 : Differences of Loops",
                        "duration":8,
                        "points" : [
                            "Compare while with do-while loop",
                            "Compare three loops together"
                        ]
                    },
                    {
                        "title":"Control Statement 11 : Break Keyword",
                        "duration":14,
                        "points" : [
                            "Understand Break Keyword - flowchart",
                            "Example of break keyword",
                            "Task : Assignment Program"
                        ]
                    },
                    {
                        "title":"Control Statement 12 : Break Keyword",
                        "duration":15,
                        "points" : [
                            "Understand Continue Keyword - flowchart",
                            "Example of continue keyword",
                            "Task : Assignment Program"
                        ]
                    },
                    {
                        "title":"Control Statement 13 : Switch Statement",
                        "duration":44,
                        "points" : [
                            "Understand Switch Statement - flowchart",
                            "Understand Problem of If Else Ladder",
                            "Switch Statement with Integer program",
                            "Switch Statement with Character program",
                            "Switch Statement with String program",
                            "Nested Switch Program"
                        ]
                    },
                    {
                        "title":"Control Statement 14 : Assignments Programs - 01",
                        "duration":39,
                        "points" : [
                            "Factorial Number",
                            "Fibonacci Series",
                        ]
                    },
                    {
                        "title":"Control Statement 15 : Assignments Programs - 02",
                        "duration":19,
                        "points" : [
                            "Reverse number",
                            "Palindrome number",
                            "Armstrong number"
                        ]
                    },
                    {
                        "title":"Control Statement 16 : Project on control statment concept",
                        "duration":26,
                        "points" : [
                            "Project Name : Menu Driven Project",
                            "Understand problem statement of project",
                            "Overview of project output",
                            "Task 1 : craete menu for project",
                            "Task 2 : get strings from user",
                            "Task 3 : create switch case for each menu",
                            "Task 4 : Logic for pattern 1,2,3"
                        ]
                    },
                ]
        },
        {
            "id":4,
            "content":[
            ]
        }
    ]
}