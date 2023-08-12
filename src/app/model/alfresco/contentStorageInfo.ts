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


/**
 * Response object holding storage properties related data for given content. 
 */
export interface ContentStorageInfo { 
    /**
     * Content type property identifier (e.g. cm:content). Inside this object only colon (\':\') delimiter for namespace-prefix will be used. 
     */
    id: string;
    /**
     * A map (String-String) of storage properties for given content. 
     */
    storageProperties?: { [key: string]: string; };
}

