import React from 'react'
import classes from './About.module.scss'
import classNames from 'classnames'

const About = () => {
    return(
        <div className={classes.container}>
            <div className={classes.wrapper}>
            <h2 className={classes.heading}>Spores Network Ecosystem</h2>
            <div className={classes.contentText}>
                <p className={classes.text}>
                    Spores Network is a GameFi and Metaverse Publisher seeking to empower Web3 experiences that 
                    integrate with culturally forward Entertainment IP and Corporate Brands
                </p>
            </div>
            <p className={classes.title}>GameFi / Metaverse Publisher</p>
            <div className={classes.content}>
                <p className={classes.text}>Entertainment IP and Corporate Brands</p>
                <div className={classes.contentRow}>
                    <div className={classNames(classes.content, classes.mr)}>
                        <div className={classes.row}>
                            <img src={'/assets/images/gameController.svg'} alt='icon' className={classes.icon} />
                            <span className={classes.title}>GameFi Studio</span>
                        </div>
                    </div>
                    <div className={classes.content}>
                        <div className={classes.row}>
                            <span className={classes.title}>GameFi Studio</span>
                            <img src={'/assets/images/goggles.svg'} alt='icon' className={classes.icon} />  
                        </div>
                    </div>
                </div>
            </div>
            <div className={classes.BoutiqueLaunchpad}>
                <p className={classes.title}>Boutique Launchpad</p>
                <div className={classes.row}>
                    <p className={classes.text}>Rug-Proof Mechanisms</p>
                    <p className={classes.text}>Guaranteed Allocation</p>
                    <p className={classes.text}>High-Quality Projects</p>
                </div>
            </div>
            <div className={classes.content}>
                <div className={classNames(classes.contentRow, classes.contentText)}>
                    <div className={classNames(classes.content, classes.mr, classes.pd)}>
                        <ul>
                            <li className={classes.item}>
                                Identify, invest, incubate, and operate experienced Web3 design teams in-house; 
                                delivering VC services across CMO (brand activation, community development, marketing), 
                                CFO (finance), and blockchain technology solutions to launch
                            </li>
                            <li className={classes.item}>
                                IDO, INO, IGO partnerships
                            </li>
                            <li className={classes.item}>
                                Offers access to high value platforms at early-stage pricing
                            </li>
                        </ul>
                    </div>
                    <div className={classNames(classes.content, classes.pd)}>
                        <ul>
                            <li className={classes.item}>
                                Spores develops own metaverses – Voxel, 3D
                            </li>
                            <li className={classes.item}>
                                Spores is a landowner who owns and rents land across other metaverses. 
                            </li>
                            <li className={classes.item}>
                                Offers open world to entertainment IP and corporate brands
                            </li>
                            <li className={classes.item}>
                                Creates advertising, media, and event activation opportunities
                            </li>
                        </ul>
                    </div>
                </div>
                <div className={classes.contentFooter}>
                    <div className={classes.row}>
                        <img src={'/assets/images/store.svg'} alt='icon' className={classes.icon} />
                        <span className={classes.title}>Aggregator Marketplace</span>
                    </div>
                    <div className={classes.row}>
                        <span className={classes.title}>République Marketplace & Gallery</span>
                        <img src={'/assets/images/monaLisa.svg'} alt='icon' className={classes.icon} />  
                    </div>
            </div>
            </div>
            <div className={classes.ValueCreation}>
                <div className={classes.left}>
                    <p className={classes.title}>
                        Value Creation
                    </p>
                </div>
                <div className={classes.right}>
                    <ul>
                        <li className={classes.item}>
                            Token / Equity Value of Incubated Projects
                        </li>
                        <li className={classes.item}>
                            Revenue from Incubated Projects 
                        </li>
                        <li className={classes.item}>
                            GameFi Revenue Sources
                        </li>
                        <li className={classes.item}>
                            Metaverse Revenue Sources
                        </li>
                    </ul>
                </div>
            </div>
        </div>

        <h2 className='title text-center mb-10'>
            Vision & Mission
        </h2>
        <p className={classes.description}>
            <b>Spores Network Founders</b> believe that the decentralization of ownership and burgeoning <b>metaverse will uniquely bridge our digital and physical lives</b>
        </p>
        <div className={classNames('flex items-start justify-center', classes.visions)}>
            <div>
                <div className={classes.vision}>
                    Spores mission is to create a GameFi / Metaverse Publisher that is
                    creator-centric, community driven, and borderless engaging entertainment IP and corporate brands.
                </div>
                <div className={classes.vision}>
                    Spores GameFi / Metaverse Publisher incubates, launches (IDO, IGO, INO), and operates NFT stack projects.
                </div>
                <div className={classes.vision}>
                    Spores Metaverse ecosystem encompasses physical and digital experiences (phygital) that generate community engagement and revenue through our NFT aggregator marketplace, Republique gallery and retail experience, and cross-chain metaverses.
                </div>
            </div>
            <p className={classes.quoute}>
                Everything we do is from the lens of being Asian-influenced with Global Reach.
            </p>
        </div>
    </div>
          
    )
}

export default About