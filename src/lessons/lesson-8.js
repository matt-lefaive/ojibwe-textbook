import React from 'react';
import Title from '../components/title';
import MultiPlayer from '../components/multi-player';
import Sidebar from '../components/sidebar';
import PageButtons from '../components/page-buttons';
import LessonCSS from '../components/lesson-css';

const Lesson8 = () => {
    const sidebarLinks = [
        { title: 'Lesson 8', href: null },
        { title: 'Dialogue', href: '8#dialogue' },
        { title: 'Negative Verb Forms', href: '8#negative-verb-forms' },
        { title: 'Paired VAI and VTI Verbs', href: '8#paired-vai-and-vti-verbs' },
        { title: 'Conjunct Form', href: 'conjunct-form' },
        { title: 'Expressions in the Dialog', href: '8#expressions-in-the-dialogue' }
    ];

    const themeColors = ['#1DDCF5', '#9EEDF7'];

    const pagination = {
        next: {
            href: '/lesson/9',
            text: 'Lesson 9'
        },
        prev: {
            href: '/lesson/7',
            text: 'Lesson 7'
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
                        <Title lesson='8' text='Lesson 8' />

                        <h2 id='dialogue'>Dialogue</h2>
                        
                        <MultiPlayer 
                            srcs={['/assets/audio/Dialogue_8.mp3', '/assets/audio/Dialogue_8_Slow.mp3']}
                            titles={['Normal', 'Slow']}
                        />

                        <table className='dialogue-table'>
                            <tr>
                                <td>A: Nimaamaa, nimbakade!</td>
                                <td>A:  My mother, I’m hungry!</td>
                            </tr>
                            <tr>
                                <td>&nbsp;</td>
                                <td></td>
                            </tr>
                            <tr>
                                <td>B: Mii go maanoo. Niwii-chiibaakwe wayiiba.</td>
                                <td>B: It’s ok. I’m going to cook soon.</td>
                            </tr>
                            <tr>
                                <td>&nbsp;</td>
                                <td></td>
                            </tr>
                            <tr>
                                <td>A: Gaawiin mashi gegoo ningii-miijisiin noongom.</td>
                                <td>A: I haven’t eaten anything today.</td>
                            </tr>
                            <tr>
                                <td>&nbsp;</td>
                                <td></td>
                            </tr>
                            <tr>
                                <td>B: Ahaaw goda! Ninga-maajii-jiibaakwe.</td>
                                <td>B: OK then. I will start cooking.</td>
                            </tr>
                            <tr>
                                <td>&nbsp;</td>
                                <td></td>
                            </tr>
                            <tr>
                                <td>A: Wegonen ge-jiibaakwaadaman?</td>
                                <td>A: What are you going to cook?</td>
                            </tr>
                            <tr>
                                <td>&nbsp;</td>
                                <td></td>
                            </tr>
                            <tr>
                                <td>B: Gaawiin ningikendanziin. Wegonen waa-miijiyan?</td>
                                <td>B: I don’t know. What do you want to eat?</td>
                            </tr>
                            <tr>
                                <td>&nbsp;</td>
                                <td></td>
                            </tr>
                            <tr>
                                <td>A: Dekaag niwii-miijiin! Gidayaan ina dekaag?</td>
                                <td>A: I want to eat ice cream! Do you have ice cream?</td>
                            </tr>
                            <tr>
                                <td>&nbsp;</td>
                                <td></td>
                            </tr>
                            <tr>
                                <td>B: Gaawiin, gaawiin nindayaanziin dekaag noongom. Nindayaan bizhikiwi-wiiyaas.</td>
                                <td>B: No, I don’t have ice cream today. I have beef.</td>
                            </tr>
                            <tr>
                                <td>&nbsp;</td>
                                <td></td>
                            </tr>
                            <tr>
                                <td>A: Gaawiin niminwendanziin bizhikiwi-wiiyaas. Gidayaawaa na baaka’aakwenh?</td>
                                <td>A: I don’t like beef. Do you have chicken?</td>
                            </tr>
                            <tr>
                                <td>&nbsp;</td>
                                <td></td>
                            </tr>
                            <tr>
                                <td>B: Eya’, nindayaawaa baaka’aakwenh. Wegonen nawaj menwendaman? Obwaam maagizhaa gaye okaakigan?</td>
                                <td>B: Yes, I have chicken. What do you like more? Thigh or breast?</td>
                            </tr>
                            <tr>
                                <td>&nbsp;</td>
                                <td></td>
                            </tr>
                            <tr>
                                <td>A: Daga obwaam!</td>
                                <td>A: Thigh please!</td>
                            </tr>
                            <tr>
                                <td>&nbsp;</td>
                                <td></td>
                            </tr>
                            <tr>
                                <td>B: Opiniig ina gaye?</td>
                                <td>B: Potatoes also?</td>
                            </tr>
                            <tr>
                                <td>&nbsp;</td>
                                <td></td>
                            </tr>
                            <tr>
                                <td>A: Eya’, niwii-amwaag opiniig miinawaa anijiiminan niwii-miijinan.</td>
                                <td>A: Yes, I want to eat potatoes and I want to eat peas.</td>
                            </tr>
                            <tr>
                                <td>&nbsp;</td>
                                <td></td>
                            </tr>
                            <tr>
                                <td>B: Ahaaw, gid-ininamoon gidoonaagan.</td>
                                <td>B: Ok, I am handing you your plate.</td>
                            </tr>
                            <tr>
                                <td>&nbsp;</td>
                                <td></td>
                            </tr>
                            <tr>
                                <td>A: Ahaaw, giga-minwanjigemin. Gaawiin geyaabi giga-bakadesiimin noongom.</td>
                                <td>A: Ok, we (incl) will eat well. No longer will we (incl) be hungry today.</td>
                            </tr>
                        </table>

                        <h2 id='negative-verb-forms'>Negative verb forms</h2>
                        <p>
                            In the last lesson, we introduced you to a full verb chart, for the VAI verb <strong>nibaa</strong>. We learned a chart for the Independent Neutral Positive form. We will be studying this form a lot more, for other verb types (VII, VTI, and VTA), and for other verbs within each verb type. The forms don’t change a lot between different verbs of the same type but there are a few differences to learn depending on the sounds that the verb stem ends with.
                        </p>
                        <p>
                            But before we go too far with memorizing charts (there will be plenty of that, don’t worry), we’d like to take a brief detour and help you understand what “Independent Neutral Positive” means. Almost every verb you have seen so far, and every single one that we’ve explained in detail, has occurred in this form. We can make a lot of dialog with this form alone, but we can’t stick to it forever. As you may have noticed, it is severely limiting the content of our dialogs. For more natural conversations in Ojibwe, we need to learn both the “Independent” and the “Conjunct” verb forms. So that covers the word “independent.” For “Neutral,” recall that the alternatives are Preterit and Dubitative (there is also Preterit Dubitative). We are not teaching that in this course (although it’s not that hard to learn once you know everything that we do teach you), so every single verb form that you study here will be “Neutral.” But when you look up verb charts in a book you may find some additional forms that are not.
                        </p>
                        <p>
                            So that takes us to Positive vs. Negative. So far, we haven’t been able to answer any questions with “no,” unless we do a one word answer <strong>Gaawiin</strong>. It would be nice to start learning some negative verb forms, so we can talk about things that we don’t do. Here are a couple of examples for Independent Neutral Negative forms. We’ll stick to singular forms for now. First, a VAI.
                        </p>
                        <table className='full-border'>
                            <tr>
                                <td>1</td>
                                <td>niin</td>
                                <td><span style={{ color: 'skyblue' }}>gaawiin</span> <span style={{ color: 'red' }}>ni</span>nibaa<span style={{ color: 'red' }}>siin</span></td>
                                <td>I am not sleeping.</td>
                            </tr>
                            <tr>
                                <td>2</td>
                                <td>giin</td>
                                <td><span style={{ color: 'skyblue' }}>gaawiin</span> <span style={{ color: 'red' }}>gi</span>nibaa<span style={{ color: 'red' }}>siin</span></td>
                                <td>You are not sleeping.</td>
                            </tr>
                            <tr>
                                <td>3</td>
                                <td>wiin</td>
                                <td><span style={{ color: 'skyblue' }}>gaawiin</span> nibaa<span style={{ color: 'red' }}>siin</span></td>
                                <td>S/he is not sleeping.</td>
                            </tr>
                            <tr>
                                <td>3’</td>
                                <td>----</td>
                                <td><span style={{ color: 'skyblue' }}>gaawiin</span> nibaa<span style={{ color: 'red' }}>siiwan</span></td>
                                <td>The other is not sleeping.</td>
                            </tr>
                        </table>
                        <p>
                            Not too difficult! You add <strong>gaawiin</strong> before the verb, and add an ending afterwords, which takes different forms but almost always involves the letters <strong>sii</strong> or <strong>zii</strong> (after an <strong>n</strong>).
                        </p>
                        <p>
                            Now we will show you a partial chart for a VTI, Independent Neutral Negative, for <strong>gikendan</strong> – know it.
                        </p>
                        <table className='full-border'>
                            <tr>
                                <td>1 → 0</td>
                                <td>niin</td>
                                <td><span style={{ color: 'skyblue' }}>gaawiin</span> <span style={{ color: 'red' }}>nin</span>gikendan<span style={{ color: 'red' }}>ziin</span></td>
                                <td>I don’t know it.</td>
                            </tr>
                            <tr>
                                <td>2 → 0</td>
                                <td>giin</td>
                                <td><span style={{ color: 'skyblue' }}>gaawiin</span> <span style={{ color: 'red' }}>gi</span>gikendan<span style={{ color: 'red' }}>ziin</span></td>
                                <td>You don’t know it.</td>
                            </tr>
                            <tr>
                                <td>3 → 0</td>
                                <td>wiin</td>
                                <td><span style={{ color: 'skyblue' }}>gaawin</span> <span style={{ color: 'red' }}>o</span>gikendan<span style={{ color: 'red' }}>ziin</span></td>
                                <td>S/he doesn’t know it.</td>
                            </tr>
                            <tr>
                                <td>3’ → 0</td>
                                <td>----</td>
                                <td><span style={{ color: 'skyblue' }}>gaawiin</span> <span style={{ color: 'red' }}>o</span>gikendan<span style={{ color: 'red' }}>ziinini</span></td>
                                <td>The other doesn’t know it.</td>
                            </tr>
                        </table>
                        <p>
                            You can see that the forms for VAI and VTI are fairly similar, at least with singular objects. The VTI 3<sup>rd</sup>-person forms take the <strong>o-</strong> prefix, just as they do for the Independent Neutral Positive forms.
                        </p>
                        <p>
                            Now that we have introduced negative forms, we’ll be able to answer questions both positively and negatively, which will allow for our dialogs to get more natural and broad. In this lesson, we will also introduce ways to ask questions other than yes/no questions, which will really open things up.
                        </p>

                        <h2 id='paired-vai-and-vti-verbs'>Paired VAI and VTI verbs</h2>
                        <p>
                            Today’s dialog has some good examples of how verbs in different families with related meanings often have similar forms, but not always. For example, for cooking we have:
                        </p>
                        <p>
                            <strong>jiibaakwe – VAI, s/he cooks</strong>
                            <br /><strong>jiibaakwaadan – VTI, cook it!</strong>
                        </p>
                        <p>
                            But on the other hand, for eating we have entirely different forms:
                        </p>
                        <p>
                            <strong>wiisini – VAI, s/he eats</strong>
                            <br /><strong>miijin – VTI, eat it!</strong>
                        </p>
                        <p>
                            Fortunately, verb sets like those for eating are very rare. In the vast majority of cases, there is a close similarity between verbs of similar meaning across the VII, VAI, VTI, and VTA families. Pairs like <strong>wiisini / miijin</strong> take a little more effort to memorize but there aren’t many like that.
                        </p>
                        <p>
                            These verbs also have VTA counterparts, for cooking or eating something animate. Lots of things that we eat are animate, like apples, fish, deer, etc., so these words are common. Of course you would also use them if you are talking about cooking or eating a human, but hopefully that doesn’t come up very often.
                        </p>
                        <p>
                            <strong>amo – eat h/, eat it (anim)</strong>
                        </p>
                        <p>
                            <strong>jiibaakwaazh – cook h/, cook it (anim)</strong>
                        </p>
                        <p>
                            Again, the verb for eating is completely different from the VTI and VAI forms, whereas the word for cooking is closely related to its counterparts.
                        </p>

                        <h2 id='conjunct-form'>Conjunct form</h2>
                        <p>
                            Now, besides not having negative statements, a much bigger limitation in our dialogs has been the inability to include questions. We have had yes/no questions, but no questions involving Who? What? Where? When? Why? We have been avoiding this because questions require a different verb form known as the Conjunct. We have touched on it before but now it is time to teach about it more seriously.
                        </p>
                        <p>
                            Linguists use the term “order” to describe three major types of verb inflection in Ojibwe.
                        </p>
                        <p>
                            Independent: Nindizhaa. I go to a certain place.
                            <br />Conjunct: Izhaayaan. When/if/that I go to a certain place.
                            <br />Imperative: Izhaan! Go to a certain place!
                        </p>
                        <p>
                            The Independent order is the one we’ve been focusing on until now. The Imperative order is for commands. We have seen some commands because the citation form of VTI and VTA verbs is in the Imperative order. But this Conjunct order is mysterious so far.
                        </p>
                        <p>
                            You must use the Conjunct order in several different grammatical constructs in Ojibwe, and it’s hard to summarize what they all have in common. Essentially, it is whenever a verb depends on other parts of the sentence and doesn’t stand alone.
                        </p>
                        <p>
                            For example in English, imagine that we have a sentence containing two verbs:
                        </p>
                        <p>
                            I was singing when he walked in.
                        </p>
                        <p>
                            “I was singing” can stand alone as a sentence. But “when he walked in...” is not a complete sentence – the “when” in it tells you that there is something else to go with it. Your brain hears this and asks “what is the rest?” The Conjunct is required in situations like this, for at least one of the two verbs. The Conjunct is also required for most questions, unless they are yes/no questions. So any question that will use “Who, what, where, when, why, or how” in English will probably require a Conjunct form in Ojibwe.
                        </p>

                        <h3>Some general facts about the Conjunct forms:</h3>
                        <p>
                            Many of the conjugations that you have learned so far involve both a prefix (e.g. <strong>ni-</strong>, <strong>gi-</strong>, <strong>o-</strong>) and a suffix attached to the verb stem. Conjunct forms take their conjugations exclusively through suffixes – you will never see those <strong>ni-</strong>, <strong>gi-</strong>, <strong>o-</strong> prefixes on conjunct verbs. Before you rejoice too much about this, keep in mind that without the combination of prefix and suffix on the verb, all the possible combinations of subjects and objects need to be expressed through suffixes alone, so there are more Conjunct suffixes to memorize.
                        </p>
                        <p>
                            Every possible Independent form that you’ve learned so far (e.g. 1<sup>st</sup> person VAI <strong>niwiisin</strong>) has exactly one corresponding Conjunct form (e.g. 1<sup>st</sup> person VAI <strong>wiisiniyaan</strong>). So the verb charts will have exactly the same number of entries (although occasionally two entries can have exactly the same form, as you’ll see).
                        </p>
                        <p>
                            There are really two kinds of Conjunct. As we mentioned, the verb inflection happens through suffixes, but sometimes there is also something that happens at the beginning of a word. It’s not the addition of a prefix, but rather a change in the first vowel of the verb. This is a process called “initial change.” Not all uses of Conjunct verbs involve this initial change, but it is very common, and almost always used when asking questions involving the word “what?” So in this course, we are going to teach that there are two Conjunct forms – “Plain Conjunct” without the initial vowel change, and “Changed Conjunct” with the vowel change. You need to learn when the initial change happens, and which vowels change into which, but otherwise Plain Conjunct and Changed Conjunct are absolutely identical in their forms, especially the endings.
                        </p>
                        <p>
                            Let’s compare some Independent, Plain Conjunct, and Changed Conjunct forms for some VAI verbs. Before we start that, we will go ahead and show you all the initial changes that exist:
                        </p>
                        <table className='full-border'>
                            <tr>
                                <td>i</td>
                                <td>e</td>
                            </tr>
                            <tr>
                                <td>a</td>
                                <td>e</td>
                            </tr>
                            <tr>
                                <td>o</td>
                                <td>we</td>
                            </tr>
                            <tr>
                                <td>ii</td>
                                <td>aa</td>
                            </tr>
                            <tr>
                                <td>e</td>
                                <td>aye</td>
                            </tr>
                            <tr>
                                <td>oo</td>
                                <td>waa</td>
                            </tr>
                            <tr>
                                <td>aa</td>
                                <td>ayaa</td>
                            </tr>
                        </table>
                        <p>
                            You do not need to memorize these yet. We will have you memorize them through examples using the flashcards. But you can refer back to this table later.
                        </p>
                        <table className='full-border'>
                            <tr>
                                <th></th>
                                <th>citation form</th>
                                <th>Independent</th>
                                <th>plain conjunct</th>
                                <th>changed conjunct</th>
                                <th>English</th>
                            </tr>
                            <tr>
                                <td>niin</td>
                                <td>wiisini</td>
                                <td>niwiisin</td>
                                <td>wiisiniyaan</td>
                                <td>waasiniyaan</td>
                                <td>I eat.</td>
                            </tr>
                            <tr>
                                <td>niin</td>
                                <td>bimose</td>
                                <td>nimbimose</td>
                                <td>bimoseyaan</td>
                                <td>bemoseyaan</td>
                                <td>I walk.</td>
                            </tr>
                            <tr>
                                <td>niin</td>
                                <td>mawi</td>
                                <td>nimaw</td>
                                <td>mawiyaan</td>
                                <td>mewiyaan</td>
                                <td>I cry.</td>
                            </tr>
                            <tr>
                                <td>giin</td>
                                <td>wiisini</td>
                                <td>giwiisin</td>
                                <td>wiisiniyan</td>
                                <td>waasiniyan</td>
                                <td>You eat.</td>
                            </tr>
                            <tr>
                                <td>giin</td>
                                <td>bimose</td>
                                <td>gibimose</td>
                                <td>bimoseyan</td>
                                <td>bemoseyan</td>
                                <td>You walk.</td>
                            </tr>
                            <tr>
                                <td>giin</td>
                                <td>mawi</td>
                                <td>gimaw</td>
                                <td>mawiyan</td>
                                <td>mewiyan</td>
                                <td>You cry.</td>
                            </tr>
                            <tr>
                                <td>wiin</td>
                                <td>wiisini</td>
                                <td>wiisini</td>
                                <td>wiisinid</td>
                                <td>waasinid</td>
                                <td>S/he eats.</td>
                            </tr>
                            <tr>
                                <td>wiin</td>
                                <td>bimose</td>
                                <td>bimose</td>
                                <td>bimosed</td>
                                <td>bemosed</td>
                                <td>S/he walks.</td>
                            </tr>
                            <tr>
                                <td>wiin</td>
                                <td>mawi</td>
                                <td>mawi</td>
                                <td>mawid</td>
                                <td>mewid</td>
                                <td>S/he cries.</td>
                            </tr>
                        </table>
                        <p>
                            So we have told you that changed conjunct is commonly used with questions. What about plain conjunct? One common use is with the word <strong>giishpin</strong>, which is very similar to “if” in English.
                        </p>
                        <p>
                            <strong>Giishpin mawiyan, niwii-maajaa.</strong> If you cry, I’ll leave.
                        </p>
                        <p>
                            Here, “if you cry” is the dependent clause, which cannot stand alone as a sentence, and it requires the conjunct. “I’ll leave” is an independent clause that can stand alone, and so it uses the Independent form.
                        </p>
                        <p>
                            Knowing about initial change makes it easier to find words in a dictionary. For example, let’s suppose you don’t know the word <strong>inose</strong> “s/he walks to a certain place” and you find this sentence in a text that you are reading:
                        </p>
                        <p>
                            <strong>Aaniindi enoseyan?</strong> Where are you walking to?
                        </p>
                        <p>
                            So you recognize the <strong>-yan</strong> ending as marking the 2<sup>nd</sup> person singular conjunct form, and then you go to your dictionary to look up what you think is the citation form, but to your disappointment you find that there is no word <strong>*enose</strong>. But then you realize that this is a situation that requires initial change, so the actual citation form must be <strong>inose</strong>. And you are successful finding it in the dictionary. This will happen over and over again if you are learning from texts.
                        </p>
                        <p>
                            Terminology note: Many Ojibwe books and other resources refer to the Independent form as the “A form,” and the Conjunct as the “B form.” We often do this ourselves when talking about grammar, but in this course we will try to be more precise and refer to the Plain Conjunct and Changed Conjunct, because different sources vary in exactly what they mean by “B form.” Some use it to refer to both Plain Conjunct and Changed Conjunct, while some call changed Conjunct the “C form.” But some use “C form” to refer to the Imperative (command) forms. Some use “C form” to refer to participles (an advanced topic that we’ll cover later). Participles are almost identical to Changed Conjunct forms, but there are a few exceptions, and also some very significant variation by dialect. So to avoid most of this confusion, we will try to avoid referring to A and B forms. But you will see those terms elsewhere.
                        </p>

                        <h2 id='expressions-in-the-dialog'>Expressions in the dialog</h2>
                        <p>
                            <strong>Mii go maanoo</strong> – <strong>maanoo</strong> means something like “it doesn’t matter, it’s OK.” <strong>Mii</strong> and <strong>go</strong> are both common little particles that show up in all kinds of sentences and are fairly hard to translate – it is sort of like translating the English word “so.” Think about all the ways we use that – “this is so good! I didn’t like it so I left it. Soooo, I was wondering...”
                        </p>
                        <p>
                            Many sentences in Ojibwe start with <strong>Mii</strong>. Using <strong>mii</strong> naturally is something that takes a long time to master, with much exposure to the language needed. We don’t quite feel up to the challenge of explaining it in a simple rule or two in these introductory lessons. Most commonly, a sentence starting with <strong>mii</strong> will have its verb in the Conjunct form instead of the Independent form, although exceptions exist. For lots more information, you can check out the publication <i>All About Mii</i> by the Ojibwe linguist Brandon Fairbanks.
                        </p>
                        <p>
                            <strong>Gaawiin mashi</strong> – this is used to indicate that something hasn’t happened yet.
                        </p>
                        <p>
                            <strong>Maagizhaa gaye</strong> – <strong>Maagizhaa</strong> can mean “maybe” but it can also mean “or” as in “Do you want X or Y?” In this sentence, it sounds a bit more natural to add <strong>gaye</strong> – “also, additionally,” to make it clear that there is a choice – thigh or breast?
                        </p>
                        <p>
                            <strong>Gidoonaagan</strong> - Your plate. The basic word for plate is <strong>onaagan</strong>. You may recall that we previously discussed the phenomenon of “o-lengthening,” where an o at the beginning of a verb becomes a long vowel when used after a person prefix. E.g. <strong>ozhibii’ige</strong> - s/he writes. <strong>Gidoozhibii’ige</strong> - you write. The same thing happens for nouns when you use the person prefixes to indicate possession. With the addition of <strong>gi(d)-</strong>, the <strong>o</strong> in <strong>onaagan</strong> becomes long and we get <strong>gidoonaagan</strong>.
                        </p>
                        {<PageButtons prev={pagination.prev} next={pagination.next} />}
                    </div>
                </div>
            </main>
        </>
    )
}

export default Lesson8;