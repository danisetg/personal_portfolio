import { AfterViewInit, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, AfterViewInit {

  constructor() { }

  ngOnInit(): void {

  }

  ngAfterViewInit() {
    const homeElement = document.querySelector('#home');
    const aboutElement = document.querySelector('#about');

    let options = {
      rootMargin: '0px',
      threshold: 1.0
    }

    let observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {

          if(entry.isIntersecting)
            console.log(entry.target);
      });
    }, options);


    if(homeElement && aboutElement) {
      observer.observe(homeElement);
      observer.observe(aboutElement);
    }
  }

}
