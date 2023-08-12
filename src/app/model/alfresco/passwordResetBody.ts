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


export interface PasswordResetBody { 
    /**
     * the new password
     */
    password: string;
    /**
     * the workflow id provided in the reset password email
     */
    id: string;
    /**
     * the workflow key provided in the reset password email
     */
    key: string;
}

