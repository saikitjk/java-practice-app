import {useEffect, useRef} from 'react';
import api from '../../api/axiosConfig';
import {useParams} from 'react-router-dom';
import {Container, Row, Col} from 'react-bootstrap';
import ReviewForm from '../reviewForm/reviewForm.js';

import React from 'react'



const Reviews = ({getMovieData,movie,reviews,setReviews}) => {

  const revText = useRef();
  const params = useParams();
  const movieId = params.movieId;

  useEffect(() =>{

    getMovieData(movieId);

  },[])

  const addReview = async (e)=>{
    e.preventDefault();

    const rev = revText.current;
    try
    {
        const response = await api.post("/api/v1/reviews",{reviewBody:rev.value,imdbId:movieId});

        const updatedReviews = [{body:rev.value}];
        // update the review array on the client side using the setReviews method from app.js

        rev.value = ""; // reset text area control

        setReviews(updatedReviews);
    }
    catch(err)
    {
        console.error(err);
    }

  }


return (
  <Container>
      <Row>
          <Col><h3>Reviews</h3></Col>
      </Row>
      <Row className="mt-2">
          <Col>
              <img src={movie?.poster} alt="" />
          </Col>
          <Col>
              {
                  <>
                      <Row>
                          <Col>
                              <ReviewForm handleSubmit={addReview} revText={revText} labelText = "Write a Review?" />
                          </Col>
                      </Row>
                      <Row>
                          <Col>
                              <hr />
                          </Col>
                      </Row>
                  </>
              }
               {
                  movie?.reviewIds.map((sub) => {
                      return(
                          <>
                              <Row>
                                  <Col>{sub.body}</Col>
                              </Row>
                              <Row>
                                  <Col>
                                      <hr />
                                  </Col>
                              </Row>
                          </>
                      )
                  })
              }
              {
                  reviews?.map((r) => {
                      return(
                          <>
                              <Row>
                                  <Col>{r.body}</Col>
                              </Row>
                              <Row>
                                  <Col>
                                      <hr />
                                  </Col>
                              </Row>
                          </>
                      )
                  })
              }
          </Col>
      </Row>
      <Row>
          <Col>
              <hr />
          </Col>
      </Row>
  </Container>
)
}

export default Reviews