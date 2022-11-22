import React from 'react';
import Title from '../../components/title';
import DialoguePlayer from '../../components/dialogue-player';

const Lesson7 = ({ colors }) => {
    return (
        <div>
            <Title lesson='7' text='Lesson 7' accent={colors[1]}/>
            
            <h2 id='dialogue'>Dialogue</h2>
            <DialoguePlayer src='/assets/audio/Dialogue-7.mp3'/>

            <table className='dialogue-table'>
                <tr>
                    <td>A: Giminwenimaag na <i>The Beatles</i>?</td>
                    <td>A:  Do you like The Beatles?</td>
                </tr>
                <tr>
                    <td>&nbsp;</td>
                    <td></td>
                </tr>
                <tr>
                    <td>B: Miinange! Gakina awiya o-minwenimaawaan <i>The Beatles-an</i>. Gaye wiin, niizhing ogii-kanawaabamaan <i>The Beatles-an</i> nindede.</td>
                    <td>B: Of course! Everyone likes the Beatles. And my dad saw the Beatles (perform) twice!</td>
                </tr>
                <tr>
                    <td>&nbsp;</td>
                    <td></td>
                </tr>
                <tr>
                    <td>A: Hoowa! Gimaamaa na gaye?</td>
                    <td>A: Great! Your mom too?</td>
                </tr>
                <tr>
                    <td>&nbsp;</td>
                    <td></td>
                </tr>
                <tr>
                    <td>B: Gaawiin. Mii iwapii jibwaa-wiidigemaad nimaamaayan nindede.</td>
                    <td>B: No. It was before my dad married my mom.</td>
                </tr>
                <tr>
                    <td>&nbsp;</td>
                    <td></td>
                </tr>
                <tr>
                    <td>A: Hoowa! Gikinoo’amaadiiwigamigong ina ogii-nagishkawaan gimaamaayan gidede?</td>
                    <td>A: Great. Did your dad meet your mom at school?</td>
                </tr>
                <tr>
                    <td>&nbsp;</td>
                    <td></td>
                </tr>
                <tr>
                    <td>B: Gaawiin. Gii-niindaa’aa nindede aanind waabigwaniin. Ogii-pagidinaanini iniw waabigwaniin nimaamaayan!</td>
                    <td>B: No. Someone sent my dad some flowers. My mom delivered the flowers!</td>
                </tr>
                <tr>
                    <td>&nbsp;</td>
                    <td></td>
                </tr>
                <tr>
                    <td>A: Gii-maamakaadendam ina gidede iwapii?</td>
                    <td>A: Was your dad amazed that time?</td>
                </tr>
                <tr>
                    <td>&nbsp;</td>
                    <td></td>
                </tr>
                <tr>
                    <td>B: Eya’, aapiji gii-maamakaadendam.</td>
                    <td>B: Yes, he was very amazed.</td>
                </tr>
                <tr>
                    <td>&nbsp;</td>
                    <td></td>
                </tr>
                <tr>
                    <td>A: Oonh, Metallica da-madwewe-chigewag wayiiba imaa zhooshkwaada’ewigamigong omaa oodenaang.</td>
                    <td>A: Oh, Metallica is going to be playing soon there at the arena here in town.</td>
                </tr>
                <tr>
                    <td>&nbsp;</td>
                    <td></td>
                </tr>
                <tr>
                    <td>B: Maamakaaj! Gidaa-izhaamin imaa, gidaa-ganawaabamaanaanig.</td>
                    <td>B: Amazing! We should go there, we should watch them.</td>
                </tr>
                <tr>
                    <td>&nbsp;</td>
                    <td></td>
                </tr>
                <tr>
                    <td>A: Eya’, da-minwendaagwad sa go niijii!</td>
                    <td>A: Yes, it will be fun my friend!</td>
                </tr>
                <tr>
                    <td>&nbsp;</td>
                    <td></td>
                </tr>
                <tr>
                    <td>B: Mazina’igaansan ninga-adaawenan waabang indawaaj.</td>
                    <td>B: I will buy the tickets tomorrow then.</td>
                </tr>
                <tr>
                    <td>&nbsp;</td>
                    <td></td>
                </tr>
                <tr>
                    <td>A: Noongom ninga-bizindawaag Metallica bizindamo-win-ing.</td>
                    <td>A: Today I am going to listen to Metallica on the stereo.</td>
                </tr>
                <tr>
                    <td>&nbsp;</td>
                    <td></td>
                </tr>
                <tr>
                    <td>B: Onizhishin isa, Dwight Yoakam niin ninga-bizindawaa noongom.</td>
                    <td>B: Nice, I am going to listen to Dwight Yoakam today myself.</td>
                </tr>
                <tr>
                    <td>&nbsp;</td>
                    <td></td>
                </tr>
                <tr>
                    <td>A: Hoowa! Dwight Yoakam ina? Gaye niin niminwenimaa a’aw Dwight Yoakam, aapiji minotaagozi.</td>
                    <td>A: Howa! Dwight Yoakam eh? I too like that Dwight Yoakam, he really sounds good.</td>
                </tr>
            </table>

            <h2 id='towards-a-full-verb-chart'>Towards a full verb chart</h2>
            <p>
                We will be using verb charts in this course to show you the various forms that Ojibwe verbs can take. These charts are a ubiquitous part of learning any language with a lot of verb conjugation (e.g. Spanish, Russian, Arabic) and Ojibwe is definitely no exception. Staring at a big verb chart can be intimidating – it looks like an awful lot to memorize. Fortunately, we don’t learn verb charts by staring at them. In this course, you will be guided to use Spaced Repetition Software to learn the individual items in verb charts just like you use SRS to memorize vocabulary. 
            </p>
            <p>
                A verb chart consists of several forms from the same root word (e.g. citation form), in a particular conjugation (e.g. Independent neutral positive – we’ll explain that soon), but varying among the people involved in the action. For a VAI verb, we have so far seen the following people involved in actions so far: <strong>1 - niin, 2 - giin, 3 - wiin, 1p - niinawind, 21 - giinawind, 2p - giinawaa,</strong> and <strong>3p - wiinawaa</strong>. Many verb charts will include two or three more possible people, and we will introduce you to those forms in this lesson. Once you have been introduced to them, we can start providing “full” verb charts with all the possible permutations of a given verb conjugation. 
            </p>

            <h2 id='Obviative'>Obviative</h2>
            <p>
                In previous lessons, we have very briefly introduced the concept of the obviative form, stating that it had something to do with a situation in which you are discussing two different people in the third person. The obviative form is a kind of “second third person,” or “fourth person.” 
            </p>
            <p>
                What’s the point of this? Mainly to reduce ambiguity. Let’s examine an example sentence in English: 
            </p>
            <p>
                1) John saw Bill yesterday at the store, and then he saw him on the beach. 
            </p>
            <p>
                When we see “he saw him” in the second half of that sentence, it is pretty clear that we mean “John saw Bill” – in the same order that we mentioned these two people in the first place, but it’s not absolutely required by English grammar. We could also say: 
            </p>
            <p>
                2) John lent Bill twenty dollars, but he paid him back right away.
            </p>
            <p>
                Here, “he paid him back” certainly implies “Bill paid John,” in the opposite order, because the meaning of the sentence simply makes that interpretation much more sensible. But we needed to use context cues to figure that out. In Ojibwe, it would be less ambiguous – the grammar clearly indicates which person is which in an action. 
            </p>
            <p>
                Sometimes in English, if we happen to have two people of opposite gender identity, then the sentence is not ambiguous at all, because the gender pronouns distinguish who is who: 
            </p>
            <p>
                3) John lent Betty twenty dollars, but she paid him back right away. 
            </p>
            <p>
                With the existence of the obviative in Ojibwe, it is a lot like having two different pronouns for any two people discussed together in a sentence, removing the ambiguity of which person is the “subject” and which one is the “object.” We are going to use the terms “subject” and “object” extensively in this course to refer to the person performing an action, and the person undergoing the action, just as they are used in English. The terms subject and object are not a perfect fit for Ojibwe’s grammar though, and linguists sometimes use other, more technical terms. You’ll have to keep this in mind when looking at other sources. 
            </p>
            <p>
                The main idea of an obviative is that when you first mention a person, and they are the main topic of conversation, they are the standard 3<sup>rd</sup> person – the same forms we have seen all along in this course so far. This is also called “proximative” – the person who is closer to the centre of the action, the protagonist of the story. Then if you introduce another character who interacts with them, then that next person is “obviative,” and we will use different noun and verb forms to refer to them and distinguish them from the proximative person. Which person is proximative and which is obviative (or 3<sup>rd</sup> and 4<sup>th</sup>) don’t have to stay the same throughout a story or a conversation – it can flip when the topic of conversation changes. That’s something you’ll learn through much experience with Ojibwe conversation and reading, when you advance to the point when you can enjoy those things. 
            </p>
            <p>
                So there you have some of the “philosophy” behind the obviative. Now let’s get into the forms themselves. In lesson 2, we learned the words <strong>nimisenh</strong> for my (older) sister, and <strong>gimisenh</strong> for your (older) sister, but we did not yet learn the word for “h/ (older) sister” – note that “h/” refers to “his/her'' and will be used to translate all possessive terms. The reason we postponed teaching this is that the word form includes an ending that expresses the obviative form. If I say “John’s sister,” I am already talking about TWO “ third person” people – John is the first one, the proximative, but then the sister is “the other one,” the obviative. We will frequently use the word “other” in translating obviatives on flashcards, even though it might not always be the most natural translation for the whole sentence. So now we have: 
            </p>
            <table className='full-border'>
                <tr>
                    <td>niin</td>
                    <td>nimisenh</td>
                    <td>my (older) sister</td>
                </tr>
                <tr>
                    <td>giin</td>
                    <td>gimisenh</td>
                    <td>your (older) sister</td>
                </tr>
                <tr>
                    <td>wiin</td>
                    <td>omisenyan</td>
                    <td>h/ (older) sister</td>
                </tr>
            </table>
            <p>
                Here’s another example for the relative <em>uncle</em>. Ojibwe words for relatives tend to be more specific than their English counterparts. This word here refers to a “parallel uncle” – i.e. your father’s brother, but not your mother’s brother. 
            </p>
            <table className='full-border'>
                <tr>
                    <td>niin</td>
                    <td>nimishoome</td>
                    <td>my uncle</td>
                </tr>
                <tr>
                    <td>giin</td>
                    <td>gimishoome</td>
                    <td>your uncle</td>
                </tr>
                <tr>
                    <td>wiin</td>
                    <td>omishoomeyan</td>
                    <td>h/ uncle</td>
                </tr>
            </table>
            <p>
                The ending <strong>-an</strong> is very common on obviative nouns, and often appears as <strong>-wan</strong> or <strong>-yan</strong> if following a vowel (including a nasal vowel as indicated by <strong>-nh</strong>. It is used to mark an obviative person within a sentence, attached right to the noun that refers to them, as we’ll see in the examples below. For our verb charts, we will use the number 3 to refer to 3<sup>rd</sup>-person proximative forms, and the term 3’ to refer to obviative forms. 
            </p>
            <p>
                Now we will introduce some key vocabulary needed for a little story. 
            </p>
            <p>
                <strong>dakoniwewinini</strong> – Police man. The final <strong>inini</strong> means “man,” while <strong>dakoniwe</strong> is a VAI meaning “s/he arrests people,” and is derived from the VTA <strong>dakon</strong> – “arrest h/; hold h/.”
            </p>
            <p>
                <strong>gimoodishkiiwinini</strong> – thief, a robber. <strong>Gimoodi</strong> is a VAI meaning “s/he steals,” and again we have <strong>inini</strong> meaning “man.” 
            </p>
            <p>
                <strong>waabam</strong> – VTA, see h/. You could also translate it as ‘see it (animate),’ because this is the same verb that would be used for objects that are not him or her and are animate, like an apple, in Ojibwe it is an animate object. So, you would say <strong>mishiimin niwaabamaa</strong>, “I see an apple.”
            </p>
            <p>
                So, in our example scenario, we bring up a policeman, and then say what he did yesterday. 
            </p>
            <p>
                Look, a policeman! Yesterday, the policeman (3) saw a thief (3’).
                <br/><strong>Shke, dakoniwewinini! Bijiinaago, ogii-waabamaan dakoniwewinini gimoodishkiiwininiwan.</strong>
            </p>
            <p>
                We start by “introducing” the policeman to make it clear that he is the “foreground character,” the one mentioned first, the more important one, the one who the story is about, the proximative. Then the other person, the thief, will be obviative. The existence of an obviative in this sentence is clear from two different pieces – first of all, in the verb: 
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
                <tr>
                    <td>3 → 3’</td>
                    <td>owaabamaan</td>
                    <td>S/he sees the other.</td>
                </tr>
                <tr>
                    <td>3’ → 3</td>
                    <td>owaabamigoon</td>
                    <td>The other sees h/.</td>
                </tr>
            </table>
            <p>
                You can see that the form with an obviative object (3 → 3’) has an <strong>-n</strong> ending not present in the other forms. We translated this as “s/he sees the other” instead of “s/he sees h/” just to make it very clear that the obviative is the object here, not the subject. But this could naturally be translated as any of the following: “He sees him, she sees him, he sees her, she sees her.” 
            </p>
            <p>
                The obviative ending is present on the noun too - <strong>gimoodishkiiwinini<u>wan</u></strong>. The thief is marked as obviative when he is mentioned. Note that unlike in English, the word order does not make a difference. Both of these sentences mean exactly the same thing: “The policeman saw the thief.” 
            </p>
            <p>
                <strong>Ogii-waabamaan dakoniwewinini gimoodishkiiwininiwan.</strong>
                <br/><strong>Ogii-waabamaan gimoodishkiiwininiwan dakoniwewinini.</strong>
            </p>
            <p>
                The grammar here tells us that the policeman is the foreground character, the robber is “the other,” and the foreground person (3) is seeing the other person (3’). What if we wanted to specify that the robber saw the thief? We have already established who is proximative and who is obviative – that doesn’t change just because who saw who is the other way around. Instead, the verb changes, using the form that indicates (3’ → 3) instead of (3 → 3’): 
            </p>
            <p>
                <strong>Ogii-waabamigoon dakoniwewinini gimoodishkiiwininiwan.</strong>
                <br/>or
                <br/><strong>Ogii-waabamigoon gimoodishkiiwininiwan dakoniwewinini.</strong>
            </p>
            <p>
                But if we had started the story with the robber as the main character, then these roles would all be reversed. 
            </p>
            <p>
                Here’s a robber. Yesterday, a policeman saw the robber. 
                <br/><strong>Shke, gimoodishkiiwinini! Bijiinaago, ogii-waabamigoon dakoniwewininiwan gimoodishkiiwinini.</strong>
            </p>
            <p>
                We had to use the (3’ → 3s) form here because, surprisingly, the main character is the object of the sentence instead of the subject. 
            </p>
            <p>
                You will note in these examples that we put the verb first. Word order in Ojibwe is somewhat flexible. The marking of the obviative, once you understand it, makes it completely clear who is performing the action on whom - it is not indicated by the word order. This is different from English where we DO rely on word order - “The policeman saw the robber” being the opposite of “The robber saw the policeman.” So in Ojibwe, the verb and the nouns could actually come in any order. However, putting the verb first is the most “natural” order and is probably what an Ojibwe speaker would use in these situations, unless they were trying to emphasize one of the nouns by putting it first.
            </p>
            <p>
                Obviative is such a pervasive phenomenon in Ojibwe, we even put the ending on people’s names. 
            </p>
            <p>
                <strong>Ominwenimaan John Bill-an.</strong> 
                <br/>or
                <br/><strong>Ominwenimaan Bill-an John.</strong> 
                <br/>John likes Bill. 
                <br/><strong>Ominwenimigoon John Bill-an</strong>
                <br/>or
                <br/><strong>Ominwenimigoon Bill-an John</strong>
                <br/>Bill likes John – here the use of the (3’ → 3) verb form tells you who is doing the liking. 
            </p>
            <p>
                In these examples, we have both proximative and obviative nouns in the same sentence. But an obviative can also stand on its own. Let’s say we’re following along with a story about Bill, and then Bill enters his (own) home.
            </p>
            <p>
                <strong>Abiiwigamigong gii-niibawiwan dakoniwewininiwan</strong> – In the living room stood a policeman (obv). The policeman is in the obviative form because he is the second “third-person character” in the scene, with Bill being the proximate one even though he isn’t even mentioned in this sentence. And since the VAI verb involves the obviative policeman, not the proximate Bill, the verb also takes an obviative inflection, <strong>niibawiwan</strong> instead of the plain 3rd person form <strong>niibawi</strong>. 
            </p>
            <p>
                We see another example of this in the dialog. “My mother delivered those flowers!”  <strong>Ogii-pagidinaanini iniw waabigwaniin nimaamaayan!</strong> 
            </p>
            <p>
                My mother – <strong>nimaamaa</strong> – appears in the obviative form <strong>nimaamaayan</strong> even though she is the subject of the sentence and no other person is mentioned in the sentence. This is because it has already been established that the father is proximate and the mother is obviative. The mother could shift to being proximate if the focus of the story really turned to her, but that hasn’t happened yet in this dialog. 
            </p>
            <p>
                One nice thing about obviatives that makes things a little simpler – there is no distinction between singular and plural for animate obviative nouns and verbs, at least in the dialect that we are teaching in this course. There are some communities that do have distinct forms for animate obviative plurals, but we won’t be teaching them here. 
            </p>

            <h2 id='indefinite-or-someone-form'>Indefinite or “someone” form</h2>
            <p>
                The one other “person” that shows up in a lot of Ojibwe verbs is one that is described often in English as “indefinite” or “someone.” This can sort of function as an equivalent of passive voice, where what is important is what was done to our character rather than who did it. For example:
            </p>
            <p>
                <strong>Shke,  gimoodishkiiwinini. Gii-waabamaa dibikong.</strong> 
                <br/>Look, a thief! He was seen last night. 
            </p>
            <p>
                This can be used with 1<sup>st</sup> and 2<sup>nd</sup> person objects too: 
                <strong>Ningii-waabamigoo dibikong.</strong>  I was seen last night.  
            </p>
            <p>
                <strong>Gigii-waabamigoo dibikong.</strong>  You were seen last night. 
            </p>
            <p>
                The “indefinite” person is indicated by “X” on a verb chart. So we can add to our chart: 
            </p>
            <table className='full-border'>
                <tr>
                    <td>X → 1</td>
                    <td>niwaabamigoo</td>
                    <td>I am seen; Someone sees me.</td>
                </tr>
                <tr>
                    <td>X → 2</td>
                    <td>giwaabamigoo</td>
                    <td>You are seen; Someone sees you.</td>
                </tr>
                <tr>
                    <td>X → 3</td>
                    <td>waabamaa</td>
                    <td>S/he is seen; Someone sees h/.</td>
                </tr>
            </table>
            <p>
                X only shows up as a subject, never an object. 
            </p>
            <p>
                So now you know all of the possible “people” that show up in verb charts. You are ready for your first “full” chart. We will start with a classic VAI verb, <strong>nibaa</strong>. This is the entire verb chart for <strong>nibaa</strong>, in the Independent Neutral Positive forms. 
            </p>
            <p>
                What do we mean by Independent? That is the form we use in a simple sentence with just one verb. When we start combining multiple verbs in a sentence, as in “I heard him whistling while he worked” – one of those two verbs will show up in a different form called the Conjunct. Every verb form you have learned so far is Independent (sometimes referred to as “A-form”), but soon you will start to learn the Conjunct forms too (sometimes referred to as “B-form.”) They are necessary when asking questions other than yes-no questions. Obviously our dialogs will get a lot more lively when we can start including real questions! The Conjunct has many other uses in Ojibwe too, but this is a good place to start. 
            </p>
            <p>
                Our dialogs will also get better when we can include questions that have “no” for an answer. All the forms we’ve seen so far are “positive” – what you are doing, not what you are <em>not</em> doing. We will also have to learn negative forms in the future to learn how to talk about what is not happening. And as for “Neutral” – that distinguishes these verb forms from other forms used to refer to things that happened mainly in the past – “Preterit,” and things that are not certain – “Dubitative.” Preterit (sometimes spelled “preterite”) and dubitative forms are a slightly advanced grammar topic, and we will not get to them in this introductory course, but those are the alternatives to “Neutral” when we are listing the different verb forms.
            </p>
            <p>
                OK, here we go – an entire verb chart! This is for a VAI verb, <strong>nibaa</strong>, s/he sleeps, which is pretty simple because we only have a subject to worry about (who is sleeping), and no object. When we have to indicate both a subject and object (VTA verbs), these charts get longer. Memorizing VTA charts can be quite a chore, but you can do it! We believe that spaced repetition is the best way to get there, which is why we developed this course. But, for now, the full verb chart for <strong>nibaa</strong> in the VAI Independent Neutral Positive forms: 
            </p>
            <table className='full-border'>
                <tr>
                    <td>1</td>
                    <td>niin</td>
                    <td><span style={{color:'red'}}>ni</span>nibaa</td>
                    <td>I sleep.</td>
                </tr>
                <tr>
                    <td>2</td>
                    <td>giin</td>
                    <td><span style={{color:'red'}}>gi</span>nibaa</td>
                    <td>You (sg) sleep.</td>
                </tr>
                <tr>
                    <td>3</td>
                    <td>wiin</td>
                    <td>nibaa</td>
                    <td>S/he sleeps/</td>
                </tr>
                <tr>
                    <td>3’</td>
                    <td>----</td>
                    <td>nibaa<span style={{color:'red'}}>wan</span></td>
                    <td>The other sleeps.</td>
                </tr>
                <tr>
                    <td>1p</td>
                    <td>niinawind</td>
                    <td><span style={{color:'red'}}>ni</span>nibaa<span style={{color:'red'}}>min</span></td>
                    <td>We (excl) sleep.</td>
                </tr>
                <tr>
                    <td>21</td>
                    <td>giinawind</td>
                    <td><span style={{color:'red'}}>gi</span>nibaa<span style={{color:'red'}}>min</span></td>
                    <td>We (incl) sleep.</td>
                </tr>
                <tr>
                    <td>2p</td>
                    <td>giinawaa</td>
                    <td><span style={{color:'red'}}>gi</span>nibaa<span style={{color:'red'}}>m</span></td>
                    <td>You (pl) sleep.</td>
                </tr>
                <tr>
                    <td>3p</td>
                    <td>wiinawaa</td>
                    <td>nibaa<span style={{color:'red'}}>wag</span></td>
                    <td>They (anim) sleep.</td>
                </tr>
                <tr>
                    <td>X</td>
                    <td>----</td>
                    <td>nibaa<span style={{color:'red'}}>m</span></td>
                    <td>Someone sleeps.</td>
                </tr>
            </table>
            <p>
                Again, we are using the simple present tense in English (“I sleep”) for conciseness in the charts, but often a better translation would be a present progressive tense like “I am sleeping” 
            </p>
            <p>
                We have indicated pronouns in the chart above, but there are no pronouns for the 3’ form or the X form. However, sometimes in Ojibwe immersion classes, teachers use the term <strong>godag</strong> ‘the other’ for the obviative 3’, and <strong>gekendaagozisig</strong> ‘the unknown’ for the X form. 
            </p>

            <h2 id='other-verb-forms-used-in-the-dialog'>Other verb forms used in the dialog.</h2>
            <p>
                <strong>Ogii-pagidinaanini.</strong> S/he dropped them off. This is a VTI verb <strong>bagidinan</strong> conjugated for (3’ → 0p). An obviative subject acts on an inanimate plural object. The proximate version (3 → 0p) would have been <strong>obagidinaanan.</strong> 
            </p>
            <p>
                Note: There is some dialectical variation, even within Minnesota, for the (3’ → 0p) form, which, incidentally, is identical to the (3’ → 0) form. That is, “the other sees it” and “the other sees them (inan)” are said the same way, but there are two different ways to see it. The other form would be <strong>ogii-pagidinamini</strong>. In this course, we’ve made the somewhat arbitrary decision to teach the form <strong>ogii-pagidinaanini.</strong> 
            </p>
            <p>
                <strong>Niindaa’aa</strong> – s/he is being sent something; Someone sends something to h/. This is a VTA verb conjugated for (X → 3). The subject is indefinite (X), and the object, the person who received the object, is in this case third person. The citation form <strong>niindaa’</strong> alone would mean “send (it) to h/”. Why do we put the <em>it</em> in parentheses in this translation? We will explain here. 
            </p>

            <h2 id='direct-vs-indirect-objects'>Direct vs. indirect objects</h2>
            <p>
                One important difference between Ojibwe and English is how these languages treat direct and indirect objects. The distinction usually arises with verbs involving giving, sending, transferring an object from one person to another. In English for example, we have: 
            </p>
            <p>
                John sent Sally a book. 
                <br/>Here, <em>book</em> is the direct object – the thing being transferred. <em>Sally</em> is the indirect object, the person receiving it. So typically with these kinds of verbs, the direct object is inanimate (literally an object), and the indirect object is animate (a person). Although it can be an animate direct object as well. For instance in Ojibwe, apple is animate, then you can say John sent Sally an apple. In English, the direct object is more important in the grammar. For example, you could say:
            </p>
            <p>
                John sent a book. 
            </p>
            <p>
                The recipient there is not named. Or you could say: 
                <br/>John sent Sally. 
            </p>
            <p>
                Here, the meaning completely changes – it implies that Sally is the thing being transferred, and again the recipient is not named. So the indirect object is basically optional, but the direct object is required. 
            </p>
            <p>
                In Ojibwe, it’s the opposite. For transferring an object to another person, the recipient really functions as the primary object in the sentence. So if you want to say “John sent Sally a book,” you’d say <strong>Ogii-niindaa’aan John Sallyan mazina’igan.</strong> Sally gets a “<strong>-an</strong>” ending because she is obviative here. If you want to say “John sent Sally some books,” then you can pluralize the word for book, making <strong>Ogii-niindaa’aan John Sallyan aanind mazina’iganan.</strong> But notice here that the verb did not change at all. Even though for VTI verbs with an inanimate object, they would take a different word form if the object is plural, in this case we are describing an interaction between two people with a VTA verb, not between a person and an object. 
            </p>
            <p>
                For verbs that involve both an object being transferred and a person receiving it, the conjugation of the verb depends on the sender and recipient, and not on the thing being transferred. So even though sending involves an inanimate object frequently, these verbs are almost always VTA, not VTI. The object that is transferred should be mentioned in the sentence, but it doesn’t determine the verb forms used. 
            </p>
            <p>
                <strong>Jibwaa-wiidigemaad.</strong> We snuck in one Conjunct form in this lesson to make the dialog sound more natural. <strong>Wiidigemaa</strong> would be 3 → 3’ “s/he marries the other” in the Independent Neutral Positive form. For Conjunct Neutral Positive in this case, we simply add a <strong>d</strong> at the end. 
            </p>
        </div>
    )
}

export default Lesson7;