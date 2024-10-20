import React from 'react'
import HeaderBox from '@/components/HeaderBox'
import TotalBalanceBox from '@/components/TotalBalanceBox'
import RightSidebar from '@/components/RightSidebar'

const Home = () => {
  const loggedIn = {firstName: "Pavan", lastName: "Kumar",email: 'pavan@gmail.com'}
  return (
    <section className='home'>
      <div className='home-content'>
        <header className='home-header'>
          <HeaderBox type="greeting"
          title="Welcome"
          user={loggedIn?.firstName || `Guest`}
          subtext="Access and manage your account and transactons efficiently"/>

          <TotalBalanceBox accounts={[]} 
          totalBanks={1}
          totalCurrentBalance={555.00}/>
        </header>
        RECENT TRANSACTIONS
      </div>
      <RightSidebar user={loggedIn}
      transactions={[]}
      banks={[{currentBalance: 123.45}, {currentBalance:1245.54}]}/>
    </section>
  )
}

export default Home