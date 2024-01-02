import React from 'react'
import { useState } from 'react'
import { Container, Wrapper, Title, Desc, CardContainer, ToggleButtonGroup, ToggleButton, Divider } from './CourseStyle'
import CourseCard from '../Cards/CourseCard'
import { course } from '../../data/constants'


const Courses = ({openModals,setOpenModals}) => {
  const [toggle, setToggle] = useState('all');
  return (
    <Container id="course">
      <Wrapper>
        <Title>Course And Certificate</Title>
        {/* <Desc>
            My course and certificate has been a journey and growth. My course and certificate details are as follows.
        </Desc> */}
        <ToggleButtonGroup >
          {toggle === 'all' ?
            <ToggleButton active value="all" onClick={() => setToggle('all')}>All</ToggleButton>
            :
            <ToggleButton value="all" onClick={() => setToggle('all')}>All</ToggleButton>
          }
          <Divider />
          {toggle === 'python' ?
            <ToggleButton active value="python" onClick={() => setToggle('python')}>Python</ToggleButton>
            :
            <ToggleButton value="python" onClick={() => setToggle('python')}>Python</ToggleButton>
          }
          <Divider />
          {toggle === 'java' ?
            <ToggleButton active value="java" onClick={() => setToggle('java')}>Java</ToggleButton>
            :
            <ToggleButton value="java" onClick={() => setToggle('java')}>Java</ToggleButton>
          }
          <Divider />
          {toggle === 'javascript' ?
            <ToggleButton active value="javascript" onClick={() => setToggle('javascript')}>JavaScript</ToggleButton>
            :
            <ToggleButton value="javascript" onClick={() => setToggle('javascript')}>JavaScript</ToggleButton>
          }
          <Divider />
          {toggle === 'web developer' ?
            <ToggleButton active value="web developer" onClick={() => setToggle('web developer')}>Web Developer</ToggleButton>
            :
            <ToggleButton value="web developer" onClick={() => setToggle('web developer')}>Web Developer</ToggleButton>
          }
        </ToggleButtonGroup>
        <CardContainer>
          {toggle === 'all' && course
            .map((course) => (
              <CourseCard course={course} openModals={openModals} setOpenModals={setOpenModals}/>
            ))}
          {course
            .filter((item) => item.category == toggle)
            .map((course) => (
              <CourseCard course={course} openModals={openModals} setOpenModals={setOpenModals}/>
            ))}
        </CardContainer>
      </Wrapper>
    </Container>
  )
}

export default Courses