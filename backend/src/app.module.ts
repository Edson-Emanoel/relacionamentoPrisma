import { Module } from '@nestjs/common';
import { DbModule } from './db/db.module';
import { CategoryModule } from './category/category.module';
import { ProductModule } from './product/product.module';

@Module({
  imports: [DbModule, CategoryModule, ProductModule],
  controllers: [],
  providers: [],
})

export class AppModule {}