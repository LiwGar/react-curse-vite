import { useContext } from 'react'
import { Link } from 'react-router-dom';
import { ShoppingCartContext } from "../../Context";
import Layout from '../../Components/Layout';


function SignIn() {

  const context = useContext(ShoppingCartContext);

   // Account
   const account = localStorage.getItem("account");

   const parsedAccount = JSON.parse(account);
 
   // Has an account
   const noAccountInLocalStorage = parsedAccount ? Object.keys(parsedAccount).length === 0 : true;
   const noAccountInLocalStage = context.account ? Object.keys(context.account).length === 0 : true;
   const hasUserAnAccount = !noAccountInLocalStorage || !noAccountInLocalStage;
  
    return (
      <Layout>
        <h1 className='font-medium text-lg text-center mb-8 w-80'>Welcome</h1>
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
              disabled={hasUserAnAccount}>
               Sign up
          </button>
        </div>
      </Layout>
    )
  }
  
  export default SignIn