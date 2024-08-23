import { ApiProperty } from '@nestjs/swagger';

export class CreateJSONDto {
  @ApiProperty({ description: 'JSON Schema Name' })
  schema: string;

  @ApiProperty({ description: 'User ID' })
  schemaName: string;
}
