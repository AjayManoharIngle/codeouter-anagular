import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { ContactComponent } from './pages/contact/contact.component';
import { CourseInnerComponent} from './pages/course-inner/course-inner.component';
import { HeroSectionComponent } from './components/hero-section/hero-section.component';
import { ServicesComponent } from './components/services/services.component';
import { FrequentQuestionComponent } from './components/frequent-question/frequent-question.component';
import { SafePipe } from './pipe/securityUrl';
import { CoursesComponent } from './components/courses/courses.component';
import { GlobalAboutPage } from './GlobalComponent/about-properties';
import { ImageBaseUrl } from './global-services/all-image-base-url';
import { GlobalContactPage } from './GlobalComponent/contact-properties';
import { GloablCourseInnerDetail } from './GlobalComponent/course-inner.properties';
import { GlobalCourseComponent } from './GlobalComponent/courses-properties';
import { GlobalFooterComponent } from './GlobalComponent/footer-properties';
import { GlobalFreqQueComponent } from './GlobalComponent/freq-que-properties';
import { GlobalHeroSection } from './GlobalComponent/hero-section-properties';
import { GlobalNavbarComponent } from './GlobalComponent/navbar-properties';
import { GlobalServiceComponent } from './GlobalComponent/services-properties';
import { GlobalSwitchOnOffComponent } from './GlobalComponent/switch-on-off-component';
import { CoursesDetailComponent } from './components/courses/courses-detail/courses.detail';
import { GloablAboutCourse } from './GlobalComponent/course-inner-detail/course-about.properties';
import { GloablLearnPointCourse } from './GlobalComponent/course-inner-detail/course-learn-point.properties';
import { GloablFetchCourseById } from './global-services/fetch-course-by-id';
import { GloablReviewCourse } from './GlobalComponent/course-inner-detail/course-review.properties';
import { GloablSyllbusCourse } from './GlobalComponent/course-inner-detail/course-syllbus.properties';
import { GloablFeatureCourse } from './GlobalComponent/course-inner-detail/course-feature.properties';
import { RemoveSpacePipe } from './pipe/remove-space';
import {HttpClientModule} from '@angular/common/http';
import { FormsModule} from '@angular/forms';
import { ContactService } from './global-services/contact-form-data';
import { GlobalAddSectionInCourse } from './GlobalComponent/course-inner-detail/course-section-add.properties';
import { AccordionSectionComponent } from './components/accordion-section/accordion-section.component';
import { TestimonialsComponent } from './components/testimonials/testimonials.component';
import { GlobalTestimonialsComponent } from './GlobalComponent/testimonials-properties';
import { TermsComponent } from './pages/terms/terms.component';
import { PolicyComponent } from './pages/policy/policy.component';
import { EmailSubscribeService } from './global-services/email-list-data';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    HomeComponent,
    AboutComponent,
    ContactComponent,
    CourseInnerComponent,
    HeroSectionComponent,
    ServicesComponent,
    FrequentQuestionComponent,
    SafePipe,
    RemoveSpacePipe,
    CoursesComponent,
    CoursesDetailComponent,
    AccordionSectionComponent,
    TestimonialsComponent,
    TermsComponent,
    PolicyComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [GlobalAboutPage,ImageBaseUrl,GlobalContactPage,
    GloablCourseInnerDetail,GlobalCourseComponent,GlobalFooterComponent,
    GlobalFreqQueComponent,GlobalHeroSection,GlobalNavbarComponent
    ,GlobalServiceComponent,GlobalSwitchOnOffComponent,GloablAboutCourse,
    GloablLearnPointCourse,GloablFetchCourseById,GloablReviewCourse,GloablSyllbusCourse, 
    GloablFeatureCourse,ContactService,GlobalAddSectionInCourse,GlobalTestimonialsComponent,EmailSubscribeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
