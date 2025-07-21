import { Component } from '@angular/core';

@Component(
    {
    selector: 'app-header',  // defines the custom HTML tag for this component
    standalone: true,  // indicates that this component can be used independently
    template: './header.component.html',  // contains the HTML template for the header
    }
)

export class HeaderComponent {}  