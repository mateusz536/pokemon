import {useState} from 'react';
import './styles.css';
import Pagination from '@material-ui/lab/Pagination';
import { Link,useHistory } from "react-router-dom";

const CardList = ({cards}) => {
    const [currentPage, setCurrentPage] = useState(1);
    const routerHistory = useHistory();

    const onPageChange = (event, value) => {
        setCurrentPage(value);
     }

     const onCardClick = (card) => {
        routerHistory.push(`/pokemon/${card.id}`);
      };
      
    return (
    <div className='containerList'>
        {cards.slice((currentPage-1)*10,currentPage*10).map((card, index) => (
            <Link to={`/pokemon/${card.id}`}>
            <div key={index} className="row">
                <h2>{card.name}</h2>
                <img style={{height:'33vh'}} src={card.images.small} alt=""></img>
            </div>
            </Link>
      )
        )}
        <Pagination count={25} page={currentPage} onChange={onPageChange}/>
    </div>)
}

export default CardList;