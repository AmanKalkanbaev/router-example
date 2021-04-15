import News from "../Media/News.png";

import classes from "./About.module.css";

const About = () => {
    return ( 
        <div className={classes.About}>
            <div className={classes.header}>
                <h1>
                    We are Abizyana News
                </h1>
            </div>
            <div className={classes.block}>
                <p>
                    Welcome to Abizyana News, your number one news source. We strive to provide you with the best news with an emphasis on Accuracy, Speed, Relevance. Founded in 2021 by Aman Kalkanbaev, Abizyana News has come a long way from its founding in Karakol. When Aman first started out, his passion for Tales pushed them to start their own business. We hope you enjoy our products as much as we do. If you have any questions or comments, do not hesitate to contact us. Best regards, Abizyana News
                </p>
                <img src={News}/>
            </div>

            
            
           
        </div>
    );
}
 
export default About;