import React, { Component } from 'react';
import '../App.css';
import { Navbar, NavbarBrand } from 'reactstrap';
import Menu from './MenuComponent';
import About from './AboutComponent';
import {DISHES} from '../shared/dishes';
import Dishdetail from './DishdetailComponent ';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import Home from './HomeComponent';
import {Switch,Route,Redirect } from 'react-router-dom';
import Contact from './ContactComponent';
import { COMMENTS } from '../shared/comments';
import { PROMOTIONS } from '../shared/promotions';
import { LEADERS } from '../shared/leaders';

class Main extends Component {
  constructor(props) { super(props);
  this.state ={
    dishes:DISHES,
    comments: COMMENTS,
      promotions: PROMOTIONS,
      leaders: LEADERS,
  };
  
  }

  render() {
    const DishWithId = ({match}) => {
      return(
          <Dishdetail dish={this.state.dishes.filter((dish) => dish.id === parseInt(match.params.dishId,10))[0]} 
            comments={this.state.comments.filter((comment) => comment.dishId === parseInt(match.params.dishId,10))} />
      );
    };
    const HomePage = () => {
        return(
          <Home 
          dish={this.state.dishes.filter((dish) => dish.featured)[0]}
          promotion={this.state.promotions.filter((promo) => promo.featured)[0]}
          leader={this.state.leaders.filter((leader) => leader.featured)[0]}
      />
        );
      }
  
    return (
      <div>
        <Header />
        <Switch>
              <Route path='/home' component={HomePage} />
              <Route exact path='/menu' component={() => <Menu dishes={this.state.dishes} />} />
              <Route exact path='/contactus' component={Contact} />} />
              <Route path="/aboutus" component={() => <About leaders={this.state.leaders} /> } />

              <Route path='/menu/:dishId' component={DishWithId} />

              <Redirect to="/home" />
          </Switch>
        <Footer/>

      </div>
    );
  }
}
export default Main;
