import { PartialType } from '@nestjs/mapped-types';
import { CreateCategoryDto } from './create-category.dto';

export interface UpdateCategoryDto extends Partial<CreateCategoryDto> {
      id: number;
}