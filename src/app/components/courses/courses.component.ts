import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { GlobalSwitchOnOffComponent } from 'src/app/GlobalComponent/switch-on-off-component';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent{

  flag !: string;
  courseSectionswitch !: boolean
  route !: string

  constructor(private globalSwitchOnOffComponent:GlobalSwitchOnOffComponent,private router: Router){
    this.courseSectionswitch =this.globalSwitchOnOffComponent.coursesSectionHomePage
    this.route = this.router.url
  }
}
