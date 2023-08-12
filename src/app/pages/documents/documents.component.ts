import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map } from 'rxjs/operators';
import { config } from 'src/app/config';
import { NodeChildAssociation, NodeChildAssociationEntry, PathElement } from 'src/app/model';
import { AlfrescoService } from 'src/app/service/alfresco.service';

@Component({
  selector: 'app-documents',
  templateUrl: './documents.component.html',
  styleUrls: ['./documents.component.css']
})
export class DocumentsComponent implements OnInit{
  entries: NodeChildAssociation[] = [];
  history: string[] = [];
  breadcrumb: PathElement[] = [];
  currentFolderId = config.default_node;
  detailledNode: NodeChildAssociation | undefined;
  isPanelShown = false;

  subject$: any;

  constructor(
    private alfrescoService: AlfrescoService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.subject$ = this.route.queryParamMap.pipe(
      map(params => params.get('nodeId') ?? config.default_node),
      map(nodeId => this.listFolder(nodeId)),
    ).subscribe();
  }

  listFolder(folderId: string = config.default_node): void {
    this.breadcrumb = [];
    this.currentFolderId = folderId;
    this.alfrescoService.listFolderWithParentDetails(folderId).subscribe(([parentDetail, data]) => {
      this.entries = data.list?.entries?.map((entry: NodeChildAssociationEntry) => entry.entry) ?? [];
      this.breadcrumb = parentDetail.entry?.path?.elements ?? [];
      this.breadcrumb.push({ id: parentDetail.entry?.id ?? '', name: parentDetail.entry?.name ?? '' });
    });
  }

  browse(nodeId: string = config.default_node): void {
    this.history.push(nodeId);
    this.listFolder(nodeId);
  }

  back(): void {
    this.history.pop();
    const navItem = this.history.pop();
    navItem ? this.browse(navItem) : this.listFolder();
  }

  download(nodeId?: string, filename: string = 'download.pdf'): void {
    if(!nodeId) { return;}
    this.alfrescoService.download(nodeId, filename);
  }

  showDetails(nodeId: NodeChildAssociation): void {
    this.detailledNode = nodeId;
    this.toggleDetailsPanel();
  }
  
  toggleDetailsPanel(): void {
    this.isPanelShown = !this.isPanelShown;
  }
}
