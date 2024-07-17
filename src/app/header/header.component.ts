import { Component } from '@angular/core';
import { ButtonComponent } from '../button/button.component';
import { ContactButtonComponent } from '../contact-button/contact-button.component';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [ ButtonComponent, ContactButtonComponent ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {

}
