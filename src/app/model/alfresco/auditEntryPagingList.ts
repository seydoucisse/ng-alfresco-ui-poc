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
import { AuditEntryEntry } from './auditEntryEntry';
import { Pagination } from './pagination';


export interface AuditEntryPagingList { 
    pagination?: Pagination;
    entries?: Array<AuditEntryEntry>;
}
