import { Injectable } from '@nestjs/common';
import { CloudinaryService } from '../service/cloudinary.service';
import { PictureEntity } from '../entity/picture.entity';
import { PictureInput } from '../dto/input/picture/picture.input';

@Injectable()
export class PictureBusiness {
  constructor(private cloudinaryService: CloudinaryService) {}

  async upload(pictureInput: PictureInput): Promise<PictureEntity[]> {
    return this.cloudinaryService.uploadImage(
      pictureInput.files,
      pictureInput.folder,
    );
  }
}
