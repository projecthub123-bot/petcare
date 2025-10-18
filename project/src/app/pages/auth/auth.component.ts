@Component({
  selector: 'app-auth',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    // MatInputModule,
    // MatButtonModule,
    // MatFormFieldModule,
    // MatSelectModule
  ],
  templateUrl: './auth.component.html',   // ✅ FIXED
  styleUrls: ['./auth.component.scss'],
  animations: [
    trigger('slideSwap', [
      state('login', style({
        transform: 'translateX(0)'
      })),
      state('signup', style({
        transform: 'translateX(0)'
      })),
      transition('login <=> signup', [
        animate('600ms cubic-bezier(0.4, 0.0, 0.2, 1)')
      ])
    ]),
    trigger('fadeSlide', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateX(30px)' }),
        animate('500ms ease-out', style({ opacity: 1, transform: 'translateX(0)' }))
      ]),
      transition(':leave', [
        animate('500ms ease-in', style({ opacity: 0, transform: 'translateX(-30px)' }))
      ])
    ])
  ]
})
