import Prince from "../Media/Home/Prince.jpg"
import Biden from "../Media/Political/Biden.jpg"
import Cenat from "../Media/Political/Cenat.jpg"
import Covid from "../Media/Political/COVID.jpg"

import classes from "./Political.module.css"

const Political = () => {
    return ( 
        <div className={classes.Political}>
            <div className={classes.header}>
                <h1>
                    Political News
                </h1>
                <p>
                    Here you can find out what has happened in the world of politics lately.
                    You can also find news on other topics of interest to you in sections.
                </p>
            </div>
            <div className={classes.block}>

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

                <h2>
                    How Biden went his own way on Afghanistan withdrawal    
                </h2>
                <p>
                    <img src={Biden}/>
                    President Joe Biden ordered the withdrawal of US forces from Afghanistan over the advice of some of his senior-most advisers in the Pentagon and State Department, leaders who are now charged with carrying out the particulars of the complicated drawdown.

                    Multiple current and former officials tell CNN that those advisers -- including Chairman of the Joint Chiefs Gen. Mark Milley, leader of US Central Command Gen. Frank McKenzie and some State Department officials -- expressed concerns about what a full withdrawal might mean for the US counter-terror mission. They also expressed concern about the security of US diplomats based there.
                    Going back to the previous administration, when President Donald Trump was also considering a withdrawal, US military leaders set a floor of some 2,500 US troops to provide counter-terror support and diplomatic security. While the final number of US forces who will remain in Afghanistan to protect the US diplomatic mission is still being debated, it is expected to fall below that figure.
                    The deadline Biden has set for pulling all troops out -- September 11, the 20th anniversary of the attacks on the World Trade Center and Pentagon that launched the war -- is absolute, with no potential for extension based on worsening conditions on the ground.
                    "I know there are many who will loudly insist that diplomacy cannot succeed without a robust US military presence to stand as leverage," Biden said during remarks announcing his decision on Wednesday, addressing directly the concerns of some within his own administration. "We gave that argument a decade. It's never proved effective, not when we had 98,000 troops in Afghanistan, and not when we were down to a few thousand. Our diplomacy does not hinge on having boots in harm's way, US boots on the ground. We have to change that thinking."
                </p>
            </div>

            <div className={classes.block}>

                <h2>
                    Senate advances bill to combat surge of anti-Asian hate crimes   
                </h2>
                <p>
                    <img src={Cenat}/>
                    The Senate voted 92-6 to advance a bill Wednesday that would address the surge of hate crimes against Asian Americans, signaling broad bipartisan support and momentum for the measure.

                    The bill, which would assign a Justice Department official to expedite reviews of potential Covid-19-related hate crimes and establish an online database, initially received pushback from some Senate Republicans as an ineffective, messaging vote.
                    But Republicans, including Senate Minority Leader Mitch McConnell, suggested on Tuesday that they could support the legislation if there's an agreement with Democrats on amendments.
                    "I can tell you as a proud husband of an Asian-American woman, I think the discrimination against Asian-Americans is a real problem," said McConnell, referring to his wife and former Transportation Secretary Elaine Chao. "It preceded the murders that were recently on full display."
                    Senate Majority Leader Chuck Schumer called on his Republican colleagues Tuesday to allow the bill to be taken up, noting that he would add a bipartisan amendment from Connecticut Sen. Richard Blumenthal and Kansas Sen. Jerry Moran that would "provide resources to state and local law enforcement to improve hate crimes reporting, increase training, while also improving education to root out the bias that fuels these despicable, despicable, acts."
                    Republican senators including Chuck Grassley of Iowa, John Cornyn of Texas and Ron Johnson of Wisconsin then indicated they would vote to advance the anti-Asian hate crime bill, which was proposed by Hawaii Sen. Mazie Hirono, so long as they got a chance to amend it. The Republicans have since filed 20 amendments to the bill, according to Hirono.
                </p>
            </div>

            <div className={classes.block}>

                <h2>
                    US intel chief says spy agencies still do not know 'where, when or how' Covid-19 was initially transmitted

                </h2>
                <p>
                    <img src={Covid}/>
                    US intelligence agencies still do not know "exactly where, when or how Covid-19 virus was transmitted initially" in China but remain focused on two primary theories, that "it emerged naturally from human contact with infected animals or it was a laboratory accident," the nation's top spy told Senate lawmakers on Wednesday.

                    That admission from Director of National Intelligence Avril Haines came during the worldwide threats hearing. Her testimony is consistent with an intelligence community statement from almost a year ago that said it has not determined "whether the outbreak began through contact with infected animals or if it was the result of an accident at a laboratory in Wuhan."
                    That statement also said definitively the virus "was not man-made or genetically modified."
                    "It is absolutely accurate the intelligence community does not know exactly where, when, or how Covid-19 virus was transmitted initially, and basically components have coalesced around two alternative theories, these scenarios are it emerged naturally from human contact with infected animals, or it was a laboratory accident," Haines told members of the Senate Intelligence Committee.
                    CIA Director William Burns, who also appeared alongside other intelligence agency leaders Wednesday, that he agreed with Haines' remarks and added that it is clear to analysts "the Chinese leadership has not been fully forthcoming or fully transparent in working with the World Health Organization who were providing the kind of original complete data that would help answer those questions."
                    "We're doing everything we can, using all the sources available to all of us on this panel to try to get to the bottom of it," he added.

                </p>
            </div>
            
           
        </div>
    );
}
 
export default Political;