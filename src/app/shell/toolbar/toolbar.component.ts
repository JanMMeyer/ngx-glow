import { Component } from '@angular/core'
import { BreakpointObserver, Breakpoints, BreakpointState } from '@angular/cdk/layout'
import { Observable } from 'rxjs'
import { map, shareReplay } from 'rxjs/operators'
import { ShellService } from '../shell.service'
import { GlowTheme, ThemeService } from 'src/app/theme/theme.service'

@Component({
	selector: 'app-toolbar',
	templateUrl: './toolbar.component.html',
	styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent {

	public isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
		.pipe(
			map((result: BreakpointState) => result.matches),
			shareReplay()
		)

	public constructor(
		private breakpointObserver: BreakpointObserver,
		private shellService: ShellService,
		private themeService: ThemeService
	) { }

	public toggleLeftShell(): void {
		this.shellService.toggleLeftShell()
	}

	public toggleTheme(): void {
		const nextTheme: GlowTheme = this.themeService.currentTheme === 'light' ? 'dark' : 'light'
		this.themeService.setTheme(nextTheme)
	}
}
