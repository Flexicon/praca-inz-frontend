import { MovieModel, TagModel } from '@app/shared/models';

export interface MovieDetails {
  movie: MovieModel;
  rating: {
    count: number;
    avg: number;
  };
  tags: TagModel[];
}
