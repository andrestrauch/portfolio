import { Component, inject } from '@angular/core';
import { Header } from '../../shared/header/header';
import { TranslatePipe } from '@ngx-translate/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  imports: [Header, TranslatePipe],
  selector: 'app-imprint',
  styleUrl: './imprint.scss',
  templateUrl: './imprint.html',
})
export class Imprint {
  private route = inject(ActivatedRoute);
}
