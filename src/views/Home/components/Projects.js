import { Container, Grid, Link } from '@mui/material';
import { ColorButton } from 'components';
import { News } from 'views/Home/components';
import { useState, useEffect } from 'react'
import * as Api from 'api/api'
import SliderComponent from './SliderComponent';

const Projects = () => {
  const [projects, setProjects] = useState([])
  const [comingSoons, setComingSoons] = useState([])

  useEffect(() => {
    const getProjects = async () => {
      try {
        const result = await Api.get({
          url: '/our-projects/public/list'
        })

        setProjects(result.data)
      } catch(e) {
        console.log(e)
      }
    }

    getProjects()
  }, [])

  useEffect(() => {
    const getComingSoons = async () => {
      try {
        const result = await Api.get({
          url: '/comingsoon/public/list'
        })

        setComingSoons(result.data)
      } catch(e) {
        console.log(e)
      }
    }

    getComingSoons()
  }, [])


  return (
    <div className='relative'>
      <div className='absolute left-0 right-0 -top-10 md:-top-16 flex justify-center h-20 md:h-auto z-10'>
        <img src={require('assets/icons/logo-primary-circle.png').default.src} />
      </div>
      <div
        id='projects'
        className='overflow-hidden pt-20 md:pt-32 rounded-t-60px md:rounded-t-120px'
        style={{ backgroundColor: '#232323' }}
      >
        <Container>
          <div
            className='max-w-4xl text-center mx-auto p-8 md:p-16 rounded-3xl md:rounded-60px'
            style={{ backgroundColor: '#2B2B2B' }}
          >
            <div className='font-bold text-2xl md:text-4xl lg:text-6xl text-primary-main'>
              Bringing WEB2 creators into the Metaverse
            </div>
          </div>

          <div className='flex flex-col items-center my-8 md:mt-32 md:mb-16'>
            <h1 className='font-black text-center text-4xl md:text-6xl text-white py-4 md:py-8'>OUR PROJECTS</h1>
            <img src={require('assets/icons/icon-bumb.png').default.src} />
          </div>

          <SliderComponent data={projects}
            slidesToScroll={4}
            slidesToShow={4}
          >
            {projects.map((item, index) => (
              <div item key={index} className={'px-3 max-w-sm'}>
                <div
                  style={{ background: `url(${item.image}) no-repeat center center / cover`, height: 480 }}
                  className='flex flex-col items-center justify-between rounded-60px border-2 border-primary-main px-6 py-12'
                >
                  <div className='text-white text-center'>
                    <div className='font-bold text-3xl mb-8'>{item.title}</div>
                    <div className='text-sm whitespace-pre-line'>{item.description}</div>
                  </div>
                  <ColorButton component={Link} background='#FFF' href={item.link} target='_blank'>
                    Learn more
                  </ColorButton>
                </div>
              </div>
            ))}
          </SliderComponent>


          <div className='flex flex-col items-center mt-32 mb-8'>
            <div className='font-black text-center text-4xl md:text-6xl text-white py-4 md:py-8'>COMING SOON</div>
          </div>
          <Grid container columnSpacing={6} rowSpacing={3} className='mb-40'>
            {comingSoons.map((item, index) => (
              <Grid item key={index} xs={12} sm={6} lg={3}>
                <div
                  style={{ background: `url(${item.image}) no-repeat center center / cover`, height: 92 }}
                  className='flex flex-col items-center justify-center rounded-full'
                >
                  <div className='font-bold text-xl text-white'>{item.title}</div>
                </div>
              </Grid>
            ))}
          </Grid>
        </Container>

        <News />
      </div>
    </div>
  );
};

export default Projects;
