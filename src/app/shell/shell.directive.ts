import { Directive, ElementRef, OnDestroy, OnInit, Renderer2 } from '@angular/core'
import { BehaviorSubject, Observable, ReplaySubject } from 'rxjs'
import { ShellService } from './shell.service'

// @Directive({ selector: 'svg' })
// export class svgDirective {
// 	public constructor(private elRef: ElementRef<HTMLElement>, private render: Renderer2) OnInit {

// 	}
// }

@Directive()
export abstract class ShellItem implements OnInit, OnDestroy{
	protected abstract wrapperClasses: string[]
	protected abstract wrapperStlyles: string[][]

	protected wrapperParent: HTMLElement | undefined
	protected wrapper: HTMLDivElement | undefined
	protected nativeElement: HTMLElement | undefined

	protected onInit$: ReplaySubject<void> = new ReplaySubject<void>(0)

	public constructor(private elRef: ElementRef<HTMLElement>, private render: Renderer2, private shellService: ShellService) {}

	public ngOnInit(): void {
		// TODO: check if there is a <app-shell> ancestor,
		// before assuming this should be fitted to app-shell needs
		this.shellService.registerShellItem(this)
		this.nativeElement = this.elRef.nativeElement
		this.wrapperParent = this.render.parentNode(this.nativeElement)
		this.wrapper = this.render.createElement('div')

		this.render.removeChild(parent, this.nativeElement, true)
		this.render.appendChild(this.wrapper, this.nativeElement)
		this.render.appendChild(this.wrapperParent, this.wrapper)

		this.render.setStyle(this.wrapper, 'flex', '1 1 auto')
		this.render.setStyle(this.wrapper, 'display', 'flex')
		this.render.setStyle(this.wrapper, 'align-items', 'strech')

		// this.render.addClass(this.wrapper, 'mat-elevation-z24')

		this.wrapperStlyles.forEach((stlye: string[]) => { this.render.setStyle(this.wrapper, stlye[0], stlye[1]) })
		this.wrapperClasses.forEach((cssClass: string) => { this.render.addClass(this.wrapper, cssClass) })


	}

	public ngOnDestroy(): void {
		this.shellService.unRegisterShellItem(this)
	}
}


@Directive({ selector: '[header]' })
export class HeaderShellItem extends ShellItem {
	protected wrapperClasses: string[] = ['glow-shell-item-header']
	protected wrapperStlyles: string[][] = [['flex-direction', 'column']]
}

@Directive({ selector: '[left]' })
export class LeftShellItem extends ShellItem {
	protected wrapperClasses: string[] = ['glow-shell-item-left']
	protected wrapperStlyles: string[][] = [['flex-direction', 'row']]
}

@Directive({ selector: '[main]' })
export class MainShellItem extends ShellItem {
	protected wrapperClasses: string[] = ['glow-shell-item-main']
	protected wrapperStlyles: string[][] = [['flex-direction', 'column']]
}

@Directive({ selector: '[right]' })
export class RightShellItem extends ShellItem {
	protected wrapperClasses: string[] = ['glow-shell-item-right']
	protected wrapperStlyles: string[][] = [['flex-direction', 'row']]
}

@Directive({ selector: '[footer]' })
export class FooterShellItem extends ShellItem {
	protected wrapperClasses: string[] = ['glow-shell-item-footer']
	protected wrapperStlyles: string[][] = [['flex-direction', 'column']]
}
