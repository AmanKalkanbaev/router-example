import Prince from "../Media/Home/Prince.jpg"
import Cardi from "../Media/Home/Cardi.jpg"
import Audi from "../Media/Home/Audi.jpg"
import Med from "../Media/Home/Med.jpg"
import Astro from "../Media/Home/Astro.jpg"
import Dollar from "../Media/Home/Dollar.jpeg"
import Mars from "../Media/Home/Mars.jpg"
import { Link } from "react-router-dom"

import classes from "./Home.module.css"

const Home = () => {
    return ( 
        <div className={classes.Home}>
            <div className={classes.header}>
                <h1>
                    Home
                </h1>
                <p>
                    Here, you can read a daily selection of the most interesting news in the world lately.
                    Also, you can find news on topics of interest to you in sections.
                </p>
            </div>
            <div className={classes.block}>
                
                <Link to="/political">Political</Link>

                <h2>
                    Prince Philip, Duke of Edinburgh, dead at 99    
                </h2>
                <p>
                    <img src={Prince}/>
                    Prince Philip, the lifelong companion of Queen Elizabeth II and the longest-serving consort in British history, died at the age of 99 on Friday.

                    In a statement, Buckingham Palace said: "It is with deep sorrow that Her Majesty The Queen announces the death of her beloved husband, His Royal Highness The Prince Philip, Duke of Edinburgh. His Royal Highness passed away peacefully this morning at Windsor Castle. Further announcements will be made in due course. The Royal Family join with people around the world in mourning his loss.
                    The death of the duke comes after a period of poor health. Philip spent a month in two London hospitals, where he was treated for an infection and underwent heart surgery, before being discharged in mid-March.
                    Philip's funeral will be held at St George's Chapel at Windsor Castle, "in line with custom and with His Royal Highness's wishes," the College of Arms, which oversees many ceremonial aspects of the royal family's work, said in a statement Friday.
                    The statement added that the duke would not have a state funeral, and that the funeral would not be proceeded by a lying-in-state.
                    "The funeral arrangements have been revised in view of the prevailing circumstances arising from the Covid-19 pandemic and it is regretfully requested that members of the public do not attempt to attend or participate in any of the events that make up the funeral," the statement added.
                </p>
            </div>

            <div className={classes.block}>
                
                <Link to="/musical">Musical</Link>

                <h2>
                    Cardi B announces new ’90s-inspired Reebok clothing line    
                </h2>
                <p>
                    <img src={Cardi}/>
                    The ‘WAP’ rapper’s collaboration with the sportswear company, dubbed the Summertime Fine Collection, is due to launch next Friday (April 23) and includes athleisurewear and accessories for women and children.

                    Among the items is a cropped sweatshirt, high-rise leggings, a two-in-one bodysuit, and sneakers in monochromatic colours. Also featured in the collection are Men’s Club C shoes, which are available in three colours, as well as the Slip-On III style for boys (in Crisp Purple and Vector Red).
                    Speaking to Rolling Stone about the venture, Cardi explained: “I’m so happy to be releasing my first collection with Reebok. I drew a lot of my inspiration from growing up in New York in the ’90s – I used those moments as inspiration to make beautiful clothes for women today.”
                    The rapper also highlighted the importance of creating size-inclusive items, with each piece of the spring/summer 2021 line being offered in sizes 2XS-4X. “This collection gives every woman the product they need to feel sexy and confident,” Cardi said.

                    You can watch a behind-the-scenes promo video for the new Cardi B x Reebok line above. Visit here for further information and pricing.
                    Last week Cardi B explained that she was planning to “go away for a very long time” in order to complete work on her new album, the anticipated follow-up to her 2018 debut ‘Invasion Of Privacy’.

                    “Last year I was like, ‘I gotta put out my album this year,’” she said. “But, then I just stopped working on my album out of nowhere because I feel like the whole COVID thing discouraged me to put out my album. Because I want to put out an album, and I want to tour.”
                </p>
            </div>

            <div className={classes.block}>
                
                <Link to="/auto">Auto</Link>

                <h2>
                    Audi attacks EV mass market with Q4 e-tron   
                </h2>
                <p>
                    <img src={Audi}/>
                    Audi is aiming at buyers in the upper end of the compact segment for full-electric vehicles with the Q4 e-tron unveiled Wednesday, while adding a key entry-level EV to the brand’s expanding lineup of battery-powered vehicles.

                    It’s the first Audi based on parent Volkswagen Group’s MEB electric-only platform that also underpins the VW ID3 compact hatchback and ID4 compact crossover.

                    The Q4 e-tron and the coupe-styled Q4 Sportback e-tron are built in VW’s plant in Zwickau, Germany, alongside the ID3 and ID4. Production started in March.

                    CARS & CONCEPTS NEWSLETTER: Sign up for a Tuesday afternoon newsletter roundup of products, concepts and auto show news, including photo galleries, blogs and links to car reviews.
                    They have an 82-kilowatt-hour battery pack and two electric motors for a combined output of up to 295 hp and a range of up to 520 km (323 miles) under Europe's WLTP tests. The EVs will rival the Tesla Model Y as well as more mainstream electric crossovers such as Nissan’s forthcoming Ariya.

                    The Q4 e-tron and Q4 Sportback e-tron are expected to arrive in the U.S. toward the end of the year, Audi said in a statement. Pricing for the Q4 e-tron is planned to start under $45,000.
                    The Q4 e-tron is 4590 mm (15 feet) long, slightly longer than the ID4, which is 4580 mm, but shorter than the Skoda Enyaq, also an MEB-based electric crossover, which is 4650 mm in length.

                    With their long wheelbases and short overhangs, the cabin space is similar in size to a large utility vehicle, Audi said. The more practical of the two, the Q4 e-tron, has a 520-liter trunk. Luggage space rises to 1,490 liters with the rear seats folded flat.

                    The design of both models is characterized by a prominent grille, big wheels and defined wheel arches. The styling gives each body a more sculptured look than the ID3 and ID4.

                    The Q4 e-tron models include the option of an augmented-reality head-up display. The same system is also available on the ID3 and ID4 and superimposes turn signals on the road ahead, which Audi says helps while driving in poor visibility.

                    The head-up display also helps with the adaptive cruise control assistance, which keeps the car centered in its lane. If the car approaches a lane marking without the turn signal having been activated, the lane departure warning display projected on the windshield superimposes a red line on the real-life lane marking.
                </p>
            </div>

            <div className={classes.block}>
                
                <Link to="/medical">Medical</Link>

                <h2>
                    Global COVID-19 vaccine summary: Side effects
  
                </h2>
                <p>
                    <img src={Med}/>
                    All data and statistics are based on publicly available data at the time of publication. Some information may be out of date. Visit our coronavirus hub and follow our live updates page for the most recent information on the COVID-19 pandemic.

                    As the global effort to produce vaccines that can curb the COVID-19 pandemic forges ahead, headlines continue to highlight development breakthroughs and safety concerns.

                    This article summarizes the known side effects of the 13 authorized vaccines and provides insight into risks that researchers are still investigating.
                    Vaccines allow the body to build immunity by activating T and B lymphocytes, cells that, respectively, recognize the targeted virus and produce antibodies to combat it.

                    A vaccine cannot cause COVID-19. No vaccine contains a complete form of the virus responsible for this illness.

                    While their body builds immunity, it is normal for a person to experience minor side effects.

                    According to the Centers for Disease Control and Prevention (CDC)Trusted Source and the World Health Organization (WHO)Trusted Source, common side effects of a COVID-19 vaccine include:

                    a fever
                    fatigue
                    headaches
                    body aches
                    chills
                    nausea
                    A person might also experience side effects around the injection site, which is usually the upper arm. These might include swelling, pain, redness, an itchy rash, and other mild forms of irritation. People sometimes refer to this issue as COVID armTrusted Source.

                    Health authorities recognize that each of the 13 authorized COVID-19 vaccines can cause side effects. These are often mild and last for only a few days. They are not unexpected.

                    Every vaccine facility in the United States has to report specific post-vaccination symptoms, known as adverse events, to the government’s Vaccine Adverse Event Reporting System (VAERS). Individuals can also submit reports through the VAERS portal.

                    The Food and Drug Administration (FDA)Trusted Source, CDCTrusted Source, and other regulatory agencies are closely monitoring VAERS to scrutinize the safety of the vaccines used in the U.S.

                    Similar systems are in place in other countries. In the United Kingdom, for example, the scheme is called Yellow Card. The European Union asks people to report suspected side effects to their healthcare practitioners or fill out dedicated online forms.
                </p>
            </div>
            
            <div className={classes.block}>
                
                <Link to="/scientific">Scientific</Link>

                <h2>
                    More than 5,000 tons of extraterrestrial dust fall to Earth each year  
                </h2>
                <p>
                    <img src={Astro}/>
                    Every year, our planet encounters dust from comets and asteroids. These interplanetary dust particles pass through our atmosphere and give rise to shooting stars. Some of them reach the ground in the form of micrometeorites. An international program conducted for nearly 20 years by scientists from the CNRS, the Université Paris-Saclay and the National museum of natural history with the support of the French polar institute, has determined that 5,200 tons per year of these micrometeorites reach the ground. The study will be available in the journal Earth & Planetary Science Letters from April 15.

                    Micrometeorites have always fallen on our planet. These interplanetary dust particles from comets or asteroids are particles of a few tenths to hundredths of a millimetre that have passed through the atmosphere and reached the Earth's surface.

                    To collect and analyse these micrometeorites, six expeditions led by CNRS researcher Jean Duprat have taken place over the last two decades near the Franco-Italian Concordia station (Dome C), which is located 1,100 kilometres off the coast of Adélie Land, in the heart of Antarctica. Dome C is an ideal collection spot due to the low accumulation rate of snow and the near absence of terrestrial dust.

                    These expeditions have collected enough extraterrestrial particles (ranging from 30 to 200 micrometres in size), to measure their annual flux, which corresponds to the mass accreted on Earth per square metre per year.

                    If these results are applied to the whole planet, the total annual flux of micrometeorites represents 5,200 tons per year. This is the main source of extraterrestrial matter on our planet, far ahead of larger objects such as meteorites, for which the flux is less than ten tons per year.

                    A comparison of the flux of micrometeorites with theoretical predictions confirms that most micrometeorites probably come from comets (80%) and the rest from asteroids.

                    This is valuable information to better understand the role played by these interplanetary dust particles in supplying water and carbonaceous molecules on the young Earth.

                    Notes

                    Comets are made of dust and ice. They come from far distances, from the Kuiper belt to the outer reaches of the Solar System. As they approach the Sun, comets become active through the sublimation of their ices and release cometary dust.
                    An asteroid is a mainly rocky celestial body of between a few hundred metres to several kilometres in size. The majority of these bodies are located in the asteroid belt between Mars and Jupiter.
                    This program has received funding from the IPEV, the CNRS, the CNES, the ANR, the Domaine d'intérêt majeur ACAV+, which supports research in the Ile-de-France region in the fields of astrophysics and the conditions of the appearance of life, as well as from LabEx P2IO. The French Polar Institute (IPEV) and its Italian counterpart (PNRA) provided the logistical support needed to carry out the field collection program.
                    The French laboratories involved are: the Laboratoire de physique des deux infinis -- Irène Joliot-Curie (CNRS / Université Paris-Saclay / Université de Paris), the Institut de minéralogie, de physique des matériaux et de cosmochimie (CNRS / National museum of natural history / Université Sorbonne) and the Institut des sciences moléculaires d'Orsay (CNRS / Université Paris-Saclay). Three foreign laboratories are also involved: the Catholic University of America and NASA's Goddard Space Flight Center in the United States, and the University of Leeds in the United Kingdom.
                    1 micrometre (µm) is equal to 0.001 millimetres, or one thousandth of a millimetre.
                </p>
            </div>
            
            <div className={classes.block}>
                
                <Link to="/economic">Economic</Link>

                <h2>
                     U.S. budget deficit jumps to record $1.7 trillion this year   
                </h2>
                <p>
                    <img src={Dollar}/>
                    The U.S. government’s budget deficit surged to an all-time high of $1.7 trillion for the first six months of this budget year, nearly double the previous record, as another round of economic-support checks added billions of dollars to spending last month.

                    In its monthly budget report, the Treasury Department said Monday that the deficit for the first half of the budget year — from October through March — was up from a shortfall of $743.5 billion for the same period a year ago.

                    The deficit has been driven higher by trillions of dollars in support Congress has passed in successive economic rescue packages since the pandemic struck in early March 2020. The latest round came in a $1.9 trillion measure that President Joe Biden pushed through Congress last month.

                    Biden’s package included individual support payments of up to $1,400, and the administration rushed to make those payments as soon as Biden signed the measure into law. The Treasury statement showed that the payments in March totaled $339 billion.

                    The budget report showed that the deficit for just March totaled $659.6 billion, the third-highest monthly deficit. For the six-month period, the $1.7 trillion deficit total surpassed the previous record of an $829 billion deficit run up for the six months ending in March 2011, a period when the government was spending to deal with the adverse effects of the recession caused by the 2008 financial crisis.

                    Last year’s deficit, for the budget year that ended Sept. 30, totaled a record $3.1 trillion. The Congressional Budget Office estimated in February that this year’s deficit would total $2.3 trillion. But that estimate did not include the cost of the $1.9 trillion rescue plan or the impact of Biden’s “Build Back Better” infrastructure proposal that Congress is considering now.
                </p>
            </div>
            
            <div className={classes.block}>
                
                <Link to="/mars">Mars news</Link>

                <h2>
                    NASA's Mars Helicopter to Make First Flight Attempt Sunday   
                </h2>
                <p>
                    <img src={Mars}/>
                    NASA’s Ingenuity Mars Helicopter is two days away from making humanity’s first attempt at powered, controlled flight of an aircraft on another planet. If all proceeds as planned, the 4-pound (1.8-kg) rotorcraft is expected to take off from Mars’ Jezero Crater Sunday, April 11, at 12:30 p.m. local Mars solar time (10:54 p.m. EDT, 7:54 p.m. PDT), hovering 10 feet (3 meters) above the surface for up to 30 seconds. Mission control specialists at NASA’s Jet Propulsion Laboratory in Southern California expect to receive the first data from the first flight attempt the following morning at around 4:15 a.m. EDT (1:15 a.m. PDT). NASA TV will air live coverage of the team as they receive the data, with commentary beginning at 3:30 a.m. EDT (12:30 a.m. PDT).

                    “While Ingenuity carries no science instruments, the little helicopter is already making its presence felt across the world, as future leaders follow its progress toward an unprecedented first flight,” said Thomas Zurbuchen, associate administrator for science at NASA Headquarters. “We do tech demos like this to push the envelope of our experience and provide something on which the next missions and the next generation can build. Just as Ingenuity was inspired by the Wright brothers, future explorers will take off using both the data and inspiration from this mission.”

                    The Mars Helicopter is a high-risk, high-reward technology demonstration. If Ingenuity were to encounter difficulties during its 30-sol (Martian day) mission, it would not impact the science gathering of NASA’s Perseverance Mars rover mission.

                    Flying in a controlled manner on Mars is far more difficult than flying on Earth. Even though gravity on Mars is about one-third that of Earth’s, the helicopter must fly with the assistance of an atmosphere whose pressure at the surface is only 1% that of Earth. If successful, engineers will gain invaluable in-flight data at Mars for comparison to the modeling, simulations, and tests performed back here on Earth. NASA also will gain its first hands-on experience operating a rotorcraft remotely at Mars. These datasets will be invaluable for potential future Mars missions that could enlist next-generation helicopters to add an aerial dimension to their explorations.

                    “From day one of this project our team has had to overcome a wide array of seemingly insurmountable technical challenges,” said MiMi Aung, Ingenuity project manager at JPL. “And here we are – safely on Mars – on the eve of our first flight attempt. We got this far with a never-say-die attitude, a lot of friends from many different technical disciplines, and an agency that likes to turn far-out ideas into reality.”
                </p>
            </div>
        </div>
    );
}
 
export default Home;