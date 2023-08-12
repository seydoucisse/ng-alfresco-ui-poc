/**
 * Alfresco Content Services REST API
 * **Core API**  Provides access to the core features of Alfresco Content Services. 
 *
 * The version of the OpenAPI document: 1
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
import { Pagination } from './pagination';
import { Node } from './node';
import { NodeChildAssociationEntry } from './nodeChildAssociationEntry';


export interface NodeChildAssociationPagingList { 
    pagination?: Pagination;
    entries?: Array<NodeChildAssociationEntry>;
    source?: Node;
}
