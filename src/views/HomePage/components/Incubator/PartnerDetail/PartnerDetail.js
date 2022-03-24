import React from 'react'
import classNames from 'classnames'
import classes from './PartnerDetail.module.scss'

const members = [{
  name: 'Tao Tuan Linh',
  position: 'CEO/Game Director at Cros Game',
  linkedIn: '',
  avatar: '/assets/images/cross/members/1.svg',
  id: 1
}, {
  name: 'Nguyen Khanh Duy',
  position: 'CTO at Cros Game',
  linkedIn: '',
  avatar: '/assets/images/cross/members/2.svg',
  id: 2
}, {
  name: 'Bach Trong',
  position: 'CMO at Cros Game',
  linkedIn: '',
  avatar: '/assets/images/cross/members/3.svg',
  id: 3
}]

const projects = [{
  image: '/assets/images/cross/projects/step-hero.svg',
  id: 1
}, {
  image: '/assets/images/cross/projects/plant-exodus.svg',
  id: 2
}, {
  image: '/assets/images/cross/projects/mech-master.svg',
  id: 3
}]

const partners = [{
  image: '/assets/images/cross/partners/apple.svg',
  id: 1
}, {
  image: '/assets/images/cross/partners/microsoft.svg',
  id: 2
}, {
  image: '/assets/images/cross/partners/steam.svg',
  id: 3
}, {
  image: '/assets/images/cross/partners/nokia.svg',
  id: 4
}, {
  image: '/assets/images/cross/partners/nintendo.svg',
  id: 5
}, {
  image: '/assets/images/cross/partners/sktollcat.svg',
  id: 6
}]

const PartnerDetail = ({ setShowDetail }) => {
  return (
    <div className={classes.container}>
      <div className={classNames('flex items-end justify-between', classes.top)}>
        <a className={classes.btn}
          onClick={() => {
            setShowDetail(false)
          }}
        >
          Detail <img src='/assets/images/arrow.svg' className={classes.icon} />
        </a>
        <div className={classNames('flex items-center', classes.right)}>
          <div className={classNames(classes.item, classes.itemSmall)}>
            <img src='/assets/images/cup.svg' className={classes.cupIcon} />
            Four-time winner of the Bluebird Award 2016
          </div>
          <div className={classes.item}>
            <img src='/assets/images/cup.svg' className={classes.cupIcon} />
            “Most downloaded apps” for kids on App Store and Google Play
          </div>
        </div>
      </div>

      <div className={classNames(classes.group, classes.bg)}>
        <div className={classNames('flex items-start justify-around', classes.members)}>
          { members.map((member) => (
            <div className={classes.member} key={member.id}>
              <img src={member.avatar} className={classes.avatar} alt='avatar'/>
              <p className={classes.name}>
                { member.name }
              </p>
              <p className={classes.position}>
                { member.position }
              </p>
              <div className='flex items-center justify-center'>
                <a href={member.linkedIn}
                  target='_blank'
                  rel="noreferrer"
                >
                  <img src='/assets/images/socials/linkedin.svg' className={classes.icon}/>
                </a>
                
              </div>
            </div>
          )) }
        </div>
      </div>

      <div className={classes.group}>
        <h4 className={classes.title}>
          Past GameFi projects contribution
        </h4>
        <div className={classNames('flex items-center justify-center', classes.projects)}>
          { projects.map((project) => (
            <div className={classes.project} key={project.id}>
              <img src={project.image} className={classes.projectImage} alt='project'/>
            </div>
          )) }
        </div>
      </div>

      <div className={classNames(classes.group, classes.bg)}>
        <h4 className={classes.title}>
          Client & Partners
        </h4>
        <div className={'flex items-center justify-center flex-wrap'}>
          { partners.map((partner) => (
            <div className={classes.project} key={partner.id}>
              <img src={partner.image} className={classes.projectImage} alt='project'/>
            </div>
          )) }
        </div>
      </div>
    </div>
  )
}

export default PartnerDetail

