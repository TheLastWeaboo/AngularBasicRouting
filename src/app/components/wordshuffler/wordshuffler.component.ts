import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-wordshuffler',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './wordshuffler.component.html',
  styleUrl: './wordshuffler.component.css'
})
export class WordshufflerComponent {
  inputWord: string = ""; // Stores the user's input word
  shuffledWord: string = ""; // Stores the shuffled word

  shuffle() {
    this.shuffledWord = this.inputWord
      .split('') // Convert the word into an array of characters
      .sort(() => Math.random() - 0.5) // Shuffle the array randomly
      .join(''); // Join the shuffled array back into a string
  }
}