import React, {Component} from 'react';
import axios from 'axios';

export default class StockPhotosTool extends Component {
   state = {
      photos: []
   }

   componentDidMount() {
      axios.get(`https://photo-effects-backend-stage-1.herokuapp.com/api/projects`)
      .then(res => console.log(res))
      .then(res => this.setState({ photos: res.data }))
      .catch(err => console.log(err))

      console.log(this.state.photos)
   }

   render() {
      return (
         <>
            <ol>
               <li>Stock Photo Tool #1</li>
            </ol>
         </>
      )
   }
}