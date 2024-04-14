/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { FeatureForGet } from '../models/FeatureForGet';
import type { FeatureForPost } from '../models/FeatureForPost';
import type { FeatureForUpdate } from '../models/FeatureForUpdate';
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export class FeatureService {
    constructor(public readonly httpRequest: BaseHttpRequest) {}
    /**
     * @param requestBody
     * @returns FeatureForGet
     * @throws ApiError
     */
    public featureControllerCreateNewFeature(
        requestBody: FeatureForPost,
    ): CancelablePromise<FeatureForGet> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/api/feature',
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * @returns FeatureForGet
     * @throws ApiError
     */
    public featureControllerGetAllFeature(): CancelablePromise<Array<FeatureForGet>> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/feature',
        });
    }
    /**
     * @param id id of feature
     * @param requestBody
     * @returns FeatureForGet
     * @throws ApiError
     */
    public featureControllerUpdateFeature(
        id: string,
        requestBody: FeatureForUpdate,
    ): CancelablePromise<FeatureForGet> {
        return this.httpRequest.request({
            method: 'PATCH',
            url: '/api/feature/{id}',
            query: {
                'id': id,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * @param id id of feature
     * @returns FeatureForGet
     * @throws ApiError
     */
    public featureControllerDeleteFeature(
        id: string,
    ): CancelablePromise<FeatureForGet> {
        return this.httpRequest.request({
            method: 'DELETE',
            url: '/api/feature/{id}',
            query: {
                'id': id,
            },
        });
    }
}
