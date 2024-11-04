import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Note } from 'src/app/interfaces/note';
import { NoteService } from 'src/app/services/note.service';

@Component({
  selector: 'app-note-list',
  templateUrl: './note-list.component.html',
  styleUrls: ['./note-list.component.scss']
})
export class NoteListComponent implements OnInit{
  notes: Note[] = [];
  @Output() selectedNote = new EventEmitter<Note>();

  constructor(private noteService : NoteService){}

  ngOnInit(): void {
    this.noteService.getNotesObservable().subscribe((notes: Note[]) => {
      this.notes = notes;
    })
  }

  editNotes(note: Note): void{
    this.selectedNote.emit(note);
    this.noteService.setEditable(true);
  }

  deleteNotes(id: number): void{
    this.noteService.deleteNotes(id);
  }
}
