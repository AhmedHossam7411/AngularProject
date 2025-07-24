import { Component } from '@angular/core';

@Component(
    {
    selector: 'app-header',  // defines the custom HTML tag for this component
    standalone: true,  // indicates that this component can be used independently
    templateUrl: './header.component.html',  // path to the HTML template for this component
    styleUrl: './header.component.css'  // path to the CSS styles for this component

}
)

export class HeaderComponent {}  