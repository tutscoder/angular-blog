import { Component, OnInit } from '@angular/core';
import { PageService } from '../admin/manage/pages/shared/page.service';
import { SeoService } from '../shared/services/seo.service';

@Component({
  selector: 'app-privacy',
  templateUrl: './privacy.component.html',
  styleUrls: ['./privacy.component.scss']
})
export class PrivacyComponent implements OnInit {

  constructor(private pageService: PageService,private seoService : SeoService) { 
    
    this.seoService.updateTitle(`Privacy Policy | TutsCoder`);

  //this.seoService.updateDescription(`${this.post.meta_description}`);
  }
  privacyPolicy
  ngOnInit(): void {
    this.pageService.getPageBySlug("privacy").subscribe((data) => {
      this.privacyPolicy = data;
    });
  
  }

}