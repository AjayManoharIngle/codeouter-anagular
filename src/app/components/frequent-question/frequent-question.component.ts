import { Component, OnInit } from '@angular/core';
import { GlobalFreqQueComponent } from 'src/app/GlobalComponent/freq-que-properties';
import { GlobalSwitchOnOffComponent } from 'src/app/GlobalComponent/switch-on-off-component';

@Component({
  selector: 'app-frequent-question',
  templateUrl: './frequent-question.component.html',
  styleUrls: ['./frequent-question.component.css']
})
export class FrequentQuestionComponent{

  title !: any;
  freqQue !: any;
  switch !: boolean

  constructor(private globalFreqQueComponent:GlobalFreqQueComponent,private globalSwitchOnOffComponent:GlobalSwitchOnOffComponent) {
    this.title=this.globalFreqQueComponent.title;
    this.freqQue=this.globalFreqQueComponent.queAnsObj;
    this.switch=this.globalSwitchOnOffComponent.faqSection
  }

}
