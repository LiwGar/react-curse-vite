import { useContext, useState, useRef } from 'react'
import { ShoppingCartContext } from '../../Context'
import Layout from '../../Components/Layout'

function MyAccount() {

  const context = useContext(ShoppingCartContext);

  const [view, setView] = useState('user-info');

  const account = localStorage.getItem('account');

  const parsedAccount = JSON.parse(account);

  const form = useRef(null);

  const editAccount = () => {
    const formData = new FormData(form.current);
		const data = {
			name: formData.get('name'),
			email: formData.get('email'),
			password: formData.get('password')
		}

    // Update account
    const stringifiedAccount = JSON.stringify(data);

    localStorage.setItem('account', stringifiedAccount);

    context.setAccount(data);
  }

  const renderUserInfo = () => {

    return (
      <div className='flex flex-col w-80'>
        <p>
          <span className='font-light text-sm'>Name: </span>
          <span>{parsedAccount?.name}</span>
        </p>
        <p>
          <span className='font-light text-sm'>Email: </span>
          <span>{parsedAccount?.email}</span>
        </p>
        <button
          className=' bg-violet-600 text-white font-bold tracking-wider mt-6 py-3 shadow-sm shadow-black/80'
          onClick={() => setView('edit-user-info')}>
          Edit
        </button>
      </div>
    )
  }

  const renderEditUserInfo = () => {

    return (
      <form ref={form} className='flex flex-col gap-4 w-80'>
        <div className='flex flex-col gap-1'>
          <label htmlFor="name" className='font-light text-sm'>Your name:</label>
          <input
            type="text"
            id="name"
            name="name"
            defaultValue={parsedAccount.name}
            placeholder="Satoshi"
            className='border border-violet-600 placeholder:font-light placeholder:text-sm placeholder:text-black/60 focus:outline-none py-2 px-4 shadow-sm shadow-black/40'
          />
        </div>
        <div className='flex flex-col gap-1'>
          <label htmlFor="email" className='font-light text-sm'>Your email:</label>
          <input
            type="text"
            id="email"
            name="email"
            defaultValue={parsedAccount.email}
            placeholder="hi@helloworld.com"
            className='border border-violet-600 placeholder:font-light placeholder:text-sm placeholder:text-black/60 focus:outline-none py-2 px-4 shadow-sm shadow-black/40'
          />
        </div>
        <div className='flex flex-col gap-1'>
          <label htmlFor="password" className='font-light text-sm'>Your password:</label>
          <input
            type="text"
            id="password"
            name="password"
            defaultValue={parsedAccount.password}
            placeholder="*******"
            className='border border-violet-600 placeholder:font-light placeholder:text-sm placeholder:text-black/60 focus:outline-none py-2 px-4 shadow-sm shadow-black/40'
          />
        </div>
        <button
          className='w-full  py-3 bg-violet-600 text-white font-bold tracking-wider shadow-sm shadow-black/80'
          onClick={() => {setView('user-info'), editAccount()}}>
          Edit
        </button>
      </form>
    )
  }

  const renderView = () => view === 'edit-user-info' ? renderEditUserInfo() : renderUserInfo()

  return (
    <Layout>
      <h1 className="font-medium text-lg text-center mb-8 w-80">My account</h1>
      {renderView()}
    </Layout>
  )
}


export default MyAccount;