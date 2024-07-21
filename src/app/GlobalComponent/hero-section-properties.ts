import { ImageBaseUrl } from "../global-services/all-image-base-url"
import { Injectable } from "@angular/core"

@Injectable({
    providedIn:'root'
})
export class GlobalHeroSection{

    // add header 1
    public header1 : string = "Specialized in java course that helps to get good job."

    // add header 2
    public header2 : string = "Your path to becoming a successful developer is clear Learn through the best online JAVA courses and guided learning maps."

    // add button name 
    public buttonName : string = "Get Started"

    // add button url
    public buttonUrl : string = "#"

    // add image name for front and back
    public imageSrc : string ="hero-img.png"
    public backImageSrc : string ="hero-bg.png"
    
}