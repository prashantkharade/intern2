import { Helper } from 'common/helper';
import { ResponseHandler } from 'common/response.handler';
import { UserDomainModel, UserLoginDetails } from 'domain.types/user/user.domain.model';
import express from 'express';
import { body, oneOf, param, query, validationResult } from 'express-validator';

export class UserValidator {
    static get = async (request: express.Request, response: express.Response): Promise<string> => {
        try {
            await param('id').trim().escape().isUUID().run(request);

            const result = validationResult(request);
            if (!result.isEmpty()) {
                Helper.handleValidationError(result);
            }

            return request.params.id;
        } catch (err) {
            ResponseHandler.handleError(request, response, err);
        }
    };

    static loginWithPassword = async (
        request: express.Request,
        response: express.Response
    ): Promise<UserLoginDetails> => {
        try {
            await body('Email').isString().notEmpty().trim().run(request);
            await body('Password').isString().notEmpty().trim().run(request);

            const result = validationResult(request);
            if (!result.isEmpty()) {
                Helper.handleValidationError(result);
            }

            const domainModel: UserLoginDetails = {
                Email: request.body.Email,
                Password: request.body.Password,
            };

            return domainModel;
        } catch (err) {
            ResponseHandler.handleError(request, response, err);
        }
    };

    static create = async (request: express.Request, response: express.Response): Promise<UserDomainModel> => {
        try {
            await body('Prefix').optional().trim().run(request);
            await body('FirstName').isString().notEmpty().trim().run(request);
            await body('MiddleName').optional().trim().run(request);
            await body('LastName').isString().notEmpty().trim().run(request);
            await body('Email').isEmail().trim().run(request);
            await body('Password').isString().notEmpty().trim().run(request);

            const result = validationResult(request);
            if (!result.isEmpty()) {
                Helper.handleValidationError(result);
            }

            const createUserDomainModel: UserDomainModel = {
                Prefix: request.body.prefix,
                FirstName: request.body.FirstName,
                MiddleName: request.body.MiddleName,
                LastName: request.body.LastName,
                Email: request.body.Email,
                Password: request.body.Password,
                RoleId: request.body.RoleId ?? null,
            };

            return createUserDomainModel;
        } catch (err) {
            ResponseHandler.handleError(request, response, err);
        }
    };
}