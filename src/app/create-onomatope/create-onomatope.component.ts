import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-create-onomatope',
  templateUrl: './create-onomatope.component.html',
  styleUrls: ['./create-onomatope.component.css']
})
export class CreateOnomatopeComponent implements OnInit {
  public onomatope: string ="";

  constructor(private fb: FormBuilder,) { }
  onoForm = this.fb.group({
    onomatope: ['Rrrr', Validators.required]
  })

  ngOnInit() { }

  @Output()
  newOnomatope: EventEmitter<string> = new EventEmitter();

  onSubmit() {
    this.newOnomatope.emit(this.onoForm.value['onomatope'] ? this.onoForm.value['onomatope'] : 'TODO : maj validator pour pas de blanc/null/undefined');
   }

}
