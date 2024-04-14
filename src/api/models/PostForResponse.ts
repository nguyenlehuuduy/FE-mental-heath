/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { UserForResponse } from './UserForResponse';
export type PostForResponse = {
    id: string;
    contentText: string;
    accountId: string;
    account: UserForResponse;
    created_at: string;
    updated_at: string;
    totalReaction: number;
    totalComment: number;
    totalShare: number;
};

