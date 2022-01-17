import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { FormControl, FormGroup, Validators } from "@angular/forms";

@Component({
  selector: "app-department",
  templateUrl: "./department.component.html",
  styleUrls: ["./department.component.scss"]
})
export class DepartmentComponent implements OnInit {

  departmentFormGroup = new FormGroup({
    building: new FormControl("", Validators.required),
    floor: new FormControl("", Validators.required)
  });

  errorMessage: string | undefined;

  constructor(private router: Router) {
  }

  ngOnInit(): void {
  }

  onClickNext() {
    if (this.departmentFormGroup.valid) {
      this.router.navigate(["/room"]);
    }else{
      // TODO: add error messages
    }
  }
}
