import {BrowserRouter,Routes,Route} from 'react-router-dom';
import {Home} from './pages/Home'
import { GlobalStyle } from "./styles/global";
import {Navbar} from './components/Header'
import {Form} from "./pages/Form";
import { Posts } from './pages/Posts';
import {RegisterModelForm} from "./pages/RegisterModelForm"
import {OnePost} from './pages/OnePost'
import {FormUpdate} from './pages/FormUpdate'
import {FormLogin} from './pages/FormLogin'
import { useState } from 'react'
import { AuthProvider } from './context/AuthProvider';
import { ProtectedLayout } from './components/ProtectedLayout/indext';
import { Mischaracterize } from "./pages/mischaracterize";

function App() {
  const [count, setCount] = useState(0)

  return (
<AuthProvider>

<BrowserRouter>
    <GlobalStyle/>
    <Navbar/>
    
    <Routes>
      <Route path="/Posts" element={<Posts/>}></Route>
      <Route path="/Posts/:id" element={<OnePost/>}></Route>
      <Route path="/Login" element={<FormLogin/>}></Route>
      <Route path="/" element={<Home/>}></Route>
      

      <Route element={<ProtectedLayout/>}>
        <Route path="/Posts/update/:id" element={<FormUpdate/>}></Route>
        <Route path="/Category/register" element={<RegisterModelForm/>}></Route>
        <Route path="/Posts/mischaracterize/:idParam" element={<Mischaracterize/>}></Route>
        <Route path="/Form" element={<Form/>}></Route>
      </Route>


      


   
      <Route path="*" element={<h1> Not found</h1>}/>
    </Routes>
</BrowserRouter>

</AuthProvider>


  )
}

export default App
/*
<BrowserRouter>

 <Route element={<ProtectedRoute user={user} />}>
          <Route path="home" element={<Home />} />
          <Route path="dashboard" element={<Dashboard />} />
        </Route>
    
    <Routes>
      <Route path="/profile" element={<ProtectedLayout/>}/>
      <Route path="/login" element={<Home/>}></Route>
  
      <Route path="*" element={<h1> Not found</h1>}/>
    </Routes>
</BrowserRouter>

*/