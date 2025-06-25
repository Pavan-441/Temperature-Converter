import { Component, input } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, FormsModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected title = 'temperature-converter';

  celcius: any = '';
  fahrenheit: any = '';
  resC: any = '';
  resF: any = '';

  celciusToFahrenheit(){
    this.resF = (this.celcius * 9/5) + 32; 
  }

  fahrenheitToCelcius(){
    this.resC = (this.fahrenheit - 32) * 5/9;
  }

}
