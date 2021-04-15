import Jamie from "../Media/Economic/Jamie.jpeg"
import Ever from "../Media/Economic/Ever.jpg"
import Dollar from "../Media/Home/Dollar.jpeg"

import classes from "./Economic.module.css"

const Economic = () => {
    return ( 
        <div className={classes.Economic}>
            <div className={classes.header}>
                <h1>
                    Economic news
                </h1>
                <p>
                    Read the latest news from the stock exchange and other economic news.
                    You can also find news on other topics of interest to you in sections.
                </p>
            </div>
            <div className={classes.block}>
                

                <h2>
                    Jamie Dimon says U.S. consumers are ‘coiled, ready to go’ with $2 trillion more in checking accounts  
                </h2>
                <p>
                    <img alt={"jpg"} src={Jamie}/>
                    Government stimulus programs aimed at reducing suffering during the coronavirus pandemic have left consumers flush with savings – and that bodes well for the economic recovery under way, according to JPMorgan Chase CEO Jamie Dimon.

                    One of the sole areas of weakness in JPMorgan’s first quarter earnings report was muted loan demand, as everyone from credit card borrowers to multinational corporations paid down their debts, the bank said Wednesday.

                    Total loans at the bank slipped 4% from a year earlier to $1 trillion, even as deposits held at JPMorgan jumped 24% to $2.28 trillion. While that would normally be a bearish sign in a weakening economy, in this case, it just means that consumers will be laden with cash as vaccines allow for a broader reopening, Dimon said Wednesday during a call with reporters.
                    “What happened is, the consumer has so much money, they’re paying down their credit card loans, which is good,” Dimon said. “Their balance sheet is in excellent, outstanding shape – coiled, ready to go and they’re starting to spend money. Consumers have $2 trillion in more cash in their checking accounts than they had before Covid.”
                    Many Americans have received three rounds of stimulus checks and enhanced unemployment benefits since the pandemic began, helping forestall a wave of defaults that had been expected last year. They’ve been saving roughly 30% of their stimulus checks from each round, and recently have been plowing more money into debt repayment, CFO Jennifer Piepszak said.

                    Consumer spending on debit and credit cards has returned to pre-pandemic levels, according to Piepszak, despite lower spending for travel and entertainment. Those categories should rebound as more people become vaccinated, helping an overall recovery in loan demand in the second half of 2021, she said.  

                    The government stimulus, along with improving employment rates and the arrival of vaccines early this year, were cited as reasons that banks have begun to release some of the tens of billions of dollars in loan loss reserves they set aside last year. JPMorgan released $5.2 billion in reserves in the first quarter, the biggest sign yet that the U.S. banking industry is now expecting to have fewer loan losses than it had feared.

                    A similar thing happened for businesses, Dimon said. Large companies were able to retire bank loans after raising money in the equity or fixed income markets, while smaller companies took advantage of the government’s Paycheck Protection Program.
                </p>
            </div>

            <div className={classes.block}>

                <h2>
                    Suez Canal: How did they move the Ever Given?
  
                </h2>
                <p>
                    <img alt={"jpg"}  src={Ever}/>
                    How was the ship moved?
                    A fleet of tugs using cables or placing themselves directly alongside the stricken ship, worked for many days to free it.
                    Ship tracking software shows the ship now free from both banks and moving northwards along the canal.
                    As tugs struggled in their attempts to move the ship through the week, dredgers were brought in to dig mud and sand from under the bow and stern of the ship.
                    These dredgers are a familiar sight on the Suez Canal, said maritime expert Sal Mercogliano, and are used to continually dredge the waterway to keep it navigable.

                    "Large machines stick down into the water and basically pull dirt up from the bottom, which you can then deposit onshore."
                    The company which manages the running of the vessel, Bernhard Schulte Shipmanagement (BSM) said an additional specialist "suction dredger" had been brought in, able to shift 2,000 cubic metres (440,000 gallons) of material every hour.The combination of the tug boats and dredging equipment dislodged the ship.

                    If these had failed, there would have been a third option - removing some cargo and fuel from the boat.

                    It would have required a delicate and lengthy operation.Draining fuel from the ship's tanks might have helped, but was unlikely to be sufficient without other load-lightening measures.

                    A ship the size of the Ever Given can carry as many as 20,000 twenty-foot containers and an operation to remove these by crane would have been highly challenging.
                    Apart from the difficulties associated with getting suitable cranes close enough to the ship, the process could have caused damage and even unbalanced the ship.

                </p>
            </div>

            <div className={classes.block}>

                <h2>
                     U.S. budget deficit jumps to record $1.7 trillion this year   
                </h2>
                <p>
                    <img alt={"jpg"}  src={Dollar}/>
                    The U.S. government’s budget deficit surged to an all-time high of $1.7 trillion for the first six months of this budget year, nearly double the previous record, as another round of economic-support checks added billions of dollars to spending last month.

                    In its monthly budget report, the Treasury Department said Monday that the deficit for the first half of the budget year — from October through March — was up from a shortfall of $743.5 billion for the same period a year ago.

                    The deficit has been driven higher by trillions of dollars in support Congress has passed in successive economic rescue packages since the pandemic struck in early March 2020. The latest round came in a $1.9 trillion measure that President Joe Biden pushed through Congress last month.

                    Biden’s package included individual support payments of up to $1,400, and the administration rushed to make those payments as soon as Biden signed the measure into law. The Treasury statement showed that the payments in March totaled $339 billion.

                    The budget report showed that the deficit for just March totaled $659.6 billion, the third-highest monthly deficit. For the six-month period, the $1.7 trillion deficit total surpassed the previous record of an $829 billion deficit run up for the six months ending in March 2011, a period when the government was spending to deal with the adverse effects of the recession caused by the 2008 financial crisis.

                    Last year’s deficit, for the budget year that ended Sept. 30, totaled a record $3.1 trillion. The Congressional Budget Office estimated in February that this year’s deficit would total $2.3 trillion. But that estimate did not include the cost of the $1.9 trillion rescue plan or the impact of Biden’s “Build Back Better” infrastructure proposal that Congress is considering now.
                </p>
            </div>
            
           
        </div>
    );
}
 
export default Economic;