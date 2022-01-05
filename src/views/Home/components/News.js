import { Twitter } from '@mui/icons-material';
import { Container, Grid, Link } from '@mui/material';
import { ColorButton } from 'components';
import { useState, useEffect } from 'react'
import * as Api from 'api/api'
import SliderComponent from './SliderComponent';

const News = () => {
  const [pressReleaseNews, setPressReleaseNews] = useState([])
  const [socialNews, setSocialNews] = useState([])

  useEffect(() => {
    const getNews = async () => {
      try {
        const result = await Api.get({
          url: '/spores-news/public/list'
        })

        const pressReleaseNewsArray = []
        const socialNewsArray = []

        result.data.forEach((item) => {
          if (item.type === 'PRESS_RELEASES') {
            pressReleaseNewsArray.push(item)
          }

          if (item.type === 'SOCIALS') {
            socialNewsArray.push(item)
          }
        })

        setSocialNews(socialNewsArray)
        setPressReleaseNews(pressReleaseNewsArray)
      } catch(e) {
        console.log(e)
      }
    }

    getNews()
  }, [])
  return (
    <Container>
      <div
        id='news'
        className='relative py-20 md:py-32 px-4 md:px-16 rounded-t-60px'
        style={{ backgroundColor: '#2B2B2B' }}
      >
        <img
          src={require('assets/icons/icon-hand.png').default.src}
          className='absolute left-0 top-0'
          style={{ transform: 'translateX(-13%) translateY(-61%)', width: 431 }}
        />
        <img
          src={require('assets/icons/logo-primary-star-alt.png').default.src}
          className='absolute right-0 top-0'
          style={{ transform: 'translateX(50%) translateY(-50%)' }}
        />

        <div className='flex flex-col items-center mb-16'>
          <h1 className='font-black text-center text-4xl md:text-6xl text-white py-4 md:py-8'>SPORES NEWS</h1>
          <img src={require('assets/icons/icon-bumb.png').default.src} />
        </div>

        <div className='bg-primary-main w-full h-0.5 my-6' />
        <div className='font-medium text-2xl text-primary-main mb-6'>PRESS RELEASES</div>
        <SliderComponent data={pressReleaseNews}
          slidesToScroll={4}
          slidesToShow={4}
        >
          {pressReleaseNews.map((item, index) => (
            <div item key={index} className={'px-3 max-w-sm'}>
              <div className='bg-white rounded-lg pt-2'>
                <div style={{ background: `url(${item.image}) no-repeat center center / cover` }} className='h-40' />
                <div className='flex flex-col items-start justify-between h-80 p-4'>
                  <div className='mb-4'>
                    <Link
                      href={item.link}
                      className='font-bold text-black hover:text-primary-main max-line-2'
                      title={item.title}
                    >
                      {item.title}
                    </Link>
                    <div className='text-sm max-line-8 mt-2'>{item.description}</div>
                  </div>
                  <ColorButton component={Link} href={item.link} target='_blank'>
                    Learn more
                  </ColorButton>
                </div>
              </div>
            </div>
          ))}
        </SliderComponent>

        <div className='bg-primary-main w-full h-0.5 my-6' />
        <div className='font-medium text-2xl text-primary-main mb-6'>SOCIALS</div>
        <SliderComponent data={socialNews}
          slidesToScroll={4}
          slidesToShow={4}
        >
          {socialNews.map((item, index) => (
            <div item key={index} className={'px-3 max-w-sm'}>
              <div className='bg-white rounded-lg pb-4'>
                <div className='flex flex-col items-start justify-between h-52 p-4'>
                  <div className='mb-4'>
                    <div className='flex items-center space-x-2'>
                      <Twitter style={{ color: '#03A9F4' }} />
                      <div className='font-bold max-line-1'>{item.title}</div>
                    </div>
                    <div className='text-sm max-line-5 mt-2 whitespace-pre-line'>{item.description}</div>
                  </div>
                  <Link href={item.link} className='font-medium text-sm text-blue-500 hover:text-blue-700'>
                    Read More {'>>'}
                  </Link>
                </div>
                <div style={{ background: `url(${item.image}) no-repeat center center / cover` }} className='h-40' />
              </div>
            </div>
          ))}
        </SliderComponent>
        
      </div>
    </Container>
  );
};

export default News;
