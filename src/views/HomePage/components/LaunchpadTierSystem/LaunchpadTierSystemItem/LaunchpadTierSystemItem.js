import React from "react";
import classes from './LaunchpadTierSystemItem.module.scss'
import classNames from "classnames";

const LaunchpadTierSystemItem = ({ data }) =>{
    return(
        <div className={'table table-responsive', classes.container}>
            <table cellPadding='0' cellSpacing='0' className={classes.table}>
                <tr>
                    <td className={classNames(classes.textColor, classes.background)}>Tiers</td>
                    <td className={classNames(classes.label, classes.background)}>VIP I</td>
                    <td className={classNames(classes.label, classes.background)}>VIP II</td>
                    <td className={classNames(classes.label, classes.background)}>VIP III</td>
                    <td className={classNames(classes.label, classes.background)}>VIP IV</td>
                    <td className={classNames(classes.label, classes.background)}>VIP V</td>
                    <td className={classNames(classes.label, classes.background)}>VIP VI</td>
                    <td className={classNames(classes.label, classes.background)}>VIP VII</td>
                    <td className={classNames(classes.label, classes.background)}>VIP VIII</td>
                </tr>
                {data.map((item,key) => (
                        <tr key={key}>
                            <td className={classNames(classes.text, item.status === true && classes.bgr)}>{item.Tiers}</td>
                            <td className={classNames(classes.title, item.status === true && classes.bgr)}>{item.vip1}</td>
                            <td className={classNames(classes.title, item.status === true && classes.bgr)}>{item.vip2}</td>
                            <td className={classNames(classes.title, item.status === true && classes.bgr)}>{item.vip3}</td>
                            <td className={classNames(classes.title, item.status === true && classes.bgr)}>{item.vip4}</td>
                            <td className={classNames(classes.title, item.status === true && classes.bgr)}>{item.vip5}</td>
                            <td className={classNames(classes.title, item.status === true && classes.bgr)}>{item.vip6}</td>
                            <td className={classNames(classes.title, item.status === true && classes.bgr)}>{item.vip7}</td>
                            <td className={classNames(classes.title, item.status === true && classes.bgr)}>{item.vip8}</td>
                        </tr>
                ))}
                </table>
        </div>
    )
}
export default LaunchpadTierSystemItem

