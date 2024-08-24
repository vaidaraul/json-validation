import { ApiProperty } from '@nestjs/swagger';

export class CreateJSONDto {
  @ApiProperty({ description: 'JSON Schema Name' })
  schema: object;

  @ApiProperty({ description: 'User ID' })
  schemaName: string;
}
