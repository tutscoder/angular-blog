import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { TagsComponent } from "./tags.component";
import { TagsListingComponent } from "./tags-listing/tags-listing.component";
import { SidebarModule } from "../shared/modules/sidebar.module";
import { RouterModule, Routes } from "@angular/router";

const routes: Routes = [
  {
    path: "",
    component: TagsComponent,
    children: [
      {
        path: ":slug",
        component: TagsListingComponent,
      },
    ],
  },
];

@NgModule({
  declarations: [TagsComponent, TagsListingComponent],
  imports: [CommonModule, SidebarModule, RouterModule.forChild(routes)],
})
export class TagsModule {}