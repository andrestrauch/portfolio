import { Component, inject, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { TranslatePipe, TranslateService } from '@ngx-translate/core';

@Component({
  imports: [TranslatePipe, RouterLink],
  selector: 'app-header',
  styleUrl: './header.scss',
  templateUrl: './header.html',
})
export class Header {
  private translate = inject(TranslateService);

  lang = signal('en');

  ngOnInit() {
    // document.getElementById('enBtn')?.classList.add('active');
  }

  changeLanguage(language: string): void {
    this.translate.use(language);
    if (language == 'de') {
      this.lang.set('de');
    }

    if (language == 'en') {
      this.lang.set('en');
    }
  }
}
