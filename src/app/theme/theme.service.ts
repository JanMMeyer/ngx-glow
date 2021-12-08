import { Injectable, Renderer2, RendererFactory2 } from '@angular/core'
import { BehaviorSubject, Observable } from 'rxjs'
import { map } from 'rxjs/operators'

export type GlowTheme = 'light' | 'dark'
export const GlowThemeClass = {
	light:  'glow-light',
	dark: 'glow-dark'
}

@Injectable({
	providedIn: 'root'
})
export class ThemeService {

	private _currentTheme$: BehaviorSubject<GlowTheme> = new BehaviorSubject<GlowTheme>('light')

	public readonly currentTheme$: Observable<GlowTheme> = this._currentTheme$.asObservable()
	public readonly currentThemeClass$: Observable<string> = this.currentTheme$.pipe(map((theme: GlowTheme) => GlowThemeClass[theme]))

	public constructor(rendererFactory: RendererFactory2) {
		const renderer: Renderer2 = rendererFactory.createRenderer(null, null)
		this.currentThemeClass$.subscribe((currentClass: string) => {
			Object.values(GlowThemeClass).forEach((classToRemove: string) => {
				renderer.removeClass(document.body, classToRemove)
			})
			renderer.addClass(document.body, currentClass)
		})
	}
	public get currentTheme(): GlowTheme {
		return this._currentTheme$.value
	}

	public setTheme(theme: GlowTheme): void {
		this._currentTheme$.next(theme)
	}
}
