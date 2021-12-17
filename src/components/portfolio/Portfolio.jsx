import { useEffect, useState } from "react";
import PortfolioList from "../portfolioList/PortfolioList";
import "./Portfolio.scss"
import { featuredPortfolio,
webPortfolio,
mobilePortfolio,
designPortfolio,
contentPortfolio } 
from "../../data";

export default function Portfolio() {

const [selected,setSelected]= useState("featured");
const [data,setData] = useState([]);
    const list = [
        {
            id: "featured",
            title: "PHP",
          },
          {
            id: "web",
            title: "OOP",
          },
          {
            id: "mobile",
            title: "Javascript",
          },
          {
            id: "design",
            title: "React",
          },
          {
            id: "content",
            title: "Database",
          },
        ];
        useEffect(() => {
            switch(selected){
                case "featured":
                    setData(featuredPortfolio);
                    break;
                    case "web":
                        setData(webPortfolio);
                        break;
                        case "mobile":
                            setData(mobilePortfolio);
                            break;
                            case "design":
                                setData(designPortfolio);
                                break;
                                case "content":
                                    setData(contentPortfolio);
                                    break;
                                    default:
                                        setData(featuredPortfolio);

            }
           
        }, [selected])
    
    return (
        <div className ="portfolio" id = "portfolio">
            <br />
            <br />
            <br />
           <h1>Projects</h1> 
           <br />
           <br />
           <ul>
               {list.map((item)=>(
                   <PortfolioList title = {item.title} 
                   active={selected === item.id}
                   setSelected = {setSelected}
                   id={item.id}/>
               ))}
           </ul>
           <div className="container">
               {data.map((d) =>(
                   <div className = "item">
                       <img src = {d.img} alt= "" />
                       <h3>{d.title}</h3>
                       </div>
               ))}
               {/* <a href="https://github.com/zenimtiazz/cookieClicker" target="_blank" rel="noopener noreferrer">
               <div className="item">

           <img src="https://i.imgur.com/vvrEPKT.gif" alt="" />

           <h3>Cookie Clicker</h3>

             </div>
             </a>
               <a href="https://github.com/zenimtiazz/pokedex-php" target="_blank" rel="noopener noreferrer">
               <div className="item">
              <img src="https://i.gifer.com/HipJ.gif" alt="" />

              <h3>Pokedex</h3>

            </div>

               </a>
               <a href="https://github.com/zenimtiazz/php-blackjack" target="_blank" rel="noopener noreferrer">
               <div className="item">
              <img src="https://prabidhilabs.com/wp-content/uploads/2018/06/php-e8c6425acd65e1cbc012639ad25598c7.png" alt="" />

              <h3>Blackjack PHP</h3>

            </div>

               </a>

               <a href="https://github.com/zenimtiazz/Parallax" target="_blank" rel="noopener noreferrer">
               <div className="item">
              <img src="https://opengameart.org/sites/default/files/gamedev-animation_0.gif" alt="" />

              <h3>Parallax Effect</h3>

            </div>

               </a>

               <a href="https://github.com/zenimtiazz/ChatApp" target="_blank" rel="noopener noreferrer">
               <div className="item">
              <img src="https://raw.githubusercontent.com/zenimtiazz/ChatApp/main/chatapp.png" alt="" />

              <h3>ChatApp</h3>

            </div>

               </a>

               <a href="https://github.com/zenimtiazz/php-crud" target="_blank" rel="noopener noreferrer">
               <div className="item">
              <img src="https://i.stack.imgur.com/euBnI.gif" alt="" />

              <h3>PHP CRUD</h3> */}

            {/* </div>

               </a>
 */}

           </div>
    
        </div>
    )
}
