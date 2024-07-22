import './App.css';
import SignUp from '../SignUp/SignUp';
import SignInSide from '../SignInSide/SignInSide';
import { useCallback, useState } from 'react';
import Table from '../Table';
import OwnSingIn from '../SignInSide/OwnSingIn';
import OwnSingUp from '../SignUp/OwnSingUp';

function App() {
  const [forget, setForget] = useState(false);
  const [open, setOpen] = useState(false);

  const handleSignUpClick = useCallback(() => {
    console.log('yess')
    setForget(!forget);
  }, [forget]);

  const handelOpen = useCallback(() => {
    console.log('xxx');
    setOpen(true);
  }, []);

  return (
    <div className='all'>
      
      {open ? <Table /> :
        forget ? <OwnSingUp handelOpen={handelOpen} handleSignUpClick={handleSignUpClick} /> :
          <OwnSingIn handleSignUpClick={handleSignUpClick} handelOpen={handelOpen} />
      }
    </div>
  );
}

export default App;



// return (
//   <div className='all'>
//     {open ? <Table /> :
//       forget ? <SignUp handelOpen={handelOpen} handleSignUpClick={handleSignUpClick} /> :
//         <SignInSide handleSignUpClick={handleSignUpClick} handelOpen={handelOpen} />
//     }
//   </div>
// );
