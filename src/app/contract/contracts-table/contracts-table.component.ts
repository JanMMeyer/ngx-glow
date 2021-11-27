import { AfterViewInit, Component, ViewChild } from '@angular/core'
import { MatPaginator } from '@angular/material/paginator'
import { MatSort } from '@angular/material/sort'
import { MatTable } from '@angular/material/table'
import { ContractsTableDataSource, ContractsTableItem } from './contracts-table-datasource'

@Component({
	selector: 'app-contracts-table',
	templateUrl: './contracts-table.component.html',
	styleUrls: ['./contracts-table.component.scss']
})
export class ContractsTableComponent implements AfterViewInit {
	@ViewChild(MatPaginator) public paginator!: MatPaginator
	@ViewChild(MatSort) public sort!: MatSort
	@ViewChild(MatTable) public table!: MatTable<ContractsTableItem>
	public dataSource: ContractsTableDataSource

	/** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
	public displayedColumns: string[] = ['id', 'name']

	public constructor() {
		this.dataSource = new ContractsTableDataSource()
	}

	public  ngAfterViewInit(): void {
		this.dataSource.sort = this.sort
		this.dataSource.paginator = this.paginator
		this.table.dataSource = this.dataSource
	}
}
