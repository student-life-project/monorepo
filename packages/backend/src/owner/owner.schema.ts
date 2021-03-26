import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Schema as MongooseSchema } from 'mongoose';

import { RentalPlace } from '../rental-place/rental-place.schema';

@Schema()
export class Owner {
  @Prop([
    { type: MongooseSchema.Types.ObjectId, ref: 'RentalPlace', default: [] },
  ])
  propertyPlaces: RentalPlace[];
}

export type OwnerDocument = Owner & Document;
export const OwnerSchema = SchemaFactory.createForClass(Owner);
