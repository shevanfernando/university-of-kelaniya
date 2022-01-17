import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { FormControl, FormGroup, Validators } from "@angular/forms";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.scss"]
})
export class HomeComponent implements OnInit {

  homeFormGroup = new FormGroup({
    department: new FormControl("", Validators.required),
    block: new FormControl("", Validators.required)
  });

  errorMessage: string | undefined;

  constructor(private router: Router) {
  }

  ngOnInit(): void {
  }

  onClickNext() {
    if (this.homeFormGroup.valid) {
      console.log('navigate')
      this.router.navigate(["/department"]);
    } else {
      // TODO: add error messages
    }
  }
}
