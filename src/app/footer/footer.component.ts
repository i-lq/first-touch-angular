import { Component } from '@angular/core';
import { DoodleCatComponent } from '../doodle-cat/doodle-cat.component';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [ DoodleCatComponent ],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent {

}
