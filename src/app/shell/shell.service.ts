import { Injectable } from '@angular/core'
import { BehaviorSubject, Observable, of } from 'rxjs'
import { FooterShellItem, HeaderShellItem, LeftShellItem, MainShellItem, RightShellItem, ShellItem } from './shell.directive'

@Injectable({
	providedIn: 'root'
})
export class ShellService {

	public headerShellIsPopulated$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false)
	public leftShellIsPopulated$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false)
	public mainShellIsPopulated$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false)
	public rightShellIsPopulated$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false)
	public footerShellIsPopulated$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false)

	private headerShellItems: HeaderShellItem[] = []
	private leftShellItems: LeftShellItem[] = []
	private mainShellItems: MainShellItem[] = []
	private rightShellItems: RightShellItem[] = []
	private footerShellItems: FooterShellItem[] = []
	// public constructor() { }

	public toggleSideNavDrawer(): Observable<boolean> {
		return of(true)
	}

	public registerShellItem(shellItem: ShellItem): void {
		if (shellItem instanceof HeaderShellItem) this.handleRegister(shellItem, this.headerShellItems, this.leftShellIsPopulated$)
		if (shellItem instanceof LeftShellItem) this.handleRegister(shellItem, this.leftShellItems, this.leftShellIsPopulated$)
		if (shellItem instanceof MainShellItem) this.handleRegister(shellItem, this.mainShellItems, this.leftShellIsPopulated$)
		if (shellItem instanceof RightShellItem) this.handleRegister(shellItem, this.rightShellItems, this.leftShellIsPopulated$)
		if (shellItem instanceof FooterShellItem) this.handleRegister(shellItem, this.footerShellItems, this.leftShellIsPopulated$)
	}

	public unRegisterShellItem(shellItem: ShellItem): void {
		if (shellItem instanceof HeaderShellItem) this.handleUnregister(shellItem, this.headerShellItems, this.leftShellIsPopulated$)
		if (shellItem instanceof LeftShellItem) this.handleUnregister(shellItem, this.leftShellItems, this.leftShellIsPopulated$)
		if (shellItem instanceof MainShellItem) this.handleUnregister(shellItem, this.mainShellItems, this.leftShellIsPopulated$)
		if (shellItem instanceof RightShellItem) this.handleUnregister(shellItem, this.rightShellItems, this.leftShellIsPopulated$)
		if (shellItem instanceof FooterShellItem) this.handleUnregister(shellItem, this.footerShellItems, this.leftShellIsPopulated$)
	}

	private handleRegister<T extends ShellItem>(shellItem: T, shellItems: T[], populationEmitter$: BehaviorSubject<boolean>): void {
		shellItems.push(shellItem)
		if (!populationEmitter$.value) populationEmitter$.next(true)
	}

	private handleUnregister<T extends ShellItem>(shellItem: T, shellItems: T[], populationEmitter$: BehaviorSubject<boolean>): void {
		const spliceIndex: number = shellItems.indexOf(shellItem)
		if (spliceIndex === -1) {
			console.warn(`shellItem to unregister not registered: ${JSON.stringify(shellItem)}`)
		} else {
			shellItems.splice(spliceIndex)
			if (shellItems.length && populationEmitter$.value) populationEmitter$.next(false)
		}
	}
}
