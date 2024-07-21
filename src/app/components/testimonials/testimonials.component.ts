import { Component, OnInit } from '@angular/core';
import { ImageBaseUrl } from 'src/app/global-services/all-image-base-url';
import { GlobalTestimonialsComponent } from 'src/app/GlobalComponent/testimonials-properties';

@Component({
  selector: 'app-testimonials',
  templateUrl: './testimonials.component.html',
  styleUrls: ['./testimonials.component.css']
})
export class TestimonialsComponent implements OnInit{

  header !:string
  desc !: string
  reviews !: any[]
  listOfReviews : any[] = []
  groupOfReviews3 : any[] = []
  imgBaseUrl !: string
  remainingReview3 : any[] = []

  constructor(private globalTestimonialsComponent : GlobalTestimonialsComponent,private imageBaseUrl:ImageBaseUrl) {
    this.header = this.globalTestimonialsComponent.header
    this.desc = this.globalTestimonialsComponent.desc
    this.reviews = this.globalTestimonialsComponent.reviews
    this.imgBaseUrl=this.imageBaseUrl.baseUrl
  }

  ngOnInit() {
    let limit = 3
    let index = 0;
    let counter = 0;
    while (index < this.reviews.length) {
      if(limit != index){
        this.listOfReviews.push(this.reviews[index])
        index++;
      }
      else{
        this.groupOfReviews3.push(this.listOfReviews)
        this.listOfReviews = []
        counter++
        index = limit-index+counter;
        limit++
      }
    }
    this.groupOfReviews3.push(this.listOfReviews)
  }

}
