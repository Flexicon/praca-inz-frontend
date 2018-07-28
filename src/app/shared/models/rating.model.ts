import { MovieModel } from '@app/shared/models/movie.model';

export class RatingModel {
  public _id: String;
  public userId: Number;
  public movie: MovieModel;
  public rating: Number;
  public timestamp: Number;
}
