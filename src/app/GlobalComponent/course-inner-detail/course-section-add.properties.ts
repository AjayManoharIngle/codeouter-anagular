import { Injectable } from "@angular/core"

@Injectable({
    providedIn:'root'
})
export class GlobalAddSectionInCourse{

    public addSectionInCourse = [
        {
            "id" : 1,
            "add" : []           
        },
        {
            "id" : 2,
            "add" : []
        },
        {
            "id" : 3,
            "add" : []
        },
        {
            "id" : 4,
            "add" : [3,1,2]
        }
    ]
}