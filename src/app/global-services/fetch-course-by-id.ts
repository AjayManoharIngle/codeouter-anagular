import { Injectable } from "@angular/core"

@Injectable({
    providedIn:'root'
})
export class GloablFetchCourseById{
    public getCoursesById(id: any,item:any) {
        return item.filter((course:any) => {
          return (course.id == id)
        })
    }
}