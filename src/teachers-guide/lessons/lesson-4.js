import React from 'react';
import Title from '../../components/title';
import DialoguePlayer from '../../components/dialogue-player';

const Lesson4 = ({ colors }) => {
    return (
        <div>
            <Title lesson='4' text='Lesson 4' accent={colors[1]}/>
            <h2 id='dialogue'>Dialogue</h2>
            <p>B goes to the general store.</p>
            <DialoguePlayer src='/assets/audio/Dialogue-4.mp3'/>
        
            <table className='dialogue-table'>
                <tr>
                    <td>A: Boozhoo/Aaniin! Ginandawendaan na gegoo?</td>
                    <td>A. Hello! Do you need something?</td>
                </tr>
                <tr>
                    <td>B: Eya’. Ninandawendaanan makizinan. Gidayaanan na makizanan?</td>
                    <td>B. Yes. I need shoes. Do you have (any) shoes?</td>
                </tr>
                <tr>
                    <td>A: Enya’. Nindayaanan makizanan. Geget onizhishinoon onow makizinan, gidinendam na gaye giin?</td>
                    <td>A. Yes. I have shoes. These shoes are really nice, don’t you think so too?</td>
                </tr>
                <tr>
                    <td>B: Agaasaawan aapiji iniw makizinan!</td>
                    <td>B. Those shoes are very small!</td>
                </tr>
                <tr>
                    <td>A: Haha, Ahaaw. Nawaj michaawan onow makizinan.</td>
                    <td>A. Haha, OK. These shoes are bigger.</td>
                </tr>
                <tr>
                    <td>B: Onizhishin! Chi-miigwech.</td>
                    <td>B. Beautiful! Thank you so much!</td>
                </tr>
                <tr>
                    <td>&nbsp;</td>
                    <td></td>
                </tr>
                <tr>
                    <td>B: Oonh, ninandawendaan gaye miijim. Gidayaawaag na mishiiminag? Ninandawenimaag aanind mishiiminag.</td>
                    <td>B: Oh, I also need food. Do you have apples? I need (some) apples.</td>
                </tr>
                <tr>
                    <td>&nbsp;</td>
                    <td></td>
                </tr>
                <tr>
                    <td>A: Mishiiminag na? Hmm. Nindayaawaa mishiimin, bezhigo eta.</td>
                    <td>A: Apples? Hmm. I have an apple, there is just one.</td>
                </tr>
                <tr>
                    <td>&nbsp;</td>
                    <td></td>
                </tr>
                <tr>
                    <td>B: Agaashiinyi a’aw mishiimin! Ninandawenimaag gaye okaadaakoog. Gidayaawaag na okaadaakoog?</td>
                    <td>B: That apple is small! I also need carrots. Do you have (any) carrots?</td>
                </tr>
                <tr>
                    <td>A: Okaadaakoog na? Hmm. Nindayaawaa okaadaak, bezhigo eta. Mindido a’aw okaadaak!</td>
                    <td>A: Carrots? Hmm. I have a carrot, just one. This carrot is big!</td>
                </tr>
                <tr>
                    <td>&nbsp;</td>
                    <td></td>
                </tr>
                <tr>
                    <td>B: Agaasaa aapiji o’ow adaawewigamig!</td>
                    <td>B: This is such a small store!</td>
                </tr>
                <tr>
                    <td>&nbsp;</td>
                    <td></td>
                </tr>
                <tr>
                    <td>A: Eya’, agaasaa go.</td>
                    <td>A: Yes, it is small.</td>
                </tr>
                <tr>
                    <td>B: Awashime daa-michaa sa.</td>
                    <td>B: It should be much bigger.</td>
                </tr>
                <tr>
                    <td>A: Baa-maa ganabaj awashime daa-michaa.</td>
                    <td>A: Perhaps later it could be bigger.</td>
                </tr>
                <tr>
                    <td>B: Baamaa giga-gaganoonin.</td>
                    <td>B: I will talk to you later.</td>
                </tr>
            </table>

            <p>
                Hold on to your shoes. We are packing a lot of grammar into this lesson. We will slow down on the grammar soon. Our main goal in this course is to teach you a good foundation of vocabulary through spaced repetition and dialogues, so we have to teach just enough grammar in order to make some realistic dialogues. This lesson represents the last of our “bare minimum grammar” that we need to start teaching you a wider variety of nouns and verbs. 
            </p>

            <h2 id='inanimate-nouns-and-plurals'>Inanimate nouns, and plurals</h2>
            <p>
                Animacy is an extremely important concept in Ojibwe grammar, so we will talk about it a lot in the early lessons. In order to talk about anything in Ojibwe, you need to know if it is animate or inanimate, as the words you choose will be based on that animacy status. 
                <br/>To help, we are going to get into plurals right away. It is tempting to wait a long time to teach plurals, since we can make all sorts of dialogues talking about one object at a time. But teaching plurals will help us talk about animate and inanimate nouns, because the easiest way to tell which nouns are animate is to look at their plural endings.
            </p>
            <p>
                Almost all inanimate nouns take an ending to make them plural, with that ending having the final letter “n.” The most common ending is “an.” 
                <br/>Here are some examples from words that we have learned so far:
            </p>
            <table className='full-border'>
                <tr>
                    <td>a table</td>
                    <td>adoopowin</td>
                    <td>tables</td>
                    <td>adoopowinan</td>
                </tr>
                <tr>
                    <td>a chair</td>
                    <td>apabiwin</td>
                    <td>chairs</td>
                    <td>apabiwinan</td>
                </tr>
                <tr>
                    <td>a plate</td>
                    <td>onaagan</td>
                    <td>plates</td>
                    <td>onaaganan</td>
                </tr>
                <tr>
                    <td>a shoe</td>
                    <td>makizin</td>
                    <td>shoes</td>
                    <td>makizinan</td>
                </tr>
            </table>

            <p>
                However, not all inanimate nouns take “an” as their plural ending; there are a few others, but they generally all end in “n.” Here’s an example.
            </p>

            <table className='full-border'>
                <tr>
                    <td>a store</td>
                    <td>adaawewigamig</td>
                    <td>stores</td>
                    <td>adaawewigamigoon</td>
                </tr>
                <tr>
                    <td>a ball</td>
                    <td>bikwaakwad</td>
                    <td>balls</td>
                    <td>bikwaakwadoon</td>
                </tr>
                <tr>
                    <td>a bag</td>
                    <td>mashkimod</td>
                    <td>bags</td>
                    <td>mashkimodan</td>
                </tr>
            </table>

            <p>
                The ending <strong>-oon</strong> is fairly common, although not nearly as common as <strong>-an</strong>. Sometimes it is predictable. For example, nearly all inanimate nouns ending in “g” take <strong>-oon</strong> as their plural ending. So the plural <strong>adaawewigamigoon</strong> is fairly predictable. Sometimes it’s not so predictable. We see here <strong>bikwaakwadoon</strong> – but it’s not the case that all nouns ending in “d” take this ending, since we also have <strong>mashkimodan</strong>. 
            </p>
            <p>
                Overall, you have to memorize the plural ending of every noun you know. To simplify this, in your spaced repetition exercises, we show the plural ending of every inanimate noun that ends in something other than <strong>-an</strong>, writing the word like this: 
                <br/><strong>bikwaakwad/oon</strong>
                <br/>Any time we teach you an inanimate noun without the slash showing the plural ending, you can assume that the ending is <strong>-an</strong>. (Although we’ll probably forget to specify an unexpected plural ending here and there).
            </p>
            <p>
                Here’s a bit of good news – in lesson 3 we discussed the locative ending <strong>-ing</strong>. Fortunately, you can usually predict the locative form from the plural. For most nouns with plural ending <strong>-an</strong>, the locative is <strong>-ing</strong>. For nouns with plural ending <strong>-oon</strong>, the locative is <strong>-ong</strong>. Unfortunately, there are some exceptions (especially for <strong>-an</strong> plurals like <strong>mashkimodaang</strong> below), so sometimes both plural and locative forms need to be memorized separately. You don’t have to worry about this much yet, but you should definitely take notice whenever you come across an unusual locative form. 
            </p>

            <table className='full-border'>
                <tr>
                    <th>English</th>
                    <th>base form</th>
                    <th>plural</th>
                    <th>locative</th>
                </tr>
                <tr>
                    <td>store</td>
                    <td>adaawewigamig</td>
                    <td>adaawewigamigoon</td>
                    <td>adaawewigamigong</td>
                </tr>
                <tr>
                    <td>table</td>
                    <td>adoopowin</td>
                    <td>adoopowinan</td>
                    <td>adoopowining</td>
                </tr>
                <tr>
                    <td>bag</td>
                    <td>mashkimod</td>
                    <td>mashkimodan</td>
                    <td>mashkimodaang</td>
                </tr>
            </table>

            <h2 id='animate-nouns-and-plurals'>Animate nouns, and plurals</h2>
            <p>
                It can be tricky to guess which nouns are animate and inanimate, but if you see them written in the plural form, that will tip you off. Animate nouns have their own plurals, usually ending in “g.” The most common ones are <strong>-ag</strong> and <strong>-wag</strong>. Unsurprisingly, most words referring to human beings and animals are animate, and most words referring to inanimate objects and abstract concepts are grammatically inanimate. But this rule is not foolproof. However, there are a fair number of nouns for biologically inanimate objects that are actually grammatically animate in Ojibwe. Many fruits and vegetables are among them. Therefore, in the second half of this lesson’s dialog, when B wants to buy some food, he needs to use some animate nouns and also the verbs that go with animate nouns. 
            </p>
            <p>
                There are many opinions about why such things are animate in Ojibwe, some of which get quite philosophical, but we don’t need to get into that here. View it as a property of the language – whenever you learn a noun, you need to learn whether it is animate or inanimate, and that fact will influence the plural endings that it takes, the verbs that go with it, and many other aspects of the language. For some nouns, the animacy varies by dialect. For example, the word for car, <strong>odaabaan</strong>, is inanimate in some places (plural <strong>odaabaanan</strong>) and animate in others (plural <strong>odaabaanag</strong>). Another notorious one is potato – <strong>opin</strong>. You often find this as inanimate in some places (plural <strong>opiniin</strong>) and animate elsewhere (plural <strong>opiniig</strong>). In general, words for people behave identically as words for objects that happen to grammatically animate. 
            </p>
            <p>
                Examples of animate plurals:
            </p>
            <table className='full-border'>
                <tr>
                    <td>an apple</td>
                    <td>mishiimin</td>
                    <td>apples</td>
                    <td>mishiiminag</td>
                </tr>
                <tr>
                    <td>a carrot</td>
                    <td>okaadaak</td>
                    <td>carrots</td>
                    <td>okaadaakoog</td>
                </tr>
                <tr>
                    <td>a man</td>
                    <td>inini</td>
                    <td>men</td>
                    <td>ininiwag</td>
                </tr>
                <tr>
                    <td>a woman</td>
                    <td>ikwe</td>
                    <td>women</td>
                    <td>ikwewag</td>
                </tr>
                <tr>
                    <td>my older sister</td>
                    <td>nimisenh</td>
                    <td>my older sisters</td>
                    <td>nimisenyag</td>
                </tr>
            </table>

            <p>
                Notice the variability in plural endings, although they all end in “g.” The ending <strong>-iig</strong> in <strong>opiniig</strong> will help you predict the ending for other kinds of noun forms that you will learn later, so the general rule that knowing the plural helps you predict other forms still applies. Also, we generally don’t like to just stick on an ending like <strong>-ag</strong> to a word that already ends in a vowel, so it’s common to insert a “w” sound as in <strong>ininiwag</strong> and <strong>ikwewag</strong>. For <strong>nimisenh</strong>, the letters <strong>“enh”</strong> really indicate a sort of “nasal vowel” (similar to French), not really a consonant, so this also needs another sound to connect it – in this case the “y.” 
            </p>
            <p>
                One other note - we are teaching ‘carrot’ as animate here and using it that way in the dialog, but many speakers have it as inanimate. 
            </p>

            <h2 id='vti-and-vta-verbs-introduction'>VTI and VTA verbs, introduction</h2>
            <p>
                We have now introduced the verb <strong>ayaan</strong> “have it, own it” from the VTI class. VTI is “verb transitive inanimate.” These are verbs used when an animate person or thing acts upon an inanimate thing – I bought a shirt, I am going to watch television, etc.  We also introduced <strong>ayaaw</strong> “have or own h/” from the VTA class. VTA is “verb transitive animate.” These are used when an animate person or thing acts upon another animate person or thing. VTA verbs have many many forms, and memorizing these forms is one of the hardest parts of learning Ojibwe. We will get there though! 
            </p>
            <p>
                We are introducing VTI and VTA at the same time here because it is important to understand the difference, and to know that the one you use depends on the thing being acted upon – inanimate nouns go with VTI verbs and animate nouns go with VTA. Just understanding this will help a lot, before we get into all the verb forms. 
            </p>
            <p>
                In the dialog, when B is talking about shoes, he needs to use VTI verbs like <strong>ayaan</strong>. When he’s talking about potatoes and apples, which happen to be animate, he needs to use the VTA equivalent <strong>ayaaw</strong>. Generally, VTI and VTA verbs with similar meanings will be similar in form as we see in this pair, although there are a few exceptions where they are very different. We will start getting into the conjugations for VTI and VTA verbs in the next lesson but for now we had to introduce them briefly in order to make meaningful sentences containing inanimate and animate nouns. 
            </p>

            <h2 id='plural-demonstrative-pronouns'>Plural demonstrative pronouns</h2>
            <p>
                This dialogue introduced more demonstrative pronouns: 
                <br/><strong>wa’aw</strong> – closer, animate, singular. Equivalent to “this” for animate nouns. 
                <br/><strong>a’aw</strong> – farther, animate, singular. Equivalent to “that” for animate nouns. 
            </p>
            <p>
                <strong>onow</strong> – closer, inanimate, plural. Equivalent to “these” for inanimate nouns. 
                <br/><strong>iniw</strong> – farther, inanimate, plural. Equivalent to “those” for inanimate nouns. 
            </p>
            <p>
                It is easy to remember <strong>onow</strong> and <strong>iniw</strong> once you have already memorized <strong>o’ow</strong> and <strong>i’iw</strong> from the last lesson. We stuck an “n” in them to make them plural. Since we are talking about inanimate things with these pronouns, this follows the general rule of using the letter “n” to form an inanimate plural. In today’s lesson, we’ve seen how to use the letter “g” to make an animate plural. This also shows up for the demonstrative pronouns. The animate plural forms are:
            </p>
            <p>
                <strong>ongow</strong> – closer, animate, plural. Equivalent to “these” for animate nouns. 
                <br/><strong>ingiw</strong> – farther, animate, plural. Equivalent to “those” for animate nouns. 
            </p>
            <p>
                You will sometimes see these as <strong>ogow</strong> and <strong>igiw</strong>, with only a “g” and no “n,” but there tends to be a little hint of a nasal “ng” sound in the middle for most speakers. Note that this sounds like a smooth “ng” sound like “Bingo!” and not a distinct n + g like you would hear in “own goal.”
            </p>
            <p>
                Examples:
            </p>
            <p>
                <strong>wa’aw ikwe</strong> – this woman
                <br/><strong>a’aw inini</strong> – that man
                <br/><strong>onow makizinan</strong> – these shoes
                <br/><strong>iniw mashkimodan</strong> – those bags
                <br/><strong>ongow ikwewag</strong> – these women
                <br/><strong>ingiw ininiwag</strong> – those men 
            </p>

            <h2 id='new-vai-and-vii-verbs'>New VAI and VII verbs</h2>
            <p>
                Today’s dialog has <strong>agaashiinyi</strong>, “s/he is small,” which is the VAI counterpart to the VII verb <strong>agaasaa</strong> that we learned previously. Note that we usually use the dictionary translation “s/he is small” to indicate that it’s a verb used for animate things, even though we would also use it to refer to an apple because that’s an animate noun. You will get used to this. We also have <strong>mindido</strong>, “s/he is big,” used here about a carrot. The VII equivalent is <strong>michaa</strong>, “it is big.” You can see how the two verbs in these verb “pairs” resemble each other, having the same first few letters, but they differ in the endings. Fortunately, many (or even most) pairs of related verbs are even more similar than these. We will often teach related verbs like these together, as that helps you memorize them and also to learn the patterns that will allow you to predict them eventually. 
            </p>
            <p>
                <b>Note on similar forms:</b>
                <br/>We have taught you three verbs that look quite similar. 
                <br/><strong>ayaa</strong> – VAI, s/he is in a certain place. 
                <br/><strong>ayaan</strong> – VTI, own it, have it. 
                <br/><strong>ayaaw</strong> – VTA, own h/, have h/. 
            </p>
            <p>
                Despite the similarity, these are three different verbs. They are all regular verbs, and will appear in different forms similar to other verbs in their class. <strong>Ayaan</strong> and <strong>ayaaw</strong> are a VTI/VTA pair. <strong>Ayaa</strong> is not paired with these, but it does have a VII counterpart that looks the same – also <strong>ayaa</strong>. Meaning “it is in a certain place.” Sometimes a VAI and a VII verb are identical in their citation form. But we still think of them as two different verbs, because the VAI <strong>ayaa</strong> appears in all the standard VAI conjugations (<strong>nindayaa</strong>, <strong>gidayaa</strong>, etc. ) and the VII form appears in standard VII conjugations, and these are quite different. You may also see the word <strong>ayaamagad</strong> for the VII form, using the suffix <strong>-magad</strong> to make it clear that we are talking about something inanimate. More on that in a future lesson.  
            </p>
            <p>
                Let’s take a look at the grammar in this lesson regarding these VTI/VTA verbs in chart form! This first chart is using the <em>vti</em> verb <strong>nandawendan</strong>, meaning “need/want something”. We are using independent or A form, we haven’t gotten into conjunct or B form yet. Also we are only looking at three persons in this chart and will be studying the other persons later. For now, we are going to look at how the verb has different forms depending on whether the <em>object</em> is singular or plural. 
            </p>
            <p>
                One more note about verbs and the dictionary - the Ojibwe People’s Dictionary gives a bit more information about some verbs, especially in the VTI family. The part of speech given in the dictionary may be simply VTI, or it may be VTI2, VTI3, or VTI4. You don’t really need to worry about this yet, but these “sub-classes” are simply groups of verbs that have similar conjugations to each other. We will be teaching you how to conjugate verbs using charts and having you memorize them using spaced repetition software, and at the beginning we will be teaching one verb at a time. Once you have learned many verbs, it might start to be helpful to group them into these classes, but it’s probably not helpful yet. Nonetheless, we do always provide the part of speech as listed in the OPD, so we wanted you to know why it may sometimes say VTI2 etc. There is also a VAI2. VTA and VII verbs don’t have any sub-classses in the OPD. 
            </p>

            <table className='full-border'>
                <tr>
                    <th>Person</th>
                    <th>Person w/ VTI</th>
                    <th>Translation</th>
                </tr>
                <tr>
                    <td>niin</td>
                    <td>ninandawendaan<br/>ninandawendaanan</td>
                    <td>I need/want it<br/>I need/want them</td>
                </tr>
                <tr>
                    <td>giin</td>
                    <td>ginandawendaan<br/>ginandawendaanan</td>
                    <td>you need/want it<br/>you need/want them</td>
                </tr>
                <tr>
                    <td>wiin</td>
                    <td>onandawendaan<br/>onandawendaanan</td>
                    <td>s/he needs/wants it<br/>s/he needs/wants them</td>
                </tr>
            </table>

            <p>
                And also the other <em>vti</em> <strong>ayaan</strong>, which is actually a VTI4. The special conjugations of the VTI4 class mainly come up in the Conjunct form. For the Independent form that we are learning now, it is very similar to any other VTI verb. 
            </p>

            <table className='full-border'>
                <tr>
                    <th>Person</th>
                    <th>Person w/ VTI</th>
                    <th>Translation</th>
                </tr>
                <tr>
                    <td>niin</td>
                    <td>nindayaan<br/>nindayaanan</td>
                    <td>I have/own it<br/>I have/own them</td>
                </tr>
                <tr>
                    <td>giin</td>
                    <td>gidayaan<br/>gidayaanan</td>
                    <td>you have/own it<br/>you have/own them</td>
                </tr>
                <tr>
                    <td>wiin</td>
                    <td>odayaan<br/>odayaanan</td>
                    <td>s/he has/owns it<br/>s/he has/owns them</td>
                </tr>
            </table>

            <p>
                Now let’s look at their related <em>vta</em> verbs, <strong>nandawenim</strong> and <strong>ayaaw</strong>. Here we are using “h/” (him or her) as the object for the English translation, but sometimes the translation could be “it” as well - if the object is animate, like an apple. But most commonly, for a word like <strong>ayaaw</strong> - “own h/” - you might be talking about a dog or a horse. 
            </p>
            <p>
                For these VTA forms, we are now presenting the “person” information with a little code indicating <em>both</em> persons that are involved in the scenario. For example, the first form given here <strong>nindandawenimaa</strong> has a first-person subject and a third-person object, so we indicate that by 1 → 3. For the next form, with the third-person object being plural (but the subject still being singular), we use a <em>p</em> to indicate plural, making 1 → 3p.
            </p>

            <table className='full-border text-center'>
                <tr>
                    <th>Person</th>
                    <th>Person w/ VTA</th>
                    <th>Translation</th>
                </tr>
                <tr>
                    <td>1 → 3<br/>1 → 3p</td>
                    <td>ninandawenimaa<br/>ninandawenimaag</td>
                    <td>I need/want h/<br/>I need/want them (anim)</td>
                </tr>
                <tr>
                    <td>2 → 3<br/>2 → 3p</td>
                    <td>ginandawenimaa<br/>ginandawenimaag</td>
                    <td>you need/want h/<br/>you need/want them (anim)</td>
                </tr>
                <tr>
                    <td>3 → 3’<br/>3 → 3’</td>
                    <td>onandawenimaan<br/>onandawenimaan</td>
                    <td>s/he needs/wants the other<br/>s/he needs/wants the others</td>
                </tr>
            </table>

            <table className='full-border text-center'>
                <tr>
                    <th>Person</th>
                    <th>Person w/ VTA</th>
                    <th>Translation</th>
                </tr>
                <tr>
                    <td>1 → 3<br/>1 → 3p</td>
                    <td>nindayaawaa<br/>nindayaawaag</td>
                    <td>I have/own h/<br/>I have/own them (anim)</td>
                </tr>
                <tr>
                    <td>2 → 3<br/>2 → 3p</td>
                    <td>gidayaawaa<br/>gidayaawaag</td>
                    <td>you have/own h/<br/>you have/own them (anim)</td>
                </tr>
                <tr>
                    <td>3 → 3’<br/>3 → 3’</td>
                    <td>odayaawaan<br/>odayaawaan</td>
                    <td>s/he has/owns the other<br/>s/he has/owns the others</td>
                </tr>
            </table>

            <p>
                You may be wondering about the 3 → 3’ forms. Why is it that we translate this as “s/he has/owns the other” instead of “s/he has/owns h/” or “s/he has/owns him or her?”
            </p>
            <p>
                The reason is that, in Ojibwe grammar, there is generally only <em>one</em> person at a time who is considered the “third person,” indicated by 3. If this third person is interacting with yet another person, that “other” person takes the “obviative” or “fourth person” forms, abbreviated as 3’. This feature of the grammar helps us keep track of who is who in a conversation. For example, if you have John and Bill in a story, and you said “He is looking for him” in English, you would not be able to tell easily which person is looking and which person is being looked for. In Ojibwe, it would be already established which person is 3 and which is 3’, thus resolving the ambiguity. You will learn much more about obviative forms and their usage later in this course, but again, it is something that should already be on your radar as a learner of the language. 
            </p>
            <p>
                An interesting aspect of Ojibwe grammar for VTA verbs is that the obviative forms have no plural - <strong>onandawenimaan</strong> can mean “He is looking for him (obv)” or “He is looking for them (obv).” This is true of the dialect that we are teaching in this course, which is loosely based on usage in Minnesota. There are some Northwestern Anishinaabe dialects that do actually have separate forms for obviative plurals in VTA, but we aren’t covering that here. Note that in the dialect for this course, VTI verbs <em>do</em> have separate plural forms for obviative persons, as you will see later. One more note - we often use “the other” or “the others” as the translation for obviative forms. Again, this is a convention for definitions, and it isn’t always the best translation for an actual sentence. It depends on the context. 
            </p>
            <p>
                Other new verbs: <strong>indendam</strong> – <em>vai2</em>, “s/he thinks a certain way, decides, agrees, consents”. We use it here with the <strong>adverb</strong> gaye (also, too) as a way of asking for someone’s agreement – <strong>gidinendam ina gaye giin</strong>? “Do you think so too?” Or “Don’t you think so” in more colloquial English. This is a good example of when you would use a standalone personal pronoun like <strong>giin</strong>. Even though you already have the <strong>gi-</strong> prefix on the verb, adding the pronoun gives you the chance to emphasize “you too?” 
            </p>
        </div>
    )
}

export default Lesson4;