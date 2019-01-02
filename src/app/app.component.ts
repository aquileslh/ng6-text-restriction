import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ng6-text-restriction';

  validationForm = new FormGroup({
    name : new FormControl(''),
    address : new FormControl(''),
  });
}
