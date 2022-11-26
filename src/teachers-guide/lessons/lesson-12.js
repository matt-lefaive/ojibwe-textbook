import React from 'react';
import Title from '../../components/title';
import DialoguePlayer from '../../components/dialogue-player';

const Lesson12 = () => {
    return (
        <div>
            <Title lesson='12' text='Meet and Greet, Getting to Know Each Other' />
            
            <h2 id='dialogue'>Dialogue</h2>
            <DialoguePlayer src='/assets/audio/Dialogue-12.mp3'/>

            <table className='dialogue-table'>
                <tr>
                    <td>A: Aaniin! Aaniish ezhinikaazoyan?</td>
                    <td>A: Hello! What is your name?</td>
                </tr>
                <tr>
                    <td>&nbsp;</td>
                    <td></td>
                </tr>
                <tr>
                    <td>B: Boozhoo! Aandeg nindizhinikaaz. Giin dash? Aaniish ezhinikaazoyan?</td>
                    <td>B: Hi! My name is Aandeg (“Crow”). And you? What’s your name?</td>
                </tr>
                <tr>
                    <td>&nbsp;</td>
                    <td></td>
                </tr>
                <tr>
                    <td>A: Anang nindizhinikaaz. Aaniindi wenjibaayan?</td>
                    <td>A: My name is Anang (“Star”). Where are you from?</td>
                </tr>
                <tr>
                    <td>&nbsp;</td>
                    <td></td>
                </tr>
                <tr>
                    <td>B: Misi-zaaga’iganing nindoonjibaa. Giin dash?</td>
                    <td>B: I’m from Mille Lacs. And you?</td>
                </tr>
                <tr>
                    <td>&nbsp;</td>
                    <td></td>
                </tr>
                <tr>
                    <td>A: Gakaabikaang nindoonjibaa. Gimisenh na gaye danakii omaa?</td>
                    <td>A: I’m from Minneapolis. Your sister lives here too?</td>
                </tr>
                <tr>
                    <td>&nbsp;</td>
                    <td></td>
                </tr>
                <tr>
                    <td>B: Eya’, ningii-pi-izhigozimin maamawi omaa.</td>
                    <td>B: Yes, we moved here together.</td>
                </tr>
                <tr>
                    <td>&nbsp;</td>
                    <td></td>
                </tr>
                <tr>
                    <td>A: Aaniish ezhinikaazod wiin?</td>
                    <td>A: What’s her name?</td>
                </tr>
                <tr>
                    <td>&nbsp;</td>
                    <td></td>
                </tr>
                <tr>
                    <td>B: Opichi izhinikaazo. Moozhag dash “Robin” nindizhinikaanaa.</td>
                    <td>B: Her name is Opichi (“Robin”). But I usually call her “Robin.”</td>
                </tr>
                <tr>
                    <td>&nbsp;</td>
                    <td></td>
                </tr>
                <tr>
                    <td>A: Giwiii-babaa-ganawaabandaan ina  o’ow gichi-oodena?</td>
                    <td>A: Would you like to go look around this city?</td>
                </tr>
                <tr>
                    <td>&nbsp;</td>
                    <td></td>
                </tr>
                <tr>
                    <td>B: Maamakaaj, geget ina giwii-izhichige i’iw? Mii sa i’iw wenizhishing.</td>
                    <td>B: Wow, would you really do that? That is great.</td>
                </tr>
                <tr>
                    <td>&nbsp;</td>
                    <td></td>
                </tr>
                <tr>
                    <td>A: Ahaaw, giga-awi-boozimin nindoodaabaaning.</td>
                    <td>A: Ok, let’s go get into my car.</td>
                </tr>
                <tr>
                    <td>&nbsp;</td>
                    <td></td>
                </tr>
                <tr>
                    <td>B: Mii na a’aw gidoodaabaan? Aapiji minonaagozi.</td>
                    <td>B: So is that your car? It really looks nice.</td>
                </tr>
                <tr>
                    <td>&nbsp;</td>
                    <td></td>
                </tr>
                <tr>
                    <td>A: Aaniin waa-inanokiiyan omaa gichi-oodenaang?</td>
                    <td>A: What kind of work do you want to do here in the big city?</td>
                </tr>
                <tr>
                    <td>&nbsp;</td>
                    <td></td>
                </tr>
                <tr>
                    <td>B: Anishinaabemowin niwii-gikinoo’amaagen. Giin dash, aaniish enanokiiyan omaa?</td>
                    <td>B: I want to teach the Anishinaabe language. And you, what kind of work do you do here?</td>
                </tr>
                <tr>
                    <td>&nbsp;</td>
                    <td></td>
                </tr>
                <tr>
                    <td>A: Waasamowinikewinini nindaaw. Nashke imaa! Gikinoo’amaadiiwigamig imaa, gidaa-nandawanokii imaa. Miinawaa gaye niibowa atewan gikinoo’amaadiiwigamigoon omaa gichi-oodenaang.</td>
                    <td>A: I am an electrician. Look there! A school there, you should look for work there. And also there are many schools here in the big city.</td>
                </tr>
            </table>

            <h2 id='grammar'>Grammar</h2>
            <p>
                There is hardly any new grammar in today’s lesson. For the half-way point in this 24-lesson course, we wanted a lesson to review and reinforce some material already presented. However, in lesson 12 we are finally presenting you some material that would often be covered in lesson 1 of a language course – basic introductions and greetings. But now you have seen all the relevant grammar that explains these common expressions, so you will be able to understand them fully instead of simply memorizing them as long words. The exception is <strong>Giga-waabamin miinawaa</strong>, which we still haven’t fully explained, but we’ll get there soon! 
            </p>
            <p>
                <strong>Aaniin</strong> is actually a question word meaning “how/what,” and is used as a greeting, sort of short for “how are you?” or “how’s it going?” In a case where it means ‘what’, it is those questions where you are not specifically referring to an object, like ‘what are you doing?’ <strong>aaniin ezhichigeyan?</strong> When you are referring to an object the question starts with <strong>wegonen</strong>.
            </p>
            <p>
                <strong>Boozhoo</strong> is another common word for “hello” or “hi,” a bit more casual perhaps. Opinions vary on whether or not it comes from the French “bonjour.” Another possibility is that it comes from <strong>Nenaboozhoo</strong>, a popular figure in Ojibwe folklore. 
            </p>
            <p>
                <strong>Aaniish/Aaniin ezhinikaazoyan</strong> – “what’s your name,” or more literally “How are you named, how do you call yourself?” <strong>Aaniish</strong> is an alternative form of <strong>aaniin</strong> meaning how (and is completely interchangeable with <strong>aaniin</strong>). Then the next word comes from the VAI verb <strong>izhinikaazo</strong> – “s/he has such a name; s/he is called by such a name.” Since we are asking a question, this verb goes into a changed conjunct form – we change the initial <strong>i</strong> to an <strong>e</strong> and then add the second person singular Conjunct ending <strong>-yan</strong>. Later, we have a third person form asking about the sister’s name, so that takes the Conjunct ending <strong>-d</strong>.
            </p>
            <p>
                <strong>Aaniindi wenjibaayan?</strong> – This question is nearly identical in grammar to the last one. It means “Where are you from?” <strong>Aaniindi</strong> is a question word for “where?” Then we have the VAI verb <strong>onjibaa</strong> – s/he is from a certain place. This has to go into changed conjunct form, and the initial vowel change that applies is <strong>o → we</strong>. And again, we stick on the <strong>-yan</strong> ending.
            </p>
            <p>
                Note that the answers to the questions are in the regular Independent form, not Conjunct.
            </p>
            <p>
                We have a couple of place names in this lesson. <strong>Misi-zaaga’igan</strong>, “great lake,” is the Ojibwe name for the Mille Lacs reservation in Minnesota. This community has produced a great deal of written material and exerted a huge influence on 21<sup>st</sup> century Ojibwe. Because the authors of this course have been influenced by this material, the present course is mostly based on the Mille Lacs dialect, although our speakers are from a few different places and traces of their dialects may also show up sometimes. We also have <strong>Gakaabikaang</strong>, “at the waterfalls,” the name for the city of Minneapolis. Place names are a fun way of increasing your vocabulary!
            </p>
            <p>
                Then we have <strong>nindizhinikaanaa</strong>. Although it resembles the VAI verb <strong>izhinikaazo</strong>, this is actually a VTA verb <strong>izhinikaazh</strong> – “call h/ by a certain name.” That is, it refers to the fact that <i>I</i> call <i>her</i> a certain name, which is a little different than “her name is.” This is a good example of how multiple related verbs exist across the four verb classes. In fact, for this particular word family, all four verb categories are represented. You don’t need to memorize all these right now, but it’s a good illustration of how the same elements can show up in different verb types. 
            </p>
            <p>
                <strong>izhinikaazo</strong> – VAI, “s/he has such a name; s/he is called by such a name.”
            </p>
            <p>
                <strong>izhinikaade</strong> – VII, “it has such a name; it is called by such a name.” 
            </p>
            <p>
                <strong>izhinikaadan</strong> – VTI, “call it by such a name.” 
            </p>
            <p>
                <strong>izhinikaazh</strong> – VTA, “call h/ by such a name.” 
            </p>
            <p>
                We won’t say it is 100% reliable, but these endings you see here almost always correspond to these particular verb types. So if you see a verb ending in <strong>-aadan</strong>, it is almost certainly a VTI, and if it ends in <strong>-aade</strong>, it is probably VII. So recognizing these endings will help you learn new words when you come across them. 
            </p>
            <p>
                Finally, there is something a little funny about <strong>izhinikaazh</strong>. The command form, which is the citation form, ends in <strong>-zh</strong>, but most of the Independent forms have <strong>-n</strong> in that place, e.g. <strong>nindizhinikaanaa</strong> – “I call h/ by a certain name.” You will learn full verb charts for such verbs later, but it isn’t very hard – again, the vast majority of the forms will have <strong>n</strong>; only a few have the <strong>zh</strong>, but the citation form is one of them, which makes it more confusing. 
            </p>
            <p>
                A similar thing happens with verbs ending in <strong>sh</strong> for their citation form, like <strong>mawadish</strong> – “visit h/.” The <strong>sh</strong> usually becomes an <strong>s</strong>, so “I visit h/” is <strong>nimawadisaa</strong>. 
            </p>
            <p>
                <strong>Dash</strong> – We have seen this little word before in phrases like <strong>Giin dash?</strong> And you? How about you? Used in a longer sentence, this word often takes the second position in the sentence, and has a contrastive meaning, much like an English sentence starting with “But...”
            </p>
            <p>
                <strong>Nashke</strong> is a very common word and necessary to know, it means ‘look, take notice’, a word you can use in everyday life.
            </p>
            <p>
                <strong>Anishinaabemowin</strong> is another way to say the Ojibwe language or more directly related to this work ‘the Anishinaabe language’. Note that there are some Indigenous groups that use the terms <strong>Anishinaabe</strong> and <strong>Anishinaabemowin</strong> (or closely related words) but do not consider themselves “Ojibwe.” For example, the Odawa people of Northern Ontario.
            </p>
            <p>
                <strong>Waasamowinikewinini</strong> is not in the OPD, but it was made for this lesson, properly made with confidence. <strong>Waasamowin</strong> is in the OPD, it means ‘electricity or lightning’. The <strong>i</strong> is a connecting sound in between <strong>waasamowin</strong> and <strong>ke</strong>, <strong>ke</strong> a suffix used for when wanting to say ‘harvesting or making or working with/on’. Just like <strong>odaabaanike</strong>, OPD, which means ‘to repair, work on, make means of a vehicle’. Now we just have to add ‘man’. The <strong>w</strong> is a connector sound in between the <strong>ke</strong> and <strong>inini</strong>, and you guessed it <strong>inini</strong> is ‘man’. Words like this can be made by really good fluent speakers, experienced students who study the grammar extensively, and years of experience. And as you may have guessed, <strong>odaabaanikewinini</strong> would be a mechanic. Note that since <strong>-inini</strong> literally means “man,” these compound words imply a male sex. Some speakers may use the word <strong>ikwe</strong>, “woman,” as an ending if the person in question is female - <strong>odaabaanikewikwe</strong>, <strong>waasamowinikewikwe</strong>. The extent to which <strong>-inini</strong> literally implies maleness is debatable and in flux, much as it is in English (e.g. congressman, chairman). Based on the word <strong>mashkiki</strong> (medicine), some dictionaries give the word <strong>mashkikiiwinini</strong> for doctor and <strong>mashkikiiwikwe</strong> for nurse. Obviously this is outdated, and is likely in the process of changing, but we can’t say for sure how the language will evolve in the future. 
            </p>
            <p>
                <strong>Ningii-pi-izhigozimin</strong>. This looks like a doozy of a verb but it isn’t so hard to break down. First of all, we have <strong>nin</strong> at the beginning and <strong>-min</strong> at the end. This combination is the marker of a VAI verb, first person exclusive plural, as we have already learned. Then we have the tense marker <strong>-gii-</strong>, indicating past tense. So far we know then that this verb refers to something the speaker and someone else (not the listener) did together.
            </p>
            <p>
                The VAI <strong>gozi</strong> means “s/he moves residence.” Adding the preverb <strong>izhi</strong> gives us <strong>izhigozi</strong> “s/he moves to a certain place.” <strong>Izhi-</strong> is an example of something called a “relative preverb” – relative meaning that it relates or refers to something else in the sentence. In this case, the speaker is saying that she and her sister <em>moved here</em> – and “here” is explicitly stated in the sentence as <strong>omaa</strong>. If she just wanted to say that she moved (e.g. last year) without specifying where to, then she might use the verb gozi on its own, but since she is also stating where she moved to, it is more natural to use a relative preverb with it to link the verb to the adverb omaa. Getting the hang of relative preverbs is one of the hardest parts of learning Ojibwe, and we definitely don’t expect you to master it from this brief explanation. You will need lots of exposure to the language and example sentences to understand how it works. There are six common relative preverbs in Ojibwe and we will teach them all in the remaining lessons. This is closely related to the concept of relative roots briefly introduced earlier.
            </p>
            <p>
                So far, we have been working from the outside in to construct <strong>nindizhigozimin</strong> – “we (excl.) move somewhere.” Note, here we had to stick the <strong>d</strong> in between <strong>nin-</strong> and <strong>-izhi-</strong>, according to the regular rules of conjugating for first person when the stem begins with a vowel.
            </p>
            <p>
                Continuing to break down <strong>ningii-pi-maamawi-izhigozimin</strong>, we also have the preverb <strong>bi-</strong>, which undergoes a consonant change here coming after the tense marker <strong>gii-</strong>, becoming <strong>pi-</strong>. This indicates movement towards the current location, as taught in lesson 6. So at this point we have built up <strong>ningii-pi-izhigozimin</strong>, “we (excl) moved here.” Then we stick the whole word <strong>maamawi</strong> in the middle of it. <strong>Maamawi</strong> is an adverb meaning “together,” and often occurs as a separate word. But in this case, to an Ojibwe ear it sounds more natural to “incorporate” the adverb into the verb itself, making one big verb <strong>ningii-pi-maamawi-izhigozimin</strong>, “We (excl) moved here together.” You definitely could separate them and say “<strong>Maamawi ningii-pi-izhigozimin</strong>,” and people would understand you. But at least for one fluent Ojibwe speaker helping us with this lesson, it sounded more natural to put it all together in one verb. This is what people are talking about when they say that Ojibwe is an “agglutinative” language – it puts together many elements of meaning into one long word, but it is easy to break down that word into its pieces when you recognize them. This is an important skill to build, since you certainly won’t find <strong>ningii-pi-maamawi-izhigozimin</strong> in a dictionary. Making progress in the language requires getting good at breaking down long words into their parts so you can look up the parts individually in the dictionary. In this case, you would find <strong>maamawi</strong> and <strong>izhigozi</strong> in a dictionary, and all the rest is standard ways to conjugate verbs. 
            </p>
        </div>
    )
}

export default Lesson12;