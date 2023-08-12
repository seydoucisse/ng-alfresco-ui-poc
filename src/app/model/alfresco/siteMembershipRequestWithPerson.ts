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
import { Site } from './site';
import { Person } from './person';


export interface SiteMembershipRequestWithPerson { 
    id: string;
    createdAt: string;
    site: Site;
    person: Person;
    message?: string;
}

