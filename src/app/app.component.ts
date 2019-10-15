import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { NestedTreeControl } from '@angular/cdk/tree';
import { MatTreeNestedDataSource } from '@angular/material/tree';
import { BehaviorSubject, of as observableOf } from 'rxjs';
import { ApiServiceService } from './api-service.service';
import { FilesExplorer } from './files-explorer';

export class FileNode {
	children: FileNode[];
	filename: string;
	type: any;
}
// tslint:disable-next-line: max-classes-per-file
@Component({
	selector: 'oo-app',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
	files: FilesExplorer[] = [];
	nestedTreeControl: NestedTreeControl<FileNode>;
	nestedDataSource: MatTreeNestedDataSource<FileNode>;
	dataChange: BehaviorSubject<FileNode[]> = new BehaviorSubject<FileNode[]>([]);
	name = 'Angular 5';
	fileUrl: any;
	afuConfig = {
		uploadAPI: {
		  url:"http://localhost:8080/api/items"
		},
	};
	constructor(private sanitizer: DomSanitizer,
				private apiService: ApiServiceService) {
		this.nestedTreeControl = new NestedTreeControl<FileNode>(this._getChildren);
		this.nestedDataSource = new MatTreeNestedDataSource();
		this.dataChange.subscribe(data => this.nestedDataSource.data = data);
		this.dataChange.next([
		  {
				filename: 'folder',
				type: '',
				children: [
			  {
						filename: 'test3',
						type: 'exe',
						children: [],
			  },
				],
		  },
		  {
				filename: 'test2',
				type: 'exe',
				children: [],
		  },
		]);
	  }
	  private _getChildren = (node: FileNode) => observableOf(node.children);

	  // tslint:disable-next-line: block-spacing
	  hasNestedChild = (_: number, nodeData: FileNode) => {return !(nodeData.type); };
	ngOnInit() {
		const data = 'some text';
		const blob = new Blob([data], { type: 'application/octet-stream' });
		this.fileUrl = this.sanitizer.bypassSecurityTrustResourceUrl(window.URL.createObjectURL(blob));
		// this.getFilesExplorer('QFMJVm8Fz')
		// this.apiService.getFiles().subscribe();
		this.apiService.getFiles().subscribe(
			files => {this.files = files;
					console.log(this.files);});
	}
	//   getFilesExplorer(id: string) {
	// 	this.apiService.getFiles(id).subscribe((isDeleted: boolean) => {
	// 	  console.log("moniaaaaaaaaaaaaa");
	// 	},
	// 	  (error: any) => {
	// 		console.log('Download failed!');
	// 	  });
	//   }
}
