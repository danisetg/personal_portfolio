import { AfterViewInit, Component, OnInit } from '@angular/core';
import { Store } from '@ngxs/store';
import { ActivateMenuItem } from 'src/app/store/actions/menu-item.actions';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, AfterViewInit {

  constructor(private store: Store) { }

  ngOnInit(): void {

  }

  ngAfterViewInit() {
    const homeElement = document.querySelector('#HOME');
    const aboutElement = document.querySelector('#ABOUT');
    const portfolioElement = document.querySelector('#PORTFOLIO');

    let options = {
      rootMargin: '0px',
      threshold: 1.0
    }

    let observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
          if(entry.isIntersecting)
            this.store.dispatch(new ActivateMenuItem(entry.target.id));
      });
    }, options);


    if(homeElement && aboutElement && portfolioElement) {
      observer.observe(homeElement);
      observer.observe(aboutElement);
      observer.observe(portfolioElement);
    }
  }


}
