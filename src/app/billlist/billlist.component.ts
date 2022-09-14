import {AfterViewInit, Component, ViewChild , OnInit} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';

@Component({
  selector: 'app-billlist',
  templateUrl: './billlist.component.html',
  styleUrls: ['./billlist.component.css']
})
export class BilllistComponent implements OnInit {
  
  constructor() { }
  displayedColumns: string[] = ['position', 'name', 'empcode', 'department','tamount'];
  dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);

  @ViewChild(MatPaginator) paginator: MatPaginator;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  ngOnInit(): void {
  }

}

export interface PeriodicElement {
  position : number;
  name: string;
  empcode: string;
  department: string;
  tamount: number;
}
  

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1,name: 'Josephs', empcode: 'EMP001', department: "Transport", tamount: 100},
  {position: 2,name: 'Liam', empcode: 'EMP002', department: "Transport", tamount: 140},
  {position: 3,name: 'Noah', empcode: 'EMP003', department: "Transport", tamount: 140},
  {position: 4,name: 'Oliver', empcode: 'EMP004', department: "Transport", tamount: 100},
  {position: 5,name: 'Elijah', empcode: 'EMP005', department: "Transport", tamount: 150},
  {position: 6,name: 'James', empcode: 'EMP006', department: "Transport", tamount: 120},
  {position: 7,name: 'William', empcode: 'EMP007', department: "Transport", tamount: 190},
  {position: 8,name: 'Benjamin', empcode: 'EMP008', department: "Transport", tamount: 170},
  {position: 9,name: 'Lucas', empcode: 'EMP009', department: "Transport", tamount: 108},
  {position: 10,name: 'Henry', empcode: 'EMP010', department: "Transport", tamount: 170},
  {position: 11,name: 'Theodore', empcode: 'EMP011', department: "Transport", tamount: 140},
  {position: 12,name: 'Olivia', empcode: 'EMP012', department: "Transport", tamount: 110},
  {position: 13,name: 'Emma', empcode: 'EMP0123', department: "Transport", tamount: 120},
  {position: 14,name: 'Charlotte', empcode: 'EMP014', department: "Transport", tamount: 100},
  {position: 15,name: 'Amelia', empcode: 'EMP015', department: "Transport", tamount: 100},

 
];

