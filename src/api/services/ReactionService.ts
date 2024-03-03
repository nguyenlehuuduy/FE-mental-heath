/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Pagination } from '../models/Pagination';
import type { Reaction } from '../models/Reaction';
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export class ReactionService {
    constructor(public readonly httpRequest: BaseHttpRequest) {}
    /**
     * Get list reaction
     * @param idUser The ID of the user
     * @param idPost The ID of the post
     * @param limit page number
     * @param sortBy key word to sort
     * @param orderBy orderBy desc or asc
     * @param date current date to create a post
     * @param pageNo current page
     * @returns any this is reaction
     * @throws ApiError
     */
    public getReactions(
        idUser?: string,
        idPost?: string,
        limit?: number,
        sortBy?: number,
        orderBy?: number,
        date?: string,
        pageNo?: number,
    ): CancelablePromise<{
        data?: Array<Reaction>;
        pagination?: Pagination;
    }> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/reactions',
            query: {
                'idUser': idUser,
                'idPost': idPost,
                'limit': limit,
                'sortBy': sortBy,
                'orderBy': orderBy,
                'date': date,
                'pageNo': pageNo,
            },
            errors: {
                400: `Bad request`,
            },
        });
    }
    /**
     * Cancel reaction
     * @param idReaction The ID of the reaction to cancel
     * @returns void
     * @throws ApiError
     */
    public deleteReactions(
        idReaction: string,
    ): CancelablePromise<void> {
        return this.httpRequest.request({
            method: 'DELETE',
            url: '/reactions/{idReaction}',
            path: {
                'idReaction': idReaction,
            },
        });
    }
}
