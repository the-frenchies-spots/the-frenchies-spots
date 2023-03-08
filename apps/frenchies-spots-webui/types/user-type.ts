export interface User {
  id: string;
  profileId: string;
  pseudo: string;
  photoUrl: string | null | undefined;
  gamePoint: number | 0;
}
