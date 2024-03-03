/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export type Notification = {
    content: string;
    message?: string;
    inforUser: {
        nameUser?: string;
        idUser?: string;
    };
    inforPost?: {
        ownerPost?: string;
        idPost?: string;
    };
    inforPostReup?: {
        ownerReupPost?: string;
        idReupPost?: string;
    };
    isRead?: boolean;
    expried?: number;
    createAt?: string;
    updateAt?: string;
};

