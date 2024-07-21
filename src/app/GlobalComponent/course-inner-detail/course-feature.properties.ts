import { Injectable } from "@angular/core"

@Injectable({
    providedIn:'root'
})
export class GloablFeatureCourse{

    public feature : any = [
        {
            "title":"Flexible deadlines",
            "icon":"bi bi-calendar-check",
            "desc":"Reset deadlines in accordance to your schedule."
        },
        {
            "title":"Shareable Certificate",
            "icon":"bi bi-award",
            "desc":"Earn a Certificate upon completion"
        },
        {
            "title":"100% online",
            "icon":"bi bi-globe",
            "desc":"Start instantly and learn at your own schedule."
        },
        {
            "title":"Level of Course",
            "icon":"bi bi-arrow-up-square",
            "desc":"Intermediate Level"
        },
        {
            "title":"Language",
            "icon":"bi bi-alarm",
            "desc":"Subtitles: English"
        },
        {
            "title":"Course Time",
            "icon":"bi bi-translate",
            "desc":"More than 2hr"
        },
    ]
}