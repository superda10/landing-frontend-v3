import React from 'react'
import classes from './LaunchpadTierSystem.module.scss'

import LaunchpadTierSystemItem from './LaunchpadTierSystemItem'

const dataTable = [{
    status: true,
    Tiers: 'Requirement SPO',
    vip1: '250,000',
    vip2: '500,000',
    vip3: '1,000,000',
    vip4: '2,000,000',
    vip5: '4,000,000',
    vip6: '10,000,000',
    vip7: '25,000,000',
    vip8: '50,000,000',
},{
    Tiers: 'Pool weight',
    vip1: '1',
    vip2: '2.10',
    vip3: '4.40',
    vip4: '9.28',
    vip5: '19.52',
    vip6: '51.20',
    vip7: '134.00',
    vip8: '282.00',
},{
    status: true,
    Tiers: 'Allocation Based',
    vip1: 'Guarantee',
    vip2: 'Guarantee',
    vip3: 'Guarantee',
    vip4: 'Guarantee',
    vip5: 'Guarantee',
    vip6: 'Guarantee',
    vip7: 'Guarantee',
    vip8: 'Guarantee',
},{
    Tiers: 'Winning chance',
    vip1: '100%',
    vip2: '100%',
    vip3: '100%',
    vip4: '100%',
    vip5: '100%',
    vip6: '100%',
    vip7: '100%',
    vip8: '100%',
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