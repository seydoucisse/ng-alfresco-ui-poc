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
import { PersonNetworkEntry } from './personNetworkEntry';
import { Pagination } from './pagination';


export interface PersonNetworkPagingList { 
    pagination: Pagination;
    entries: Array<PersonNetworkEntry>;
}
