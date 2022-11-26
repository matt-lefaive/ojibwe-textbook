import React from 'react';
import Title from '../../components/title';
import DialoguePlayer from '../../components/dialogue-player';

const Lesson10 = ({ colors }) => {
    return (
        <div>
            <Title lesson='10' text='VTI Full Verb Chart: Waabandan, Minwendan' accent={colors[1]}/>
            
            <h2 id='dialogue'>Dialogue</h2>
            <DialoguePlayer src='/assets/audio/Dialogue-10.mp3'/>

            <table className='dialogue-table'>
                <tr>
                    <td>A: Giwaabandaan ina o’ow babagiwayaan? Giminwendaan ina?</td>
                    <td>A: Do you see this shirt? Do you like it?</td>
                </tr>
                <tr>
                    <td>&nbsp;</td>
                    <td></td>
                </tr>
                <tr>
                    <td>B: Gaawiin niminwendanziin.  Nawaj niminwendaanan onow wiiwakwaanan.</td>
                    <td>B: I don’t like it. I like these hats more.</td>
                </tr>
                <tr>
                    <td>&nbsp;</td>
                    <td></td>
                </tr>
                <tr>
                    <td>A: Gibiizikaanan ina moozhag wiiwakwaanan?</td>
                    <td>A: Do you wear hats often?</td>
                </tr>
                <tr>
                    <td>&nbsp;</td>
                    <td></td>
                </tr>
                <tr>
                    <td>B: Miinange. Nimbaabaa, nimaamaa, nisayenh, gakina niinawind nimbiizikaamin wiiwakwaanan apane.</td>
                    <td>B: Of course. My dad, my mom, my older brother, we all wear hats all the time.</td>
                </tr>
                <tr>
                    <td>&nbsp;</td>
                    <td></td>
                </tr>
                <tr>
                    <td>A: Geget na? Biindig ina waakaa’iganing gaye gibiizikaanaawaan?</td>
                    <td>A: Really? Even in the house you (plural) wear them?</td>
                </tr>
                <tr>
                    <td>&nbsp;</td>
                    <td></td>
                </tr>
                <tr>
                    <td>B: Gaawiin biindig waakaa’iganing. Waaseyaag, geget minwaabadadoon.</td>
                    <td>B: Not in the house. When it is sunny, they are really useful.</td>
                </tr>
                <tr>
                    <td>&nbsp;</td>
                    <td></td>
                </tr>
                <tr>
                    <td>A: Gimisenh na gaye? Wiiwakwaan ina obiizikaan? Gaawiin nindebwetanziin!</td>
                    <td>A: Your (older) sister too? Does she wear a hat? I don’t believe it!</td>
                </tr>
                <tr>
                    <td>&nbsp;</td>
                    <td></td>
                </tr>
                <tr>
                    <td>B: Haha, gidebwe. Onzaam ominwendaanan wiinizisan. Giizisoo-oshkiinzhigokaanan odaabajitoonan.</td>
                    <td>B: Haha, that’s true (you are being truthful). She likes her hair too much. She uses sunglasses.</td>
                </tr>
                <tr>
                    <td>&nbsp;</td>
                    <td></td>
                </tr>
                <tr>
                    <td>A: Aa, gaye niin nindaabajitoonan.</td>
                    <td>A: Ah, I use them too.</td>
                </tr>
                <tr>
                    <td>&nbsp;</td>
                    <td></td>
                </tr>
                <tr>
                    <td>B: Niibowa gaye wiinawaa, nindinawemaaganag ominwendaanaawaan iniw giizisoo-oshkiinzhigokaanan.</td>
                    <td>B: Many of them also, my relatives like those sunglasses.</td>
                </tr>
                <tr>
                    <td>&nbsp;</td>
                    <td></td>
                </tr>
                <tr>
                    <td>A: Apii gichi-waaseyaag ninandawendaanan aapiji giizisoo-oshkiinzhigokaanan.</td>
                    <td>A: When it is very sunny I really need  sunglasses.</td>
                </tr>
                <tr>
                    <td>&nbsp;</td>
                    <td></td>
                </tr>
                <tr>
                    <td>B: Enh, gaye niin. Giwii-awi-ganawaabandaanan ina iniw giizisoo-oshkiinzhigokaanan iwidi adaawewigamigong?</td>
                    <td>B: Yes, me too. Do you want to go and look at those sunglasses over there at the store?</td>
                </tr>
                <tr>
                    <td>&nbsp;</td>
                    <td></td>
                </tr>
                <tr>
                    <td>A: Ahaaw, ambe dash izhaadaa iwidi!</td>
                    <td>A: Ok, come on then let’s go over there!</td>
                </tr>
                <tr>
                    <td>&nbsp;</td>
                    <td></td>
                </tr>
                <tr>
                    <td>B: Ninandawendaanan igo oshki-giizisoo-oshkiinzhigokaanan nindinendam isa.</td>
                    <td>B: I do need new sunglasses I think.</td>
                </tr>
                <tr>
                    <td>&nbsp;</td>
                    <td></td>
                </tr>
                <tr>
                    <td>A: Aapiji niibowa ayaawan giizisoo-oshkiinzhigokaanan.  Giga-awi-ganawaabandaamin iwidi adaawewigamigong.</td>
                    <td>A: There are really a lot of sunglasses. We will go and look at over there at the store.</td>
                </tr>
            </table>
            <p>In today’s lesson, we introduce a full verb chart for VTI verbs, specifically in the Independent, Positive form.</p>
        
            <h2 id='a-full-vti-chart'>A full VTI chart</h2>
            <table className='full-border text-center'>
                <tr>
                    <th>person</th>
                    <th>verb</th>
                    <th>translation</th>
                </tr>
                <tr>
                    <td>1 → 0</td>
                    <td><span style={{color:'red'}}>ni</span>minwend<span style={{color:'red'}}>aan</span></td>
                    <td>I like it.</td>
                </tr>
                <tr>
                    <td>1 → 0p</td>
                    <td><span style={{color:'red'}}>ni</span>minwend<span style={{color:'red'}}>aanan</span></td>
                    <td>I like them (inan).</td>
                </tr>
                <tr>
                    <td>2 → 0</td>
                    <td><span style={{color:'red'}}>gi</span>minwend<span style={{color:'red'}}>aan</span></td>
                    <td>You like it.</td>
                </tr>
                <tr>
                    <td>2 → 0p</td>
                    <td><span style={{color:'red'}}>gi</span>minwend<span style={{color:'red'}}>aanan</span></td>
                    <td>You like them (inan).</td>
                </tr>
                <tr>
                    <td>3 → 0</td>
                    <td><span style={{color:'red'}}>o</span>minwend<span style={{color:'red'}}>aan</span></td>
                    <td>S/he likes it.</td>
                </tr>
                <tr>
                    <td>3 → 0p</td>
                    <td><span style={{color:'red'}}>o</span>minwend<span style={{color:'red'}}>aanan</span></td>
                    <td>S/he likes them (inan.)</td>
                </tr>
                <tr>
                    <td>3’ → 0/0p</td>
                    <td><span style={{color:'red'}}>o</span>minwend<span style={{color:'red'}}>aanini</span></td>
                    <td>The other likes it/them.</td>
                </tr>
                <tr>
                    <td>1p → 0/0p</td>
                    <td><span style={{color:'red'}}>ni</span>minwend<span style={{color:'red'}}>aamin</span></td>
                    <td>We (excl) like it/them.</td>
                </tr>
                <tr>
                    <td>21 → 0/0p</td>
                    <td><span style={{color:'red'}}>gi</span>minwend<span style={{color:'red'}}>aamin</span></td>
                    <td>We (incl) like it/them.</td>
                </tr>
                <tr>
                    <td>2p → 0</td>
                    <td><span style={{color:'red'}}>gi</span>minwend<span style={{color:'red'}}>aanaawaa</span></td>
                    <td>You (pl) like it.</td>
                </tr>
                <tr>
                    <td>2p → 0p</td>
                    <td><span style={{color:'red'}}>gi</span>minwend<span style={{color:'red'}}>aanaawaan</span></td>
                    <td>You (pl) like them.</td>
                </tr>
                <tr>
                    <td>3p → 0</td>
                    <td><span style={{color:'red'}}>o</span>minwend<span style={{color:'red'}}>aanaawaa</span></td>
                    <td>They (anim) like it.</td>
                </tr>
                <tr>
                    <td>3p → 0p</td>
                    <td><span style={{color:'red'}}>o</span>minwend<span style={{color:'red'}}>aanaawaan</span></td>
                    <td>They (anim) like them (inan).</td>
                </tr>
                <tr>
                    <td>X → 0/0p</td>
                    <td>minwend<span style={{color:'red'}}>aam</span></td>
                    <td>It is liked/they (inan) are liked.</td>
                </tr>
            </table>
            <p>
                Language learners are often confronted with charts like this, pages and pages of them. This often causes the learners to give up in frustration when faced with memorizing so much material. There is no way around it – in order to learn the language, you do need to learn these verb conjugations by memory. However, staring at a chart like this is not the best way to do that. We do present the charts in the course – it is helpful to see them all laid out, and to refer to them occasionally. But for memorizing, we believe that drilling these forms using spaced repetition software (SRS) is currently the most efficient method, and that is what this course emphasizes. 
            </p>
            <p>
                When teaching these charts, there is tension between trying to explain all the forms with regular patterns, and just asking students to memorize them one by one. Ultimately we can do both. You will memorize the forms one by one using SRS. If you notice some patterns, that will help make it easier, but even if you don’t, you can still memorize all the forms; it might just take a little longer. The forms we have introduced so far do have pretty regular patterns, and we will point them out. As we get into more complicated verb charts, the patterns get harder to explain, but we will still try. If you can’t follow our explanations, don’t worry too much about it – you can still memorize the forms by drilling them. Sometimes the patterns only start to make sense after you have already memorized the forms anyway. 
            </p>
            <p>
                We used the verb <strong>minwendan</strong> in the dialog as it was a natural fit for the scenario of shopping, and lent itself well to being used in various forms. We didn’t actually use every single form in the dialog, but we hope it was a nice sample of the forms to make it easy for you to proceed to the full chart. For the SRS exercises, we actually haven’t chosen <strong>minwendan</strong> as one of the verbs to be drilled. Rather, we have chosen <strong>waabandan</strong> – “see it.” We chose this because almost every educational resource for Ojibwe teaches <strong>waabandan</strong> as an example verb. So below we present another full chart for this verb. However, the two charts for <strong>minwendan</strong> and <strong>waabandan</strong> are 100% identical – they simply use a different stem, but the prefixes and suffixes are exactly the same. This does not mean that all VTI verbs have exactly the same suffixes – unfortunately they don’t. But they are all fairly similar. Linguists use the term “verb class” to describe groups of verbs with exactly the same suffixes. The largest verb class for VTI verbs in Ojibwe is this one that includes <strong>minwendan</strong> and <strong>waabandan</strong>. So here is the full chart for <strong>waabandan</strong>. If you memorize this chart, you will be able to produce all of the conjugations for any other verb of the same class, once you get the hang of it. 
            </p>
            <table className='full-border text-center'>
                <tr>
                    <th>person</th>
                    <th>verb</th>
                    <th>translation</th>
                </tr>
                <tr>
                    <td>1 → 0</td>
                    <td><span style={{color:'red'}}>ni</span>waaband<span style={{color:'red'}}>aan</span></td>
                    <td>I see it.</td>
                </tr>
                <tr>
                    <td>1 → 0p</td>
                    <td><span style={{color:'red'}}>ni</span>waaband<span style={{color:'red'}}>aanan</span></td>
                    <td>I see them (inan).</td>
                </tr>
                <tr>
                    <td>2 → 0</td>
                    <td><span style={{color:'red'}}>gi</span>waaband<span style={{color:'red'}}>aan</span></td>
                    <td>You see it.</td>
                </tr>
                <tr>
                    <td>2 → 0p</td>
                    <td><span style={{color:'red'}}>gi</span>waaband<span style={{color:'red'}}>aanan</span></td>
                    <td>You see them (inan).</td>
                </tr>
                <tr>
                    <td>3 → 0</td>
                    <td><span style={{color:'red'}}>o</span>waaband<span style={{color:'red'}}>aan</span></td>
                    <td>S/he sees it.</td>
                </tr>
                <tr>
                    <td>3 → 0p</td>
                    <td><span style={{color:'red'}}>o</span>waaband<span style={{color:'red'}}>aanan</span></td>
                    <td>S/he sees them (inan.)</td>
                </tr>
                <tr>
                    <td>3’ → 0/0p</td>
                    <td><span style={{color:'red'}}>o</span>waaband<span style={{color:'red'}}>aanini</span></td>
                    <td>The other sees it/them.</td>
                </tr>
                <tr>
                    <td>1p → 0/0p</td>
                    <td><span style={{color:'red'}}>ni</span>waaband<span style={{color:'red'}}>aamin</span></td>
                    <td>We (excl) see it/them.</td>
                </tr>
                <tr>
                    <td>21 → 0/0p</td>
                    <td><span style={{color:'red'}}>gi</span>waaband<span style={{color:'red'}}>aamin</span></td>
                    <td>We (incl) like it/them.</td>
                </tr>
                <tr>
                    <td>2p → 0</td>
                    <td><span style={{color:'red'}}>gi</span>waaband<span style={{color:'red'}}>aanaawaa</span></td>
                    <td>You (pl) see it.</td>
                </tr>
                <tr>
                    <td>2p → 0p</td>
                    <td><span style={{color:'red'}}>gi</span>waaband<span style={{color:'red'}}>aanaawaan</span></td>
                    <td>You (pl) see them.</td>
                </tr>
                <tr>
                    <td>3p → 0</td>
                    <td><span style={{color:'red'}}>o</span>waaband<span style={{color:'red'}}>aanaawaa</span></td>
                    <td>They (anim) see it.</td>
                </tr>
                <tr>
                    <td>3p → 0p</td>
                    <td><span style={{color:'red'}}>o</span>waaband<span style={{color:'red'}}>aanaawaan</span></td>
                    <td>They (anim) see them (inan).</td>
                </tr>
                <tr>
                    <td>X → 0/0p</td>
                    <td>waaband<span style={{color:'red'}}>aam</span></td>
                    <td>It is seen/they (inan) are seen.</td>
                </tr>
            </table>
            <p>
                In Ojibwe linguistics, this verb class is referred to as the /-am/ theme verbs. You may wonder why that is, since the ending /-am/ doesn’t even occur in any of these forms that we have taught. The answer is complicated, and has much to do with the historical evolution of the Algonquian language family that includes Ojibwe. And the answer only makes sense once you have a good understanding of other aspects of Ojibwe grammar that we haven’t taught yet. So let’s just take it on faith for now that these are the /-am/ theme verbs, and you will find them referred to that way in advanced grammar books and academic papers about Ojibwe. But you don’t really need to worry about it as a language learner. Yes, it isn’t usual to refer casual language learners to academic papers in linguistics, but for Indigenous languages like Ojibwe, learning materials are hard to come by, and your internet searches will inevitably turn up some pretty technical publications, so we do try to prepare you a little. 
            </p>
            <p>
                Now, time to explain a few regular patterns in here. First, you will notice that even though the citation form (which is an imperative or command form) <strong>waabandan</strong> ends in a single vowel suffix <strong>-an</strong>, nearly all of the Independent Positive forms end in <strong>-aan</strong>. That is a general pattern that applies for all the verbs in this class. It does not apply to some other VTI classes that don’t end in <strong>-an</strong>. Before you despair too much about memorizing all these classes, we’ll let you know some reassuring facts - there are only four classes, they are all very similar, two of them have just a few verbs in them, and the other large class, called the /-oo/ theme verbs, is even simpler than the /-am/ class to conjugate.
            </p>
            <p>
                Another pattern – the prefixes <strong>ni-</strong>, <strong>gi-</strong>, and <strong>-o</strong> refer to 1<sup>st</sup> person, 2<sup>nd</sup> person, and 3<sup>rd</sup> person subjects, as we have seen before. We will just caution you that these prefixes don’t always refer only to the subject. When you get to VTA verbs involving two people, they may refer to subject or object. There is a system to it but it works a little differently than English does. But for VAI and VTI verbs, in which there is no animate object, these prefixes do refer only to the subject. 
            </p>
            <p>
                For 1<sup>st</sup>, 2<sup>nd</sup>, and 3<sup>rd</sup> person singular, the ending is <strong>-aan</strong> if the object is singular, and -aanan if it is plural. This is easy because it is just like adding the most common plural ending for inanimate nouns, -an. 
            </p>
            <p>
                For an obviative subject (which, remember, doesn’t distinguish singular vs. plural), these forms also don’t distinguish between singular and plural objects – so <strong>owaabandaanini</strong> means “Third person obviative sees it” or “Third person obviative sees them.” Lest you find this too simple, we will mention another complication that we alluded to earlier  – there is an alternative form <strong>owaabandamini</strong> that you will sometimes hear and also <strong>owaabandaani</strong>, which may or may not be a shortened form of <strong>owaabandaanini</strong>, with exactly the same meaning. We aren’t teaching these other forms in the charts and SRS drills, but they are equally valid and perhaps just as common, and not easily pinned down to a specific dialect. You can easily speak Ojibwe without ever saying it, but you should recognize it if you hear it. We find <strong>owaabandaanini</strong> easier to memorize as it is closer to the other forms on the chart, but on the other <strong>owaabandamini</strong> is closer to some of the forms for the Conjunct version of this verb. 
            </p>
            <p>
                For 1p (exclusive we) and 21 (inclusive we) forms, we also don’t distinguish between singular and plural objects. So <strong>niwaabandaamin</strong> means either “we see it” or “we see them (inan),” and <strong>giwaabandaamin</strong> has the same translations but includes the person you’re talking to among the people doing the seeing. For these forms, note that it doesn’t actually contain <strong>-aan</strong>. It would look and sound very weird in Ojibwe to add the ending <strong>-min</strong> to something already ending in a nasal sound <strong>-n</strong> so the <strong>-n</strong> vanishes. You will never find the sequence <strong>-nm</strong> in Ojibwe.
            </p>
            <p>
                Then for 2<sup>nd</sup> and 3<sup>rd</sup> person plural subjects, we have the ending <strong>-aanaawaa</strong> for a singular object and <strong>-aanaawaan</strong> for a plural object. These endings are specific to VTI verbs and don’t show up in VTA or VAI. 
            </p>
            <p>
                In the rest of this course, we won’t generally present two full verb charts for the same class as we did in this lesson. This was just to show you how multiple verbs have essentially identical conjugations. Going forward, we will drill full charts for one verb per class, and have you conjugate a few other specific forms from the same class in the example phrases and sentences.
            </p>

            <h2 id='miscellaneous-things-from-the-dialog'>Miscellaneous things from the dialog</h2>
            <p>
                <strong>waakaa’iganing</strong> – The word for house is <strong>waakaa’igan</strong>, and the <strong>-ing</strong> ending makes it a locative form, “in the house” or “at home.” 
            </p>
            <p>
                <strong>waaseyaag</strong> – We have a VII verb <strong>“waaseyaa”</strong> meaning “it is sunny.” Here we put it in the plain conjunct form <strong>waaseyaag</strong> to mean something like “When it is sunny.” 
            </p>
            <p>
                <strong>giizisoo-oshkiinzhigokaanan</strong> – A doozy of a word to mean “sunglasses.” There is a lot of good stuff to explain here. First we have <strong>giizis</strong> meaning “sun” although it also shows up as part of related words like moon, month, calendar, etc. Used in a compound word, this becomes <strong>giizisoo-</strong>. This is because the the actual stem for this word according to linguists is <strong>/giizisw-/</strong>. Many Ojibwe words have this <strong>-w-</strong> on the end of the stem. That <strong>-w-</strong> can disappear entirely, producing the simple noun <strong>giizis</strong>, or it can turn into an <strong>-o-</strong> in some cases. <strong>W</strong> and <strong>o</strong> in Ojibwe are closely related, and when you think about it they are almost the same sound – if you put your lips in the shape to make a <strong>w</strong> sound, but hold out the sound, you end up with an <strong>o</strong>. And often times, words ending in <strong>-o</strong> get lengthened to <strong>-oo-</strong> when used in a compound  - you will come across other examples in the future. You have already seen other examples of “o lengthening” in other contexts, as in “your plate” <strong>gidoonaagan</strong> vs. simply “plate” <strong>onaagan</strong>. So, that’s the long complete story of exactly how <strong>giizis</strong> becomes <strong>giizisoo-</strong>. If you spend much time browsing the Ojibwe People’s Dictionary (and you will, if you plan to learn the language), you will find quite a few words that have a “vanishing” <strong>w</strong> sound at the end. 
            </p>
            <p>
                Now, on to <strong>oshkiinzhigokaanan</strong>, which means “glasses” or “eyeglasses” (not drinking glasses). This is based on the word <strong>oshkiinzhig</strong> – “h/ eye.” This is one of those inanimate dependent nouns (<em>nid</em>) that need to have a person prefix on it – you can say <strong>nishkiinzhig</strong>, <strong>gishkiinzhig</strong>, <strong>oshkiinzhig</strong>, but not just <strong>*shkiinzhig</strong>. Now, the stem for this is actually <i>another</i> one of those stems with a hidden <strong>-w-</strong> on the end, /shkiinzhigw/. Used with no ending, the <strong>-w-</strong> disappears entirely, but with more word parts added on, it turns into an <strong>-o-</strong>. Then the <strong>-kaanan</strong> part refers to the glasses, just like in the English word “eyeglasses.” Yes, this is a plural form with the ending <strong>-an</strong>. “Glasses” is plural in Ojibwe just like it is in English. We did hear from one expert speaker that the singular form <strong>oshkiinzhigokaan</strong> would be a monocle. It doesn’t come up much in conversation.
            </p>
            <p>
                <strong>minwaabadadoon</strong> – “They are useful.” The prefix <strong>minw-</strong> (also sometimes appearing as <strong>mino-</strong> since <strong>o</strong> and <strong>w</strong> are sometimes interchangeable in Ojibwe) means “good, well” and here appears attached to the verb <strong>aabadad</strong> – it is used, is useful. <strong>Minwaabadad</strong> means “it is useful, beneficial.” Here we see the inanimate plural form, referred to as 0p for short. VII verbs ending in <strong>d</strong> take <strong>-oon</strong> as their plural ending. But this should not be confused with certain other verbs that also end in <strong>-oon</strong>. 
            </p>
            <p>
                <strong>odaabajitoonan / nindaabajitoonan</strong> – S/he uses them (inan), I use them (inan). This is an example of the second largest VTI class, the /-oo/ theme verbs. The citation form is <strong>aabajitoon</strong> – use it. For the inflected forms in the dialog we add the standard 3<strong>rd</strong> person and 1<strong>st</strong> person prefixes, noting the linking <strong>-d-</strong> to smoothly transition from the prefix to the verb stem that starts with a vowel. The <strong>-an</strong> ending reflects the fact that the object (glasses) is plural. Unlike the /-am/ theme verbs in which the citation form’s last syllable lengthens from <strong>-an</strong> to <strong>-aan</strong>, the /-oo/ theme verbs don’t change. So in that sense they are a bit easier. We will show a full verb chart for these in another lesson but this is a quick intro. These are pretty straightforward. An example of a singular verb object form – you use it – would be <strong>gidaabajitoon</strong>. 
            </p>
            <p>
                <b>Interchangeable sounds</b> – Some sounds in Ojibwe are closely related, and can alternate with each other despite belonging to the same root. Some examples seen above involve <strong>o</strong> and <strong>w</strong>. Another pair that comes up a lot is <strong>d</strong> and <strong>j</strong>. For example, the prefix <strong>onji-</strong> means something like “coming from a specific place,” and we see it in <strong>onjibaa</strong> – s/he comes from a certain place. But sometimes that <strong>j</strong> shows up as a <strong>d</strong>, as in <strong>onda’ibii</strong> – s/he draws water from a certain place. In this lesson, we see the VAI verb <strong>aabadad</strong> “it is used” and the VTI verb <strong>aabajitoon</strong> “use it.” These are clearly related, and provide another example of the alternation of <strong>d</strong> and <strong>j</strong>. The <strong>j</strong> very often comes before the vowel <strong>i</strong> to make a word easier to pronounce. 
            </p>
            <p>
                <strong>Gaawiin nindebwetanziin!</strong> I don’t believe it! This is a form of the VTI verb <strong>debwetan</strong> – believe it! Here we show the Independent Neutral Negative form, 1 → 0. We haven’t formally taught this form yet, but as you can see, it is very similar to the negative form for VAI verbs that we already saw. Actually, in this case, <strong>Gaawiin nindebwetanziin</strong> can actually serve as the first person negative form for two different verbs – <strong>debwetan</strong> – VTI, believe it, and <strong>debwetam</strong> – VAI, s/he believes. In this case, it is a bit ambiguous – either verb would be reasonable to use in this situation. 
            </p>
        </div>
    )
}

export default Lesson10;