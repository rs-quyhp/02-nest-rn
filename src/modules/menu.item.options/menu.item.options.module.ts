import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { MenuItemOptionsController } from './menu.item.options.controller';
import { MenuItemOptionsService } from './menu.item.options.service';
import {
  MenuItemOption,
  MenuItemOptionSchema,
} from './schemas/menu.item.option.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: MenuItemOption.name, schema: MenuItemOptionSchema },
    ]),
  ],
  controllers: [MenuItemOptionsController],
  providers: [MenuItemOptionsService],
})
export class MenuItemOptionsModule {}
