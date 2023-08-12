import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { map, mergeMap } from 'rxjs/operators';
import { config } from 'src/app/config';
import { AlfrescoService } from 'src/app/service/alfresco.service';


@Component({
  selector: 'app-new-document',
  templateUrl: './new-document.component.html',
  styleUrls: ['./new-document.component.css']
})
export class NewDocumentComponent implements OnInit, OnDestroy {
  
  parentNodeId = '';
  parentFolderName = '';
  

  relativePath = new FormControl('', []);
  autoRename = new FormControl(true);
  file = new FormControl(null, [Validators.required]);
  selectedFile: File | null = null;
  
  uploadForm = this.builder.group({
    relativePath: this.relativePath,
    autoRename: this.autoRename,
    file: this.file
  });

  obs$: any;
  
  constructor(
    private builder: FormBuilder, 
    private alfrescoService: AlfrescoService,
    private router: Router,
    private route: ActivatedRoute) {}
    

  ngOnInit(): void {
    this.obs$ = this.route.queryParamMap.pipe(
      map(params => this.parentNodeId = params.get('nodeId') ?? config.default_node),
      mergeMap(nodeId => this.alfrescoService.getNodeDetails(nodeId)),
    ).subscribe(data => this.parentFolderName = `${data.entry?.path?.name}/${data.entry.name}` ?? '')
  }
  
  ngOnDestroy(): void {
    this.obs$.unsubscribe();
  }

  onFileSelected(event: any): void {
    this.selectedFile = event.target.files[0];
  }

  submit(): void {
    if(this.uploadForm.invalid) {
      return;
    }

    const formData = new FormData();
    formData.append('relativePath', this.uploadForm.value.relativePath!);
    formData.append('autoRename', JSON.stringify(this.uploadForm.value.autoRename!));
    formData.append('filedata', this.selectedFile!);
    
    this.alfrescoService.uploadFile(formData, this.parentNodeId).subscribe(data => {
      this.router.navigate(['/documents'], { queryParams: { nodeId: this.parentNodeId } });
    });
  }
}
