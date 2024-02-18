import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-smiley-face',
  templateUrl: './smiley-face.component.html',
  styleUrls: ['./smiley-face.component.scss']
})

export class SmileyFaceComponent {
  faceStyle: { [key: string]: string } = {};

  /*
  @HostListener('document:mousemove', ['$event'])
  onMouseMove(event: MouseEvent) {
    this.faceStyle['left'] = event.clientX + 'px';
    this.faceStyle['top'] = event.clientY + 'px';

    console.log("Smiley is looking!");
  }
  */
}
