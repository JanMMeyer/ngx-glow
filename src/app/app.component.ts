import { Component } from '@angular/core'
import { Observable } from 'rxjs'
import { GlowThemeClass, ThemeService } from './theme/theme.service'

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss']
})
export class AppComponent {
	public title: string = 'ngx-glow'

	public constructor(private theme: ThemeService) {}

	public get themeClass$(): Observable<string> {
		return this.theme.currentThemeClass$
	}
}
