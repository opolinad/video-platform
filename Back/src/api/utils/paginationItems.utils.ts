import * as dotenv from 'dotenv';
import { Model } from 'sequelize-typescript';

dotenv.config();

export interface pagination {
    pageNumber: number;
    limit: number;
    offset: number;
}

type paginationResults<T> = T & {
    totalPages: number;
    prevPageUrl: string;
    nextPageUrl: string;
};

interface results {
    count: number;
    rows: Model[]
}

export const paginationItems = (page: string | undefined, perPage: string | undefined): pagination => {
    const pageNumber = Number(page) || 1;
    const limit = Number(perPage) || 10;
    const offset = (pageNumber - 1) * limit;
    const pagination = { pageNumber, limit, offset }

    return pagination;
}

const getTotalPages = (totalPages: number, perPage: number) => {
    return Math.ceil(totalPages / perPage);
}

export const paginateResults = (results: results, perPage: number, page: number, route: string) => {
    const totalPages = getTotalPages(results.count, perPage);
    const URL = process.env.URL + ':' + process.env.SERVER_PORT;
    const resultsWithPaginationProperties: paginationResults<results> = {
        ...results,
        totalPages: totalPages,
        prevPageUrl: page > 1 ?
            URL + '/api/' + route + '?page=' + (page - 1) :
            null,
        nextPageUrl: totalPages > page ?
            URL + '/api/' + route + '?page=' + (page + 1) :
            null
    };
    return resultsWithPaginationProperties;
}