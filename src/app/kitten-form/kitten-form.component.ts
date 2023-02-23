import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Kitten } from '../model/kitten';

@Component({
  selector: 'app-kitten-form',
  templateUrl: './kitten-form.component.html',
  styleUrls: ['./kitten-form.component.css'],
})
export class KittenFormComponent implements OnInit {
  public kitten?: Kitten;

  @Output()
  newKitten: EventEmitter<Kitten> = new EventEmitter();

  public kittenForm = this.fb.group({
    name: ['', [Validators.required, Validators.maxLength(255)]],
    race: ['', [Validators.required, Validators.maxLength(255)]],
    dateOfBirth: ['', [Validators.required]],
    image: ['', [Validators.required]],
  });

  constructor(private fb: FormBuilder) {}

  ngOnInit() {}

  onSubmit() {
    if (this.kittenForm.valid) {
      this.kitten = new Kitten(
        this.kittenForm.value['name'],
        this.kittenForm.value['race'],
        this.kittenForm.value['dateOfBirth'],
        this.kittenForm.value['image']
      );
      this.resetForm();
      this.sendNewKitten();
    }
  }

  resetForm() {
    this.kittenForm.reset();
  }

  sendNewKitten() {
    this.newKitten.emit(this.kitten)
    }
    
}
