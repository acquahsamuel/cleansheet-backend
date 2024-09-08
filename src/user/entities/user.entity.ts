import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

@Schema()
export class User {
  @Prop()
  userId: string;

  @Prop({ required: true, type: String, unique: true })
  username: string;

  @Prop()
  password: string;

  @Prop()
  role: string;

  @Prop()
  permissions: [];

  @Prop()
  userDescription: string;

  @Prop()
  firstname: string;

  @Prop()
  lastname: string;

  @Prop()
  photo: string;

  @Prop()
  phone: string;

  @Prop()
  authType: string;

  @Prop()
  updatedAt: Date;

  @Prop()
  createdAt: Date;
}

export const UserSchema = SchemaFactory.createForClass(User);
