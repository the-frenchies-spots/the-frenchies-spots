import mongoose from 'mongoose';

export function transformDocument<T extends { _id: mongoose.Types.ObjectId }>(
  documents: T[],
): string[] {
  return documents.map((document) => {
    const { _id } = document;
    return _id.toString();
  });
}
