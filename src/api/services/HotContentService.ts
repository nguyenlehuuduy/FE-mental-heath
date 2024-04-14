/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { HotContentForGet } from '../models/HotContentForGet';
import type { HotContentForPost } from '../models/HotContentForPost';
import type { HotContentForUpdate } from '../models/HotContentForUpdate';
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export class HotContentService {
    constructor(public readonly httpRequest: BaseHttpRequest) {}
    /**
     * @param requestBody
     * @returns HotContentForGet
     * @throws ApiError
     */
    public hotContentControllerCreateNewFeature(
        requestBody: HotContentForPost,
    ): CancelablePromise<HotContentForGet> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/api/hot-content',
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * @returns HotContentForGet
     * @throws ApiError
     */
    public hotContentControllerGetAllFeature(): CancelablePromise<Array<HotContentForGet>> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/hot-content',
        });
    }
    /**
     * @param id id of hot content
     * @param requestBody
     * @returns HotContentForGet
     * @throws ApiError
     */
    public hotContentControllerUpdateFeature(
        id: string,
        requestBody: HotContentForUpdate,
    ): CancelablePromise<HotContentForGet> {
        return this.httpRequest.request({
            method: 'PATCH',
            url: '/api/hot-content/{id}',
            query: {
                'id': id,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * @param id id of feature
     * @returns HotContentForGet
     * @throws ApiError
     */
    public hotContentControllerDeleteFeature(
        id: string,
    ): CancelablePromise<HotContentForGet> {
        return this.httpRequest.request({
            method: 'DELETE',
            url: '/api/hot-content/{id}',
            query: {
                'id': id,
            },
        });
    }
}
