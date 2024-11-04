import { Component } from '@angular/core';
import { Note } from './interfaces/note';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Notes-App';
  selectedNote!: Note

  selectNote(note : Note){
    this.selectedNote = note;
  }
}
