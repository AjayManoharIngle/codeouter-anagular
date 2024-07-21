import { Component, Input, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ImageBaseUrl } from 'src/app/global-services/all-image-base-url';
import { GloablFetchCourseById } from 'src/app/global-services/fetch-course-by-id';
import { GloablReviewCourse } from 'src/app/GlobalComponent/course-inner-detail/course-review.properties';
import { GlobalCourseComponent } from 'src/app/GlobalComponent/courses-properties';

@Component({
  selector: 'app-courses-detail',
  templateUrl: './courses.detail.html',
  styleUrls: ['./courses.detail.css']
})
export class CoursesDetailComponent implements OnInit {

  @Input() flag !: string;
  hometitle !: string
  coursetitle !: string
  desc !: string
  categeory!: any
  courses !:any
  images !:string
  switch !:boolean
  homelimit !: number
  courseRemoveId !: any
  filterList :any[] = []
  filterCourse : any[] = []
  filterCourseById : any[] = []
  priceRange : number = 0
  filterCourseByPrice : any[] = []
  newPriceCourse : any[] = []
  uniqueCourse : any[] = [[],[],[]]
  filterMergeCourse : any[] = []
  reviewsStar !: number
  filterCourseByReview : any[] = []
  someData !: string
 
  constructor(private globalCourseComponent:GlobalCourseComponent,private imageBaseUrl:ImageBaseUrl
    ,private gloablFetchCourseById: GloablFetchCourseById,  private gloablReviewCourse: GloablReviewCourse,){
    this.hometitle=this.globalCourseComponent.homePageTitle
    this.coursetitle=this.globalCourseComponent.coursePagetitle
    this.desc=this.globalCourseComponent.desc
    this.categeory=this.globalCourseComponent.categeory
    this.courses=this.globalCourseComponent.courses
    this.images=this.imageBaseUrl.baseUrl
    this.switch=this.globalCourseComponent.switchCourseTag
    this.homelimit=this.globalCourseComponent.homelimit
    this.courseRemoveId=this.globalCourseComponent.courseRemoveId
    
  }
  ngOnInit(){
    this.filterList.push([0,this.categeory,[],[]]) 
    this.removeCourses(this.courseRemoveId);
    console.log(this.courses)
  }

  public removeCourses(courseRemoveId: any) {
    this.courses = this.courses.filter((course: { id: any; }) => !courseRemoveId.includes(course.id));
  }


  public AddfilterCourseFunction(item : string, service : any,status :boolean){
      service.filter((course:any)=>{
          if(status && course.categeory==item){
            this.filterCourse.push(course.id);
          }
      })
  }

  public deletefilterCourseFunction(item : string){
    let data: any = this.gloablFetchCourseById;
    this.filterCourseById = this.filterCourse
    this.filterCourse = []
     this.filterCourseById.filter((id:any)=>{
        let courseData = data.getCoursesById(id,this.globalCourseComponent.courses)
        if(courseData[0].categeory !== item){
          this.filterCourse.push(id);
        }
    })
  }

  fieldsChange(values:any , ele : string):void {
      if(values.currentTarget.checked){
          this.AddfilterCourseFunction(ele,this.courses,values.currentTarget.checked)
      }else{
        this.deletefilterCourseFunction(ele)
      }
      this.uniqueCourse[0].push(this.filterCourse)
      let i= this.uniqueCourse[0].length-1;
      while(i >= 1){
        this.uniqueCourse[0].shift();
        i--;
      }
      this.createFilterByArrayEle();
  }

  rangeSlide(event: any) {
    this.priceRange=event.target.value
    if(this.filterCourseByPrice.length != 0){
      this.filterCourseByPrice = []
      this.courses.filter((course : any) => {
        if(this.priceRange>=0 &&  course.price <= this.priceRange){
          this.filterCourseByPrice.push(course.id);
        }
      })
    }else{
      this.courses.filter((course:any)=>{
        if(this.priceRange>=0 &&  course.price <= this.priceRange ){
          this.filterCourseByPrice.push(course.id);
        }
    })
    }
    this.uniqueCourse[1].push(this.filterCourseByPrice)
    let i= this.uniqueCourse[1].length-1;
    while(i >= 1){
      this.uniqueCourse[1].shift();
      i--;
    }
    this.createFilterByArrayEle();
  }

  createFilterByArrayEle(){
    let data: any = this.gloablFetchCourseById;
    let afterMergeArr = this.getUniqueAfterMerge(this.uniqueCourse[0],this.uniqueCourse[1],this.uniqueCourse[2]);
    console.log(afterMergeArr)
    if(this.filterMergeCourse.length != 0){
      this.filterMergeCourse = []
      afterMergeArr.forEach((id : number)=> {
        let courseData = data.getCoursesById(id,this.globalCourseComponent.courses)
        this.filterMergeCourse.push(courseData[0]);
      });
    }else{
      afterMergeArr.forEach((id : number)=> {
        let courseData = data.getCoursesById(id,this.globalCourseComponent.courses)
        this.filterMergeCourse.push(courseData[0]);
      });
    }
    console.log(this.filterMergeCourse)
  }

  getUniqueAfterMerge(arr1 : any, arr2 : any,arr3 : any){
    var c : any;
    if(arr1.length > 0 || arr2.length > 0 || arr3.length > 0){
      if(arr1[0] == undefined){
        arr1[0] = []
      }
      if(arr2[0] == undefined){
        arr2[0] = []
      }
      if(arr3[0] == undefined){
        arr3[0] = []
      }
      c = arr1[0].concat(arr2[0]).concat(arr3[0]);
    }
    var d = c.filter((item:any, pos:any) => c.indexOf(item) === pos)
    return d;
  }

  data(myForm : NgForm) {
    
    this.reviewsStar = myForm.value.note;
    let reviewsCount: any[] = []
    this.gloablReviewCourse.allReviews.forEach((data : any) => {
      let count = this.countOfReviewStar(data.reviews);
      reviewsCount.push([data.id,Number(count)])
    });
    let data: any = this.gloablFetchCourseById;
    if(this.filterCourseByReview.length != 0){
      this.filterCourseByReview = []
      reviewsCount.forEach((item : any)=>{
        if( this.reviewsStar-0.5 < item[1] && item[1] < this.reviewsStar || item[1] == this.reviewsStar){
          let courseData = data.getCoursesById(item[0],this.globalCourseComponent.courses)
          this.filterCourseByReview.push(courseData[0].id)
        }
      })
    }else{
      reviewsCount.forEach((item : any)=>{
        if( this.reviewsStar-0.5 <= item[1] && item[1] <= this.reviewsStar){
          let courseData = data.getCoursesById(item[0],this.globalCourseComponent.courses)
          this.filterCourseByReview.push(courseData[0].id)
        }
      })
    }
    this.uniqueCourse[2].push(this.filterCourseByReview)
    let i= this.uniqueCourse[2].length-1;
    while(i >= 1){
      this.uniqueCourse[2].shift();
      i--;
    }
    if(this.uniqueCourse[2].length > 0){
      this.someData = "some"
    }
    this.createFilterByArrayEle();
  }

  countOfReviewStar(reviews: any) {
    let sum = 0;
    reviews.forEach((ele : any) => {
      sum = sum + ele.stars;
    });
    let num = sum / reviews.length;
    return num.toFixed(1);
  }
}



