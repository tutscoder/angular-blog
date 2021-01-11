import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-tags',
  templateUrl: './tags.component.html',
  styleUrls: ['./tags.component.scss']
})
export class TagsComponent implements OnInit {

  constructor() { }
  
  @Input("tagsList") set tagsList(data) {
   
    this.tags = data;
  }
  tags:any;

  ngOnInit(): void {
  }

}