import { applyDecorators } from '@nestjs/common';
import {
  ApiBadRequestResponse,
  ApiUnauthorizedResponse,
  ApiForbiddenResponse,
  ApiNotFoundResponse,
  ApiInternalServerErrorResponse,
  ApiOperation,
} from '@nestjs/swagger';

interface ResponsesContract {
  summary: string;
}

export function DefaultResponses({ summary }: ResponsesContract) {
  return applyDecorators(
    ApiOperation({ summary }),
    ApiBadRequestResponse({ description: 'Bad Request' }),
    ApiUnauthorizedResponse({ description: 'Unauthorized' }),
    ApiForbiddenResponse({ description: 'Forbidden' }),
    ApiNotFoundResponse({ description: 'Not Found' }),
    ApiInternalServerErrorResponse({ description: 'Internal Server Error' }),
  );
}
