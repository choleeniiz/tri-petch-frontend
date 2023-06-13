import React from 'react';
import './App.css';
import { Topic } from './components/Topic';
import Slider from "react-slick";

interface contentType {
  topicNumber: string,
  topic: string,
  description: string,
  bgColor?: string,
  underlineColor?: string,
  numberColor?: string,
  customBox?: string,
  descriptionColor?: string
}

function App() {
  var settings = {
    dots: true,
    arrows: false
  };

  const ContentFootball = ({ topicNumber, topic, underlineColor, numberColor, bgColor, description, customBox, descriptionColor }: contentType) => {
    return <div className={`sm:hidden md:grid md:grid-cols-3 lg:grid-cols-2 md:py-6 lg:py-12 ${bgColor} ${customBox}`}>
      <div className="lg:col-start-2 lg:px-8 md:col-start-2 md:col-span-2 ">
        <Topic number={topicNumber} text={topic} underlineColor={underlineColor} numberColor={numberColor} />
        <div className={`text-15 md:text-18 lg:text-20 mt-4 md:pr-8 lg:pr-10 xl:mr-48  md:tracking-content-tablet ${descriptionColor}`}>
          {description}
        </div>
      </div>
    </div>
  }

  const ContentBasketBall = ({ topicNumber, topic, underlineColor, numberColor, bgColor, description, customBox, descriptionColor }: contentType) => {
    return <div className={`grid md:grid-cols-3 lg:grid-cols-7  ${bgColor} ${customBox}`}>
      <div className="md:col-span-2 lg:col-start-2 lg:col-span-2 md:p-8 lg:px-0">
        <Topic number={topicNumber} text={topic} underlineColor={underlineColor} numberColor={numberColor} />
        <div className={`text-15 md:text-18 lg:text-20 mt-4  md:tracking-content-tablet ${descriptionColor}`}>
          {description}
        </div>
      </div>
    </div>
  }

  return (
    <>
      <div className="grid grid-row">
        <div className="grid md:grid-cols-3 lg:grid-cols-2 ">
          <div className='text-gray text-50 md:text-90 md:col-start-2 md:col-span-2 sm:px-6 lg:px-9'>  ATHLETS</div>
        </div>

        <div className="grid md:grid-cols-2">
          <div className="col-start-1 sm:h-56 md:h-auto">
            <img src="./footballer.png" className='sm:hidden lg:block lg:absolute football' />
            <img src="./footballmobile.png" className='football-mobile  md:hidden lg:hidden' />
            <img src="./footballstar.png" className='football-tablet sm:hidden md:block lg:hidden' />
          </div>

        </div>
        <Slider {...settings} className='w-screen md:hidden'>
          <div className="bg-white px-5 carousel-box">
            <div className="mt-12">   <Topic number='01' text='CONNECTION' /></div>

            <div className='text-15 mt-4 sm:tracking-content-mobile'>Connect with coaches directly, you can ping coaches to view profile.</div>
          </div>

          <div className="bg-lightpurple px-5 carousel-box">
            <div className="mt-12">
              <Topic number='02' text='COLLABORATION' />
            </div>

            <div className='text-15 mt-4 sm:tracking-content-mobile'>Work with other student athletes to increase visability.
              When you share and like other players videos it will increase your visability as a player.
              This is the team work aspect to Surface 1.
            </div>
          </div>

          <div className=" bg-purple px-5 carousel-box">
            <div className="mt-12">         <Topic number='03' text='GROWTH' underlineColor='white' /></div>

            <div className='text-15 mt-4 text-white sm:tracking-content-mobile'>
              Resources and tools for you to get better as a student Athelte.
              Access to training classes, tutor sessions, etc </div>
          </div>

        </Slider>

        <ContentFootball
          topicNumber="01"
          topic="CONNECTION"
          description="Connect with coaches directly, you can ping coaches to view profile."
        />
        <ContentFootball
          topicNumber="02" topic="COLLABORATION"
          description="Work with other student athletes to  increase visability.
                When you share and like other players videos it will increase your visability as a player.
                This is the team work aspect to Surface 1."
          bgColor="bg-lightpurple"
        />

        <ContentFootball
          topicNumber="03"
          topic="GROWTH"
          description="Resources and tools for you to get better as a student Athelte.
                Access to training classes, tutor sessions, etc"
          bgColor="bg-purple"
          underlineColor='white'
          customBox='md:py-10 lg:py-20'
          descriptionColor='text-white'
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-7">
          <div className="md:ml-10per  lg:col-start-2">
            <div className=' text-gray text-50 md:text-90  sm:px-6 lg:px-0 lg:mt-20'>PLAYERS</div>
          </div>

          <div className="md:col-start-2  lg:col-start-4 lg:col-span-3 md:h-auto md:relative">
            <img src="./basketball.png" className='sm:hidden lg:block lg:absolute basketball' />
            <img src="./basketball-tablet.png" className='sm:hidden md:block lg:hidden basketball ' />
          </div>
        </div>
      </div>

      <div className="grid md:hidden">
        <div className="sm:h-56 ">
          <img src="./basketball-mobile.png" className='md-hidden basketball' />
        </div>
      </div>

      <Slider {...settings} className='w-screen md:hidden'>
        <div className="bg-white px-5 carousel-box-basketball">
          <div className="mt-12">   <Topic number='01' text='CONNECTION' /></div>

          <div className='text-15 mt-4 sm:tracking-content-mobile'>Connect with talented athlete directly, you can watch their skills through video showreels directly from Surface 1.</div>
        </div>

        <div className="bg-lightpurple px-5 carousel-box-basketball">
          <div className="mt-12">
            <Topic number='02' text='COLLABORATION' />
          </div>

          <div className='text-15 mt-4 sm:tracking-content-mobile'>
            Work with recruiter to increase your chances of findingtalented athlete.
          </div>
        </div>

        <div className=" bg-navy px-5 carousel-box-basketball">
          <div className="mt-12">
            <Topic number='03' text='GROWTH' underlineColor='white' numberColor='purple' /></div>
          <div className='text-15 mt-4 text-white sm:tracking-content-mobile'>
            Save your time, recruit proper athlets for your team.
          </div>
        </div>

      </Slider>

      <div className="sm:hidden md:grid ">
        <ContentBasketBall
          topicNumber="01"
          topic="CONNECTION"
          description="Connect with talented athlete directly, you can watch their skills through video showreels directly from Surface 1."
        />

        <ContentBasketBall
          topicNumber="02"
          topic="COLLABORATION"
          description="Work with recruiter to increase your chances of findingtalented athlete."
          bgColor="bg-lightpurple"
          customBox='lg:px-0 lg:py-12'
        />

        <ContentBasketBall
          topicNumber="03"
          topic="GROWTH"
          description="Save your time, recruit proper athlets for your team."
          bgColor=" bg-navy"
          underlineColor='white'
          customBox='lg:px-0 lg:py-20'
          numberColor='purple'
          descriptionColor='text-white'
        />
      </div>

    </>
  );
}

export default App;
