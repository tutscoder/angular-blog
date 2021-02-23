import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-two-col-post',
  templateUrl: './two-col-post.component.html',
  styleUrls: ['./two-col-post.component.scss']
})
export class TwoColPostComponent implements OnInit {

  constructor() { }
  @Input('posts')posts:any = [];
  @Input('title')title:any = '';
  @Input('slug')slug:any = '';

  ngOnInit(): void {
  }

}