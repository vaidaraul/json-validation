import { ApiProperty } from '@nestjs/swagger';

export class CreateJSONDto {
  @ApiProperty({ description: 'Schema format' })
  schema: object;

  @ApiProperty({ description: 'Schema Name' })
  schemaName: string;
}
