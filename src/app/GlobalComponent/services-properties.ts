import { Injectable } from "@angular/core";

@Injectable({
    providedIn:'root'
})
export class GlobalServiceComponent {

    // change title
    public title: string = "Services";

    // change description
    public desc: string = "Start your career Personal reflections are applied that provide skills that affect students personal and professional lives A great and profitable way to develop your knowledge."

    // change services as per requirement
    public serviceObj :any = [
        {
            "color":"pink",
            "title":"Lifetime Recording Access",
            "desc":"We provided life time recording access free. you can use it whenever you want it.",
            "icon":"bi bi-camera-reels"
        },
        {
            "color":"cyan",
            "title":"Expert Trainer",
            "desc":"We have trainer with 5+ year of experience in JAVA development with depth knowledge of java. ",
            "icon":"bi bi-person-check"
        },
        {
            "color":"green",
            "title":"Weekends Doubts Solving Session",
            "desc":"We provided doubts solving session on saturday and sunday for free of cost.you can connect any time if you want it.",
            "icon":"bi bi-calendar3-week"
        },
        {
            "color":"blue",
            "title":"Projects on each concepts",
            "desc":"You will build projects on each concept while learning for understand real use.",
            "icon":"bi bi-filetype-java"
        },
        {
            "color":"yellow",
            "title":"Assignments on every concepts",
            "desc":"We will given you assignment on each concept so that you will get clear understanding of concept.",
            "icon":"bi bi-card-checklist"
        },
        {
            "color":"brown",
            "title":"Certificate provided",
            "desc":"We will be providing you certificate of completion of course.",
            "icon":"bi bi-award-fill"
        },
        {
            "color":"violet",
            "title":"Build Doubts community",
            "desc":"We have build doubt solving community for solove your doubt any time.",
            "icon":"bi bi-person-workspace"
        },
        {
            "color":"red",
            "title":"Provided material in PDF",
            "desc":"We are providng specialized and standard material in PDF format including imterview questions.",
            "icon":"bi bi-file-earmark-pdf-fill"
        },
    ]
}