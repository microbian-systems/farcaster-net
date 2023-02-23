//----------------------
// <auto-generated>
//     Generated using the NSwag toolchain v13.16.0.0 (NJsonSchema v10.7.1.0 (Newtonsoft.Json v12.0.0.0)) (http://NSwag.org)
// </auto-generated>
//----------------------

/* tslint:disable */
/* eslint-disable */
// ReSharper disable InconsistentNaming

import { mergeMap as _observableMergeMap, catchError as _observableCatch } from 'rxjs/operators';
import { Observable, throwError as _observableThrow, of as _observableOf } from 'rxjs';
import { Injectable, Inject, Optional, InjectionToken } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse, HttpResponseBase } from '@angular/common/http';

import * as moment from 'moment';

export const API_BASE_URL = new InjectionToken<string>('API_BASE_URL');

export interface IWebApiClient {
    /**
     * Lookup all Authors
     * @return Success
     */
    authorsAll(): Observable<Author[]>;
    /**
     * Lookup an Author by their Id
     * @return Success
     */
    authors(id: string): Observable<Author>;
    /**
     * Default Recommended Feed
     * @return Success
     */
    defaultFeed(): Observable<Cast[]>;
    /**
     * Lookup all Movies
     * @return Success
     */
    moviesAll(): Observable<Movie[]>;
    /**
     * Lookup a Movie by its Id
     * @return Success
     */
    movies(id: string): Observable<Movie>;
    /**
     * Lookup all Reviews
     * @return Success
     */
    reviewsAll(): Observable<Review[]>;
    /**
     * Create a Review
     * @param body (optional) 
     * @return Created
     */
    reviewsPOST(body?: CreateReviewRequest | undefined): Observable<Review>;
    /**
     * Lookup a Review by its Id
     * @return Success
     */
    reviewsGET(id: string): Observable<Review>;
    /**
     * Delete a Review by its Id
     * @return No Content
     */
    reviewsDELETE(id: string): Observable<Review>;
    /**
     * Update a Review
     * @param body (optional) 
     * @return Created
     */
    reviewsPUT(id: string, body?: UpdateReviewRequest | undefined): Observable<Review>;
    /**
     * Lookup the application version details
     * @return Success
     */
    version(): Observable<Version[]>;
}

@Injectable({
    providedIn: 'root'
})
export class WebApiClient implements IWebApiClient {
    private http: HttpClient;
    private baseUrl: string;
    protected jsonParseReviver: ((key: string, value: any) => any) | undefined = undefined;

    constructor(@Inject(HttpClient) http: HttpClient, @Optional() @Inject(API_BASE_URL) baseUrl?: string) {
        this.http = http;
        this.baseUrl = baseUrl !== undefined && baseUrl !== null ? baseUrl : "";
    }

    /**
     * Lookup all Authors
     * @return Success
     */
    authorsAll(): Observable<Author[]> {
        let url_ = this.baseUrl + "/api/authors";
        url_ = url_.replace(/[?&]$/, "");

        let options_ : any = {
            observe: "response",
            responseType: "blob",
            headers: new HttpHeaders({
                "Accept": "application/json"
            })
        };

        return this.http.request("get", url_, options_).pipe(_observableMergeMap((response_ : any) => {
            return this.processAuthorsAll(response_);
        })).pipe(_observableCatch((response_: any) => {
            if (response_ instanceof HttpResponseBase) {
                try {
                    return this.processAuthorsAll(response_ as any);
                } catch (e) {
                    return _observableThrow(e) as any as Observable<Author[]>;
                }
            } else
                return _observableThrow(response_) as any as Observable<Author[]>;
        }));
    }

    protected processAuthorsAll(response: HttpResponseBase): Observable<Author[]> {
        const status = response.status;
        const responseBlob =
            response instanceof HttpResponse ? response.body :
            (response as any).error instanceof Blob ? (response as any).error : undefined;

        let _headers: any = {}; if (response.headers) { for (let key of response.headers.keys()) { _headers[key] = response.headers.get(key); }}
        if (status === 200) {
            return blobToText(responseBlob).pipe(_observableMergeMap((_responseText: string) => {
            let result200: any = null;
            result200 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver) as Author[];
            return _observableOf(result200);
            }));
        } else if (status === 500) {
            return blobToText(responseBlob).pipe(_observableMergeMap((_responseText: string) => {
            let result500: any = null;
            result500 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver) as ApiError;
            return throwException("Server Error", status, _responseText, _headers, result500);
            }));
        } else if (status !== 200 && status !== 204) {
            return blobToText(responseBlob).pipe(_observableMergeMap((_responseText: string) => {
            return throwException("An unexpected server error occurred.", status, _responseText, _headers);
            }));
        }
        return _observableOf(null as any);
    }

    /**
     * Lookup an Author by their Id
     * @return Success
     */
    authors(id: string): Observable<Author> {
        let url_ = this.baseUrl + "/api/authors/{id}";
        if (id === undefined || id === null)
            throw new Error("The parameter 'id' must be defined.");
        url_ = url_.replace("{id}", encodeURIComponent("" + id));
        url_ = url_.replace(/[?&]$/, "");

        let options_ : any = {
            observe: "response",
            responseType: "blob",
            headers: new HttpHeaders({
                "Accept": "application/json"
            })
        };

        return this.http.request("get", url_, options_).pipe(_observableMergeMap((response_ : any) => {
            return this.processAuthors(response_);
        })).pipe(_observableCatch((response_: any) => {
            if (response_ instanceof HttpResponseBase) {
                try {
                    return this.processAuthors(response_ as any);
                } catch (e) {
                    return _observableThrow(e) as any as Observable<Author>;
                }
            } else
                return _observableThrow(response_) as any as Observable<Author>;
        }));
    }

    protected processAuthors(response: HttpResponseBase): Observable<Author> {
        const status = response.status;
        const responseBlob =
            response instanceof HttpResponse ? response.body :
            (response as any).error instanceof Blob ? (response as any).error : undefined;

        let _headers: any = {}; if (response.headers) { for (let key of response.headers.keys()) { _headers[key] = response.headers.get(key); }}
        if (status === 200) {
            return blobToText(responseBlob).pipe(_observableMergeMap((_responseText: string) => {
            let result200: any = null;
            result200 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver) as Author;
            return _observableOf(result200);
            }));
        } else if (status === 400) {
            return blobToText(responseBlob).pipe(_observableMergeMap((_responseText: string) => {
            let result400: any = null;
            result400 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver) as ApiError;
            return throwException("Bad Request", status, _responseText, _headers, result400);
            }));
        } else if (status === 404) {
            return blobToText(responseBlob).pipe(_observableMergeMap((_responseText: string) => {
            let result404: any = null;
            result404 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver) as ApiError;
            return throwException("Not Found", status, _responseText, _headers, result404);
            }));
        } else if (status === 500) {
            return blobToText(responseBlob).pipe(_observableMergeMap((_responseText: string) => {
            let result500: any = null;
            result500 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver) as ApiError;
            return throwException("Server Error", status, _responseText, _headers, result500);
            }));
        } else if (status !== 200 && status !== 204) {
            return blobToText(responseBlob).pipe(_observableMergeMap((_responseText: string) => {
            return throwException("An unexpected server error occurred.", status, _responseText, _headers);
            }));
        }
        return _observableOf(null as any);
    }

    /**
     * Default Recommended Feed
     * @return Success
     */
    defaultFeed(): Observable<Cast[]> {
        let url_ = this.baseUrl + "/api/default-feed";
        url_ = url_.replace(/[?&]$/, "");

        let options_ : any = {
            observe: "response",
            responseType: "blob",
            headers: new HttpHeaders({
                "Accept": "application/json"
            })
        };

        return this.http.request("get", url_, options_).pipe(_observableMergeMap((response_ : any) => {
            return this.processDefaultFeed(response_);
        })).pipe(_observableCatch((response_: any) => {
            if (response_ instanceof HttpResponseBase) {
                try {
                    return this.processDefaultFeed(response_ as any);
                } catch (e) {
                    return _observableThrow(e) as any as Observable<Cast[]>;
                }
            } else
                return _observableThrow(response_) as any as Observable<Cast[]>;
        }));
    }

    protected processDefaultFeed(response: HttpResponseBase): Observable<Cast[]> {
        const status = response.status;
        const responseBlob =
            response instanceof HttpResponse ? response.body :
            (response as any).error instanceof Blob ? (response as any).error : undefined;

        let _headers: any = {}; if (response.headers) { for (let key of response.headers.keys()) { _headers[key] = response.headers.get(key); }}
        if (status === 200) {
            return blobToText(responseBlob).pipe(_observableMergeMap((_responseText: string) => {
            let result200: any = null;
            result200 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver) as Cast[];
            return _observableOf(result200);
            }));
        } else if (status === 500) {
            return blobToText(responseBlob).pipe(_observableMergeMap((_responseText: string) => {
            let result500: any = null;
            result500 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver) as ApiError;
            return throwException("Server Error", status, _responseText, _headers, result500);
            }));
        } else if (status !== 200 && status !== 204) {
            return blobToText(responseBlob).pipe(_observableMergeMap((_responseText: string) => {
            return throwException("An unexpected server error occurred.", status, _responseText, _headers);
            }));
        }
        return _observableOf(null as any);
    }

    /**
     * Lookup all Movies
     * @return Success
     */
    moviesAll(): Observable<Movie[]> {
        let url_ = this.baseUrl + "/api/movies";
        url_ = url_.replace(/[?&]$/, "");

        let options_ : any = {
            observe: "response",
            responseType: "blob",
            headers: new HttpHeaders({
                "Accept": "application/json"
            })
        };

        return this.http.request("get", url_, options_).pipe(_observableMergeMap((response_ : any) => {
            return this.processMoviesAll(response_);
        })).pipe(_observableCatch((response_: any) => {
            if (response_ instanceof HttpResponseBase) {
                try {
                    return this.processMoviesAll(response_ as any);
                } catch (e) {
                    return _observableThrow(e) as any as Observable<Movie[]>;
                }
            } else
                return _observableThrow(response_) as any as Observable<Movie[]>;
        }));
    }

    protected processMoviesAll(response: HttpResponseBase): Observable<Movie[]> {
        const status = response.status;
        const responseBlob =
            response instanceof HttpResponse ? response.body :
            (response as any).error instanceof Blob ? (response as any).error : undefined;

        let _headers: any = {}; if (response.headers) { for (let key of response.headers.keys()) { _headers[key] = response.headers.get(key); }}
        if (status === 200) {
            return blobToText(responseBlob).pipe(_observableMergeMap((_responseText: string) => {
            let result200: any = null;
            result200 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver) as Movie[];
            return _observableOf(result200);
            }));
        } else if (status === 500) {
            return blobToText(responseBlob).pipe(_observableMergeMap((_responseText: string) => {
            let result500: any = null;
            result500 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver) as ApiError;
            return throwException("Server Error", status, _responseText, _headers, result500);
            }));
        } else if (status !== 200 && status !== 204) {
            return blobToText(responseBlob).pipe(_observableMergeMap((_responseText: string) => {
            return throwException("An unexpected server error occurred.", status, _responseText, _headers);
            }));
        }
        return _observableOf(null as any);
    }

    /**
     * Lookup a Movie by its Id
     * @return Success
     */
    movies(id: string): Observable<Movie> {
        let url_ = this.baseUrl + "/api/movies/{id}";
        if (id === undefined || id === null)
            throw new Error("The parameter 'id' must be defined.");
        url_ = url_.replace("{id}", encodeURIComponent("" + id));
        url_ = url_.replace(/[?&]$/, "");

        let options_ : any = {
            observe: "response",
            responseType: "blob",
            headers: new HttpHeaders({
                "Accept": "application/json"
            })
        };

        return this.http.request("get", url_, options_).pipe(_observableMergeMap((response_ : any) => {
            return this.processMovies(response_);
        })).pipe(_observableCatch((response_: any) => {
            if (response_ instanceof HttpResponseBase) {
                try {
                    return this.processMovies(response_ as any);
                } catch (e) {
                    return _observableThrow(e) as any as Observable<Movie>;
                }
            } else
                return _observableThrow(response_) as any as Observable<Movie>;
        }));
    }

    protected processMovies(response: HttpResponseBase): Observable<Movie> {
        const status = response.status;
        const responseBlob =
            response instanceof HttpResponse ? response.body :
            (response as any).error instanceof Blob ? (response as any).error : undefined;

        let _headers: any = {}; if (response.headers) { for (let key of response.headers.keys()) { _headers[key] = response.headers.get(key); }}
        if (status === 200) {
            return blobToText(responseBlob).pipe(_observableMergeMap((_responseText: string) => {
            let result200: any = null;
            result200 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver) as Movie;
            return _observableOf(result200);
            }));
        } else if (status === 400) {
            return blobToText(responseBlob).pipe(_observableMergeMap((_responseText: string) => {
            let result400: any = null;
            result400 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver) as ApiError;
            return throwException("Bad Request", status, _responseText, _headers, result400);
            }));
        } else if (status === 404) {
            return blobToText(responseBlob).pipe(_observableMergeMap((_responseText: string) => {
            let result404: any = null;
            result404 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver) as ApiError;
            return throwException("Not Found", status, _responseText, _headers, result404);
            }));
        } else if (status === 500) {
            return blobToText(responseBlob).pipe(_observableMergeMap((_responseText: string) => {
            let result500: any = null;
            result500 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver) as ApiError;
            return throwException("Server Error", status, _responseText, _headers, result500);
            }));
        } else if (status !== 200 && status !== 204) {
            return blobToText(responseBlob).pipe(_observableMergeMap((_responseText: string) => {
            return throwException("An unexpected server error occurred.", status, _responseText, _headers);
            }));
        }
        return _observableOf(null as any);
    }

    /**
     * Lookup all Reviews
     * @return Success
     */
    reviewsAll(): Observable<Review[]> {
        let url_ = this.baseUrl + "/api/reviews";
        url_ = url_.replace(/[?&]$/, "");

        let options_ : any = {
            observe: "response",
            responseType: "blob",
            headers: new HttpHeaders({
                "Accept": "application/json"
            })
        };

        return this.http.request("get", url_, options_).pipe(_observableMergeMap((response_ : any) => {
            return this.processReviewsAll(response_);
        })).pipe(_observableCatch((response_: any) => {
            if (response_ instanceof HttpResponseBase) {
                try {
                    return this.processReviewsAll(response_ as any);
                } catch (e) {
                    return _observableThrow(e) as any as Observable<Review[]>;
                }
            } else
                return _observableThrow(response_) as any as Observable<Review[]>;
        }));
    }

    protected processReviewsAll(response: HttpResponseBase): Observable<Review[]> {
        const status = response.status;
        const responseBlob =
            response instanceof HttpResponse ? response.body :
            (response as any).error instanceof Blob ? (response as any).error : undefined;

        let _headers: any = {}; if (response.headers) { for (let key of response.headers.keys()) { _headers[key] = response.headers.get(key); }}
        if (status === 200) {
            return blobToText(responseBlob).pipe(_observableMergeMap((_responseText: string) => {
            let result200: any = null;
            result200 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver) as Review[];
            return _observableOf(result200);
            }));
        } else if (status === 500) {
            return blobToText(responseBlob).pipe(_observableMergeMap((_responseText: string) => {
            let result500: any = null;
            result500 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver) as ApiError;
            return throwException("Server Error", status, _responseText, _headers, result500);
            }));
        } else if (status !== 200 && status !== 204) {
            return blobToText(responseBlob).pipe(_observableMergeMap((_responseText: string) => {
            return throwException("An unexpected server error occurred.", status, _responseText, _headers);
            }));
        }
        return _observableOf(null as any);
    }

    /**
     * Create a Review
     * @param body (optional) 
     * @return Created
     */
    reviewsPOST(body?: CreateReviewRequest | undefined): Observable<Review> {
        let url_ = this.baseUrl + "/api/reviews";
        url_ = url_.replace(/[?&]$/, "");

        const content_ = JSON.stringify(body);

        let options_ : any = {
            body: content_,
            observe: "response",
            responseType: "blob",
            headers: new HttpHeaders({
                "Content-Type": "application/json",
                "Accept": "application/json"
            })
        };

        return this.http.request("post", url_, options_).pipe(_observableMergeMap((response_ : any) => {
            return this.processReviewsPOST(response_);
        })).pipe(_observableCatch((response_: any) => {
            if (response_ instanceof HttpResponseBase) {
                try {
                    return this.processReviewsPOST(response_ as any);
                } catch (e) {
                    return _observableThrow(e) as any as Observable<Review>;
                }
            } else
                return _observableThrow(response_) as any as Observable<Review>;
        }));
    }

    protected processReviewsPOST(response: HttpResponseBase): Observable<Review> {
        const status = response.status;
        const responseBlob =
            response instanceof HttpResponse ? response.body :
            (response as any).error instanceof Blob ? (response as any).error : undefined;

        let _headers: any = {}; if (response.headers) { for (let key of response.headers.keys()) { _headers[key] = response.headers.get(key); }}
        if (status === 201) {
            return blobToText(responseBlob).pipe(_observableMergeMap((_responseText: string) => {
            let result201: any = null;
            result201 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver) as Review;
            return _observableOf(result201);
            }));
        } else if (status === 400) {
            return blobToText(responseBlob).pipe(_observableMergeMap((_responseText: string) => {
            let result400: any = null;
            result400 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver) as ApiError;
            return throwException("Bad Request", status, _responseText, _headers, result400);
            }));
        } else if (status === 500) {
            return blobToText(responseBlob).pipe(_observableMergeMap((_responseText: string) => {
            let result500: any = null;
            result500 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver) as ApiError;
            return throwException("Server Error", status, _responseText, _headers, result500);
            }));
        } else if (status !== 200 && status !== 204) {
            return blobToText(responseBlob).pipe(_observableMergeMap((_responseText: string) => {
            return throwException("An unexpected server error occurred.", status, _responseText, _headers);
            }));
        }
        return _observableOf(null as any);
    }

    /**
     * Lookup a Review by its Id
     * @return Success
     */
    reviewsGET(id: string): Observable<Review> {
        let url_ = this.baseUrl + "/api/reviews/{id}";
        if (id === undefined || id === null)
            throw new Error("The parameter 'id' must be defined.");
        url_ = url_.replace("{id}", encodeURIComponent("" + id));
        url_ = url_.replace(/[?&]$/, "");

        let options_ : any = {
            observe: "response",
            responseType: "blob",
            headers: new HttpHeaders({
                "Accept": "application/json"
            })
        };

        return this.http.request("get", url_, options_).pipe(_observableMergeMap((response_ : any) => {
            return this.processReviewsGET(response_);
        })).pipe(_observableCatch((response_: any) => {
            if (response_ instanceof HttpResponseBase) {
                try {
                    return this.processReviewsGET(response_ as any);
                } catch (e) {
                    return _observableThrow(e) as any as Observable<Review>;
                }
            } else
                return _observableThrow(response_) as any as Observable<Review>;
        }));
    }

    protected processReviewsGET(response: HttpResponseBase): Observable<Review> {
        const status = response.status;
        const responseBlob =
            response instanceof HttpResponse ? response.body :
            (response as any).error instanceof Blob ? (response as any).error : undefined;

        let _headers: any = {}; if (response.headers) { for (let key of response.headers.keys()) { _headers[key] = response.headers.get(key); }}
        if (status === 200) {
            return blobToText(responseBlob).pipe(_observableMergeMap((_responseText: string) => {
            let result200: any = null;
            result200 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver) as Review;
            return _observableOf(result200);
            }));
        } else if (status === 400) {
            return blobToText(responseBlob).pipe(_observableMergeMap((_responseText: string) => {
            let result400: any = null;
            result400 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver) as ApiError;
            return throwException("Bad Request", status, _responseText, _headers, result400);
            }));
        } else if (status === 404) {
            return blobToText(responseBlob).pipe(_observableMergeMap((_responseText: string) => {
            let result404: any = null;
            result404 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver) as ApiError;
            return throwException("Not Found", status, _responseText, _headers, result404);
            }));
        } else if (status === 500) {
            return blobToText(responseBlob).pipe(_observableMergeMap((_responseText: string) => {
            let result500: any = null;
            result500 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver) as ApiError;
            return throwException("Server Error", status, _responseText, _headers, result500);
            }));
        } else if (status !== 200 && status !== 204) {
            return blobToText(responseBlob).pipe(_observableMergeMap((_responseText: string) => {
            return throwException("An unexpected server error occurred.", status, _responseText, _headers);
            }));
        }
        return _observableOf(null as any);
    }

    /**
     * Delete a Review by its Id
     * @return No Content
     */
    reviewsDELETE(id: string): Observable<Review> {
        let url_ = this.baseUrl + "/api/reviews/{id}";
        if (id === undefined || id === null)
            throw new Error("The parameter 'id' must be defined.");
        url_ = url_.replace("{id}", encodeURIComponent("" + id));
        url_ = url_.replace(/[?&]$/, "");

        let options_ : any = {
            observe: "response",
            responseType: "blob",
            headers: new HttpHeaders({
                "Accept": "application/json"
            })
        };

        return this.http.request("delete", url_, options_).pipe(_observableMergeMap((response_ : any) => {
            return this.processReviewsDELETE(response_);
        })).pipe(_observableCatch((response_: any) => {
            if (response_ instanceof HttpResponseBase) {
                try {
                    return this.processReviewsDELETE(response_ as any);
                } catch (e) {
                    return _observableThrow(e) as any as Observable<Review>;
                }
            } else
                return _observableThrow(response_) as any as Observable<Review>;
        }));
    }

    protected processReviewsDELETE(response: HttpResponseBase): Observable<Review> {
        const status = response.status;
        const responseBlob =
            response instanceof HttpResponse ? response.body :
            (response as any).error instanceof Blob ? (response as any).error : undefined;

        let _headers: any = {}; if (response.headers) { for (let key of response.headers.keys()) { _headers[key] = response.headers.get(key); }}
        if (status === 204) {
            return blobToText(responseBlob).pipe(_observableMergeMap((_responseText: string) => {
            let result204: any = null;
            result204 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver) as Review;
            return _observableOf(result204);
            }));
        } else if (status === 400) {
            return blobToText(responseBlob).pipe(_observableMergeMap((_responseText: string) => {
            let result400: any = null;
            result400 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver) as ApiError;
            return throwException("Bad Request", status, _responseText, _headers, result400);
            }));
        } else if (status === 404) {
            return blobToText(responseBlob).pipe(_observableMergeMap((_responseText: string) => {
            let result404: any = null;
            result404 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver) as ApiError;
            return throwException("Not Found", status, _responseText, _headers, result404);
            }));
        } else if (status === 500) {
            return blobToText(responseBlob).pipe(_observableMergeMap((_responseText: string) => {
            let result500: any = null;
            result500 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver) as ApiError;
            return throwException("Server Error", status, _responseText, _headers, result500);
            }));
        } else if (status !== 200 && status !== 204) {
            return blobToText(responseBlob).pipe(_observableMergeMap((_responseText: string) => {
            return throwException("An unexpected server error occurred.", status, _responseText, _headers);
            }));
        }
        return _observableOf(null as any);
    }

    /**
     * Update a Review
     * @param body (optional) 
     * @return Created
     */
    reviewsPUT(id: string, body?: UpdateReviewRequest | undefined): Observable<Review> {
        let url_ = this.baseUrl + "/api/reviews/{id}";
        if (id === undefined || id === null)
            throw new Error("The parameter 'id' must be defined.");
        url_ = url_.replace("{id}", encodeURIComponent("" + id));
        url_ = url_.replace(/[?&]$/, "");

        const content_ = JSON.stringify(body);

        let options_ : any = {
            body: content_,
            observe: "response",
            responseType: "blob",
            headers: new HttpHeaders({
                "Content-Type": "application/json",
                "Accept": "application/json"
            })
        };

        return this.http.request("put", url_, options_).pipe(_observableMergeMap((response_ : any) => {
            return this.processReviewsPUT(response_);
        })).pipe(_observableCatch((response_: any) => {
            if (response_ instanceof HttpResponseBase) {
                try {
                    return this.processReviewsPUT(response_ as any);
                } catch (e) {
                    return _observableThrow(e) as any as Observable<Review>;
                }
            } else
                return _observableThrow(response_) as any as Observable<Review>;
        }));
    }

    protected processReviewsPUT(response: HttpResponseBase): Observable<Review> {
        const status = response.status;
        const responseBlob =
            response instanceof HttpResponse ? response.body :
            (response as any).error instanceof Blob ? (response as any).error : undefined;

        let _headers: any = {}; if (response.headers) { for (let key of response.headers.keys()) { _headers[key] = response.headers.get(key); }}
        if (status === 201) {
            return blobToText(responseBlob).pipe(_observableMergeMap((_responseText: string) => {
            let result201: any = null;
            result201 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver) as Review;
            return _observableOf(result201);
            }));
        } else if (status === 400) {
            return blobToText(responseBlob).pipe(_observableMergeMap((_responseText: string) => {
            let result400: any = null;
            result400 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver) as ApiError;
            return throwException("Bad Request", status, _responseText, _headers, result400);
            }));
        } else if (status === 500) {
            return blobToText(responseBlob).pipe(_observableMergeMap((_responseText: string) => {
            let result500: any = null;
            result500 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver) as ApiError;
            return throwException("Server Error", status, _responseText, _headers, result500);
            }));
        } else if (status !== 200 && status !== 204) {
            return blobToText(responseBlob).pipe(_observableMergeMap((_responseText: string) => {
            return throwException("An unexpected server error occurred.", status, _responseText, _headers);
            }));
        }
        return _observableOf(null as any);
    }

    /**
     * Lookup the application version details
     * @return Success
     */
    version(): Observable<Version[]> {
        let url_ = this.baseUrl + "/api/version";
        url_ = url_.replace(/[?&]$/, "");

        let options_ : any = {
            observe: "response",
            responseType: "blob",
            headers: new HttpHeaders({
                "Accept": "application/json"
            })
        };

        return this.http.request("get", url_, options_).pipe(_observableMergeMap((response_ : any) => {
            return this.processVersion(response_);
        })).pipe(_observableCatch((response_: any) => {
            if (response_ instanceof HttpResponseBase) {
                try {
                    return this.processVersion(response_ as any);
                } catch (e) {
                    return _observableThrow(e) as any as Observable<Version[]>;
                }
            } else
                return _observableThrow(response_) as any as Observable<Version[]>;
        }));
    }

    protected processVersion(response: HttpResponseBase): Observable<Version[]> {
        const status = response.status;
        const responseBlob =
            response instanceof HttpResponse ? response.body :
            (response as any).error instanceof Blob ? (response as any).error : undefined;

        let _headers: any = {}; if (response.headers) { for (let key of response.headers.keys()) { _headers[key] = response.headers.get(key); }}
        if (status === 200) {
            return blobToText(responseBlob).pipe(_observableMergeMap((_responseText: string) => {
            let result200: any = null;
            result200 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver) as Version[];
            return _observableOf(result200);
            }));
        } else if (status === 500) {
            return blobToText(responseBlob).pipe(_observableMergeMap((_responseText: string) => {
            let result500: any = null;
            result500 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver) as ApiError;
            return throwException("Server Error", status, _responseText, _headers, result500);
            }));
        } else if (status !== 200 && status !== 204) {
            return blobToText(responseBlob).pipe(_observableMergeMap((_responseText: string) => {
            return throwException("An unexpected server error occurred.", status, _responseText, _headers);
            }));
        }
        return _observableOf(null as any);
    }
}

export interface ApiError {
    message?: string | null;
    innerMessage?: string | null;
    stackTrace?: string | null;
}

export interface Author {
    id?: string;
    dateCreated?: moment.Moment;
    dateModified?: moment.Moment;
    firstName?: string | null;
    lastName?: string | null;
    reviews?: Review[] | null;
}

export interface Cast {
    hash?: string | null;
    threadHash?: string | null;
    parentHash?: string | null;
    text?: string | null;
    timestamp?: number;
    timestampUtc?: moment.Moment;
}

export interface CreateReviewRequest {
    authorId: string;
    movieId: string;
    stars: number;
}

export interface Movie {
    id?: string;
    dateCreated?: moment.Moment;
    dateModified?: moment.Moment;
    title?: string | null;
    reviews?: Review[] | null;
}

export interface Review {
    id?: string;
    dateCreated?: moment.Moment;
    dateModified?: moment.Moment;
    stars?: number;
    reviewedMovie?: Movie;
    reviewAuthor?: Author;
}

export interface UpdateReviewRequest {
    authorId: string;
    movieId: string;
    stars: number;
}

export interface Version {
    fileVersion?: string | null;
    informationalVersion?: string | null;
}

export class SwaggerException extends Error {
    override message: string;
    status: number;
    response: string;
    headers: { [key: string]: any; };
    result: any;

    constructor(message: string, status: number, response: string, headers: { [key: string]: any; }, result: any) {
        super();

        this.message = message;
        this.status = status;
        this.response = response;
        this.headers = headers;
        this.result = result;
    }

    protected isSwaggerException = true;

    static isSwaggerException(obj: any): obj is SwaggerException {
        return obj.isSwaggerException === true;
    }
}

function throwException(message: string, status: number, response: string, headers: { [key: string]: any; }, result?: any): Observable<any> {
    if (result !== null && result !== undefined)
        return _observableThrow(result);
    else
        return _observableThrow(new SwaggerException(message, status, response, headers, null));
}

function blobToText(blob: any): Observable<string> {
    return new Observable<string>((observer: any) => {
        if (!blob) {
            observer.next("");
            observer.complete();
        } else {
            let reader = new FileReader();
            reader.onload = event => {
                observer.next((event.target as any).result);
                observer.complete();
            };
            reader.readAsText(blob);
        }
    });
}