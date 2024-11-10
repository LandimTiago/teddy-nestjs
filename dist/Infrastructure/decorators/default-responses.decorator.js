"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DefaultResponses = DefaultResponses;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
function DefaultResponses({ summary }) {
    return (0, common_1.applyDecorators)((0, swagger_1.ApiOperation)({ summary }), (0, swagger_1.ApiBadRequestResponse)({ description: 'Bad Request' }), (0, swagger_1.ApiUnauthorizedResponse)({ description: 'Unauthorized' }), (0, swagger_1.ApiForbiddenResponse)({ description: 'Forbidden' }), (0, swagger_1.ApiNotFoundResponse)({ description: 'Not Found' }), (0, swagger_1.ApiInternalServerErrorResponse)({ description: 'Internal Server Error' }));
}
//# sourceMappingURL=default-responses.decorator.js.map