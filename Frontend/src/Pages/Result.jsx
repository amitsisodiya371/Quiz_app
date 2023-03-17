import { Heading } from '@chakra-ui/react';
import React from 'react'
import Nav from '../Components/Nav/Nav';

const Result = () => {

  const loadData = (key) => {
    try {
      let temp = localStorage.getItem(key);
      temp = JSON.parse(temp);
      return temp;
    } catch (e) {
      return undefined;
    }
  };
    var score=loadData("score");
   var total=loadData("total");

  return ( 
    <div >
<Nav/>
{/*  <div style={{backgroundImage:"url(https://static.vecteezy.com/system/resources/thumbnails/008/889/844/small/quiz-set-in-doodle-style-illustration-icon-question-symbol-for-print-and-design-quiz-and-exam-concept-isolated-element-on-black-background-collection-of-sign-for-school-and-event-vector.jpg)"}}> */}
        <Heading fontSize="20px">Correct answers count: {score+1}</Heading>
        <Heading fontSize="20px">Incorrect answers count: {total}</Heading>
        <Heading fontSize="20px">Total score: {total}</Heading>
        <Heading fontSize="20px">Percentage: {"50%"}</Heading>
        {/* </div> */}
    </div>
  )
}

export default Result;