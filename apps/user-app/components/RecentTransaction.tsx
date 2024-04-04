import { Card } from '@repo/ui/card'
import React from 'react'

const RecentTransaction = ({transactions} : {
  transactions: {
    time: Date,
    amount: number,
}[]
}) => {
  console.log(transactions)
  return (
    <Card title='Recent Transaction'>
      <div className="">
        {transactions.map((t, index) => (
          <div key={index} className="flex justify-between">
            <div>
              <div className="text-sm">Received INR</div>
              <div className="text-slate-600 text-xs">{new Date(t.time).toDateString()}</div>
            </div>
            <div className="flex flex-col justify-center">+ Rs {t.amount / 100}</div>
          </div>
        ))}
      </div>
    </Card>
  )
}

export default RecentTransaction