import { Injectable } from '@nestjs/common';

@Injectable()
export class MovieService {
  findAll(limit: string) {
    return `findAll funciona límite de ${limit} registros`;
  }
  findMovie(movieId: string) {
    return `findMovie funciona con el movieId = ${movieId}`;
    //select * from movie where id = movieId
  }
  createMovie(movie: any) {
    console.log(movie);
    //insert into table Movie values();
    return movie;
  }
  updateMovie(movieId: string, movie: any) {
    console.log('update', movie);

    return `updateMovie funciona con el movieId = ${movieId}`;
    //select * from movie where id = movieId
  }
  deleteMovie(movieId: string) {
    return `deleteMovie funciona con el movieId = ${movieId}`;
    //select * from movie where id = movieId
  }
}
