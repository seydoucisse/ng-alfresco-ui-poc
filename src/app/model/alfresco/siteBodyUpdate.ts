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


export interface SiteBodyUpdate { 
    title?: string;
    description?: string;
    visibility?: SiteBodyUpdate.VisibilityEnum;
}
export namespace SiteBodyUpdate {
    export type VisibilityEnum = 'PRIVATE' | 'MODERATED' | 'PUBLIC';
    export const VisibilityEnum = {
        Private: 'PRIVATE' as VisibilityEnum,
        Moderated: 'MODERATED' as VisibilityEnum,
        Public: 'PUBLIC' as VisibilityEnum
    };
}


