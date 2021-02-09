import { Component, OnInit } from "@angular/core";
import { CategoryService } from "../categories/shared/category.service";
import { PostService } from "../posts/shared/post.service";
import { Meta, Title } from "@angular/platform-browser";
import { NgxSmartModalService } from 'ngx-smart-modal';
import { UserService } from "../admin/manage/users/shared/user.service";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.scss"],
})
export class HomeComponent implements OnInit {
  constructor(
    public ngxSmartModalService: NgxSmartModalService,
    private postService: PostService,
    private categoryService: CategoryService,
    private meta: Meta,
    private title: Title,
    private userService : UserService
  ) {
    this.title.setTitle(
      "TutsCoder - Programming Blog, Web Development, Tutorials, NodeJs, Angular, WordPress and Demos"
    );
    this.meta.addTag({
      name: "description",
      content:
        "Learn Web Development, NodeJs, Angular, JavaScript, jQuery ,Ajax,ReactJs, WordPress with TutsCoder tutorials.",
    });
    this.meta.addTag({ name: 'keywords', content: `Web Development, NodeJs, Angular, JavaScript, jQuery ,Ajax,ReactJs, WordPress, tutorials` });
  }
  latestPosts: any = [];
  angularPosts: any = [];
  nodePosts: any = [];

  ngOnInit() {
    this.getLatestPosts();
    this.getPostByCategory("angular");
    this.getPostByCategory("nodejs");
  }

  private getLatestPosts() {
    let reqData = {
      limit: 3,
    };
    this.postService.getPosts(reqData).subscribe((response) => {
      this.latestPosts = response["data"]["posts"];
    });
  }
  private getPostByCategory(category) {
    let reqData = {
      limit: 3,
      category: category,
    };

    this.categoryService.getPostByCateogry(reqData).subscribe((response) => {
      if (category == "angular") {
        this.angularPosts = response["posts"];
      }
      if (category == "nodejs") {
        this.nodePosts = response["posts"];
      }
       setTimeout(() => {
        this.ngxSmartModalService.getModal('myModal').open();  
      }, 4000);
      
    });
  }

  addSubscribe(email) {
    console.log(email);
    let reqData = {
      email: email,
    };
    this.userService.addSubscribe(reqData).subscribe((response) => {
      console.log(response);
    });
  }

}
