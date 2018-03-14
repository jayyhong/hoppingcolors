import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  qpressed: boolean = false;
  wpressed: boolean = false;
  epressed: boolean = false;
  wrongInput: boolean = false;
  timerStarted: boolean = false;
  gameArray: any = [];
  fillGameArray: any;
  red: any;
  blue: any;
  green: any;
  score: number = 0;
  timer: number = 10;

  constructor() {
    this.fillGameArray = [
      {
        assigned: 1,
        button: "q",
        color: "lightcoral",
        position: "67%"
      },
      {
        assigned: 2,
        button: "w",
        color: "skyblue",
        position: "33%"
      },
      {
        assigned: 3,
        button: "e",
        color: "lightseagreen",
        position: "0"
      }
    ];
    for (let i = 0; i < 8; i++) {
      this.gameArray.push(this.fillGameArray[Math.floor(Math.random() * 3)]);
    }
  }

  ngOnInit() {
    window.addEventListener("keyup", event => {
      if (this.timerStarted === false){
        this.timerStarted = true;
        this.startTime()
      }
      if (event.key === "q") {
        this.qpressed = true;
        this.wpressed = false;
        this.epressed = false;
        setTimeout(() => {
          this.qpressed = false;
        }, 100);
        if (event.key === this.gameArray[0].button) {
          this.score++;
          this.gameArray.shift();
          this.gameArray.push(
            this.fillGameArray[Math.floor(Math.random() * 3)]
          );
        } else {
          this.wrongInput = true;
          setTimeout(() => {
            this.wrongInput = false;
          }, 100);
          this.score = this.score - 3;
        }
      } else if (event.key === "w") {
        this.qpressed = false;
        this.wpressed = true;
        this.epressed = false;
        setTimeout(() => {
          this.wpressed = false;
        }, 100);
        if (event.key === this.gameArray[0].button) {
          this.score++;
          this.gameArray.shift();
          this.gameArray.push(
            this.fillGameArray[Math.floor(Math.random() * 3)]
          );
        } else {
          this.wrongInput = true;
          setTimeout(() => {
            this.wrongInput = false;
          }, 100);
          this.score = this.score - 3;
        }
      } else if (event.key === "e") {
        this.qpressed = false;
        this.wpressed = false;
        this.epressed = true;
        setTimeout(() => {
          this.epressed = false;
        }, 100);
        if (event.key === this.gameArray[0].button) {
          this.score++;
          this.gameArray.shift();
          this.gameArray.push(
            this.fillGameArray[Math.floor(Math.random() * 3)]
          );
        } else {
          this.wrongInput = true;
          setTimeout(() => {
            this.wrongInput = false;
          }, 100);
          this.score = this.score - 3;
        }
      }
    });
  }

  startTime() {
    // if (this.timerStarted === true){
    //   setInterval(() => {
    //     if (this.timer === 0) {
    //       this.timerStarted = false;
    //       this.timer = 10;
    //       window.alert("Your score is " + this.score + "!");
    //       this.score = 0;
    //     }
    //     this.timer = this.timer - 1;
    //   }, 1000);
    // }
  }

}
