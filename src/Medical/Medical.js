import Kefir from "../Media/Medical/Kefir.jpg"
import Med from "../Media/Home/Med.jpg"
import Man from "../Media/Medical/Man.jpg"

import classes from "./Medical.module.css"

const Medical = () => {
    return ( 
        <div className={classes.Medical}>
            <div className={classes.header}>
                <h1>
                    Medicine news
                </h1>
                <p>
                    The most important and relevant news from medicine.
                    You can also find news on other topics of interest to you in sections.
                </p>
            </div>
            <div className={classes.block}>

                <h2>
                    Yeast in kefir drink combats disease-causing bacteria
                </h2>
                <p>
                    <img alt={"jpg"}  src={Kefir}/>
                    A substance made by yeast in the probiotic drink kefir inhibits pathogenic bacteria, including Vibrio cholerae and Salmonella enterica.
                    The substance, called tryptophol acetate, works by disrupting communication among the bacteria.
                    The discovery could inspire the development of new ways to tackle antibiotic resistant bacteria.
                    People may have been producing and drinking kefir, a fermented milk drink that originated in Tibet and the North Caucasus, for thousands of years.

                    People can make the sour, slightly effervescent brew by infusing milk with kefir grains, which are a starchy matrix containing a symbiotic community of lactic acid bacteria, acetic bacteria, and yeasts.

                    The drink has many reputed health benefits, which include lowering cholesterol, reducing inflammation, and exerting an antioxidant effect.

                    In common with other probiotics, kefir also has antimicrobial properties. However, scientists were unsure exactly how it inhibits the growth of disease-causing bacteria.

                    Researchers at Ben-Gurion University of the Negev (BGU) in Be’er Sheva, Israel, have now discovered that a type of yeast in kefir called Kluyveromyces marxianus secretes a molecule that disrupts bacterial communication.

                    Scientists already knew that plants and algae produce this substance, called tryptophol acetate, but this is the first time that they have found a yeast that makes it.

                    They discovered that tryptophol acetate interferes with “quorum sensing” — a form of microbial communication — in several disease-causing bacteria.

                    In quorum sensingTrusted Source, bacteria release signaling molecules into their surroundings. When the molecules reach a particular concentration, they trigger changes in the expression of genes in bacteria of the same species.

                    These changes allow disease-causing bacteria to coordinate their activity according to their numbers. This coordination is necessary for some bacteria to defend themselves or attack their hosts.

                    In some cases, when they reach a certain density, the microbes may come together to form a slimy, protective coating, or “biofilm,” on a surface.
                </p>
            </div>

            <div className={classes.block}>

                <h2>
                    Global COVID-19 vaccine summary: Side effects
  
                </h2>
                <p>
                    <img alt={"jpg"}  src={Med}/>
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

                <h2>
                    Key pathway in Parkinson’s may help treatments for cancer, diabetes  
                </h2>
                <p>
                    <img alt={"jpg"}  src={Man}/>
                    Scientists have offered a detailed view of the biochemical pathway surrounding Parkin — a protein that plays a key role in maintaining cellular energy.

                    The research, which appears in the journal Science Advances, may help scientists develop new treatments for Parkinson’s disease, type 2 diabetes, and cancer, which can all occur when Parkin is not functioning properly.

                    Mitophagy
                    Parkin’s central role is to remove damaged mitochondria, which are the power stations of the cell that are responsible for generating energy. Cellular stress can damage mitochondria.

                    Damaged or dysfunctional mitochondria tend to accumulate in the cell, and the body needs to clear them away using a process known as mitophagyTrusted Source. This process is essential for cell health and energy production.

                    Researchers have implicated mitochondrial dysfunction in neurodegenerative diseases such as Parkinson’s.

                    A key question for scientists has been how Parkin is able to respond to cellular stress so quickly. The signal for Parkin to do its work appeared to occur after it had already started.
                    In the present study, the scientists gained a better perspective on the biochemical pathway that signals Parkin to clear away damaged mitochondria.

                    According to Prof. Reuben Shaw, director of the Salk Cancer Center in La Jolla, CA, and senior author of the study, “our findings represent the earliest step in Parkin’s alarm response that anyone has ever found by a long shot.”

                    “Decoding this major step in the way cells dispose of defective mitochondria has implications for a number of diseases.”

                    Building on their prior research, the scientists searched for proteins that activate in response to the enzyme ULK1, which the enzyme AMPK triggers. They found that Parkin was a prime candidate.

                    The results were surprising as biochemical pathways are normally very complicated, involving up to 50 different proteins.

                    The scientists confirmed the findings using mass spectrometry. This process revealed how ULK1 was interacting with Parkin, offering a detailed view of how the various proteins work together.

                    It is this chain, from AMPK to ULK1 to Parkin, that accounts for the speed with which Parkin can react to cellular stress.


                </p>
            </div>
            
           
        </div>
    );
}
 
export default Medical;