import { Body, Controller, Inject, Param, Post } from '@nestjs/common';
import {
  ApiBody,
  ApiOperation,
  ApiParam,
  ApiResponse,
  ApiTags,
} from '@nestjs/swagger';
import { TYPES } from 'src/config/nest.config';
import { IJSONService } from '../interfaces/IJSONService';
import { JSONSchema } from '../schemas/CreateJSONSchemaInput';
import { CreateJSONDto, VerifyJSONDto } from '../dto/CreateJSONDto';

@ApiTags('json')
@Controller('api')
export class JSONController {
  constructor(@Inject(TYPES.IJSONService) private appService: IJSONService) {}

  @Post('json-schemas/schema')
  @ApiOperation({ summary: 'Create a new Schema' })
  @ApiResponse({
    status: 201,
    description: 'JSON Schema created',
  })
  @ApiResponse({ status: 400, description: 'Bad request' })
  @ApiResponse({ status: 500, description: 'Internal Server Error' })
  async createSchema(@Body() params: CreateJSONDto): Promise<JSONSchema> {
    return await this.appService.createJSONSchema({
      schema: params.schema,
      userID: params.userId,
    });
  }

  @Post('json-schemas/verify-schema/:schemaName')
  @ApiOperation({ summary: 'Verify a JSON Schema' })
  @ApiResponse({
    status: 200,
    description: 'JSON Schema is verified',
  })
  @ApiResponse({ status: 400, description: 'Bad request' })
  @ApiResponse({ status: 500, description: 'Internal Server Error' })
  @ApiParam({ name: 'schemaName', type: String, description: 'Schema name' })
  @ApiBody({})
  async verifySchema(
    @Param('schemaName') schemaName: string,
    @Body() json: any,
  ): Promise<boolean> {
    return await this.appService.verifyJSONSchema({
      json,
      schemaName,
    });
  }
}
