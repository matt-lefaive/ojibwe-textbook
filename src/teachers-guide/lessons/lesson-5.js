import React from 'react';
import Title from '../../components/title';
import DialoguePlayer from '../../components/dialogue-player';

const Lesson5 = () => {
    return (
        <div>
            <Title lesson='5' text='Lesson 5' />
            
            <h2 id='dialogue-1'>Dialogue 1</h2>
            <p>A & B want to watch a movie.</p>
            <DialoguePlayer src='/assets/audio/Dialogue-5-1.mp3'/>
        
            <table className='dialogue-table'>
                <tr>
                    <td>A: Niwii-kanawaabandaan mezinaateseg noongom dibikak. </td>
                    <td>A: I want to watch a movie tonight. </td>
                </tr>
                <tr>
                    <td>&nbsp;</td>
                    <td></td>
                </tr>
                <tr>
                    <td>B: Gaye niin! Niminwendaanan mezinaatesegin.</td>
                    <td>B: Me too! I like movies.</td>
                </tr>
                <tr>
                    <td>&nbsp;</td>
                    <td></td>
                </tr>
                <tr>
                    <td>A: Aanind eta nindayaanan mezinaatesegin. Wiikaa na gigii-kanawaabandaan <i>Esiniiwid</i>?</td>
                    <td>A: I only have a few movies. Did you ever see Rocky? </td>
                </tr>
                <tr>
                    <td>&nbsp;</td>
                    <td></td>
                </tr>
                <tr>
                    <td>B: Eya’! Niizhing ningii-kanawaabandaan <i>Esiniiwid</i>. Gidayaan na <i>Esiniiwid Niizh</i> (2)?</td>
                    <td>B: Yes! I already saw Rocky twice. Do you have Rocky 2?</td>
                </tr>
                <tr>
                    <td>&nbsp;</td>
                    <td></td>
                </tr>
                <tr>
                    <td>A: Gaawiin. Mashi na gigii-kanawaabandaan <i>Wenji-mawine'angig Wenisininig Gichitwaa-makak</i>?</td>
                    <td>A: No. Did you watch Raiders of the Lost Ark yet?</td>
                </tr>
                <tr>
                    <td>&nbsp;</td>
                    <td></td>
                </tr>
                <tr>
                    <td>B: Gaawiin. Niwii-kanawaabandaan i’iw mezinaateseg.</td>
                    <td>B: No. I would like to watch that movie.</td>
                </tr>
                <tr>
                    <td>&nbsp;</td>
                    <td></td>
                </tr>
                <tr>
                    <td>A: Ahaaw!</td>
                    <td>A: All right!</td>
                </tr>
                <tr>
                    <td>&nbsp;</td>
                    <td></td>
                </tr>
                <tr>
                    <td>B: Ahaaw, da-mazinaatese i’iw <i>Wenji-mawine' angig Wenisininig Gichitwaa-makak</i>.</td>
                    <td>B: Ok, that Raiders of the Lost Ark will play.</td>
                </tr>
                <tr>
                    <td>&nbsp;</td>
                    <td></td>
                </tr>
                <tr>
                    <td>A: Gidaa-minikwemin gegoo megwaa mazinaateseg.</td>
                    <td>A: We should drink something while the movie is playing.</td>
                </tr>
                <tr>
                    <td>&nbsp;</td>
                    <td></td>
                </tr>
                <tr>
                    <td>B: Aniibiishaaboo ninga-ozhitoon.</td>
                    <td>B: I will make tea.</td>
                </tr>
                <tr>
                    <td>&nbsp;</td>
                    <td></td>
                </tr>
                <tr>
                    <td>A: Onizhishin sa.</td>
                    <td>A: Nice.</td>
                </tr>
            </table>

            <h2 id='dialogue-2'>Dialogue 2</h2>
            <p>A boy went to visit an island with a lot of wildlife, and now tells his grandmother about it.</p>
            <DialoguePlayer src='/assets/audio/Dialogue-5-2.mp3'/>
            
            <table className='dialogue-table'>
                <tr>
                    <td>A: Nookomis! Minising ningii-izhaa bijiinaago. Niibowa ningii-waabamaag awesiinyag iwidi.</td>
                    <td>A: Grandma! I went to the island yesterday. I saw lots of (wild) animals over there.</td>
                </tr>
                <tr>
                    <td>&nbsp;</td>
                    <td></td>
                </tr>
                <tr>
                    <td>B: Geget na? Gigii-waabamaa na makwa?</td>
                    <td>B: Really? Did you see a bear?</td>
                </tr>
                <tr>
                    <td>&nbsp;</td>
                    <td></td>
                </tr>
                <tr>
                    <td>A: Eya’! Ningii-waabamaag niizh makwag.</td>
                    <td>A: Yes! I saw two bears.</td>
                </tr>
                <tr>
                    <td>&nbsp;</td>
                    <td></td>
                </tr>
                <tr>
                    <td>B: Geget na? Gigii-waabamaa na waawaashkeshi?</td>
                    <td>B: Really? Did you see a deer?</td>
                </tr>
                <tr>
                    <td>&nbsp;</td>
                    <td></td>
                </tr>
                <tr>
                    <td>A: Eya’! Ningii-waabamaag niswi waawaashkeshiwag. </td>
                    <td>A: Yes, I saw three deer!</td>
                </tr>
                <tr>
                    <td>&nbsp;</td>
                    <td></td>
                </tr>
                <tr>
                    <td>B: Geget na? Maang idash? Gigii-waabamaa na maang?</td>
                    <td>B: Really? How about a loon? Did you see a loon?</td>
                </tr>
                <tr>
                    <td>&nbsp;</td>
                    <td></td>
                </tr>
                <tr>
                    <td>A: Gaawiin. Niibowa dash ningii-noondawaag  maangwag.</td>
                    <td>A: No. But I heard a lot of loons.</td>
                </tr>
                <tr>
                    <td>&nbsp;</td>
                    <td></td>
                </tr>
                <tr>
                    <td>B: Hoowa! Gigii-waabamaa na migizi?</td>
                    <td>B: Great! Did you see an eagle?</td>
                </tr>
                <tr>
                    <td>&nbsp;</td>
                    <td></td>
                </tr>
                <tr>
                    <td>A: Eya’! Niiwin ningii-waabamaag migiziwag.</td>
                    <td>A: Yes! I saw four eagles!</td>
                </tr>
                <tr>
                    <td>&nbsp;</td>
                    <td></td>
                </tr>
                <tr>
                    <td>B: Hoowa! Gigii-waabamaa na gaye jejiibajikii?</td>
                    <td>B: Great! Did you see an elephant too? </td>
                </tr>
                <tr>
                    <td>&nbsp;</td>
                    <td></td>
                </tr>
                <tr>
                    <td>A: Eya’! Niizh ningii-waabamaag jejiibajikiig!</td>
                    <td>A: Yes! I saw two elephants!</td>
                </tr>
                <tr>
                    <td>&nbsp;</td>
                    <td></td>
                </tr>
                <tr>
                    <td>B: Hmm. Ganabaj gigiiwanim...</td>
                    <td>B: Hmm. Perhaps you’re lying...</td>
                </tr>
            </table>

            <h2 id='grammar-notes'>Grammar Notes</h2>
            <p>
                These two dialogues illustrate some verb forms used for dealing with animate and inanimate nouns. In the first one, two people are talking about watching movies, which are inanimate. In the second one, a child speaks of seeing animals, which are animate. We also get a chance to see some more plurals here. 
            </p>

            <h2 id='notes-on-words-used-in-the-dialog'>Notes on words used in the dialog</h2>
            <p>
                <strong>noongom</strong> – This can mean “now” or “today.” 
            </p>
            <p>
                <strong>dibikak</strong> – This means “tonight” or “at night” – it can stand on its own as “tonight” but adding <strong>noongom</strong>  makes it clear that we’re talking about tonight. You can memorize <strong>dibikak</strong> as an adverb for now, but it actually is a “conjunct” verb form derived from the VII verb <strong>dibikad</strong> – “it is night.” You will learn about conjunct verb forms later. A lot of common Ojibwe words are actually verb forms. Another example is the word for movie – <strong>mezinaateseg</strong>. There is no simple noun for “movie” in Ojibwe. We have a VII verb <strong>mazinaatese</strong>, which basically means something like “it is a movie,” and then the verb form <strong>mezinaateseg</strong> is a participle meaning something like “something that is a movie.” You will eventually learn all this grammar. For now we’re just going to teach you words like <strong>dibikak</strong> and <strong>mezinaateseg</strong> as whole words to memorize, but we will point out when they are actually derived verb forms instead of simple adverbs or nouns. In this example, <strong>mezinaateseg</strong> behaves as a normal inanimate noun, and takes the plural form <strong>mezinaatesegin</strong>. One of the key concepts in deriving <strong>mezinaateseg</strong> from <strong>mazinaatese</strong> is the “initial change” - the first vowel changes from <strong>a</strong> to <strong>e</strong>. We will teach you about initial change in more detail later, but it’s worth pointing out early in case you are confused by mysterious vowel changes that you may come across in your Ojibwe studies. 
            </p>

            <h3 id='numbers'>Numbers</h3>
            <p>
                We’ve started to see some numbers. In a previous lesson we saw <strong>bezhigo</strong> meaning one animate thing as a verb, as in one apple – I have just one. But this isn’t the word you would use when simply counting. Here are the first few counting numbers. 
                <br/><strong>Bezhig</strong> – 1
                <br/><strong>Niizh</strong> – 2
                <br/><strong>Niswi</strong> – 3
                <br/><strong>Niiwin</strong> – 4
            </p>
            <p>
                In the flashcards, we are going to present these out of order, so you learn them each individually and don’t have to count up from one every time you want to think of a number. 
            </p>
            <p>
                We also see here the word <strong>niizhing</strong> meaning “twice, two times.” Compared with “three times” <strong>nising</strong>. In general, the words for doing something a number of times are closely related to the basic number word, but it’s hard to give a rule that predicts the exact form 100%. 
            </p>
            <p>
                <strong>minising</strong> – This is a locative form. There is a basic inanimate noun <strong>minis</strong> “island,” so <strong>minising</strong> is “in/on/at/to the island.” 
            </p>
            <p>
                <strong>bijiinaago</strong> – Adverb meaning “yesterday.” 
            </p>
            <p>
                <strong>awesiinh</strong> – Animate noun meaning a wild animal. As with many words ending in this nasal <strong>-nh</strong> sound, the plural changes form a bit becoming <strong>awesiinyag</strong>. 
            </p>
            <p>
                <strong>niibowa</strong> – An adverb meaning “many, much, a lot.” There are various words to express quantities in Ojibwe, and some of them take different forms depending on whether the thing is singular or plural, animate or inanimate, etc. But fortunately <strong>niibowa</strong> is always <strong>niibowa</strong>. 
            </p>
            <p>
                <strong>imaa</strong> – “There,” the counterpart to <strong>omaa</strong> seen previously. Many Ojibwe words come in pairs with <strong>i</strong> implying something farther away, and <strong>o</strong> implying something closer. For example, the demonstrative pronouns <strong>i’iw</strong> and <strong>o’ow</strong>. 
            </p>
            <p>
                This dialog about seeing animals gives us the opportunity to see several animate plural forms, all of which end in <strong>-g</strong>, but their exact form is influenced by the letters that precede them. The most common endings are <strong>-ag</strong> and <strong>-wag</strong>, but you may still need to memorize the plural of every noun until you develop an intuitive feel for predicting them. 
            </p>
            <table className='full-border'>
                <tr>
                    <th>singular</th>
                    <th>plural</th>
                </tr>
                <tr>
                    <td>awesiinh</td>
                    <td>awesiinyag</td>
                </tr>
                <tr>
                    <td>makwa</td>
                    <td>makwag</td>
                </tr>
                <tr>
                    <td>waawaashkeshi</td>
                    <td>waawaashkeshiwag</td>
                </tr>
                <tr>
                    <td>maang</td>
                    <td>maangwag</td>
                </tr>
                <tr>
                    <td>migizi</td>
                    <td>migiziwag</td>
                </tr>
                <tr>
                    <td>jejiibajikii</td>
                    <td>jejiibajikiig</td>
                </tr>
            </table>
            <p>
                Given that Ojibwe is spoken in the vicinity of the Great Lakes, these are all common animals in Ojibwe conversations, except of course for <strong>jejiibajikii</strong>. 
            </p>
            <p>
                <strong>dash</strong> – We’ve seen this word before – “giin dash?” but here it is used more like “but” in English, but <strong>dash</strong> is usually the second word in the sentence. So here it’s used by the boy to say “but I <em>heard</em> a lot of loons” after acknowledging that he didn’t <em>see</em> any. 
            </p>
            <p>
                <strong>ganabaj</strong> – An adverb meaning “apparently, probably.” It is used in many cases where you would say in English “I think that, I bet, I think so” – However, <strong>ganabaj</strong> is not a verb, simply an adverb, and it doesn’t change form. 
            </p>
            <p>
                <strong>hoowa</strong> - A common expression meaning ‘great, awesome!’ May be spelled as <strong>howa, howah</strong>.
            </p>
            
            <h2 id='vti-forms-citation-form-vs-conjugated'>VTI forms – citation form vs. conjugated</h2>
            <p>
                As mentioned in a previous lesson, a “citation form” is a simple form of a verb that you will find in a dictionary. Learning to identify a citation form is a critical skill for progressing in Ojibwe, because without it you will have a hard time looking up words in a dictionary. In a text or a conversation, verbs will usually be found with prefixes and suffixes, and you’ll have to work backwards and mentally remove these to find the citation form. Notably, a citation form is not a “real” element of the Ojibwe language – a speaker of the language has no need to think about what form of a verb to put in a dictionary. It is a tool developed by linguists to aid learners, but it is an indispensable tool. 
            </p>
            <p>
                Citation forms are fairly straightforward for VAI verbs. They are the 3<sup>rd</sup> person singular form. <strong>Bakade, jiibaakwe, ayaa,</strong> etc. Similarly, for VII verbs, it’s the singular form – <strong>michaa, agaasaa</strong>. 
            </p>
            <p>
                VTI and VTA verbs are a bit more complicated, because the 3<sup>rd</sup>-person singular form is not “bare,” it’s got quite a bit of meat on the bone. Let’s look at a VTI verb from the dialog and strip it down to its parts to figure out the citation form.
            </p>
            <p>
                <strong>Ningii-kanawaabandaan.</strong> I watched it. 
                <br/><strong>nin-</strong> = I
                <br/><strong>-gii-</strong> = past tense.
                <br/>Then, the k that starts the rest of the word is the result of an initial consonant change caused by the <strong>gii-</strong> prefix, so the actual starting consonant of what’s left, with the prefixes removed, is <strong>g</strong>. Here are the basic singular forms of this verb. 
            </p>
            <table className='full-border'>
                <tr>
                    <th>bare pronoun</th>
                    <th>verb prefix</th>
                    <th>full verb</th>
                    <th>translation</th>
                </tr>
                <tr>
                    <td>niin</td>
                    <td>nin-</td>
                    <td>ninganawaabandaan</td>
                    <td>I watch it.</td>
                </tr>
                <tr>
                    <td>giin</td>
                    <td>gi-</td>
                    <td>giganawaabandaan</td>
                    <td>You watch it.</td>
                </tr>
                <tr>
                    <td>wiin</td>
                    <td>o-</td>
                    <td>oganawaabandaan</td>
                    <td>S/he watches it.</td>
                </tr>
            </table>
            <p>
                So, you see already that the 3<sup>rd</sup>-person singular form may not be the best choice for a citation form. First of all, it’s got a prefix on it, the <strong>-o</strong>, so we would prefer a more “bare” form with no extra letters that don’t belong to the root word that you have to memorize. Second, the ending of the verb <strong>-aan</strong> is actually longer than what we see in the citation form. The citation form, pretty much the “minimal” form in which you can find this verb is <strong>ganawaabandan</strong>. Just one <strong>a</strong> in the final syllable, not two. 
            </p>
            <p>
                It turns out that <strong>ganawaabandan</strong> is in fact an interpretable word on its own. It is the imperative form (command), when talking to one person, literally “watch it!” The command form is different if you’re commanding two or more people at once. We will cover imperative forms in more detail later, but we are introducing this now so you know that the citation form in which we will introduce VTI verbs is actually a command, and that is why we use a command form as the English translation for the VTI verbs. The same is true for VTA verbs. 
            </p>
            <p>
                <strong>Ganawaabandan</strong>, “watch it,” is actually derived from a simpler verb, <strong>waabandan</strong>, “see it.” If you are talking about movies though, you have to use <strong>ganawaabandan</strong>, otherwise it would sound as silly as saying “I’m seeing TV.” You can get even more mileage out of <strong>waabandan</strong> by pairing it with other word parts to make more words, all of which involve seeing:
            </p>
            <p>
                <strong>Nandawaabandan</strong> – look for it, search for it. 
                <br/><strong>Minwaabandan</strong> – like the looks of it, enjoy seeing it. 
                <br/><strong>Beshwaabandan</strong> - see it nearby, be in close view of it, catch sight of it.
            </p>
            <p>
                Lots of Ojibwe words are made up of smaller parts, and you will be seeing the same small parts over and over in different words. Eventually you may come across a word you’ve never seen before but you’ll guess what it means by putting together the different parts. This is a very satisfying thing when it happens. 
            </p>

            <h2 id='plural-objects-with-vti'>Plural objects with VTI</h2>
            <p>
                We encountered some plural forms of VTI verbs in the previous lesson, but let’s review it here. Eventually we will make you memorize the big charts of all the possible conjugations (piece by piece), but we have already learned to make six different VTI forms. We have seen the ending <strong>-an</strong> that makes the object plural – e.g. I see them, but here “them” refers to something inanimate – marbles, plates, etc. Putting it all together, we have the beginnings of a real verb chart! For this chart, we are going to again use the numerical codes to indicate grammatical person. 1st person is “I,” 2nd person is “you,” and third person is “s/he.” For the inanimate object (“it”), we use 0, and for a plural inanimate object, we use 0p.  
            </p>
            <table className='full-border'>
                <tr>
                    <td>1 → 0</td>
                    <td>niwaabandaan</td>
                    <td>I see it.</td>
                </tr>
                <tr>
                    <td>2 → 0</td>
                    <td>giwaabandaan</td>
                    <td>You see it.</td>
                </tr>
                <tr>
                    <td>3 → 0</td>
                    <td>owaabandaan</td>
                    <td>S/he sees it.</td>
                </tr>
                <tr>
                    <td>1 → 0p</td>
                    <td>niwaabandaanan</td>
                    <td>I see them.</td>
                </tr>
                <tr>
                    <td>2 → 0p</td>
                    <td>giwaabandaanan</td>
                    <td>You see them.</td>
                </tr>
                <tr>
                    <td>3 → 0p</td>
                    <td>owaabandaanan</td>
                    <td>S/he sees them.</td>
                </tr>
            </table>
            <p>
                What is missing from this chart still? Well, we haven’t taught you any forms for groups of people as subjects, like we, you plural (different than you singular in Ojibwe, unlike English), they. We will teach those in future lessons. There are also the obviative forms, which we will get to later.
            </p>
            
            <h2 id='vta-verbs-citation-form-and-conjugations'>VTA verbs - citation form and conjugations</h2>
            <p>
                The situation with VTA verbs is similar to VTI verbs – the citation form is actually a command. It is the command used when telling one person (2<sup>nd</sup>-person subject) to do something to one other person (3<sup>rd</sup>-person object). Again, this form was chosen because it is the minimal form with no prefixes and suffixes. The classic verb to learn with is <strong>waabam</strong>. We translate this as “see h/.” We use the abbreviation h/ to mean him/her. The abbreviations s/he and h/ will be used throughout this course for the English translations, since Ojibwe does not distinguish grammatically between male and female. 
            </p>
            <p>
                VTA verbs present the heaviest memory burden of all. A VTI verb just has a few possible subjects – I, you, s/he, we, you plural, etc., and even fewer possible objects – it, them (inan), and the obviative forms. For VTA verbs though, all the possible subjects – I, you, s/he, etc., are also possible objects, so you have a much larger number of different forms. If you are learning Ojibwe through spaced repetition software (and that is the entire point of this course), you will end up spending a large portion of your time drilling VTA forms. For now, we start with presenting some different subjects, and keeping with “h/” (her or him) as the object. 
            </p>
            <p>
                <strong>waabam</strong> – see h/, see them (anim). This is the citation form, a command. It is talking to only one person – you are commanding one person (the subject, 2<sup>nd</sup> person singular) to see someone else (the object, 3<strong>rd</strong> person singular). However, the object could also be 3<sup>rd</sup> person plural, and the form would be the same. That is only true for commands though. 
            </p>
            <p>
                As we saw in the dialog, several forms involve the ending <strong>-aa</strong> for a 3<sup>rd</sup> person singular object, and <strong>-aag</strong> for a 3<sup>rd</sup> person plural object. This is nicely consistent with animate nouns, where you also add a <strong>-g</strong> on the end to indicate plural. For the person codes, we use the letter <strong>p</strong> to indicate plural, so for example 3 = s/he, 3p = them (animate). 
            </p>
            <table className='full-border'>
                <tr>
                    <td>1 → 3</td>
                    <td>niwaabamaa</td>
                    <td>I see h/.</td>
                </tr>
                <tr>
                    <td>2 → 3</td>
                    <td>giwaabamaa</td>
                    <td>You see h/.</td>
                </tr>
                <tr>
                    <td>1 → 3p</td>
                    <td>niwaabamaag</td>
                    <td>I see them (anim).</td>
                </tr>
                <tr>
                    <td>2 → 3p</td>
                    <td>giwaabamaag</td>
                    <td>You see them (anim).</td>
                </tr>
            </table>
            <p>
                <strong>Bekaa</strong>, you say! Why aren’t you teaching me the 3<sup>rd</sup> person subject forms? How do I say “S/he sees h/?” (He sees her, she sees him, he sees him, etc.). Aaah, this is where Ojibwe gets complicated. The problem is then you have a 3<sup>rd</sup> person subject, and another 3<sup>rd</sup> person object, but they are two different people. Ojibwe doesn’t work like that. It likes to distinguish the different people involved in an action. So when you are describing an action that involves a subject and an object, neither of whom are you or your listener, you need to use a 3<sup>rd</sup> person form as well as another form – some call it 4<sup>th</sup> person; linguists call it obviative. Yes, we keep mentioning it. We will dive into it in some more detail in lesson 7. 
            </p>

            <h2 id='derived-verbs'>Derived verbs</h2>
            <p>
                Above we learned three VTI verbs derived from <strong>waabandan</strong> plus another part to extend the meaning: <strong>nandawaabandan, minwaabandan, beshwaabandan</strong>. Good news – you get three more verbs by combining those beginnings with the VTA verb <strong>waabam</strong>. 
            </p>
            <p>
                <strong>Nandawaabam</strong> – look for h/, search for h/. 
                <br/><strong>Minwaabam</strong> – like the looks of h/, enjoy seeing h/. 
                <br/><strong>Beshwaabam</strong> - see h/ nearby, be in close view of h/, catch sight of h/.
            </p>

            <h2 id='more-vai-verbs'>More VAI verbs</h2>
            <p>
                <strong>giiwanimo</strong> is a straightforward VAI meaning “s/he lies, deceives.” The form in the dialog <strong>gigiiwanim</strong> loses the final <strong>-o</strong> because it is the second person singular form, according to the rule taught in lesson 1. We won’t point this out every time. 
            </p>
        </div>
    );
}

export default Lesson5;