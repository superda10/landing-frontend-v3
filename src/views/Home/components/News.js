import { Twitter } from '@mui/icons-material';
import { Container, Link } from '@mui/material';
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
        className='relative md:px-16 rounded-t-60px'
      >

        <h1 className='title mb-40 text-center'>Spores News</h1>
        <div className={'mb-50'}>
        <SliderComponent data={pressReleaseNews}
          slidesToScroll={3}
          slidesToShow={3}
        >
          {pressReleaseNews.map((item, index) => (
            <div item key={index} className={'px-3'}>
              <div className='news-item'>
                <div style={{ background: `url(${item.image}) no-repeat center center / cover` }} className='h-214' />
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
                  <ColorButton component={Link} href={item.link} target='_blank' background='#3C3C3E' color='#ffffff' style={{borderRadius: '4px'}}>
                    Learn more
                  </ColorButton>
                </div>
              </div>
            </div>
          ))}
        </SliderComponent>
        </div>
        <SliderComponent data={socialNews}
          slidesToScroll={3}
          slidesToShow={3}
        >
          {socialNews.map((item, index) => (
            <div item key={index} className={'px-3'}>
              <div className='news-item'>
                <div style={{ background: `url(${item.image}) no-repeat center center / cover` }} className='h-214' />
                <div className='flex flex-col items-start justify-between h-52 p-4'>
                  <div className='mb-4'>
                    <div className='flex items-center space-x-2'>
                      <Twitter style={{ color: '#03A9F4' }} />
                      <div className='font-bold max-line-1'>{item.title}</div>
                    </div>
                    <div className='text-sm max-line-5 mt-2 whitespace-pre-line'>{item.description}</div>
                  </div>
                  <Link href={item.link} className='font-medium text-sm text-black'>
                    Read More {'>>>'}
                  </Link>
                </div>
                
              </div>
            </div>
          ))}
        </SliderComponent>
        
      </div>
    </Container>
  );
};

export default News;
