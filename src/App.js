import './App.css';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Nav from './component/Nav';
import { HashRouter,Routes,Route } from 'react-router-dom';
import CreateStudent from './component/CreateStudent';
import StudentList from './component/StudentList';
import EditStudent from './component/EditStudent';


function App() {
  return (
    <HashRouter>
      <Nav />
      <Routes>
        <Route path="/" element={<CreateStudent />} />
        <Route path="/create-student" element={<CreateStudent />} />
        <Route path="/student-list" element={<StudentList />} />
        <Route path="/edit-student/:id" element={<EditStudent />} />
      </Routes>
    </HashRouter>
  );
}


export default App;


