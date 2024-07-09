import { Component } from '@angular/core';
import { NativeLoopComponent } from "./native-loop-component/native-loop/native-loop.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [NativeLoopComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'angular-app';
}
