import { Component } from "@angular/core";
import { AppService } from "./app.service";

@Component({
    standalone: false,
    selector: 'app-form',
    templateUrl: 'form.component.html'
})
export class FormComponent {
    val: number = 0;

    constructor(public appservice: AppService) {}

    onSubmit(): void {
        this.appservice.numberOfDominoes = this.val;
        this.appservice.reset();
    }
}