import { Component, OnInit } from '@angular/core';
import { MovieService } from '@app/shared/services';
import { ActivatedRoute } from '@angular/router';
import { MovieDetails } from '@app/shared/types/movie-details.type';
import { MovieModel, TagModel } from '@app/shared/models';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.scss']
})
export class MovieComponent implements OnInit {
  movie: MovieModel;
  rating: MovieDetails['rating'];
  tags: TagModel[];
  showAllTags = false;

  constructor(private route: ActivatedRoute, private movieService: MovieService) {}

  ngOnInit() {
    const { id } = this.route.snapshot.params;
    this.movieService.getMovieById(id).subscribe(({ movie, rating, tags }) => {
      // Prepare response data
      rating.avg = Math.round(rating.avg);
      movie.poster = movie.poster || '/assets/img/no_poster.png';
      // Assign data to component
      this.movie = movie;
      this.rating = rating;
      this.tags = tags;
    });
  }

  splitTags() {
    return this.showAllTags ? this.tags : this.tags.slice(0, 50);
  }
}
