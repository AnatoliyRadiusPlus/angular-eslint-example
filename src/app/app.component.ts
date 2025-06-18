import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
    selector: 'app-root',
    imports: [RouterOutlet],
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss'
})
export class AppComponent {
  public title = 'angular-eslitn-test';

  public abc = 'abc';
  public def = 'def';
  public ghi = 'ghi';
  protected mno = 'mno';
  private jkl = 'jkl';

  constructor() {
    console.log('AppComponent initialized');
    console.log(`Values: ${this.abc}, ${this.def}, ${this.ghi}, ${this.mno}, ${this.jkl}`);

    this.publicMethod();
    this.protectedMethod();
    this.privateMethod();
  }

  public publicMethod(): void {
    console.log('New logger method called');
  }

  protected protectedMethod(): void {
    console.log('Protected method called');
  }

  private privateMethod(): void { 
    console.log('Private method called');
  }
}
