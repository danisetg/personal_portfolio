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

  homeElement = document.querySelector('#home');
  aboutElement = document.querySelector('#about');


  constructor(private breakpointObserver: BreakpointObserver) {}

  ngOnInit() {
    if(localStorage.getItem('theme') == 'light')
      this.darkMode = false;

    document.getElementById('body')?.classList.add('dark-theme');

    let observer = new IntersectionObserver( (entries) => {
      if(entries[0].isIntersecting === true)
		    console.log('Element has just become visible in screen');
    });

    if(this.homeElement) {
      observer.observe(this.homeElement);
      console.log("it exists!!!");
    }

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

  scrollToView(view: string, drawer: any) {
    let element = document.querySelector(view);
    element?.scrollIntoView();
  }

  isInViewport(el: any) {
    const rect = el.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)

    );
}

}
