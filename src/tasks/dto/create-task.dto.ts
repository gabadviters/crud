import { IsString, MaxLength, MinLength } from 'class-validator';

export class CreateTaskDto {
  @IsString()
  @MinLength(5)
  @MaxLength(10)
  titulo: string;

  @IsString()
  @MinLength(5)
  @MaxLength(10)
  tarea: string;
}
