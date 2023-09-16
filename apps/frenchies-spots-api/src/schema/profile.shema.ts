// src/spot/schemas/spot.schema.ts
import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema({ collection: 'Profile' })
export class Profile extends Document {
  @Prop({ required: true })
  _id: string;
}

export const ProfileSchema = SchemaFactory.createForClass(Profile);
ProfileSchema.index({ location: '2dsphere' });
