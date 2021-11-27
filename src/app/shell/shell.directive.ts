import { Directive, ElementRef, OnInit, Renderer2 } from '@angular/core'
import { BehaviorSubject, Observable, ReplaySubject } from 'rxjs'

// @Directive({ selector: 'svg' })
// export class svgDirective {
// 	public constructor(private elRef: ElementRef<HTMLElement>, private render: Renderer2) OnInit {

// 	}
// }

@Directive()
export abstract class ShellItem implements OnInit {
	protected abstract wrapperClasses: string[]
	// protected abstract wrapperStlyles: string[][]

	protected wrapperParent: HTMLElement | undefined
	protected wrapper: HTMLDivElement | undefined
	protected nativeElement: HTMLElement | undefined

	protected onInit$: ReplaySubject<void> = new ReplaySubject<void>(0)

	public constructor(private elRef: ElementRef<HTMLElement>, private render: Renderer2) {}

	public ngOnInit(): void {
		// TODO: check if there is a <app-shell> ancestor,
		// before assuming this should be fitted to app-shell needs
		this.nativeElement = this.elRef.nativeElement
		this.wrapperParent = this.render.parentNode(this.nativeElement)
		this.wrapper = this.render.createElement('div')

		this.render.removeChild(parent, this.nativeElement, true)
		this.render.appendChild(this.wrapper, this.nativeElement)
		this.render.appendChild(this.wrapperParent, this.wrapper)

		this.wrapperClasses.forEach((cssClass: string) => { this.render.addClass(this.wrapper, cssClass) })
		// this.wrapperStlyles.forEach((stlye: string[]) => { this.render.setStyle(this.wrapper, stlye[0], stlye[1]) })

	}
}


@Directive({ selector: '[header]' })
export class HeaderShellItem extends ShellItem {
	protected wrapperClasses: string[] = ['glow-shell-item-header']
}

@Directive({ selector: '[left]' })
export class LeftShellItem extends ShellItem {
	protected wrapperClasses: string[] = ['glow-shell-item-left']
}

@Directive({ selector: '[main]' })
export class MainShellItem extends ShellItem {
	protected wrapperClasses: string[] = ['glow-shell-item-main']
}

@Directive({ selector: '[right]' })
export class RightShellItem extends ShellItem {
	protected wrapperClasses: string[] = ['glow-shell-item-right']
}

@Directive({ selector: '[footer]' })
export class FooterShellItem extends ShellItem {
	protected wrapperClasses: string[] = ['glow-shell-item-footer']
}
