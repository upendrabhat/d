import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { AppComponent } from "./app.component";
import { DominoComponent } from "./domino.component";
import { FormComponent } from "./form.component";
import { FormsModule } from "@angular/forms";

@NgModule({
    imports: [BrowserModule,FormsModule],
    declarations: [AppComponent,DominoComponent,FormComponent],
    bootstrap: [AppComponent]
})

export class AppModule{}