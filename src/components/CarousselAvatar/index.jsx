import Carousel from "react-bootstrap/Carousel";
import styles from "./Caroussel.module.css";
import {Link} from "@mui/material";

// Components
import ImageAvatars from "../Avatar";

export default function CarousselAvatar({link}) {
    return (
       <>
           <Carousel variant="dark" fade >
               {link.map((item,index) => {
                   return (
                       <Carousel.Item key={index} className={styles.alinhamento_image}>
                           <div className={styles.espacamento}>
                               <Link href={item.href}>
                                   <ImageAvatars
                                       src={item.src}
                                       width="150"
                                       height="150"
                                   />
                               </Link>
                           </div>

                           <Carousel.Caption>
                               <h3 className={styles.text_black}>
                                   {item.title}
                               </h3>
                               <p className={styles.text_black}>
                                   {item.description}
                               </p>

                               <p className={styles.alinhamento_text}>
                                   {item.text}
                               </p>
                           </Carousel.Caption>
                       </Carousel.Item>
                   )
               })}
           </Carousel>
       </>
    );
};