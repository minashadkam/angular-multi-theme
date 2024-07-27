import {Component, OnInit} from '@angular/core';
import {RouterOutlet} from '@angular/router';
import {SharedComponent} from "../../projects/shared/src/lib/shared.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, SharedComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent  implements OnInit{
  title = 'angular-multi-theme';



  ngOnInit() {
    const darkMode = localStorage.getItem("theme") == 'dark' || window.matchMedia("(prefers-color-scheme: dark)")?.matches;
    const newTheme = darkMode ? 'dark' : 'light';

    localStorage.setItem("theme", newTheme);
    document.querySelector("html")!.setAttribute("data-theme", newTheme);
    // document.body.classList.toggle(newTheme);

  }


  changeTheme() {
    const newTheme =  localStorage.getItem("theme") == 'dark' ? 'light' : 'dark';
    localStorage.setItem("theme", newTheme);
    document.querySelector("html")!.setAttribute("data-theme", newTheme);
    // document.body.classList.toggle(newTheme);
  };
}
