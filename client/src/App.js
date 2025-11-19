
import './App.css';
import { Routes,BrowserRouter,Route } from 'react-router-dom';
import Loggin from './pages/loggin';
import Register from './pages/register';
import NotFound from './pages/notFound';
import Home from './pages/home';
import All from './pages/all';
import Problem1 from './practices/problem1';
import PracticeProp from './practices/practiceProp';
import PropsInFo from './practices/props';
import ClassComponets from './pages/ClassComponets';
import UserListProp from './practices/UserListProp';
import { isCookie } from 'react-router-dom';
import Todo from './pages/Todo';
import History from './practices/History';
import Feedback from './practices/Feedback';
import Thankyou from './practices/Thankyou';
import IdentifyIng from './practices/IdentifyIng';
import IdentifyList from './practices/IdentifyList';
import GalleryList from './practices/GalleryList';
import Capital from './practices/Capital';
import AppStore from './practices/AppStore';
import Toss from './practices/Toss';
import AppReview from './practices/AppReview';
import ContactApp from './practices/ContactApp';
import CommentApp from './practices/CommentApp';
import AppartmentsApp from './practices/AppartmentsApp';
import MoneyManger from './practices/MoneyManger';
import ShowHIde from './practices/ShowHIde';
import Alaram from './practices/Alaram';
import Timer from './practices/Timer';
import Faq from './practices/Faq';
import PasswordManger from './practices/PasswordManger';
import Header from './componets/Header';
import About from './routeingPartices/About';
import Contact from './routeingPartices/Contact';
import HomePage from './routeingPartices/Home';
import HelloHooks from './Hooks/HelloHooks';
import Comment from './Hooks/Comment';
import Unloac from './Hooks/Unloac';
import PasswordMangerHook from './Hooks/Paaword';
import CreaditCard from './Hooks/CreaditCard';
import ReadMore from './Hooks/ReadMore';
import Note from './Hooks/Note';
import BmiCalculator from './Hooks/BmiCalculator';
import ApiCall from './Hooks/ApiCall';
import BlogInnerPage from './routeingPartices/BlogInnerPage';
import AuthLogin from './routeingPartices/AuthLogin';



function App() {
  
  return (
    <div>
    <BrowserRouter>
    <Header />
    <Routes>
      <Route path='/login' element={<Loggin />} />
      <Route path='/register' element={<Register />} />
      <Route path='/blog' element={<Home />} />
      <Route path='/all' element={<All />} />
      <Route path='/nextwave-problem-soulution' element={<Problem1 />} />
      <Route path='/prractice-props' element={<PropsInFo  />} />
      <Route path='/user-props' element={<UserListProp  />} />
      <Route path='/class-componet' element={<ClassComponets  />} />
      <Route path='/todo' element={<Todo  />} />
      <Route path='/history' element={<History  />} />
      <Route path='/feedback' element={<Feedback  />} />
      <Route path='/thank-you' element={<Thankyou  />} />
      <Route path='/indentify' element={<IdentifyList  />} />
      <Route path='/gallery' element={<GalleryList  />} />
      <Route path='/capital' element={<Capital  />} />
      <Route path='/app-strore' element={<AppStore  />} />
      <Route path='/app-review' element={<AppReview  />} />
      <Route path='/contact-app' element={<ContactApp  />} />
      <Route path='/toss-game' element={<Toss  />} />
      <Route path='/comments' element={<CommentApp  />} />
      <Route path='/appartment' element={<AppartmentsApp  />} />
      <Route path='/money-manger' element={<MoneyManger  />} />
      <Route path='/show-hide' element={<ShowHIde  />} />
      <Route path='/alarm' element={<Alaram  />} />
      <Route path='/timer' element={<Timer  />} />
      <Route path='/faqs' element={<Faq  />} />
      <Route path='/password-manger' element={<PasswordManger  />} />
      <Route exact path='/' element={<HomePage  />} />

      <Route exact path='/about' element={<About  />} />
      <Route exact path='/contact' element={<Contact  />} />
      <Route exact path='/hooks' element={<HelloHooks />} />
      <Route exact path='/hooks/comment' element={<Comment />} />
      <Route exact path='/hooks/lock' element={<Unloac />} />
      <Route exact path='/hooks/password-manger' element={<PasswordMangerHook />} />
      <Route exact path='/hooks/creadit-card' element={<CreaditCard />} />
      <Route exact path='/hooks/readmore' element={<ReadMore />} />
      <Route exact path='/hooks/notes' element={<Note />} />
      <Route exact path='/hooks/bmi' element={<BmiCalculator />} />
      <Route exact path='/hooks/api' element={<ApiCall />} />
      <Route exact path='/blog/:id' element={<BlogInnerPage />} />
      <Route exact path='/auth' element={<AuthLogin />} />
      {/* <Route  element={<Header  />} /> */}

      
      <Route path='*' element={<NotFound />} />
    </Routes>
    </BrowserRouter>
    {/* <p>{res.data}</p> */}
    </div>
  );
}

export default App;
