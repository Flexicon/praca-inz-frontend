import { Component, OnInit, OnDestroy } from '@angular/core';
import { MovieService } from '@app/shared/services';
import { ActivatedRoute, Router } from '@angular/router';
import { MovieDetails } from '@app/shared/types/movie-details.type';
import { MovieModel, TagModel } from '@app/shared/models';
import { ApiService } from '@app/shared/services/api.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.scss']
})
export class MovieComponent implements OnInit, OnDestroy {
  movie: MovieModel;
  rating: MovieDetails['rating'];
  tags: TagModel[];
  showAllTags = false;
  modeChangedSub: Subscription;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private movieService: MovieService,
    private apiService: ApiService
  ) {}

  ngOnInit() {
    const { id } = this.route.snapshot.params;
    this.loadMovieDetails(id);
    this.modeChangedSub = this.apiService.modeChanged.subscribe(() => this.loadMovieDetails(id));
  }

  ngOnDestroy() {
    this.modeChangedSub.unsubscribe();
  }

  loadMovieDetails(id: number) {
    this.movieService.getMovieById(id).subscribe(
      ({ movie, rating, tags }) => {
        // Prepare response data
        rating.avg = Math.round(rating.avg);
        movie.poster = movie.poster || '/assets/img/no_poster.png';
        // Assign data to component
        this.movie = movie;
        this.rating = rating;
        this.tags = tags;
      },
      err => {
        if (err.message === 'Http404Exception') {
          this.router.navigate(['not-found']);
        }
      }
    );
  }

  splitTags() {
    return this.showAllTags ? this.tags : this.tags.slice(0, 50);
  }
}
