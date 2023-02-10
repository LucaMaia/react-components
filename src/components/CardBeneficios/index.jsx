import React from "react";
import styles from './CardBeneficios.module.css'

// MaterialUI
import Card from '@mui/material/Card';
import {CardActionArea} from '@mui/material';

export default function CardBeneficios({link}) {
    return (
        <>

            {link.map((item,index) => {
                // if(!item.numeric & !item.subtitle & !item.desc & !item.textarea) return;
                return (
                    <div className={styles.size} key={index}>
                        <div style={{display:"flex",justifyContent:"start",padding:"20px"}} >
                            <Card sx={{ maxWidth: 650}}
                                  style={{
                                      borderRadius:"20px",
                                      height:"auto",
                                      boxShadow: "rgba(0, 0, 0, 0.15) 10px 10px 2.6px",
                                      display:"flex",
                                      justifyContent:"end",
                                      background:"white",
                                  }}>
                                <CardActionArea >
                                    <div className={styles.item}>
                                        <div className={styles.num}>
                                            {item.number}
                                        </div>

                                        <div className={styles.info}>
                                            <div className={styles.alinhamento_card_processoseletivo}>
                                                <h2 className={styles.title}>
                                                    {item.title}
                                                </h2>

                                                <span className={styles.description}>
                                                    {item.description}
                                                </span>
                                            </div>

                                            <p className={styles.desc}>
                                                {item.text}
                                            </p>
                                        </div>
                                    </div>
                                </CardActionArea>
                            </Card>
                        </div>


                        <div style={{display:"flex",justifyContent:"end",padding:"20px"}}>
                            <Card sx={{ maxWidth: 650}}
                                  style={{
                                      borderRadius:"20px",
                                      height:"auto",
                                      boxShadow: "rgba(0, 0, 0, 0.15) 10px 10px 2.6px",
                                      display:"flex",
                                      justifyContent:"end",
                                      background:"white",
                                  }}>
                                <CardActionArea >
                                    <div className={styles.item}>
                                        <div className={styles.num}>
                                            {item.numeric}
                                        </div>

                                        <div className={styles.info}>
                                            <div className={styles.alinhamento_card_processoseletivo}>
                                                <h2 className={styles.title}>
                                                    {item.subtitle}
                                                </h2>

                                                <span className={styles.description}>
                                                    {item.desc}
                                                </span>
                                            </div>

                                            <p className={styles.desc}>
                                                {item.textarea}
                                            </p>
                                        </div>
                                    </div>
                                </CardActionArea>
                            </Card>
                        </div>
                    </div>

                )
            })}
        </>
    )
}
