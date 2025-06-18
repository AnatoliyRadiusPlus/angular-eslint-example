import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'example',
  standalone: true
})
export class ExamplePipe implements PipeTransform {

  public transform(value: unknown, ...args: unknown[]): unknown {
    console.log('ExamplePipe transform called with value:', value, 'and args:', args);
    return null;
  }

}
