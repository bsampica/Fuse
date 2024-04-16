import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component';

@Component({
    selector: 'app-root',
    standalone: true,
    imports: [RouterOutlet, NavbarComponent],
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss'
})
export class AppComponent {
    title = 'app';
    

    constructor() {
    }

    button1_Clicked() {
        console.log('Button 1 Clicked');
    }

    button2_Clicked() {
        console.log('Button 2 Clicked');
    }

    button3_Clicked() {
        console.log('Button 3 Clicked');
    }

    button4_Clicked() {
        console.log('Button 4 Clicked');
    }
}
