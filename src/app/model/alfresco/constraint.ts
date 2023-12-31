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


export interface Constraint { 
    id: string;
    /**
     * the type of the constraint
     */
    type?: string;
    /**
     * the human-readable constraint title
     */
    title?: string;
    /**
     * the human-readable constraint description
     */
    description?: string;
    parameters?: { [key: string]: object; };
}

