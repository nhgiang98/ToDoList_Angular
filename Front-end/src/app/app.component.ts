import { Component } from '@angular/core';
import * as $ from "jquery";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: []
})
export class AppComponent {
  title = 'Angular-ToDoList';
  toggleClick(){
        $('#sidebar').toggleClass('active');
    };
}
