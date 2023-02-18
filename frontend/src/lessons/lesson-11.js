import React from 'react';
import Title from '../components/title';
import MultiPlayer from '../components/multi-player';
import Sidebar from '../components/sidebar';
import PageButtons from '../components/page-buttons';
import LessonCSS from '../components/lesson-css';

const Lesson11 = () => {
    const sidebarLinks = [
        { title: 'Lesson 11', href: null },
        { title: 'Dialogue', href: '11#dialogue' },
        { title: 'More VTI Verbs', href: '11#more-vti-verbs' },
        { title: 'Conjunct Forms in the Dialog', href: '11#conjunct-forms-in-the-dialog' },
        { title: 'Usage of Conjunct Forms', href: '11#usage-of-conjunct-forms' },
        { title: 'Related Words', href: '11#related-words' }
    ];

    const themeColors = ['#EBC21E', '#F5E08C'];

    const pagination = {
        next: {
            href: '/lesson/12',
            text: 'Lesson 12'
        },
        prev: {
            href: '/lesson/10',
            text: 'Lesson 10'
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
                        <Title lesson='11' text='More VTI Verbs' />

                        <h2 id='dialogue'>Dialogue</h2>
                        
                        <MultiPlayer 
                            srcs={['/assets/audio/Dialogue_11.mp3', '/assets/audio/Dialogue_11_Slow.mp3']}
                            titles={['Normal', 'Slow']}
                        />

                        <table className='dialogue-table'>
                            <tr>
                                <td>A: Hay’!  Ningii-wiinitoon nimbabagiwayaan. Niwii-piinitoon. Gidayaan ina giziibiiga’igan?</td>
                                <td>A: Damn! I got my shirt dirty. I want to clean it. Do you have (laundry) soap?</td>
                            </tr>
                            <tr>
                                <td>&nbsp;</td>
                                <td></td>
                            </tr>
                            <tr>
                                <td>B: Niwii-kiziibiiga’ige aanawi noongom. Ninga-giziibiiga’aan gaye gibabagiwayaan.</td>
                                <td>B: I’m going to do laundry today anyway. I’ll wash your shirt too.</td>
                            </tr>
                            <tr>
                                <td>&nbsp;</td>
                                <td></td>
                            </tr>
                            <tr>
                                <td>A: Chi-miigwech! Aa, maagizhaa na gaye gidaa-giziibiiga’aanan nindazhiganan? Poohay! Geget maazhimaagwadoon!</td>
                                <td>A: Thanks so much! Ah, maybe you would wash my socks too? Pee-yoo! They really smell bad!</td>
                            </tr>
                            <tr>
                                <td>&nbsp;</td>
                                <td></td>
                            </tr>
                            <tr>
                                <td>B: Ahaaw, miinange. Gaawiin nindayaanziin bengwaasijigan. Ninga-agoodoonan gidazhiganan igaye gibabagiwayaan ji-baateg.</td>
                                <td>B: OK, of course. I don’t have a dryer. I will hang up your socks and shirt to dry.</td>
                            </tr>
                            <tr>
                                <td>&nbsp;</td>
                                <td></td>
                            </tr>
                            <tr>
                                <td>A: Niizho-diba’igan maagizhaa gaye niso-diba’igan da-dazhitaamagad. Aaniish ge-izhichigeyang      megwaa bii’oyang? Giwii-kanawaabandaan ina mezinaateseg? Niwii-kanawaabandaan <i>Wenji-mawine'angig Wenisininig Gichitwaa-makak</i>.</td>
                                <td>A: That will take two or three hours. What will we do while we wait? Do you want to watch a movie? I want to watch <i>Raiders of the Lost Ark!</i></td>
                            </tr>
                            <tr>
                                <td>&nbsp;</td>
                                <td></td>
                            </tr>
                            <tr>
                                <td>B: Aazha gosha gigii-kanawaabandaamin i’iw mezinaateseg! Gigii-wanendaan ina?</td>
                                <td>B: We already watched that movie as you know! Did you forget?</td>
                            </tr>
                            <tr>
                                <td>&nbsp;</td>
                                <td></td>
                            </tr>
                            <tr>
                                <td>A: Gaawiin ningii-wanendanziin. Aapiji niminwendaan i’iw mezinaateseg.</td>
                                <td>A: I didn’t forget. I really like that movie.</td>
                            </tr>
                            <tr>
                                <td>&nbsp;</td>
                                <td></td>
                            </tr>
                            <tr>
                                <td>B: Onzaam gete-ayi’iiwan. Nimisawendaan nawaj weshkayi’iiwang.</td>
                                <td>B: It’s too old. I want something newer.</td>
                            </tr>
                            <tr>
                                <td>&nbsp;</td>
                                <td></td>
                            </tr>
                            <tr>
                                <td>A: Ahaaw, giin dash onaabandan bezhig mezinaateseg!</td>
                                <td>A: Ok, you choose the one movie then!</td>
                            </tr>
                            <tr>
                                <td>&nbsp;</td>
                                <td></td>
                            </tr>
                            <tr>
                                <td>B: Memegwesi na gidaa-ganawaabandaamin? De-oshkayi’iiwan sa.</td>
                                <td>B: Should we (incl) watch The Hobbit? It is new enough.</td>
                            </tr>
                            <tr>
                                <td>&nbsp;</td>
                                <td></td>
                            </tr>
                            <tr>
                                <td>A: Ahaaw sa, gaawiin wiikaa ningii-kanawaabandanziin i’iw mashi. Daa-minwaatese sa.</td>
                                <td>A: Ok, I have never watched that yet. It should be a good movie.</td>
                            </tr>
                            <tr>
                                <td>&nbsp;</td>
                                <td></td>
                            </tr>
                            <tr>
                                <td>B: Ahaaw, giga-maajii-mazinaatesijigemin. Wegonen waa-minikwaadamang megwaa mazinaateseg?</td>
                                <td>B: Ok, we (incl) will start the movie. What will we drink as the movie is playing?</td>
                            </tr>
                            <tr>
                                <td>&nbsp;</td>
                                <td></td>
                            </tr>
                            <tr>
                                <td>A: Ningii-naagadawendaan i’iw asasaweminaaboo. Giin dash, aaniin enendaman?</td>
                                <td>A: I was thinking of that chokecherry tea. And you, what do you think?</td>
                            </tr>
                            <tr>
                                <td>&nbsp;</td>
                                <td></td>
                            </tr>
                            <tr>
                                <td>B: Naasaab gaye niin, maamakaaj ningii-naagadawendaan i’iw asasaweminaaboo gaye.</td>
                                <td>B: Same as me too, amazing I thought of that chokecherry tea also.</td>
                            </tr>
                            <tr>
                                <td>&nbsp;</td>
                                <td></td>
                            </tr>
                            <tr>
                                <td>A: Geget ina gigii-naagadawendaan i’iw gaye giin? Ahaaw, gabe-ayi’ii gii-ate imaa nindataasowining, ninga-ozhitoon.</td>
                                <td>A: Did you really think of that also? Ok, it has been in my cupboard for a long time, I shall make it.</td>
                            </tr>
                        </table>

                        <h2 id='more-vti-verbs'>More VTI verbs.</h2>
                        <p>
                            We will teach a few more facts about VTI verbs in this lesson. We have several new ones in here ending in <strong>-oon</strong>. As mentioned in the last lesson, these are known to linguists as /-oo/ theme verbs. They are also listed in the Ojibwe People’s Dictionary and elsewhere as “<em>vti2</em>,” with plain old “<em>vti</em>” referring to the /-am/ theme verbs like <strong>waabandan</strong>. In this lesson we have <strong>wiinitoon</strong> – get it dirty, <strong>biinitoon</strong> – clean it, and <strong>agoodoon</strong> – hang it, hang it up. The ending of the citation form (command) is the same as the ending for the independent positive forms. So in that sense, <em>vti2</em> verbs are actually simpler than <em>vti</em>. Here is a full chart. For the full chart, we will actually use a different verb that wasn’t in the dialog, but conjugates identically. You should get used to that :)
                            <br />Our chosen verb is mamoon – take it, pick it up. As in “Here, take my wallet,” not “Take the freeway.”
                        </p>
                        <table className='full-border'>
                            <tr>
                                <th>person</th>
                                <th>verb</th>
                                <th>translation</th>
                            </tr>
                            <tr>
                                <td>1 → 0</td>
                                <td><span style={{ color: 'red' }}>ni</span>mam<span style={{ color: 'red' }}>oon</span></td>
                                <td>I take it.</td>
                            </tr>
                            <tr>
                                <td>1 → 0p</td>
                                <td><span style={{ color: 'red' }}>ni</span>mam<span style={{ color: 'red' }}>oonan</span></td>
                                <td>I take them (inan).</td>
                            </tr>
                            <tr>
                                <td>2 → 0</td>
                                <td><span style={{ color: 'red' }}>gi</span>mam<span style={{ color: 'red' }}>oon</span></td>
                                <td>You take it.</td>
                            </tr>
                            <tr>
                                <td>2 → 0p</td>
                                <td><span style={{ color: 'red' }}>gi</span>mam<span style={{ color: 'red' }}>oonan</span></td>
                                <td>You take them (inan).</td>
                            </tr>
                            <tr>
                                <td>3 → 0</td>
                                <td><span style={{ color: 'red' }}>o</span>mam<span style={{ color: 'red' }}>oon</span></td>
                                <td>S/he takes it.</td>
                            </tr>
                            <tr>
                                <td>3 → 0p</td>
                                <td><span style={{ color: 'red' }}>o</span>mam<span style={{ color: 'red' }}>oonan</span></td>
                                <td>S/he takes them them (inan).</td>
                            </tr>
                            <tr>
                                <td>3’ → 0/0p</td>
                                <td><span style={{ color: 'red' }}>o</span>mam<span style={{ color: 'red' }}>oonini</span></td>
                                <td>The other takes it/them.</td>
                            </tr>
                            <tr>
                                <td>1p → 0/0p</td>
                                <td><span style={{ color: 'red' }}>ni</span>mam<span style={{ color: 'red' }}>oomin</span></td>
                                <td>We (excl) take it/them.</td>
                            </tr>
                            <tr>
                                <td>21 → 0/0p</td>
                                <td><span style={{ color: 'red' }}>gi</span>mam<span style={{ color: 'red' }}>oomin</span></td>
                                <td>We (incl) take it/them.</td>
                            </tr>
                            <tr>
                                <td>2p → 0</td>
                                <td><span style={{ color: 'red' }}>gi</span>mam<span style={{ color: 'red' }}>ooaanaawaa</span></td>
                                <td>You (pl) take it.</td>
                            </tr>
                            <tr>
                                <td>2p → 0p</td>
                                <td><span style={{ color: 'red' }}>gi</span>mam<span style={{ color: 'red' }}>oonaawaan</span></td>
                                <td>You (pl) take them.</td>
                            </tr>
                            <tr>
                                <td>3p → 0</td>
                                <td><span style={{ color: 'red' }}>o</span>mam<span style={{ color: 'red' }}>oonaawaa</span></td>
                                <td>They (anim) take it.</td>
                            </tr>
                            <tr>
                                <td>3p → 0p</td>
                                <td><span style={{ color: 'red' }}>o</span>mam<span style={{ color: 'red' }}>oonaawaan</span></td>
                                <td>They (anim) take them (inan).</td>
                            </tr>
                            <tr>
                                <td>X → 0/0p</td>
                                <td>mam<span style={{ color: 'red' }}>oom</span></td>
                                <td>It is taken/They (inan) are taken.</td>
                            </tr>
                        </table>
                        <p>
                            These conjugations are pretty straightforward and similar to those of <em>vti</em> verbs. We also have a funny verb in this lesson, <strong>ayaan</strong> – have it (own it). This is the ordinary word for having something, either on your person or at home - “I have my wallet; I have a stove; etc.” This one is almost in a class by itself, although there are a couple of other verbs in the same class, termed <em>vti4</em> in the OPD. We don’t think you need to drill a whole chart for <strong>ayaan</strong>, as it’s almost identical to the <em>vti</em> class, but for reference here is the full chart to refer to. We have not included it in the full chart SRS exercises. The only difference really between <em>vti4</em> and regular <em>vti</em> is that the citation form already ends in <strong>-aan</strong>, not <strong>-an</strong>, so we don’t lengthen it any further (there are no triple vowels in Ojibwe, thank goodness!) so the ending remains <strong>-aan</strong>.
                        </p>
                        <table className='full-border'>
                            <tr>
                                <th>person</th>
                                <th>verb</th>
                                <th>translation</th>
                            </tr>
                            <tr>
                                <td>1 → 0</td>
                                <td><span style={{ color: 'red' }}>nind</span>ayaa<span style={{ color: 'red' }}>n</span></td>
                                <td>I have it.</td>
                            </tr>
                            <tr>
                                <td>1 → 0p</td>
                                <td><span style={{ color: 'red' }}>nind</span>ayaa<span style={{ color: 'red' }}>nan</span></td>
                                <td>I have them (inan).</td>
                            </tr>
                            <tr>
                                <td>2 → 0</td>
                                <td><span style={{ color: 'red' }}>gid</span>ayaa<span style={{ color: 'red' }}>n</span></td>
                                <td>You have it.</td>
                            </tr>
                            <tr>
                                <td>2 → 0p</td>
                                <td><span style={{ color: 'red' }}>gid</span>ayaa<span style={{ color: 'red' }}>nan</span></td>
                                <td>You have them (inan).</td>
                            </tr>
                            <tr>
                                <td>3 → 0</td>
                                <td><span style={{ color: 'red' }}>od</span>ayaa<span style={{ color: 'red' }}>n</span></td>
                                <td>S/he has it.</td>
                            </tr>
                            <tr>
                                <td>3 → 0p</td>
                                <td><span style={{ color: 'red' }}>od</span>ayaa<span style={{ color: 'red' }}>nan</span></td>
                                <td>S/he has them (inan).</td>
                            </tr>
                            <tr>
                                <td>3’ → 0/0p</td>
                                <td><span style={{ color: 'red' }}>od</span>ayaa<span style={{ color: 'red' }}>nini</span></td>
                                <td>The other has it/them.</td>
                            </tr>
                            <tr>
                                <td>1p → 0/0p</td>
                                <td><span style={{ color: 'red' }}>nind</span>ayaa<span style={{ color: 'red' }}>min</span></td>
                                <td>We (excl) have it/them.</td>
                            </tr>
                            <tr>
                                <td>21 → 0/0p</td>
                                <td><span style={{ color: 'red' }}>gid</span>ayaa<span style={{ color: 'red' }}>min</span></td>
                                <td>We (incl) have it/them.</td>
                            </tr>
                            <tr>
                                <td>2p → 0</td>
                                <td><span style={{ color: 'red' }}>gid</span>ayaa<span style={{ color: 'red' }}>naawaa</span></td>
                                <td>You (pl) have it.</td>
                            </tr>
                            <tr>
                                <td>2p → 0p</td>
                                <td><span style={{ color: 'red' }}>gid</span>ayaa<span style={{ color: 'red' }}>naawaan</span></td>
                                <td>You (pl) have them.</td>
                            </tr>
                            <tr>
                                <td>3p → 0</td>
                                <td><span style={{ color: 'red' }}>od</span>ayaa<span style={{ color: 'red' }}>naawaa</span></td>
                                <td>They (anim) have it.</td>
                            </tr>
                            <tr>
                                <td>3p → 0p</td>
                                <td><span style={{ color: 'red' }}>od</span>ayaa<span style={{ color: 'red' }}>naawaan</span></td>
                                <td>They (anim) have them (inan).</td>
                            </tr>
                            <tr>
                                <td>X → 0/0p</td>
                                <td>ayaa<span style={{ color: 'red' }}>m</span></td>
                                <td>Someone has it/them (inan).</td>
                            </tr>
                        </table>

                        <h2 id='conjunct-forms-in-the-dialog'>Conjunct forms in the dialog</h2>
                        <p>
                            We haven’t systematically taught Conjunct forms as a full chart yet, but we have introduced the concept and have gradually been slipping some Conjuncts into the dialogs as we go. Conjuncts are an important part of Ojibwe, and our dialogs would be extremely constrained and artificial if we avoided them, although we did try our best to avoid them in the early lessons. In today’s dialog, we have put in a few more. Here we are going to look a bit more at a partial chart for a VAI conjunct form to help you recognize some of the endings. The endings for VAI conjuncts are very similar for VTI too, so it helps to get familiar with them. We’ll look at the verb <strong>bii’o</strong> – s/he waits. For simplicity, we’ll translate the conjunct forms using “if” as the first word, but it could also be “that” or “when” or no helper word at all, depending on the context.
                        </p>
                        <table className='full-border'>
                            <tr>
                                <th>person</th>
                                <th>Independent form</th>
                                <th>Conjunct form</th>
                                <th>Conjunct translation</th>
                            </tr>
                            <tr>
                                <td>1</td>
                                <td><span style={{ color: 'red' }}>nim</span>bii’</td>
                                <td>bii’o<span style={{ color: 'red' }}>yaan</span></td>
                                <td>If I wait.</td>
                            </tr>
                            <tr>
                                <td>2</td>
                                <td><span style={{ color: 'red' }}>gi</span>bii’</td>
                                <td>bii’o<span style={{ color: 'red' }}>yan</span></td>
                                <td>If you wait.</td>
                            </tr>
                            <tr>
                                <td>3</td>
                                <td>bii’o</td>
                                <td>bii’o<span style={{ color: 'red' }}>d</span></td>
                                <td>If s/he waits.</td>
                            </tr>
                            <tr>
                                <td>1p</td>
                                <td><span style={{ color: 'red' }}>nim</span>bii’o<span style={{ color: 'red' }}>min</span></td>
                                <td>bii’o<span style={{ color: 'red' }}>yaang</span></td>
                                <td>If we (excl) wait.</td>
                            </tr>
                            <tr>
                                <td>21</td>
                                <td><span style={{ color: 'red' }}>gi</span>bii’o<span style={{ color: 'red' }}>min</span></td>
                                <td>bii’o<span style={{ color: 'red' }}>yang</span></td>
                                <td>If we (incl) wait.</td>
                            </tr>
                        </table>
                        <p>
                            You can note some very regular patterns in here. In the independent forms, there is a certain parallelism between 1<sup>st</sup> and 2<sup>nd</sup> person on one hand, and exclusive and inclusive we on the other. <strong>Ni-</strong> occurs in forms that don’t include “you,” and <strong>Gi-</strong> occurs in forms that do include “you.” For the conjunct, the parallelism is also there – we have the endings <strong>-yaan</strong> and <strong>-yan</strong> for 1<sup>st</sup> and 2<sup>nd</sup> person singular, and then <strong>-yaang</strong> and <strong>-yang</strong> for exclusive and inclusive we. Note that the pronunciation distinction between <strong>aa</strong> and <strong>a</strong> is absolutely critical for distinguishing these. Also, in some dialects (but not what we are teaching here), <strong>yan</strong> and <strong>yang</strong> are pronounced and written as <strong>yin</strong> and <strong>ying</strong>  - you may come across that in other materials.
                        </p>

                        <h2 id='useage-of-conjunct-forms'>Usage of conjunct forms</h2>
                        <p>
                            The dialog contains the phrase <strong>megwaa bii’oyang</strong> – while we (incl) wait. This has to be a conjunct form because it is not an independent clause: while we wait, something else happens, and that something else would be expressed with an Independent verb form. But actually in our dialog, the main clause of that sentence is a changed conjunct, because it is a “what question” – what will we do while we wait? <strong>Aaniin ge-izhichigeyang megwaa bii’oyang?</strong>
                        </p>
                        <p>
                            <strong>Izhichige</strong> is a verb meaning “s/he does such a thing.” The changed conjunct by itself for “if we wait” would be <strong>ezhichigeyang</strong>, but since we are using the future tense prefix <strong>ga-</strong>, that prefix takes the initial change instead, so we get <strong>ge-izhichigeyang</strong>.
                        </p>
                        <p>
                            There are a few other changed conjuncts and participles in the dialog.
                            <br />In discussing the movies, we introduce the verb <strong>gete-ayi’iiwan</strong> – it is old. This is contrasted with the verb <strong>oshkayi’iiwan</strong> – it is new. The preverbs <strong>gete-</strong> (old) and <strong>oshki-</strong> (new) are used in many verbs. Then we want to transform <strong>oshkayi’iiwan</strong> into a participle “something that is new, one that is new, a new one.” We add the conjunct ending <strong>-g</strong> and also apply the initial change <strong>o → we</strong>, giving us <strong>weshkayi’iiwang</strong>. Since in the dialog we are actually making a comparison, saying “something newer” instead of “something new,” we add the comparative word <strong>nawaj</strong> – “more.”
                        </p>
                        <p>
                            This form <strong>weshkayi’iiwang</strong> is, according to linguists, a participle, but it is identical in form to a changed conjunct. They only become differentiated in the plural – you can often make a participle plural by adding the ending <strong>-in</strong>. So if you want to say “the new ones, the ones who are new,” you can make the form <strong>weshkayi’iiwangin</strong>. This form is strictly a participle, no longer a changed conjunct.
                        </p>
                        <p>
                            So this brings us to our next participle in the dialog, <strong>ji-baateg</strong>.
                            <br />First, we have a little preverb <strong>ji-</strong> that means something like “in order to, for the purpose of...”
                            <br />We have the sentence
                        </p>
                        <table>
                            <tr>
                                <td><strong>Ninga-</strong></td>
                                <td><strong>agoodoonan&nbsp;</strong></td>
                                <td><strong>gidazhiganan&nbsp;</strong></td>
                                <td><strong>igaye&nbsp;</strong></td>
                                <td><strong>gibabagiwayaan&nbsp;</strong></td>
                                <td><strong>ji-baategin.</strong></td>
                            </tr>
                            <tr>
                                <td>I will&nbsp;</td>
                                <td>hang up (pl)&nbsp;</td>
                                <td>your socks&nbsp;</td>
                                <td>and&nbsp;</td>
                                <td>your shirt&nbsp;</td>
                                <td>to dry.</td>
                            </tr>
                        </table>
                        <p>&nbsp;</p>
                        <p>
                            We have the VII verb <strong>baate</strong> – it dries. Plain conjunct form is <strong>baateg</strong>. <strong>Baate</strong> is a VII verb ending in a vowel, and therefore its conjugations are identical to those of <strong>michaa</strong>, which you already have a full chart for. The plural independent form “they dry” would be <strong>baatewan</strong>. For the conjunct forms, singular and plural are the same in the dialect that we are teaching. <strong>Baateg</strong> can mean both “if it dries” and “if they (inan) dry.” This convergence of singular and plural forms in the conjunct makes life a little simpler, but it is not universal. Some dialects do have a special plural form, which would be <strong>baategin</strong>. Also, some dialects use <strong>da-</strong> instead of <strong>ji-</strong> for this meaning of “in order to.” Thus, besides <strong>ji-baateg</strong> as we used here, some speakers might say <strong>ji-baategin</strong>, or <strong>da-baategin</strong>, or <strong>da-baateg</strong>, depending on which specific combination of features their dialect has. You don’t need to memorize all that, but we point it out here in case you ever come across it. The version taught here seems to be the most widespread way to say it as far as we can tell.
                        </p>
                        <p>
                            <strong>gosha</strong> – This is one of those little words in Ojibwe that take a lifetime to master. It basically expresses some kind of objection – many equivalent sentences in English would start with “But.” It is like saying ‘I told you so’ or ‘of course’. The OPD only states that it is an ‘emphatic word’, if we take a look at FreeLang Ojibwe Online Dictionary, it has several close translations. Here we use it with the translation “as you know.” In general, <strong>gosha</strong> often has a certain tone of annoyance or exasperation with the listener.
                        </p>

                        <h2 id='related-words'>Related words</h2>
                        <p>
                            Today’s dialog features several closely related words, showing how different endings attached to a common stem can generate different meanings, and different parts of speech.
                        </p>
                        <p>
                            <strong>giziibiiga’an</strong> – wash it, VTI
                            <br />There is a paired VTA form <strong>giziibiiga’</strong> – wash h/. This kind of pair is very common.
                        </p>
                        <p>
                            The VTI verb gets conjugated to <strong>Ninga-giziibiiga’aan</strong> – I will wash it. Note the lengthening of <strong>a</strong> to <strong>aa</strong> in the ending. We also have the plural object form <strong>gidaa-giziibiiga’aanan</strong> – you could wash them? Note that both of the preverbs in these examples, <strong>ga</strong> (definite future) and <strong>daa-</strong> (would/could/should) do <i>not</i> trigger a consonant change from <strong>g</strong> to <strong>k</strong> on the following verb. Only <strong>wii</strong> (non-definite future) and <strong>gii-</strong> (past) do that. So we do see that consonant change in the VAI <strong>Niwii-kiziibiiga’ige</strong> – I will wash things, do laundry.
                        </p>
                        <p>
                            The ending <strong>-ige</strong> is a very common way to turn a VTI verb into a VAI verb. Some linguists call it a “detransitive” form – we took a transitive verb (washing a specific item) and turned it into an intransitive verb (washing, but with no specific object mentioned).
                        </p>
                        <p>
                            Another useful ending is <strong>-igan</strong>, (or sometimes just <strong>-gan</strong>), which turns a verb into a noun, and is usually used for an object commonly associated with an action. Here we have <strong>giziibiiga’igan</strong> – soap, although in some dialects the same word can mean an item of laundry, something to be washed.
                        </p>
                        {<PageButtons prev={pagination.prev} next={pagination.next} />}
                    </div>
                </div>
            </main>
        </>
    )
}

export default Lesson11;