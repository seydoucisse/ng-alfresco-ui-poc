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


export interface GroupMember { 
    id: string;
    displayName: string;
    memberType: GroupMember.MemberTypeEnum;
}
export namespace GroupMember {
    export type MemberTypeEnum = 'GROUP' | 'PERSON';
    export const MemberTypeEnum = {
        Group: 'GROUP' as MemberTypeEnum,
        Person: 'PERSON' as MemberTypeEnum
    };
}

