import Elon from "./Media/Mars/Elon.jpg"
import Marss from "./Media/Home/Mars.jpg"

import classes from "./Mars.module.css"

const Mars = () => {
    return ( 
        <div className={classes.Mars}>
            <div className={classes.header}>
                <h1>
                    Mars news
                </h1>
                <p>
                    This page is just for fun, here's the Mars news.
                    You can also find news on other topics of interest to you in sections.
                </p>
            </div>
            <div className={classes.block}>
                

                <h2>
                    ELON MUSK SAYS HE IS NOW THE “IMPERATOR OF MARS”
                </h2>
                <p>
                    <img alt={"jpg"} src={Elon}/>
                    Another week, another preposterous outburst by SpaceX and Tesla CEO Elon Musk.

                    Last month, Musk claimed the title “Technoking of Tesla,” a mostly nonsensical distinction. Now, the billionaire has added the phrase “Imperator of Mars” to his Twitter bio.

                    Characteristically, nothing in particular seems to have prompted the move. It’s also a bit unclear what he means. Imperator is a term that usually refers to a commander in chief of the ancient Romans, Newsweek pointed out in the wake of the update.

                    Is Musk suggesting he’s taking martial control over the Red Planet? Will his space company declare martial law? With this mercurial billionaire, anything is on the table.The bio might also be a nod to the hit 2015 action film “Mad Max: Fury Road,” which starred Charlize Theron as Imperator Furiosa, a driver in a post-apocalyptic Australia.

                    Perhaps the explanation is simpler than that, though. Musk’s ambitions with SpaceX’s Starship are sky high, with Musk suggesting one thousand of them could one day allow us to establish a permanent foothold on Mars.

                    After all, we’ve learned over the years not to take Musk’s mutterings at face value. There’s a considerable chance Musk’s new-and-improved Twitter bio is the result of a couple of hours of idly scrolling through his Twitter mentions.

                    Besides, it’s still far too early for Musk to declare himself emperor of Mars. The prototypes of his company’s Mars-bound rocket have yet to launch to orbit — or even land without erupting in a violent fireball.
                </p>
            </div>

            <div className={classes.block}>

                <h2>
                    NASA's Mars Helicopter to Make First Flight Attempt Sunday   
                </h2>
                <p>
                    <img alt={"jpg"}  src={Marss}/>
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
 
export default Mars;