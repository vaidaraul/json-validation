import { ApiProperty } from '@nestjs/swagger';

export class CreateJSONDto {
  @ApiProperty({ description: 'JSON Schema Name' })
  schema: string;

  @ApiProperty({ description: 'User ID' })
  userId: string;
}

export class VerifyJSONDto {
  @ApiProperty({ description: 'JSON Schema' })
  json: any;

  @ApiProperty({ description: 'Name of the Schema to be compared against' })
  schemaName: string;
}
