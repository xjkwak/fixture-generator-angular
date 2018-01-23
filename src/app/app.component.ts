import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  //title = 'Fixture Generator Angular';
  title='';
  private fixture: string;

  generateFixture(teams: HTMLInputElement): boolean {
    console.log(teams.value);
    let team: string[] = teams.value.split("\n");
    console.log("teams: ", team);

    if (team.length % 2 == 0) {
      let matrix: string[][] = [];
      let rows = team.length - 1;
      let cols = team.length;
      this.fixture = 'Ana!';

      let k = 0;
      let l = team.length - 2;
      for (let i = 0; i < rows; i++) {
        matrix[i] = [];
        for (let j = 0; j < cols; j++) {
          if (j % 2 == 0) {
            if (k >= team.length - 1) {
              k = 0;
            }
            matrix[i][j] = team[k];
            k++;

          }
          else {
            if (j == 1) {
              matrix[i][j] = team[team.length - 1];
            }
            else {
              if (l < 0) {
                l = team.length-2;
              }
              matrix[i][j] = team[l];
              l--;
            }
          }
        }
      }

      this.fixture = this.getFixture(matrix);
    }
    else {
      this.fixture = 'You need to enter an even number of teams.'
    }

    return false;
  }

  getFixture(matrix:string[][]):string {
    let fixture = '';

    for (let i = 0; i < matrix.length; i++) {
      for (let j = 0; j < matrix[i].length; j+=2) {
        fixture += matrix[i][j] + " vs " + matrix[i][j+1] + " ";
      }
      fixture += "\n";
    }
    console.log(fixture);
    return fixture;
  }
}
