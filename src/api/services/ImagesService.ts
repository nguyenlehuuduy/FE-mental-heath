/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Images } from '../models/Images';
import type { ImagesForCreate } from '../models/ImagesForCreate';
import type { Pagination } from '../models/Pagination';
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export class ImagesService {
    constructor(public readonly httpRequest: BaseHttpRequest) {}
    /**
     * Create a new image post
     * @param requestBody
     * @returns Images create an images post successfully
     * @throws ApiError
     */
    public postImagesCreate(
        requestBody: ImagesForCreate,
    ): CancelablePromise<Images> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/images/create',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `Bad request`,
            },
        });
    }
    /**
     * Get all images
     * @param limit The maximum number of images to return
     * @param pageNo current page
     * @param create date create image
     * @param idUser image of a specific user
     * @param capacity filter image by mb capacity
     * @param sortBy key to sort
     * @param orderBy key to order
     * @returns any Return a list of images
     * @throws ApiError
     */
    public getImages(
        limit?: number,
        pageNo?: number,
        create?: string,
        idUser?: string,
        capacity?: string,
        sortBy?: string,
        orderBy?: string,
    ): CancelablePromise<{
        data?: Array<Images>;
        pagination?: Pagination;
    }> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/images',
            query: {
                'limit': limit,
                'pageNo': pageNo,
                'create': create,
                'idUser': idUser,
                'capacity': capacity,
                'sort_by': sortBy,
                'order_by': orderBy,
            },
            errors: {
                400: `Bad request`,
            },
        });
    }
    /**
     * Delete an images
     * @param idImages
     * @returns void
     * @throws ApiError
     */
    public deleteImages(
        idImages: string,
    ): CancelablePromise<void> {
        return this.httpRequest.request({
            method: 'DELETE',
            url: '/images/{idImages}',
            path: {
                'idImages': idImages,
            },
            errors: {
                400: `Bad request`,
            },
        });
    }
}
