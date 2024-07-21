import { Injectable } from "@angular/core"

@Injectable({
    providedIn:'root'
})
export class ImageBaseUrl{

    // add base url of image
    public baseUrl : string = "../../../assets/img/"
}
