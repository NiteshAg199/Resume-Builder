import { useNavigate } from 'react-router-dom';
const useRouterNavigate=(path)=>{
    const navigate=useNavigate();
    navigate(path);
}