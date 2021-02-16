import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { HomeComponent } from "./home.component";
import { RouterModule, Routes } from "@angular/router";
import { LatestPostsComponent } from "./latest-posts/latest-posts.component";
import { SidebarModule } from "../shared/modules/sidebar.module";
import { SharedPostModule } from "../shared/modules/shared-post.module";

const routes: Routes = [
  {
    path: "",
    component: HomeComponent,
  },
];

@NgModule({
  declarations: [HomeComponent, LatestPostsComponent],
  imports: [CommonModule, SharedPostModule,SidebarModule,RouterModule.forChild(routes)],
})
export class HomeModule {}
