import React, { Component } from 'react'
import { v4 as uuidv4 } from 'uuid'
import MoneyMangerList from './MoneyMangerList'

const selectOption = [
  { id: 1, selectedOption: "Income" },
  { id: 2, selectedOption: "Expansive" },
]

class MoneyManger extends Component {
  state = {
    ava_count: 0,       // available balance
    inc_count: 0,       // total income
    exp_count: 0,       // total expense
    amount: '',
    title: '',
    selectOptionList: selectOption[0].id,                 // 1 or 2
    selectOptionListName: selectOption[0].selectedOption, // "Income" by default
    moneyManger: [],
  }

  // helper: from a list of all transactions, compute totals
  recalcTotals = (list) => {
    let totalIncome = 0;
    let totalExpense = 0;

    for (const tx of list) {
      if (tx.typeName === 'Income') {
        totalIncome += tx.amount;
      } else if (tx.typeName === 'Expansive') {
        totalExpense += tx.amount;
      }
    }

    // available = income - expense
    let available = totalIncome - totalExpense;

    // clamp
    if (totalIncome < 0) totalIncome = 0;
    if (totalExpense < 0) totalExpense = 0;
    if (available < 0) available = 0;

    return {
      inc_count: totalIncome,
      exp_count: totalExpense,
      ava_count: available,
    };
  };

  handleAmount = (e) => {
    this.setState({ amount: e.target.value })
  }

  handleTitle = (e) => {
    this.setState({ title: e.target.value })
  }

  handleSelect = (id) => {
    const found = selectOption.find(each => each.id === id);

    this.setState({
      selectOptionList: id,
      selectOptionListName: found ? found.selectedOption : ''
    });
  }

  handleMoneySubmit = (e) => {
    e.preventDefault();

    const {
      title,
      amount,
      selectOptionList,
      selectOptionListName,
      moneyManger
    } = this.state;

    const amtNumber = Number(amount);

    // basic validation
    if (!title || !amount || isNaN(amtNumber)) {
      return;
    }

    // build new transaction row
    const newTransction = {
      id: uuidv4(),
      title,
      amount: amtNumber,
      typeId: selectOptionList,          // 1 or 2
      typeName: selectOptionListName,    // "Income" / "Expansive"
    };

    // new full list after adding
    const updatedList = [...moneyManger, newTransction];

    // recompute totals from updated list
    const { inc_count, exp_count, ava_count } = this.recalcTotals(updatedList);

    // update state in 1 go
    this.setState({
      moneyManger: updatedList,
      title: '',
      amount: '',
      inc_count,
      exp_count,
      ava_count,
    });
  };

  handleDelete = (id) => {
    this.setState(prev => {
      // remove clicked transaction
      const filtered = prev.moneyManger.filter(each => each.id !== id);

      // recompute totals from filtered list
      const { inc_count, exp_count, ava_count } = this.recalcTotals(filtered);

      return {
        moneyManger: filtered,
        inc_count,
        exp_count,
        ava_count,
      };
    });
  };

  render() {
    const {
      ava_count,
      inc_count,
      exp_count,
      title,
      amount,
      selectOptionList,
      moneyManger,
    } = this.state;

    return (
      <div className='flex min-h-[100vh] flex-col items-center bg-slate-900 text-white p-6'>

        {/* header intro */}
        <div className='text-center mb-8 max-w-xl'>
          <h1 className='text-2xl font-bold text-white'>Nagender</h1>
          <p className='text-slate-400 text-sm'>
            hey nagender please mange your money bang pelase check that once
          </p>
        </div>

        {/* summary cards */}
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 w-full max-w-5xl mb-10'>
          
          {/* available balance */}
          <div className='flex items-start gap-4 rounded-xl p-4 bg-slate-800 border border-slate-700 shadow-md'>
            <div className='flex h-10 w-10 items-center justify-center rounded-lg bg-green-600/20 border border-green-400 text-green-300 font-semibold text-lg'>
              ₹
            </div>
            <div className='flex flex-col'>
              <p className='text-slate-400 text-xs uppercase tracking-wide'>your value blacne</p>
              <p className='text-white text-xl font-semibold leading-tight'>Rs: {ava_count}</p>
              <p className='text-[10px] text-slate-500 mt-1'>income - expnansive</p>
            </div>
          </div>

          {/* total income */}
          <div className='flex items-start gap-4 rounded-xl p-4 bg-slate-800 border border-slate-700 shadow-md'>
            <div className='flex h-10 w-10 items-center justify-center rounded-lg bg-emerald-600/20 border border-emerald-400 text-emerald-300 font-semibold text-lg'>
              ↑
            </div>
            <div className='flex flex-col'>
              <p className='text-slate-400 text-xs uppercase tracking-wide'>your income</p>
              <p className='text-white text-xl font-semibold leading-tight'>Rs: {inc_count}</p>
              <p className='text-[10px] text-slate-500 mt-1'>total added</p>
            </div>
          </div>

          {/* total expense */}
          <div className='flex items-start gap-4 rounded-xl p-4 bg-slate-800 border border-slate-700 shadow-md'>
            <div className='flex h-10 w-10 items-center justify-center rounded-lg bg-red-600/20 border border-red-400 text-red-300 font-semibold text-lg'>
              ↓
            </div>
            <div className='flex flex-col'>
              <p className='text-slate-400 text-xs uppercase tracking-wide'>your expnansive</p>
              <p className='text-white text-xl font-semibold leading-tight'>Rs: {exp_count}</p>
              <p className='text-[10px] text-slate-500 mt-1'>total spent</p>
            </div>
          </div>
        </div>

        {/* content area: form and history */}
        <div className='flex flex-col lg:flex-row gap-10 w-full max-w-5xl'>

          {/* left: add transaction form */}
          <div className='w-full max-w-sm bg-slate-800/60 rounded-xl p-5 border border-slate-700 shadow'>
            <h2 className='text-lg font-semibold text-white mb-4'>Add transition</h2>

            <form className='flex flex-col gap-4' onSubmit={this.handleMoneySubmit}>
              <div className='flex flex-col gap-1'>
                <label className='text-xs text-slate-400'>title</label>
                <input
                  placeholder='hello'
                  className='border border-slate-600 bg-slate-700 text-white p-2 rounded text-sm outline-none focus:ring-2 focus:ring-slate-400/40'
                  value={title}
                  onChange={this.handleTitle}
                />
              </div>

              <div className='flex flex-col gap-1'>
                <label className='text-xs text-slate-400'>Ammount</label>
                <input
                  placeholder='ammoint'
                  className='border border-slate-600 bg-slate-700 text-white p-2 rounded text-sm outline-none focus:ring-2 focus:ring-slate-400/40'
                  value={amount}
                  onChange={this.handleAmount}
                />
              </div>

              <div className='flex flex-col gap-1'>
                <label className='text-xs text-slate-400'>type</label>
                <select
                  className='border border-slate-600 bg-slate-700 text-white p-2 rounded text-sm outline-none focus:ring-2 focus:ring-slate-400/40'
                  value={selectOptionList}
                  onChange={(e) => this.handleSelect(Number(e.target.value))}
                >
                  {selectOption.map(each => (
                    <option
                      key={each.id}
                      value={each.id}
                      className='text-black'
                    >
                      {each.selectedOption}
                    </option>
                  ))}
                </select>
              </div>

              <button
                type='submit'
                className='w-full p-3 text-white text-sm font-semibold bg-slate-500 hover:bg-slate-400 rounded transition-colors'
              >
                Add transition
              </button>
            </form>
          </div>

          {/* right: history table */}
          <div className='flex-1 w-full overflow-x-auto bg-slate-800/40 border border-slate-700 rounded-xl shadow'>
            <h2 className='text-lg font-semibold text-white p-4 pb-2'>History</h2>

            <div className='max-h-[320px] overflow-y-auto'>
              <table className='min-w-full text-left text-sm text-slate-300'>
                <thead className='sticky top-0 bg-slate-800 text-slate-400 text-xs uppercase'>
                  <tr>
                    <th className='py-3 px-4 font-medium'>title</th>
                    <th className='py-3 px-4 font-medium'>amount</th>
                    <th className='py-3 px-4 font-medium'>pla</th>
                    <th className='py-3 px-4 font-medium text-right'>action</th>
                  </tr>
                </thead>

                <tbody className='divide-y divide-slate-700/60'>
                  {moneyManger.length === 0 && (
                    <tr>
                      <td className='py-6 px-4 text-center text-slate-500 text-xs' colSpan={4}>
                        no records yet...
                      </td>
                    </tr>
                  )}

                  {moneyManger.map(item => (
                    <MoneyMangerList
                      key={item.id}
                      moneyMangerItem={item}
                      handleDelete={this.handleDelete}
                    />
                  ))}
                </tbody>
              </table>
            </div>
          </div>

        </div>
      </div>
    )
  }
}

export default MoneyManger
