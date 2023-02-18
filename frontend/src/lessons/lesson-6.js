import React from 'react';
import Title from '../components/title';
import MultiPlayer from '../components/multi-player';
import Sidebar from '../components/sidebar';
import PageButtons from '../components/page-buttons';
import LessonCSS from '../components/lesson-css';

const Lesson6 = () => {
    const sidebarLinks = [
        { title: 'Lesson 6', href: null },
        { title: 'Dialogue', href: '6#dialogue' },
        { title: 'Plural Persons', href: '6#plural-persons' },
        { title: 'Inclusive vs. exclusive “we”', href: '6#inclusive-vs-exclusive-we' },
        { title: 'Verb Prefixes and Suffixes', href: '6#verb-prefixes-and-suffixes' },
        { title: 'Preverbs', href: '6#preverbs' },
        { title: 'More Animate and Inanimate Verb Pairs', href: '6#more-animate-and-inanimate-verb-pairs' }
    ];

    const themeColors = ['#3674F7', '#729EFC'];

    const pagination = {
        next: {
            href: '/lesson/7',
            text: 'Lesson 7'
        },
        prev: {
            href: '/lesson/5',
            text: 'Lesson 5'
        }
    }

    return (
        <>
            <LessonCSS main={themeColors[0]} accent={themeColors[1]}/>
            <div class='col-auto px-0'>
                <Sidebar links={sidebarLinks} background={themeColors[0]} />
            </div>
            <main class='col ps-md-2 pt-2'>
                <div class='container lesson-container' style={{ padding: '1em 2em 1em 2em' }}>
                    <div class='row'>
                        {<PageButtons prev={pagination.prev} next={pagination.next} />}
                        <Title lesson='6' text='Lesson 6' />

                        <h2 id='dialogue'>Dialogue</h2>
                        
                        <MultiPlayer 
                            srcs={['/assets/audio/Dialogue_6.mp3', '/assets/audio/Dialogue_6_Slow.mp3']}
                            titles={['Normal', 'Slow']}
                        />

                        <table className='dialogue-table'>
                            <tr>
                                <td>A: Niwii-izhaamin minising noongom, giwii-izhaa na gaye giin?</td>
                                <td>A: We (excl) are going to the island today, do you want to go too?</td>
                            </tr>
                            <tr>
                                <td>&nbsp;</td>
                                <td></td>
                            </tr>
                            <tr>
                                <td>B: Ninga-anokii dibikak. Giga-bi-giiwem na jibwaa-dibikak?</td>
                                <td>B: I am going to work tonight. Will you (pl) get home before dark?</td>
                            </tr>
                            <tr>
                                <td>&nbsp;</td>
                                <td></td>
                            </tr>
                            <tr>
                                <td>A: Miinange! Nindaa-anokiimin gaye niinawind ishpi-dibikak.</td>
                                <td>A: Of course! We (excl) should work late at night too.</td>
                            </tr>
                            <tr>
                                <td>&nbsp;</td>
                                <td></td>
                            </tr>
                            <tr>
                                <td>B: Ahaaw! Niwii-bi-izhaa. Miigwech! Giga-boozimin na jiimaaning?</td>
                                <td>B: OK! I’ll come. Thanks! Will we (incl) go in a canoe?</td>
                            </tr>
                            <tr>
                                <td>&nbsp;</td>
                                <td></td>
                            </tr>
                            <tr>
                                <td>A: Onzaam bezikaamagad jiimaan! Nindayaan naabikwaanensiwi-jiimaan. Giga-gizhiibizomin!</td>
                                <td>A: A canoe is too slow to go in! I have a motorboat. We’ll go fast!</td>
                            </tr>
                            <tr>
                                <td>&nbsp;</td>
                                <td></td>
                            </tr>
                            <tr>
                                <td>B: Onizhishin! Giwiijiiwaaganag dash? Awenenag ingiw?</td>
                                <td>B: Nice! And your friends? Who are they?</td>
                            </tr>
                            <tr>
                                <td>&nbsp;</td>
                                <td></td>
                            </tr>
                            <tr>
                                <td>A: Eya’, niwiijiiwaaganag gaye da-bi-izhaawag. Ernie, Derek, miinawaa Walter izhinikaazowag.</td>
                                <td>A: Yes, my friends will also be coming. Ernie, Derek, and Walter are their names.</td>
                            </tr>
                            <tr>
                                <td>&nbsp;</td>
                                <td></td>
                            </tr>
                            <tr>
                                <td>B: Oonh ahaaw, onizhishin. Giga-minawaanigozi-min sa.</td>
                                <td>B: Oh ok, nice. We (incl) will have fun.</td>
                            </tr>
                            <tr>
                                <td>&nbsp;</td>
                                <td></td>
                            </tr>
                            <tr>
                                <td>A: Da-mino-izhiwebad ina agwajiing biinish ishpi-dibikak?</td>
                                <td>A: Will the weather be nice outside until late at night?</td>
                            </tr>
                            <tr>
                                <td>&nbsp;</td>
                                <td></td>
                            </tr>
                            <tr>
                                <td>B: Eya’, da-mino-izhiwebad biinish waabang.</td>
                                <td>B: Yes, the weather will be good until tomorrow.</td>
                            </tr>
                            <tr>
                                <td>&nbsp;</td>
                                <td></td>
                            </tr>
                            <tr>
                                <td>A: Gidaa-abwemin iwidi minising. Giga-bakademin naagaj.</td>
                                <td>A: We (incl) should cook over the fire over there on the island. We (incl) will be hungry later.</td>
                            </tr>
                            <tr>
                                <td>&nbsp;</td>
                                <td></td>
                            </tr>
                            <tr>
                                <td>B: Ahaaw, miijim giga-biidoomin miinawaa giga-nandawenjigemin ajina iwidi.</td>
                                <td>B: Ok, we (incl) will bring food and we (incl) will hunt/fish for a while over there.</td>
                            </tr>
                            <tr>
                                <td>&nbsp;</td>
                                <td></td>
                            </tr>
                            <tr>
                                <td>A: Ooh ahaaw dash, gidaabiidoomin migiskanaakoon miinawaa baashkiziganan.</td>
                                <td>A: Oh ok then, we (incl) should bring fishing poles and guns.</td>
                            </tr>
                            <tr>
                                <td>&nbsp;</td>
                                <td></td>
                            </tr>
                            <tr>
                                <td>B: Geget isa, gaye abwewin, onaaganan, badaka’iganan miinawaa mookomaanan.</td>
                                <td>B: Certainly, also a frying pan, plates, forks and knives.</td>
                            </tr>
                            <tr>
                                <td>&nbsp;</td>
                                <td></td>
                            </tr>
                            <tr>
                                <td>A: Miinange go! Ambe, ozhiitaadaa indawaaj!</td>
                                <td>A: Of course! Come on, let's prepare then!</td>
                            </tr>
                        </table>

                        <h2 id='plural-persons'>Plural persons</h2>
                        <p>
                            So far we have been teaching you strictly singular person verb forms – <strong>niin, giin,</strong> and <strong>wiin</strong>. We are working towards teaching you full verb charts of all the different person forms, for you to memorize with spaced repetition software. To get there, we need to teach a few more personal pronouns. The categories in Ojibwe don’t perfectly correspond with English, so a bit of explanation is needed. We will now learn four more personal pronouns, and get introduced briefly to their verb forms.
                        </p>
                        <p>
                            <strong>niinawind</strong> – 1<sup>st</sup> person plural exclusive, or “we (excl)”
                            <br /><strong>giinawind</strong> – 1<sup>st</sup> person plural inclusive, or “we (incl)”
                            <br /><strong>giinawaa</strong> – 2<sup>nd</sup> person plural, or “you (pl)”
                            <br /><strong>wiinawaa</strong> – 3<sup>rd</sup> person plural, or “they (anim)”
                        </p>

                        <h2 id='inclusive-vs-exclusive-we'>Inclusive vs. exclusive “we”</h2>
                        <p>
                            Like many languages in the world, including many indigenous to North America, Ojibwe distinguishes two ways of talking about oneself along with other people, inclusive and exclusive. For example, if I say “We are going to the island today…” in English, it isn’t clear yet if I am talking about me and some other people, but not <em>you</em> (the exclusive case), or if <em>you</em> the listener is included (the inclusive case). In Ojibwe, these two situations are distinguished in the grammar, whereas they are not in English. So in Ojibwe, it is already clear from the first few words that the speaker is talking about a plan to go with some other people, but not the person who he is talking to. He is <em>inviting</em> that person to come along, but he can’t yet be confident that that person will accept. Once the invitation is accepted, the dialog switches from using the exclusive form to the inclusive form.
                        </p>
                        <p>
                            <strong>Niinawind</strong> – 1<sup>st</sup> person plural exclusive. When I use this, I’m talking about me and someone else, or me and several other people, but NOT you, the listener. You are <em>excluded</em>, so we call this term “we exclusive.”
                        </p>
                        <p>
                            <strong>Niwii-izhaamin minising noongom, giwii-pi-izhaa na gaye giin?</strong>
                        </p>
                        <p>
                            With “we,” I’m referring to myself and some other people who already have a firm plan to go. This doesn’t include <em>you</em>, the person who I’m talking to. When I say <strong>giwii-izhaa</strong>, that’s not 2<sup>nd</sup> person plural – I’m asking you alone, singular,  if you want to go too.
                        </p>
                        <p>
                            <strong>Giinawaa</strong> – 2<sup>nd</sup> person plural. In English, we have the word <em>you</em> doing double duty, as singular and plural. But the lack of a second person plural pronoun in English does bother us sometimes, and we do have the urge to distinguish it, which we do through such expressions as <em>you all, y’all, you guys, yinz</em> (that last one is Pittsburghese). In Ojibwe, like many other languages, this has its own pronoun and its own verb forms. In the dialog, B has not yet made up his mind about whether he is going to go along on this boat trip to the island. So when he asks <strong>Giga-bi-giiwem ina jibwaa-dibikak?</strong> he is referring to “you (pl)” – Are you (pl) going to return home before dark? Here he is not yet including himself in the group that is going.
                        </p>
                        <p>
                            <strong>Giinawind</strong> - 1<sup>st</sup> person plural inclusive. When I use this, I am including you, the listener, in the group referred to by “we.” It may be just you and me (2 people), or it may also include other people (3 or more); that doesn’t matter for the grammar. When B asks <strong>Giga-boozimin ina jiimaaning?</strong> Now, he is including himself in the group. When he says “Are we going in a canoe,” by “we” he means himself, A, and the other people in the group, including the one or more that he is speaking to. This is because he has decided to go along at this point, so now the “we” includes himself (B), and the person he is talking to (A). That is enough people already to trigger the use of <strong>giinawind</strong> and its verb forms, but here it also includes A’s friends.
                        </p>
                        <p>
                            <strong>Wiinawaa</strong> – 3<sup>rd</sup> person plural animate. This corresponds very well with the English word “they,” referring to a group of people that includes neither the speaker nor the listener. We sometimes specify “they (anim)” in our verb charts, to clarify that it is animate, because in English the word “they” can also refer to an inanimate plural. Where are my socks? They are on the desk. This ambiguity isn’t present for “it” since that only refers to inanimate singular things. Inanimate plural forms in Ojibwe are different from animate ones.
                        </p>

                        <h2 id='verb-prefixes-and-suffixes'>Verb prefixes and suffixes.</h2>
                        <p>
                            So far, we have relied mainly on adding prefixes to verb “stems” in order to conjugate them for a single person. Now that we are adding the plural forms, it gets more complicated – we need to use a combination of both prefixes and suffixes. You are almost ready for a “full” verb chart now. We are going to have to teach just a few more types of “person” in the next lesson. For now, we’ll list all the conjugations that you can form using what you’ve already learned, with the verb <strong>izhaa</strong> – s/he goes (to a certain place). We have used <span style={{ color: 'red' }}>red</span> colour to indicate the prefixes and suffixes. Here, we will show you both the pronoun and the numerical “person code” for the different forms. We will be using those codes in future verb charts so it is helpful to learn them now. For exclusive we, <strong>niinawind</strong>, we use 1p - first person plural. For inclusive we, <strong>giinawind</strong>, we use 21 - meaning both second person (you) and first person (I). Note that there may also be a third person or multiple other people involved, i.e. “We” meaning “I, you, and they.” For <strong>giinawaa</strong> - second person plural, y’all, not including me, we use 2p. And for third person plural - multiple people but not you or I, <strong>wiinawaa</strong>, 3p.
                        </p>
                        <table className='full-border'>
                            <tr>
                                <td>1 - niin</td>
                                <td><span style={{ color: 'red' }}>nind</span>izhaa</td>
                                <td>I go.</td>
                            </tr>
                            <tr>
                                <td>2 - giin</td>
                                <td><span style={{ color: 'red' }}>gid</span>izhaa</td>
                                <td>You go.</td>
                            </tr>
                            <tr>
                                <td>3 - wiin</td>
                                <td>izhaa</td>
                                <td>S/he goes.</td>
                            </tr>
                            <tr>
                                <td>1p - niinawind</td>
                                <td><span style={{ color: 'red' }}>nind</span>izhaa<span style={{ color: 'red' }}>min</span></td>
                                <td>We (excl) go.</td>
                            </tr>
                            <tr>
                                <td>21 - giinawind</td>
                                <td><span style={{ color: 'red' }}>gid</span>izhaa<span style={{ color: 'red' }}>min</span></td>
                                <td>We (incl) go.</td>
                            </tr>
                            <tr>
                                <td>2p - giinawaa</td>
                                <td><span style={{ color: 'red' }}>gid</span>izhaa<span style={{ color: 'red' }}>m</span></td>
                                <td>You (pl) go.</td>
                            </tr>
                            <tr>
                                <td>3p - wiinawaa</td>
                                <td>izhaa<span style={{ color: 'red' }}>wag</span></td>
                                <td>They (anim) go.</td>
                            </tr>
                        </table>
                        <p>
                            The verb <strong>izhaa</strong> is a very common and useful word. Note that in the dialog, sometimes it is more naturally translated as “come” depending on the context. Ojibwe does not distinguish between “go” and “come” with different verbs, but it does use preverbs extensively to provide information on the direction of motion – remember the use of <strong>ando-</strong> in lesson 1. Note that <strong>izhaa</strong> generally requires you to mention a certain place where the person is going. You would not use it to mean “to go” in general as in “This car doesn’t go anymore.” <strong>Izhaa</strong> is actually an example of something called a “relative root” in Ojibwe linguistics - meaning that it can’t be used completely on its own, but it must <em>relate</em> to some specific information given elsewhere in the sentence. You will learn more about relative roots in a future lesson, but for now, again, “just putting it on your radar.”
                        </p>

                        <h2 id='preverbs'>Preverbs</h2>
                        <p>
                            We’ve introduced several preverbs in this lesson. First, we have
                            <br /><strong>jibwaa</strong>- before
                            <br /><strong>ishkwaa</strong>- after
                            <br />These two words are opposites, and they both attach to a verb to indicate that the main action of the sentence occurs before or after the verb to which they are attached. Here we are attaching them to <strong>dibikak</strong>. Recall that <strong>dibikak</strong> ‘at night, tonight’ is actually a verb (in conjunct form, which we haven’t taught yet), based on the VII verb <strong>dibikad</strong> ‘it is night.’
                        </p>
                        <p>
                            <strong>bi</strong> – This is a little preverb that indicates motion towards the speaker or a common reference point or coming. You could say that it has a bit of a connotation of ‘here’ although it doesn’t always translate that way. One way to use it is to change <strong>izhaa</strong> – ‘go’, to <strong>bi-izhaa</strong> – ‘come.’ We can’t guarantee that this always translates easily to “go” vs. “come,” but you will frequently see it used in that way. In the beginning of the dialog, we see <strong>giwii-izhaa na gaye giin?</strong> Will you go (to the island) too? Neither of the people are on the island yet, so it makes sense to leave out the <strong>bi</strong>. But in some cases you might hear a sentence like: <strong>giwii-pi-izhaa na gaye giin?</strong> Here, the implication is that you are being invited to <em>come</em> with the speaker, so <strong>-bi-</strong> is used (although since it follows <strong>wii-</strong>, it undergoes a consonant change to <strong>-pi-</strong>). Later on when we hear <strong>Giga-bi-giiwem</strong> – you will return home, the speaker is referring to the place where they are at the moment of the conversation, so <strong>-bi</strong> shows up here too.
                        </p>
                        <p>
                            <strong>ishpi</strong> – advanced into a time, high. This <em>pv lex</em> is a bit tricky to translate, but here it is paired with <strong>dibikad</strong> (it is night) in the conjunct form to make <strong>ishpi-dibikak</strong> – late at night, after dark.
                        </p>
                        <p>
                            <strong>ga-/da-</strong> definitely will
                            <br /><strong>daa-</strong> should, probably will, could, might
                        </p>
                        <p>
                            Ojibwe has several preverbs that indicate a kind of future tense. We already looked at <strong>-wii</strong>. <strong>Niwii-</strong> has a meaning like “I will, I want to, I am willing to” – it expresses a desire, a willingness, a plan perhaps. You might use it if you are vaguely planning to go to Hawaii next year. But if you already bought your plane ticket and are leaving next week, you will use <strong>ga-/da-</strong>. These two prefixes indicate a more “definite future.” Barring some unforeseen catastrophe, you are pretty certain something will happen when you use this. So what is the difference between <strong>ga-</strong> and <strong>-da</strong>? It is simply a grammatical distinction: <strong>ga-</strong> is used for 1<sup>st</sup> and 2<sup>nd</sup> person, and <strong>da-</strong> is used for third person. So we have:
                        </p>
                        <table className='full-border'>
                            <tr>
                                <td>niin</td>
                                <td><span style={{ color: 'red' }}>ninga-</span>izhaa</td>
                                <td>I will go (definitely).</td>
                            </tr>
                            <tr>
                                <td>giin</td>
                                <td><span style={{ color: 'red' }}>giga-</span>izhaa</td>
                                <td>You will go (definitely).</td>
                            </tr>
                            <tr>
                                <td>wiin</td>
                                <td><span style={{ color: 'red' }}>da-</span>izhaa</td>
                                <td>S/he will go (definitely).</td>
                            </tr>
                        </table>
                        <p>
                            <strong>-daa</strong> is more of a “conditional” meaning like <em>should</em> or <em>would</em>. Here in the dialog, B first uses <strong>-ga</strong> to express a firm belief that he is going to work tonight. A then uses <strong>-daa</strong> says that he and the rest of the group should work tonight too after they get back from the island, but they don’t sound quite so sure that that will actually happen.  <strong>-daa</strong> is also used to ask for permission or direction: <strong>Nindaa-atoon ina omaa o’ow jiimaan?</strong> Can I put this boat here? <strong>Atoon</strong> is a VTI meaning “put it in a certain place.” This is also a relative root - you need to say <em>where</em> you are putting something. English actually treats that verb the same way - you would never say “*I put it.” You are <em>required</em> to specify the destination. This kind of requirement is common in Ojibwe and is at the core of the concept of relative roots.
                        </p>
                        <p>
                            Its VTA counterpart for putting animate things is <strong>ashi</strong> – “put h/ in a certain place.” Note that we typically use “h/” in the translation, even though it is more likely that the object of this verb is an object that happens to be grammatically animate, e.g. “<strong>Nindaa-asaa na omaa wa’aw okaadaak?</strong>” Can I put this carrot here? <strong>Enya’, gidaa-asaa imaa a’aw.”</strong> Yes, you can put the carrot there. This answer is a nice example of using a demonstrative pronoun <strong>a’aw</strong> (that animate thing, that person) in a context where we would just use “it” in English.
                        </p>

                        <h2 id='more-animate-and-inanimate-verb-pairs'>More animate and inanimate verb pairs</h2>
                        <p>
                            Finally, this lesson has a few interesting verbs about going fast or going slow. We are going to build on the verb <strong>gizhiibizo</strong> from the dialog, to teach you four different verbs.
                        </p>
                        <p>
                            <strong>bejibide</strong> – VII, it goes slow.
                            <br /><strong>bejibizo</strong> – VAI, s/he goes slow.
                            <br /><strong>gizhiibide</strong> – VII, it goes fast.
                            <br /><strong>gizhiibizo</strong> – VAI, s/he goes fast.
                        </p>
                        <p>
                            These four verbs teach us some interesting points. First of all, we have two examples where a VII verb ends in <strong>-de</strong> and its VAI counterpart ends in <strong>-zo</strong>. There are many pairs like this in Ojibwe, and there are many other patterns like this too. We can’t possibly teach them all explicitly, but you will pick up on these regularities as you learn more words. As you get good at spotting them, it really helps grow your vocabulary - when you learn a new VII, you may learn a corresponding VAI at the same time.
                        </p>
                        <p>
                            Second, these four verbs show how Ojibwe words are often the sum of their parts. We have a “final” word part: <strong>-bide</strong> and <strong>-bizo</strong> (VII and VAI), which has a meaning that has something to do with going, moving through space physically. These are not words on their own, but they show up in the final position of many other verbs as well. And then we have two “initial” word parts <strong>beji-</strong>, with a meaning related to slowness, and <strong>gizhii-</strong>, related to being fast. Again, these are not independent words, but they show up as parts of many other words. A big part of growing your Ojibwe vocabulary is recognizing these word parts across many different vocabulary items. At the beginning, you have no choice but to memorize <strong>gizhiibizo</strong> as one word meaning “s/he goes fast,” but over time it will become easier to guess the meaning of new words that you haven’t seen before, because you may recognize some of their parts from other words.
                        </p>
                        <p>
                            To talk about the canoe being too slow though, we don’t use <strong>bejibide</strong>. Although this does mean “it goes slow,” it doesn’t quite capture the meaning desired here. The speaker wants to complain that a canoe goes too slowly, it will make them late, it won’t get there on time, etc. The verb that he really wants to use is <strong>bezikaa</strong> – s/he moves slowly, runs late. Frequently said about a bus! There’s a problem though – <strong>bezikaa</strong> is a VAI verb, to be used with an animate subject, but a canoe -  <strong>jiimaan</strong>, is inanimate. Here we see a cool feature of Ojibwe come to the rescue. For these situations when you want to use an animate verb for an inanimate subject, you can add the suffix <strong>-magad</strong>. This turns a VAI verb into a VII verb, so <strong>bezikaamagad</strong> means “it goes slow, runs late.” The suffix <strong>-magad</strong> has other uses besides this, but you will frequently see it used this way. We do not recommend adding <strong>-magad</strong> indiscriminately to all kinds of VAI verbs - sometimes it works and sometimes it doesn’t. If there already is a corresponding VII verb (as in <strong>bejibizo</strong> and <strong>bejibide</strong>), then there is no need to ever use <strong>-magad</strong>.
                        </p>
                        <p>
                            One more note about verbs – the verb <strong>boozi</strong> is a VAI verb that generally means  ‘s/he gets in a boat or vehicle, boards, embarks.’ Here it is used more like the English verb ‘ride’ in that the speaker uses it to refer to the whole trip in a canoe. In any case, as it is intransitive, it does not take an object. So the speaker uses <strong>jiimaaning</strong> – a locative form, “in a canoe.” You can’t directly use <strong>jiimaan</strong> as an object there; that would require a VTI verb.
                        </p>
                        <p>
                            <strong>Giwiijiiwaaganag</strong> - ‘your friends.’ <strong>Wiijiiwaagan</strong> appears in the dictionary as ‘a partner, a companion.’ In this case, it refers to the people that A is going to the island with. In this context, ‘your friends’ would probably be a more natural way to say it in English. We have <strong>-ag</strong> to make it plural, and we have <strong>gi-</strong> at the beginning as a possessive prefix ‘your.’ Note, this is not one of those ‘dependent’ words like <strong>gimisenh</strong> that always requires a possessive prefix. <strong>Wiijiiwaagan</strong> does exist as an independent word. So here we have a case of ordinary possessive noun inflection, adding a prefix. You can also say <strong>niwiijiiwaagan</strong> - ‘my partner.’ The rules for these noun inflections do get a bit more complex in some situations, and we will teach them explicitly in a later lesson.
                        </p>
                        <p>
                            <strong>Awenen</strong> means “who?” Since the speaker already knows that there are multiple people involved, this gets pluralized to <strong>awenenag</strong>.
                        </p>
                        <p>
                            And we introduced an imperative or also known as a command. <strong>Ozhiitaadaa</strong> meaning “let’s get ready” or prepare, <strong>ozhiitaa</strong> is the <em>vai</em> verb, meaning “s/he prepares,” and what makes it a command is the suffix <strong>-daa</strong> meaning “let’s.” For the most part, for all <em>vai</em> verbs you would just add <strong>-daa</strong> to use this imperative.  There are some differences with <em>vti</em> verbs and <em>vta</em> verbs, but we will learn more about imperatives later.
                        </p>
                        {<PageButtons prev={pagination.prev} next={pagination.next} />}
                    </div>
                </div>
            </main>
        </>
    )
}

export default Lesson6;