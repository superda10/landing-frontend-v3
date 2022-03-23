import React from 'react'
import classes from './FAQ.module.scss'
import Question from './Question'

const DATAS = [{
  id: 1,
  question: '1. Will the Tier System be applied to all upcoming INO, IDO?',
  answer: 'This tier system can be applied for both INO & IDO. However, for special launches, we’ll make the necessary adjustments to accommodate & benefit our community members.'
}, {
  id: 2,
  question: '2. What is Pool Weight and how will it affect my accessibility and allocation?',
  answer: 'Pool weight is the amount that users can buy in accordance with their VIP level. Based on the inventory/allocation for each project, we will calculate the corresponding dollar amount.\nExample: 1x = $100\nVIP III - Guaranteed Allocation: 2.5x \nMaximum amount you can buy: 2.5 x $100 = $250'
}, {
  id: 3,
  question: '3. What is the mechanism behind the Lottery System?',
  answer: 'Based on the number of participants in VIP I & VIP I, we willI apply the  20% lottery system and choose users at random out of the total number of qualified users.\nExample:\nIf VIP I has 100 qualified users, there will be 20 winners participating in the sale.'
}, {
  id: 4,
  question: '4. How will your Tier System, especially with Pool Weight be more beneficial to members?',
  answer: 'The more $SPO you stake, the more tokens you are guaranteed to buy.'
}, {
  id: 5,
  question: '5. Will the SPO amount needed stays the same regardless of market conditions?',
  answer: 'Yes, you need to stake the required number of SPOs & achieve VIP level to participate in IDO/INO'
}, {
  id: 6,
  question: '6. How can I participate in Spores upcoming Launchpad programs?',
  answer: '1️⃣ Register for Whitelist*\n2️⃣ Stake the required number of SPOs\n3️⃣ Tier snapshot & confirmation\n4️⃣ Participate in INO/IDO with assigned VIP tier\n*For IDO, you are required to do KYC'
}]

const FAQ = () => {
  return (
    <div className={classes.container}>
      <h3 className={classes.title}>
        FAQ
      </h3>
      <div className={classes.content}>
          { DATAS.map((item) => (
            <Question key={item.id} item={item}/>
          )) }
      </div>
    </div>
  )
}

export default FAQ
