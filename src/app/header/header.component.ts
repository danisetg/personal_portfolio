import { Component, OnInit } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit{
  title = 'portfolio';
  darkMode: boolean = true;
  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );

  constructor(private breakpointObserver: BreakpointObserver) {}

  ngOnInit() {
    if(localStorage.getItem('theme') == 'light')
      this.darkMode = false;

    document.getElementById('body')?.classList.add('dark-theme');
  }

  changeTheme() {
    if(this.darkMode)
      this.setDarkTheme();
    else
      this.setLightTheme();
  }

  setDarkTheme() {
    document.getElementById('body')?.classList.remove('light-theme');
    document.getElementById('body')?.classList.add('dark-theme');
  }

  setLightTheme() {
    document.getElementById('body')?.classList.remove('dark-theme');
    document.getElementById('body')?.classList.add('light-theme');
  }

}
