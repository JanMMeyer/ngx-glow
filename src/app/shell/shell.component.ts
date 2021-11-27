import { BreakpointObserver, Breakpoints, BreakpointState } from '@angular/cdk/layout'
import { AfterContentInit, Component, ContentChild, ContentChildren, OnInit } from '@angular/core'
import { Observable } from 'rxjs'
import { map, shareReplay } from 'rxjs/operators'
import { LeftShellItem } from './shell.directive'


@Component({
	selector: 'app-shell',
	templateUrl: './shell.component.html',
	styleUrls: ['./shell.component.scss']
})
export class ShellComponent implements OnInit, AfterContentInit {

	public isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
		.pipe(
			map((result: BreakpointState) => result.matches),
			shareReplay()
		)

	public constructor(private breakpointObserver: BreakpointObserver) {
	}

	public ngOnInit(): void {
		console.warn('empty ngOnInit in shell')
	}

	public ngAfterContentInit(): void {
		console.warn('empty ngAfterContentInit in shell')
	}

}
