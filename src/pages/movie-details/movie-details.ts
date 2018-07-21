import { CommentsProvider } from './../../providers/comments/comments';
import { AddCommentPage } from './../add-comment/add-comment';
import { MoviesProvider } from './../../providers/movies/movies';
import { Component } from '@angular/core';
import { NavController, NavParams, ModalController } from 'ionic-angular';

/**
 * Generated class for the MovieDetailsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-movie-details',
  templateUrl: 'movie-details.html',
})
export class MovieDetailsPage {
  movie_id: number;
  movie: any = [];
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private moviesProvider : MoviesProvider,
    public modalCtrl: ModalController,
    private commentsProvider: CommentsProvider,
  )
    {
      this.movie_id = this.navParams.get("id");
      this.moviesProvider.getMovie(this.movie_id).then( movie => {
        this.movie = movie
      });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MovieDetailsPage');
  }


  addComment(){
    let commentModal = this.modalCtrl.create(AddCommentPage, { userId: 8675309 });
    commentModal.present();
  }

  backToList(){
    this.navCtrl.pop();
  }

  getComments(){
    return this.commentsProvider.getComments();
  }

}
