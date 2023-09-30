import { useContext, useState, useRef } from 'react'
import { Link } from 'react-router-dom';
import { ShoppingCartContext } from "../../Context";
import Layout from '../../Components/Layout';


function SignIn() {

  const context = useContext(ShoppingCartContext);

  const [view, setView] =useState("user-info");

  const form = useRef(null);

  // Account
  const account = localStorage.getItem("account");

  const parsedAccount = JSON.parse(account);
 
  // Has an account
  const noAccountInLocalStorage = parsedAccount ? Object.keys(parsedAccount).length === 0 : true;
  const noAccountInLocalStage = context.account ? Object.keys(context.account).length === 0 : true;
  const hasUserAnAccount = !noAccountInLocalStorage || !noAccountInLocalStage;

  const createAccount = () => {
    const formData = new FormData(form.current)
    const data = {
      name: formData.get("name"),
      email: formData.get("email"),
      password: formData.get("password")
    }
  }

  const renderLogIn = () => {

    return (
      <div className='flex flex-col w-80'>
        <p>
          <span className='font-light text-sm'>Email: </span>
          <span>{parsedAccount?.email}</span>
        </p>
        <p>
          <span className='font-light text-sm'>Password: </span>
          <span>{parsedAccount?.password}</span>
        </p>
        <Link
          to="/">
          <button
            className='bg-violet-600 disabled:bg-black/40 text-white w-full py-3 mt-4 mb-2 font-bold'
            disabled={!hasUserAnAccount}> 
              Log in
          </button>
          </Link>
        <div className='text-center'> 
          <a className='font-light text-xs underline underline-offset-3' href='/'>Forgot my password</a>
        </div>
          <button
            className='border  border-violet-600 disabled:text-black/40  disabled:border-violet/40 py-3 mt-6 font-bold'
            disabled={hasUserAnAccount}
            onClick={() => setView("create-user-info")}>
              Sign up
          </button>
      </div>
    )
  }

  const renderCreateUserInfo = () => {
    return (
      <form ref={form} className='flex flex-col gap-4 w-80'>
        <div className='flex flex-col gap-1'>
          <label htmlFor='name' className='font-light text-sm'>Your name</label>
            <input 
              type='text' 
              id='name'
              name='name'
              defaultValue={parsedAccount?.name}
              placeholder='Peter'
              className='placeholder:font-light placeholder:text-sm
              placeholder:text-black/60 py-2 px-4 focus:outline-none
              border border-violet-600'
            />
        </div>
        <div className='flex flex-col gap-1'>
          <label htmlFor='email' className='font-light text-sm'>Your email:</label>
            <input 
              type='text' 
              id='email'
              name='email'
              defaultValue={parsedAccount?.email}
              placeholder='email@email.com'
              className='placeholder:font-light placeholder:text-sm
              placeholder:text-black/60 py-2 px-4 focus:outline-none
              border border-violet-600'
            />
        </div>
        <div className='flex flex-col gap-1'>
          <label htmlFor='password' className='font-light text-sm'>Your password:</label>
            <input 
              type='text' 
              id='password'
              name='password'
              defaultValue={parsedAccount?.password}
              placeholder='*******'
              className='placeholder:font-light placeholder:text-sm
              placeholder:text-black/60 py-2 px-4 focus:outline-none
              border border-violet-600'
            />
        </div>
        <Link to="/">
          <button 
            className='w-full py-3 bg-violet-600 text-white font-bold'
            onClick={() => createAccount()}
          >
            Create
          </button>
        </Link>
      </form>
    )
  }
  
  const renderView = () => view === "create-user-info" ? renderCreateUserInfo() : renderLogIn()
  
    return (
      <Layout>
        <h1 className='font-medium text-lg text-center mb-8 w-80'>Welcome</h1>
        {renderView()}
      </Layout>
    )
  }
  
  export default SignIn