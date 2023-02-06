import React from 'react'
import classNames from 'classnames'
import classes from './AmbassadorProgram.module.scss'

const AmbassadorProgram = () => {
    return(
        <div className={classes.container}>
            <img src={'/assets/images/ambassador.png'} alt='img' className={classes.img} />
            <div className={classes.content}>
                <h2 className={classes.heading}>Spores Ambassador Program</h2>
                <div className={classes.text}>
                    Our founders are embarking on a mission to create a digital ecosystem that focuses on NFT and GameFi projects while emphasizing the importance and value of creators and communities.
                    To make it happen, we need to have Spores Warriors become our right hand in brand activation and community outreaching within the crypto world.
                </div>
            </div>
            <div className={classNames(classes.contentRow, classes.bg)}>
                <div className={classes.row}>
                    <img src={'/assets/images/target.svg'} alt='icon' className={classes.icon} />
                    <div className={classes.title}>Who we are looking for</div>
                </div>
                <div className={classes.rowAround}>
                    <div className={classes.content}>
                        <ul className={classes.list}>
                            <li className={classes.item}>
                                Crypto & blockchain enthusiasts
                            </li>
                            <li className={classes.item}>
                                Well-networked individuals
                            </li>
                        </ul>
                    </div>
                    <div className={classes.content}>
                        <ul className={classes.list}>
                            <li className={classes.item}>
                                Resourceful, creative, and self-motivated individuals
                            </li>
                        </ul>
                    </div>
                    <div className={classes.content}>
                        <ul className={classes.list}>
                            <li className={classes.item}>
                                Outstanding verbal and written communication skills
                            </li>
                            <li className={classes.item}>
                                Ability to deliver engaging presentations
                            </li>
                        </ul> 
                    </div>
                </div>
            </div>
            <div className={classes.contentRow}>
                <div className={classes.row}>
                    <img src={'/assets/images/businessman.svg'} alt='icon' className={classes.icon} />
                    <div className={classes.title}>Responsibilities</div>
                </div>
                <div className={classes.rowAround}>
                    <div className={classes.content}>
                        <div className={classes.label}>Business Development</div>
                        <ul className={classes.list}>
                            <li className={classes.item}>
                                Find and onboard new potential partners on Spores Marketplace, GameStore, Launchpad
                            </li>
                            <li className={classes.item}>
                                Raise funds for Spores’ incubated projects
                            </li>
                            <li className={classes.item}>
                                Organize and host meet-ups with fellow crypto-fanatics and local investment communities (if possible)
                            </li>
                        </ul>
                    </div>
                    <div className={classes.content}>
                    <div className={classes.label}>Partner Relations</div>
                        <ul className={classes.list}>
                            <li className={classes.item}>
                                Represent Spores at industry events, conferences, and workshops to drive conversations and create interest with potential industry players (if possible)
                            </li>
                            <li className={classes.item}>
                                Acquire and develop trust relationships with industry players, including crypto projects, NFTs projects, communities, KOLs, VCs, game guilds
                            </li>
                        </ul>
                    </div>
                    <div className={classes.content}>
                    <div className={classes.label}>Brand Advocacy</div>
                        <ul className={classes.list}>
                            <li className={classes.item}>
                                Become a product expert and brand ambassador
                            </li>
                            <li className={classes.item}>
                                Function as Spores Network community expert — understand programs, activate community conversations, be part of helping build a vibrant community
                            </li>
                        </ul> 
                    </div>
                </div>
            </div>
            <div className={classNames(classes.contentRow, classes.bg)}>
                <div className={classes.row}>
                    <img src={'/assets/images/benefit.svg'} alt='icon' className={classes.icon} />
                    <div className={classes.title}>Benefits</div>
                </div>
                <div className={classes.rowAround}>
                    <div className={classes.content}>
                        <ul className={classes.list}>
                            <li className={classes.item}>
                                Incentives for organizing meet-ups & representing Spores at events
                            </li>
                            <li className={classes.item}>
                                Huge bonuses for referring successful partnerships
                            </li>
                        </ul>
                    </div>
                    <div className={classes.content}>
                        <ul className={classes.list}>
                            <li className={classes.item}>
                                VIP tier on Spores launchpad
                            </li>
                            <li className={classes.item}>
                                Opportunity to work directly with our experienced industry leaders
                            </li>
                        </ul>
                    </div>
                    <div className={classes.content}>
                        <ul className={classes.list}>
                            <li className={classes.item}>
                                Exclusive invitations to Spores events and meet-ups and exclusive Spores gifts and merchandise
                            </li>
                            <li className={classes.item}>
                                Opportunity to join Spores as a full-time employee
                            </li>
                        </ul> 
                    </div>
                </div>
            </div>
            <div className={classes.contentRow}>
                <div className={classes.row}>
                    <img src={'/assets/images/settings.svg'} alt='icon' className={classes.icon} />
                    <div className={classes.title}>How to participate</div>
                </div>
                <div className={classes.rowAround}>
                    <div className={classes.content}>
                        <div className={classes.row}>
                            <div className={classes.number}>1</div>
                            <div className={classes.text}>Fill out this<br /> 
                                <a>Google Form</a>
                            </div>
                        </div>
                    </div>
                    <div className={classes.content}>
                        <div className={classes.row}>
                            <div className={classes.number}>2</div>
                            <div className={classes.text}>
                             Spores will review the application within 7 working days.
                            </div>
                        </div>
                    </div>
                    <div className={classes.content}>
                        <div className={classes.row}>
                            <div className={classes.number}>3</div>
                            <div className={classes.text}>
                                Interview with the Community Manager — Investor Relations
                            </div>
                        </div>
                    </div>
                    <div className={classes.content}>
                        <div className={classes.row}>
                            <div className={classes.number}>4</div>
                            <div className={classes.text}>
                            Interview <br /> with CMO
                            </div>
                        </div>
                    </div>
                    <div className={classes.content}>
                        <a className={classes.btn}
                            href='https://forms.gle/oHEUFT3WGBsjy2987'
                            target='_blank'
                            rel="noreferrer"
                        >Apply Now</a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AmbassadorProgram