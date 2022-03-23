import React from 'react'
import classes from './LaunchpadTierSystem.module.scss'

import LaunchpadTierSystemItem from './LaunchpadTierSystemItem'

const dataTable = [{
    status: true,
    Tiers: 'Method',
    vip1: 'Lottery',
    vip2: 'Lottery',
    vip3: 'Guarantee',
    vip4: 'Guarantee',
    vip5: 'Guarantee',
},{
    Tiers: 'Locking amount required ($SPO)',
    vip1: '200,000',
    vip2: '400,000',
    vip3: '2,000,000',
    vip4: '4,000,000',
    vip5: '10,000,000',
},{
    status: true,
    Tiers: 'Pool weight (x)',
    vip1: '1',
    vip2: '2.5',
    vip3: '2.5',
    vip4: '5.5',
    vip5: '15',
},{
    Tiers: 'Winning chance',
    vip1: '20%',
    vip2: '20%',
    vip3: '100%',
    vip4: '100%',
    vip5: '100%',
}]


const LaunchpadTierSystem = () =>{
    return(
        <div className={classes.container}>
            <h2 className={classes.heading}>Launchpad Tier System</h2>
            <div className={classes.content}>
            <LaunchpadTierSystemItem data={dataTable} />
            </div>
        </div>
    )
} 

export default LaunchpadTierSystem