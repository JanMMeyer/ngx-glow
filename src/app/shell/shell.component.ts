import { BreakpointObserver, Breakpoints, BreakpointState } from '@angular/cdk/layout'
import { AfterContentInit, ChangeDetectionStrategy, Component, ContentChild, ContentChildren, OnInit } from '@angular/core'
import { Observable } from 'rxjs'
import { map, shareReplay } from 'rxjs/operators'
import { LeftShellItem } from './shell.directive'
import { ShellService } from './shell.service'


@Component({
	selector: 'app-shell',
	templateUrl: './shell.component.html',
	styleUrls: ['./shell.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class ShellComponent implements OnInit, AfterContentInit {

	public isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
		.pipe(
			map((result: BreakpointState) => result.matches),
			shareReplay()
		)

	public constructor(private breakpointObserver: BreakpointObserver, public shellService: ShellService) {
	}

	public ngOnInit(): void {
		console.warn('empty ngOnInit in shell')
	}

	public ngAfterContentInit(): void {
		console.warn('empty ngAfterContentInit in shell')
	}

}
