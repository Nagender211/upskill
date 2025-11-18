// ContactApp.jsx
import React, { Component } from 'react'
import ContactList from './ContactList'
import {v4 as uuid4} from 'uuid'

const contactList=[
  { id: uuid4(), number: "6305428780", favImag: false },
  { id: uuid4(), number: "9182368735", favImag: true },
  { id: uuid4(), number: "7386489491", favImag: false },

]

class ContactApp extends Component{
  state={stateList: contactList,favrateStatus: false,number: '',searcIput: ''}

  serachHanddle=(e)=>{
    e.preventDefault();
    this.setState({searcIput: e.target.value})
  }

  newContact=(e)=>{
    e.preventDefault();
    
    const {number}=this.state;
    if (!number.trim()) return;
    const newContactList={
      id: uuid4(),
      number,
      favImag: false
    }
    this.setState(prev=>({stateList: [...prev.stateList,newContactList],number: ''}))
    // number: ''
  }

  handleNumber=(e)=>{
    e.preventDefault()
    this.setState({number: e.target.value})
  }

  toggleIsFav=(id)=>{
    this.setState(prev=>({stateList: prev.stateList.map(each=>{
      if(id===each.id){
        return {...each,favImag: !each.favImag}
      }
      return each
    })
    }))
  }

  handleDelete=(id)=>{
    const {stateList}=this.state
    const fillterdItems=stateList.filter(each=>each.id !==id)
    this.setState({stateList: fillterdItems})
  }

  render(){
    const {stateList,searcIput}=this.state;
    const fillterdItems=stateList.filter(each=>each.number.includes(searcIput))

    return(
      <div className="min-h-screen w-full bg-gradient-to-b from-indigo-50 to-white">
        <div className="mx-auto max-w-3xl px-4 py-12 space-y-8">
          <div className="rounded-2xl bg-white/80 backdrop-blur shadow-xl p-6 border border-indigo-100">
            <h1 className="text-2xl font-semibold text-indigo-700 mb-4">Contacts</h1>
            <form onSubmit={this.newContact} className="flex flex-col md:flex-row gap-4 items-stretch md:items-center">
              <div className="relative flex-1">
                <input
                  placeholder="Enter a phone number"
                  value={this.state.number}
                  className="w-full rounded-xl border border-indigo-200 bg-white px-4 py-3 text-lg text-gray-900 shadow-sm focus:outline-none focus:ring-4 focus:ring-indigo-100 focus:border-indigo-500 transition"
                  onChange={this.handleNumber}
                  
                  required
                />
                <span className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-indigo-400">#</span>
              </div>
              <button
                type="submit"
                className="rounded-xl bg-indigo-600 px-6 py-3 text-white text-lg font-medium shadow hover:bg-indigo-700 active:scale-[0.99] transition"
              >
                Add
              </button>
            </form>

            <div className="mt-4">
              <div className="relative">
                <input
                  placeholder="Search contact numbers"
                  onChange={this.serachHanddle}
                  className="w-full rounded-xl border border-indigo-200 bg-white px-4 py-3 text-base text-gray-900 shadow-sm focus:outline-none focus:ring-4 focus:ring-indigo-100 focus:border-indigo-500 transition"
                />
                <span className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-indigo-400">🔎</span>
              </div>
            </div>
          </div>

          <div className="rounded-2xl bg-white/80 backdrop-blur shadow-xl p-0 border border-indigo-100 overflow-hidden">
            <div className="overflow-x-auto">
              <table className="table-auto w-full">
                <thead className="bg-indigo-50">
                  <tr>
                    <th className="border-b border-indigo-100 px-6 py-3 text-left text-indigo-700 font-medium">Number</th>
                    <th className="border-b border-indigo-100 px-6 py-3 text-left text-indigo-700 font-medium">Favorite</th>
                  </tr>
                </thead>
                <tbody>
                  {fillterdItems.length>0 ? (
                    <>
                      {fillterdItems.map(item=>(
                        <ContactList
                          key={item.id}
                          contactData={item}
                          toggleIsFav={this.toggleIsFav}
                          handleDelete={this.handleDelete}
                        />
                      ))}
                    </>
                  ) : (
                    <tr>
                      <td colSpan="3" className="px-6 py-16">
                        <div className="flex flex-col items-center justify-center text-center gap-2">
                          <div className="text-5xl">🔍</div>
                          <p className="text-lg font-medium text-gray-700">No data found</p>
                          <p className="text-sm text-gray-500">Try a different number or clear the search</p>
                        </div>
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
          </div>

        </div>
      </div>
    )
  }
}

export default ContactApp
