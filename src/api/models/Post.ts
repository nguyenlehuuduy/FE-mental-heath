/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export type Post = {
    content: string;
    ownerUser: {
        idUserOwner: string;
        nameUser: string;
        nickName?: string;
        avataUserOwner?: string;
    };
    idPost?: string;
    accountReup?: Array<{
        idUserReupPost: string;
        nameUser: string;
        nickName?: string;
        avataUserReupPost?: string;
    }>;
    comment?: Array<{
        idUserComment: string;
        contentComment: string;
        commentCreateAt?: string;
        commentUpdateAt?: string;
        nameUser: string;
        nickName?: string;
        avataUserReupPost?: string;
    }>;
    reaction?: {
        total: number;
        informationReact: Array<{
            idUserReaction: string;
            nameUser: string;
            nickName?: string;
            avataUserReupPost?: string;
        }>;
    };
    createAt?: string;
    updateAt?: string;
    images?: Array<string>;
};

