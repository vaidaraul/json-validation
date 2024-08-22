import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';

export class CreateJSONDto {
  @ApiPropertyOptional({ description: 'JSON Schema' })
  schema: string;

  @ApiProperty({ description: 'User ID' })
  userId: string;
}
