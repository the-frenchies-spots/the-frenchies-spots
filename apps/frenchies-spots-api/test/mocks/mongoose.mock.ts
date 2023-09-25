import mongoose from 'mongoose';

const ProfileSchema = new mongoose.Schema({
  _id: { type: String, required: true },
  // Définissez les autres propriétés simulées pour le schéma Profile ici
});

const SpotSchema = new mongoose.Schema({
  _id: { type: String, required: true },
  // Définissez les autres propriétés simulées pour le schéma Spot ici
});
export { ProfileSchema, SpotSchema };
