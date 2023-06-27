import React, { useState } from 'react'
import Card from './Card'
import ErrorPage from './ErrorPage';
import { toast } from 'react-toastify';

const Cards = (props) => {
  let courses = props.courses;
  let category = props.category;
  const [likedCourse, setLikedCourse] = useState([]);



  if (courses === undefined || courses === null) {
    courses = [];
    // toast.error("Network Problem");
    return <ErrorPage />

  } else {
    function getCourses() {
      if (category === "All") {
        let allCourses = [];
        Object.values(courses).forEach(array => {
          array.forEach(courseData => {
            allCourses.push(courseData);
          })
        })

        return allCourses;
      } else if (category === "Liked Courses") {
        var likedCourses = [];
        Object.values(courses).forEach(array => {
          array.forEach(courseData => {
            if (likedCourse.includes(courseData.id)) {
              likedCourses.push(courseData);
            }
          })
        });
        if (likedCourses.length === 0) {
          toast.error("No Liked Courses found");
        }

        return likedCourses;

      }
      else {
        return courses[category];
      }

    }

    return (
      <div className="flex flex-wrap justify-center gap-4 mb-4">
        {
          getCourses().map((course) => (
            <Card course={course} key={course.id}  likedCourse={likedCourse} setLikedCourse={setLikedCourse} />
          ))
        }
      </div>
    )
  }


}

export default Cards;