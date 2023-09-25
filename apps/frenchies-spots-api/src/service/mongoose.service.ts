import mongoose, { ConnectOptions } from 'mongoose';

mongoose.set('strictQuery', true);
mongoose
  .connect(process.env.DATABASE_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  } as ConnectOptions)
  .then(() => {
    // console.log('Connexion à la base de données MongoDB établie avec succès');
  })
  .catch((err) => {
    console.error('Erreur lors de la connexion à la base de données :', err);
  });
const ProfileSchema = new mongoose.Schema({
  pseudo: { type: String, required: true },
});
ProfileSchema.index({ location: '2dsphere' });

export const ProfileModel = mongoose.model('Profile', ProfileSchema, 'Profile');

const SpotSchema = new mongoose.Schema({
  pseudo: { type: String, required: true },
});

SpotSchema.index({ location: '2dsphere' });
export const SpotModel = mongoose.model('Spot', SpotSchema, 'Spot');
