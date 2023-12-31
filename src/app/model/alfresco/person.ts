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
import { Company } from './company';
import { Capabilities } from './capabilities';


export interface Person { 
    id: string;
    firstName: string;
    lastName?: string;
    displayName?: string;
    description?: string;
    avatarId?: string;
    email: string;
    skypeId?: string;
    googleId?: string;
    instantMessageId?: string;
    jobTitle?: string;
    location?: string;
    company?: Company;
    mobile?: string;
    telephone?: string;
    statusUpdatedAt?: string;
    userStatus?: string;
    enabled: boolean;
    emailNotificationsEnabled?: boolean;
    aspectNames?: Array<string>;
    properties?: object;
    capabilities?: Capabilities;
}

