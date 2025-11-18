import React from 'react'

const MoneyMangerList = (props) => {
  const { moneyMangerItem, handleDelete } = props;
  const { title, amount, id, typeName } = moneyMangerItem;

  const deleteBtn = () => {
    handleDelete(id);
  };

  // style for Income vs Expansive label
  const typeColor =
    typeName === 'Income'
      ? 'text-emerald-400 bg-emerald-500/10 border border-emerald-400/40'
      : 'text-red-400 bg-red-500/10 border border-red-400/40';

  return (
    <tr className='hover:bg-slate-700/30'>
      {/* title */}
      <td className='py-3 px-4 align-top text-slate-200 break-all'>
        <div className='text-[13px] leading-4 font-medium text-white'>{title}</div>
      </td>

      {/* amount */}
      <td className='py-3 px-4 align-top'>
        <div className='text-[13px] leading-4 text-slate-100 font-semibold'>
          Rs: {amount}
        </div>
      </td>

      {/* pla / type */}
      <td className='py-3 px-4 align-top'>
        <span
          className={`inline-block text-[11px] leading-4 font-medium rounded px-2 py-1 ${typeColor}`}
        >
          {typeName}
        </span>
      </td>

      {/* action */}
      <td className='py-3 px-4 align-top text-right'>
        <button
          onClick={deleteBtn}
          className='inline-flex items-center justify-center text-slate-400 hover:text-red-400 hover:bg-red-500/10 border border-transparent hover:border-red-500/40 rounded p-2 text-xs transition-colors'
          title='Delete'
        >
          {/* trash icon (heroicons style, inline SVG) */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-4 w-4"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={1.5}
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 9.75l.346 8.248m4.154-8.248l-.346 8.248M4.5 6.75h15m-10.125 0l.265-1.591A1.125 1.125 0 0110.74 4.25h2.52c.534 0 .995.378 1.1.909l.265 1.591m-6.9 0h6.9M9 6.75h6m-8.25 0v12c0 .621.504 1.125 1.125 1.125h8.25c.621 0 1.125-.504 1.125-1.125v-12" />
          </svg>
        </button>
      </td>
    </tr>
  )
}

export default MoneyMangerList
