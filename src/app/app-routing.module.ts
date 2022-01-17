import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { HomeComponent } from "./home/home.component";
import { DepartmentComponent } from "./department/department.component";
import { RoomComponent } from "./room/room.component";

const routes: Routes = [
  { path: "department", component: DepartmentComponent },
  { path: "room", component: RoomComponent },
  { path: "**", component: HomeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
