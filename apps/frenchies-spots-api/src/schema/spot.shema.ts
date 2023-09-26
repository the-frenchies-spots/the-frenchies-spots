// src/spot/schemas/spot.schema.ts
import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema({ collection: 'Spot' })
export class Spot extends Document {
  @Prop({ required: true })
  _id: string;
}

export const SpotSchema = SchemaFactory.createForClass(Spot);
SpotSchema.index({ location: '2dsphere' });
