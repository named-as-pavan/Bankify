import HeaderBox from '@/components/HeaderBox'
import React from 'react'
import { title } from 'process';
import PaymentTransferForm from '@/components/PaymentTransferForm';
import { getLoggedInUser } from '@/lib/actions/user.actions';
import { getAccounts } from '@/lib/actions/bank.actions';

const Transfer = async() => {
  const loggedIn = await getLoggedInUser();

  const accounts = await getAccounts({userId : loggedIn?.$id})

  if(!accounts) return;

  const accountsData = accounts?.data;
  return (
<section className='payment-transfer'>
<HeaderBox title="Payment Transfer" subtext='"Transfer money from your bank account (Please provide specific details reequested to transfer your payment)'/>

<section className='size-full pt-5'>
<PaymentTransferForm accounts={accountsData}/>
</section>
</section>
  )
}

export default Transfer