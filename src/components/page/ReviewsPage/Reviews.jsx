import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { getFilmsReviews } from 'components/shared/shared';
import MovieDetails from '../MoviesDetailsPage/MovieDetails';
import css from './reviews.module.css'
const Reviews = () => {
    const [state, setState] = useState({
        data: [],
        loader: false,
        error: null,
      });
      const { movieId } = useParams();


      useEffect(()=>{
        const fetchFilmsRevievs =  async() => {
            try {
                const {results} = await getFilmsReviews(movieId)
                console.log(results)
                setState(prevState => {
                    return { prevState, data: [...results] }
                })
            } catch (error) {
                
            }

        }
fetchFilmsRevievs()
      },[movieId])
const item = state.data.map(({content,  author, },index) => (
    <li key={index}>
        <h2>Name: {author}</h2>
        <p>Content: {content}</p>
    </li>
))
      return (
<div>
    <MovieDetails itemRevievs={item}/>
</div>
      )
}

export default Reviews