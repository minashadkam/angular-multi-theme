import {Component, OnInit, Renderer2} from '@angular/core';
import {RouterOutlet} from '@angular/router';
import {SharedComponent} from "../../projects/shared/src/lib/shared.component";
import {Theme} from "./theme/theme";
import {ThemeService} from "./theme/theme.service";
import {iterator} from "rxjs/internal/symbol/iterator";
import {CommonModule} from "@angular/common";
import {FormsModule} from "@angular/forms";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, SharedComponent, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  title = 'angular-multi-theme';
  themeArr: Theme[];
  selectedTheme: Theme = Theme.SECONDARY;

  constructor(
    private themeService: ThemeService,
    private renderer2: Renderer2,
  ) {
    this.themeArr = [Theme.GREEN_ORANGE, Theme.SECONDARY, Theme.DARK_YELLOW];
    console.log('themeArr => ', this.themeArr);
  }

  ngOnInit(): void {
    this.initialize();

    // const darkMode = localStorage.getItem("theme") == 'dark' || window.matchMedia("(prefers-color-scheme: dark)")?.matches;
    // const newTheme = darkMode ? 'dark' : 'light';
    // localStorage.setItem("theme", newTheme);
    // document.querySelector("html")!.setAttribute("data-theme", newTheme);
    // document.body.classList.toggle(newTheme);

  }

  initialize() {
    this.themeService.setTheme(this.selectedTheme, this.renderer2);
  }

  chooseTheme(theme: Theme) {
    debugger
    this.themeService.setTheme(theme, this.renderer2);
  }

  changeTheme() {
    const newTheme = localStorage.getItem("theme") == 'dark' ? 'light' : 'dark';
    localStorage.setItem("theme", newTheme);
    document.querySelector("html")!.setAttribute("data-theme", newTheme);
    // document.body.classList.toggle(newTheme);
  };

  protected readonly iterator = iterator;
}
