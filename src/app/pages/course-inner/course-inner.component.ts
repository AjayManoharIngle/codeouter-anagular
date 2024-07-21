import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { ImageBaseUrl } from 'src/app/global-services/all-image-base-url';
import { GloablAboutCourse } from 'src/app/GlobalComponent/course-inner-detail/course-about.properties';
import { GloablFeatureCourse } from 'src/app/GlobalComponent/course-inner-detail/course-feature.properties';
import { GloablLearnPointCourse } from 'src/app/GlobalComponent/course-inner-detail/course-learn-point.properties';
import { GloablReviewCourse } from 'src/app/GlobalComponent/course-inner-detail/course-review.properties';
import { GloablSyllbusCourse } from 'src/app/GlobalComponent/course-inner-detail/course-syllbus.properties';
import { GloablCourseInnerDetail } from 'src/app/GlobalComponent/course-inner.properties';
import { GlobalCourseComponent } from 'src/app/GlobalComponent/courses-properties';
import { GloablFetchCourseById } from 'src/app/global-services/fetch-course-by-id';
import { GlobalAddSectionInCourse } from 'src/app/GlobalComponent/course-inner-detail/course-section-add.properties';

@Component({
  selector: 'app-menu',
  templateUrl: './course-inner.component.html',
  styleUrls: ['./course-inner.component.css'],
})
export class CourseInnerComponent implements OnInit {

  courses!: any;
  header!: string;
  courseId!: number;
  courseDetail!: any;
  baseImg!: string;
  courseAbout!: string;
  showAboutPoint2: boolean = true;
  learnPoints!: any;
  courseReview!: any;
  status!: number;
  totalstarsReview!: number;
  starItemReview!: any;
  countOfFillStar: any[] = [];
  countOfHalfStar: any[] = [];
  countStar!: any[];
  courseSyllbus !: any[] 
  syllbusStatus : number = 0;
  courseFeature !: any[]
  duration !: string
  checkCourseAdded !: number 
  addCourseInSection !: any
  storeCourseDatabyId : any[] = []
  storeCourseDatabyId1 : any[] = []
  no !: number;
  sectionTitle : any[] = []

  constructor(
    private globalCourseComponent: GlobalCourseComponent,
    private gloablCourseInnerDetail: GloablCourseInnerDetail,
    private activatedRoute: ActivatedRoute,
    private imageBaseUrl: ImageBaseUrl,
    private gloablAboutCourse: GloablAboutCourse,
    private gloablFetchCourseById: GloablFetchCourseById,
    private gloablLearnPointCourse: GloablLearnPointCourse,
    private gloablReviewCourse: GloablReviewCourse,
    private gloablSyllbusCourse: GloablSyllbusCourse,
    private gloablFeatureCourse : GloablFeatureCourse,
    private globalAddSectionInCourse : GlobalAddSectionInCourse
  ) {
    this.header = this.gloablCourseInnerDetail.header;
    this.courses = this.globalCourseComponent.courses;
    this.baseImg = this.imageBaseUrl.baseUrl;
  }

  ngOnInit() {
    let item: any = this.gloablFetchCourseById;

    this.activatedRoute.params.forEach((params: Params) => {
      this.courseId = params['id'];
      this.courseDetail = item.getCoursesById(
        this.courseId,
        this.globalCourseComponent.courses
      );
    });

    this.courseAbout = item.getCoursesById(this.courseId,this.gloablAboutCourse.courseAbout)

    if(this.courseAbout.length == 0){
      this.courseAbout = "Please enter about of this course"
    }
    else{
      this.courseAbout =item.getCoursesById(this.courseId,this.gloablAboutCourse.courseAbout)[0].about 
    }

    if (this.courseAbout.length == 1) this.showAboutPoint2 = false;

    this.learnPoints = item.getCoursesById(this.courseId,this.gloablLearnPointCourse.learningPoint);
    if(this.learnPoints.length == 0){
      this.learnPoints = ["Please write points of this course"]
    }
    else{
      this.learnPoints = this.learnPoints[0].points 
    }

    let items: any = item.getCoursesById(
      this.courseId,
      this.gloablReviewCourse.allReviews
    );
    if (items.length != 0) {
      this.starItemReview = items[0].reviews;
      this.status = 1;
      let sum: number = 0;
      this.starItemReview.forEach((starsdata: any) => {
        let ans = starsdata.stars;
        sum = sum + ans;
        this.countofFillAndHalfStar(ans);
      });
      this.totalstarsReview = Math.round(sum / this.starItemReview.length);
      this.countofFillAndHalfStar(this.totalstarsReview);
      this.countStar = [this.countOfFillStar, this.countOfHalfStar];
    } else {
      this.status = 0;
    }

    // course syllbus 
    this.courseSyllbus = item.getCoursesById(this.courseId,this.gloablSyllbusCourse.courseSyllbus);
    var checkBefore = this.courseSyllbus[0].content.length
    
    this.addCourseInSection = item.getCoursesById(this.courseId,this.globalAddSectionInCourse.addSectionInCourse)
    this.no = 100; // this is id of accordian start
    
    if(this.courseSyllbus.length != 0 ){
      this.storeCourseDatabyId.push(["All Section Added"])
      let course1 : any = item.getCoursesById(this.courseId,this.courses)
      if(checkBefore != 0){
        this.storeCourseDatabyId.push([this.storeCountOFEachData(item,this.courseSyllbus[0].id),course1[0].title])
      }
      this.syllbusStatus = 0
    }
    else{
      this.syllbusStatus = 1
    }


    // add multiple section of course in one course
    if(this.storeCourseDatabyId.length != 0){
      this.storeCourseDatabyId1 = []
    }
    if(this.addCourseInSection.length != 0){
      this.checkCourseAdded = 0
      this.addCourseInSection[0].add.forEach((data : any)=>{
        if(this.storeCourseDatabyId.length != 0){
          let course1 : any = item.getCoursesById(data,this.courses)
          this.storeCourseDatabyId.push([this.storeCountOFEachData(item,data),course1[0].title])
        }
        this.storeCourseDatabyId1 = []
      })
    }
    else{
      this.checkCourseAdded = 1
    }

      let sum : number =0;
      this.storeCourseDatabyId.forEach((data :any,index : number) => {
        if(index != 0){
        data[0].forEach((ele :any) => {
          sum = sum + ele.duration; 
        })
      }
      })
      var no = sum/60;
      this.duration = parseFloat(no.toString()).toFixed(1);
    
    // add features of course
    this.courseFeature = this.gloablFeatureCourse.feature
    if(this.courseFeature[5] != null)
        this.courseFeature[5].desc = this.duration+" hour."
  }

  counter(i: number) {
    return new Array(i);
  }

  storeCountOFEachData(this : any, item : any,data : any){
    let allData : any = item.getCoursesById(data,this.gloablSyllbusCourse.courseSyllbus)[0].content
    allData.forEach((ele : any)=>{
      ele.no = this.no++;
      this.storeCourseDatabyId1.push(ele);
    })
    return this.storeCourseDatabyId1;
  }
  
  
  countofFillAndHalfStar(this: any, ans: any) {
    if (!Number.isInteger(ans)) {
      var data = Math.floor(ans);
      this.countOfFillStar.push(data);
      this.countOfHalfStar.push(1);
    } else {
      this.countOfFillStar.push(ans);
      this.countOfHalfStar.push(0);
    }
  }

}
