/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { RoleForGet } from './RoleForGet';
export type AccountForFull = {
    id: string;
    fullName: string;
    email: string;
    password: string;
    phone: string;
    aboutMe: string;
    nickName: string;
    birth: string;
    address: string;
    refreshTokenJWT: string;
    expriedTokenJWT: string;
    roles: Array<RoleForGet>;
    created_at: string;
    updated_at: string;
};

