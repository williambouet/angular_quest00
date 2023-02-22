import { Component, EventEmitter, Input, OnInit } from '@angular/core';
import { Kitten } from '../model/kitten';

@Component({
  selector: 'app-kitten-list',
  templateUrl: './kitten-list.component.html',
  styleUrls: ['./kitten-list.component.css'],
})
export class KittenListComponent implements OnInit {
  public kittens?: Kitten[] = [
    new Kitten('Le chat', 'Geluck', '01/01/1980', 'https://etransiecn.files.wordpress.com/2018/01/le-chat-philipe-geluck-13.jpg', false),
    new Kitten('Garfiel', 'Gourmand', '01/02/1980', 'https://holatelcel.com/wp-content/uploads/2018/06/HEAD-GARFIELD.jpg', false),
    new Kitten('Chat du Cheshire', 'Magique', '02/01/1951', 'https://i.pinimg.com/564x/1e/88/3c/1e883cf424b0056c2663a1c03f443fa3.jpg', false),

  ];

  
  ngOnInit() {}

  adoptThisKitten(kittentarget: Kitten) {
    this.kittens?.splice(this.kittens?.indexOf(kittentarget, 0));
    kittentarget.isAdopted = true;
    this.kittens?.push(kittentarget);
  }

  receiveNewKitten(event: Kitten) {
    this.kittens?.push(event);
  }

}
