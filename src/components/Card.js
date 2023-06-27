import React from 'react'
import { FcLike, FcLikePlaceholder } from "react-icons/fc"
import { toast } from 'react-toastify';


const Card = (props) => {
  let course = props.course;
  let likedCourse = props.likedCourse;
  let setLikedCourse = props.setLikedCourse;

  function clickHandler() {
    if (likedCourse.includes(course.id)) {
      //pehle se like hua pada tha

      setLikedCourse((previous) => previous.filter((cid) => cid !== course.id));
      toast.warning("Like Removed...");
    } else {
      //pehle se like nahi hai ye course
      //insert karna h ye course liked courses me 
      if (likedCourse.length === 0) {
        setLikedCourse([course.id]);
      } else {
        setLikedCourse([...likedCourse, course.id]);
      }
      toast.success("Liked Successfully");
    }
  }


  return (
    <div className='w-[300px] bg-bgDark bg-opacity-80 rounded-md overflow-hidden'>
      <div className='relative'>
        <img src={course.image.url} alt={course.image.alt} loading='lazy' />

        <div className='w-[40px] h-[40px] bg-white rounded-full absolute right-2 bottom-[-12px]
            grid place-items-center'>
          <button onClick={clickHandler}>
            {
              likedCourse.includes(course.id) ? 
                (<FcLike fontSize="1.75rem" />) : 
                (<FcLikePlaceholder  fontSize="1.75rem"  />)

            }

          </button>
        </div>
      </div>


      <div className='p-4'>
        <p className="text-white font-semibold text-lg leading-6">{course.title}</p>
        <p className='mt-2 text-white'>
          {
            course.description.length > 100 ?
              (course.description.substr(0, 100)) + "..." :
              (course.description)
          }
        </p>
      </div>
    </div>

  )
}

export default Card