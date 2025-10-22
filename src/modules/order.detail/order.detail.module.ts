import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { OrderDetailController } from './order.detail.controller';
import { OrderDetailService } from './order.detail.service';
import { OrderDetail, OrderDetailSchema } from './schemas/order.detail.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: OrderDetail.name, schema: OrderDetailSchema },
    ]),
  ],
  controllers: [OrderDetailController],
  providers: [OrderDetailService],
})
export class OrderDetailModule {}
