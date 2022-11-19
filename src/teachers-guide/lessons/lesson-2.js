import React from 'react';
import Title from '../../components/title';
import DialoguePlayer from '../../components/dialogue-player';

const Lesson2 = ({ colors }) => {
    return (
        <div>
            <Title lesson='2' text='Lesson 2' accent={colors[1]}/>
            <h2 id='dialogue'>Dialogue</h2>
            <DialoguePlayer src='/assets/audio/Dialogue-2.mp3'/>
        
            <table className='dialogue-table'>
                <tr>
                    <td>A. Gidanokii na omaa? </td>
                    <td>A. Do you work here? </td>
                </tr>
                <tr>
                    <td>B. Eya’, nindanokii omaa. </td>
                    <td>B. Yes, I work here. </td>
                </tr>
                <tr>
                    <td>A. Gidoojaanimiz na noongom? </td>
                    <td>A. Are you busy now? </td>
                </tr>
                <tr>
                    <td>B. Eya’, ningichi-ojaanimiz noongom. Giga-waabamin naagaj!</td>
                    <td>B. Yes, I’m very busy now. I will see you later!</td>
                </tr>
                <tr>
                    <td>A. Bekaa akawe! Gimisenh dash wiin? Ayaa na omaa?</td>
                    <td>A. Wait a sec! What about your (older)sister? Is she here?</td>
                </tr>
                <tr>
                    <td>&nbsp;</td>
                    <td></td>
                </tr>
                <tr>
                    <td>B: Nimisenh na? Gaawiin. Endaayaan abi.</td>
                    <td>B. My (older) sister? No. She’s at my place.</td>
                </tr>
                <tr>
                    <td>A. Miinange! Ahaaw, giga-waabamin naagaj! Ninga-ayaa endaayan!</td>
                    <td>A. Of course! OK, see you later! I’ll be at your place!</td>
                </tr>
                <tr>
                    <td>&nbsp;</td>
                    <td></td>
                </tr>
                <tr>
                    <td>A. Gidishkwaa-anokii na?</td>
                    <td>A. Are you finished work?</td>
                </tr>
                <tr>
                    <td>B. Gaawiin mashi. Gegaa nindishkwaa-anokii.</td>
                    <td>B. Not yet. I am almost finished with work.</td>
                </tr>
                <tr>
                    <td>A. Niwii-bi-ayaa endaayan.</td>
                    <td>A. I want to come to your place.</td>
                </tr>
                <tr>
                    <td>B. Ahaaw nindishkwaa-anokii, ninga-giiwe.</td>
                    <td>B. Ok I am finished work, I am going to go home.</td>
                </tr>
                <tr>
                    <td>&nbsp;</td>
                    <td></td>
                </tr>
                <tr>
                    <td>A. Ahaaw, ninga-bi-ayaa endaayan.</td>
                    <td>A. Ok, I will come to your place.</td>
                </tr>
                <tr>
                    <td>B. Ahaaw ninga-ayaa imaa.</td>
                    <td>B. Ok I will be there.</td>
                </tr>
                <tr>
                    <td>A. Gidaa-jiibaakwemin, nimbakade.</td>
                    <td>A. We should cook, I am hungry.</td>
                </tr>
                <tr>
                    <td>B. Eya’, gaye niin, giga-jiibaakwemin.</td>
                    <td>B. Yes, me too, we will cook.</td>
                </tr>
            </table>

            <h2 id='person-prefixes-in-more-detail'>Person prefixes, in more detail</h2>
            <p>
                The exact form of the person prefixes for “I, you, s/he” simply depends on the letters that follow them. It may seem like a lot to memorize but it’s simply about ease of pronunciation. The best way to memorize these rules is just to memorize some examples of verbs that start with different letters, but for completeness we will list the rules here. Note that these forms do vary by dialect, and can even vary randomly within the same speaker. We are trying to make our material match the majority of what you’ll find on the internet, but that is very much a product of which communities happen to have published a lot of written material. You may have to adjust these prefixes for different communities, even within the “Southwestern Ojibwe” dialect continuum.
            </p>
            <p>
                Here is a handy chart adapted from Rand Valentine’s “Western Dictionary” computer program. For the first-person prefixes, the <strong>n</strong> in parentheses indicates that this sound is often not pronounced.
            </p>

            <table>
                <tr>
                    <th></th>
                    <th>1st niin</th>
                    <th>2nd giin</th>
                    <th>3rd wiin</th>
                </tr>
                <tr>
                    <td>Stem begins with vowel</td>
                    <td>(n)ind</td>
                    <td>gid</td>
                    <td>od</td>
                </tr>
                <tr>
                    <td>stem begins with b</td>
                    <td>(n)im</td>
                    <td>gi</td>
                    <td>o</td>
                </tr>
                <tr>
                    <td>stem begins with d,z,zh,g</td>
                    <td>(n)in</td>
                    <td>gi</td>
                    <td>o</td>
                </tr>
                <tr>
                    <td>stem begins with m,n,w</td>
                    <td>ni</td>
                    <td>gi</td>
                    <td>o</td>
                </tr>
            </table>

            <p>
                Please note, we haven’t encountered the 3<sup>rd</sup> person prefix <strong>o-</strong>  yet, because it doesn’t occur on VAI verbs, but you will see it as we get into other verb types and also with some nouns. 
            </p>
            <p>
                For the first three forms of the 1<sup>st</sup> person prefix above, the form really varies a lot by dialect and even within dialect. For “I am hungry,” you could hear any of the following: 
            </p>
            <p>
                <strong>Nimbakade</strong>
                <br/><strong>Imbakade</strong>
                <br/><strong>Nibakade</strong>
                <br/><strong>Mbakade</strong>
            </p>
            <p>
                For this course, we are going to stick with <strong>nind-, nim-, nin-, ni-</strong> as the forms. You may need to “relearn” this in a slightly different form to adapt to the speech patterns of a specific community.
            </p>
            
            <h2 id='nouns-for-relatives'>Nouns for relatives</h2>
            <p>
                OK, we’ve chosen some funny nouns to start with. You would think we would start with a plain simple inanimate noun, like book, plate, etc., but then we would have to teach you verbs that go with inanimate nouns, and we’re not starting that until the next lesson. So here we’ve thrown in the animate noun for an older sister. The funny thing about words for relatives is that they cannot exist alone without saying <em>whose</em> relative it is. To indicate possession, we use the same prefixes that we use to indicate the subject of VAI verbs. So we have 
                <br/>columns for niin and giin
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
            </table>

            <p>
                So you might think that the word for “his/her older sister” would be simply <strong>misenh</strong>, but no that’s not the case, for reasons that will become clear as you learn more about Ojibwe grammar. And although we can sort of intuitively feel that <strong>*misenh</strong> might be the underlying word for “sister” in general, there is no such word that ever appears in the language. All of the words for relatives have to have a possessor indicated. We will teach you how to say “his/her sister” later.
            </p>
            <p>
                The asterisk * is a symbol used by linguists when listing a hypothetical form that doesn’t actually exist or is incorrect. We’ll use it in this course whenever we list a form that is wrong. 
            </p>
            <p>
                Words like this are listed in OPD with the part of speech <em>nad</em> - noun, animate, dependent. By dependent, we mean that the “bare” stem like <strong>*misenh</strong> never appears on its own; it is dependent on being attached to a possessor. 
            </p>

            <h2 id='nouns-for-body-parts'>Nouns for body parts</h2>
            <p>
                Body parts also tend to be dependent nouns, although they are usually inanimate. So besides the category <em>nad</em>, there is also <em>nid</em> - noun, inanimate, dependent. Here are some examples. Note that h/ in this case means “his or her.” 
            </p>
            <p>
                <strong>nikwegan</strong> - my neck
                <br/><strong>gikwegan</strong> - your neck
                <br/><strong>okwegan</strong> - h/ neck
            </p>
            <p>
                Unlike the nad examples, we are able to give you the third person form here as well, and it’s nice and simple with the prefix <strong>o-</strong>. The reason we didn’t teach the third person form for relatives, is that if you want to say something like “his sister,” there are now two “third person” people involved - the person who has the sister, and the sister herself. Ojibwe has some special grammar for situations involving two third persons; one of them actually has special forms as a “fourth person,” also known as “obviative.” The obviative is a major feature of Ojibwe grammar, and you will learn about it in detail, but for now we are just putting it on your radar. 
            </p>
            
            <h2 id='adverbs'>Adverbs</h2>  
            <p>
                We introduced <strong>bekaa</strong> – this is used here as a straight up interjection, exclamation like “hold on, wait up,” but it may also show up in a longer sentence like “<strong>Bekaa, niwii-maajaa</strong>” – “Wait, I’m going to leave.” 
            </p>
            <p>
                Several adverbs are the same from the first lesson, so we don’t have to explain them here again necessarily, those words will always be in the system for review. 
            </p>
            <p>
                <strong>Miinange –</strong> meaning “of course, without a doubt, you betcha.” A lot of times this is used as an answer to a question, but it can also be used to start off a sentence, for example, <strong>Miinange gaa-izhiwebak</strong> - Of course that is what happened. This is actually two words put together, <strong>mii</strong> and <strong>nange</strong>. As you will learn later in the course, a sentence starting with <strong>mii</strong> usually requires the verb to be in the conjunct form, which we haven’t learned about yet, but we are putting it on your radar here too as it is also an important part of Ojibwe grammar. “It happens a certain way” is <strong>izhiwebad</strong>. But to say “Of course it happened that way,” the correct sentence would be <strong>Miinange gaa-izhiwebak</strong>.  If we said, <strong>“Miinange gii-izhiwebad,”</strong> it would be incorrect. You will learn the details by the end of this course. 
            </p>
            <p>
                <strong>Gegaa</strong> is a degree adverb, <em>adv deg</em>, meaning “almost, nearly.” A common sentence used in Ojibwe is, <strong>Gegaa ningiizhiitaa</strong> - “I am almost finished (task).”
            </p>
            <p>
                <strong>Gaye</strong> is a conjunctive adverb, <em>adv conj</em>, meaning “as for, also, too, and.” <strong>Gaye</strong> is another very common adverb, amongst speakers you would hear it with saying “me too, you too, them too, etc.” - <strong>gaye niin, gaye giin, gaye wiinawaa</strong>. And many other ways it is put in speech, pretty much almost everywhere you would use “also” in English, but in Ojibwe you would need to listen to natural speakers to get the feel of where it is used most commonly. 
            </p>
            <p>
                <strong>Mashi</strong> is a temporal adverb, <em>adv temp</em>, meaning “yet.” <strong>Mashi</strong> may not be as common as <strong>gegaa</strong> and <strong>gaye</strong>, but still fairly common and great to add to our list. One of the most common ways to say it is with <strong>gaawiin</strong>, can you guess what saying them together would mean? Yes, it means “not yet.” Another common saying would be “Did you finish (task) yet?” <strong>Mashi na gigii-giizhiitaa?</strong> Or “Are you finished yet?” <strong>Mashi na gigiizhiitaa?</strong> “Not yet” - <strong>Gaawiin mashi.</strong> 
            </p>
            <p>
                <strong>naagaj</strong> – later. <strong>Giga-waabamin naagaj</strong> is a bit more casual of a way to say goodbye, a lot like its direct English translation “See you later.” <strong>Giga-waabamin miinawaa</strong> is more formal, very textbook-style Ojibwe. 
            </p>
            
            <h2 id='vai-verbs'>VAI verbs</h2> 
            <p>
                You now know all the forms of the prefixes to make the singular forms of all VAI verbs in first, second, and third person. That was fast! In the last lesson we introduced a fancy verb form <strong>endaayaan</strong> meaning “at my place.” Literally this is something like “where I live.” Now in this lesson we introduce <strong>endaayan</strong> meaning “at your place.” Be careful with the pronunciation – the only difference is whether the last vowel is long or short. You may be getting the impression that <strong>-yaan</strong> and <strong>-yan</strong> are suffixes that also have something to do with “I” and “you.” That is correct - these are part of the conjugation for the Conjunct verb forms. We will teach you all about the Conjunct form in future lessons, but it is so common in Ojibwe that you will start to see it here and there in the lessons before we get to it officially.     
            </p>
            <p>
                Here we’ve introduced the verb <strong>ayaa</strong> which means “s/he is in a certain place.” It can also be used to say someone is in a certain state or condition. So it covers some of the uses of the English word “is.” But it wouldn’t be used to describe a permanent characteristic of someone like “he is a teacher” or “she is tall.” If you ever learned about <em>estar</em> vs. <em>ser</em> in Spanish, this is a similar distinction. And if you’ve never heard of that before, if you Google it now, most of the explanations about when to use <em>estar</em> in Spanish would apply to <strong>ayaa</strong> in Ojibwe. 
            </p>
            <p>
                <strong>Ojaanimizi</strong> is an interesting verb to conjugate, it means “s/he is busy.” Since the verb begins with a vowel, we know we have to use <strong>nind-</strong>, for first person, but this short vowel comes out with a different sound compared to other short vowels at the beginning of words. It becomes a long vowel, as you can see below in the chart. And like any other <em>vai</em> with a short vowel “i” ending, it comes off for first and second person. There is a general rule that a short “o” beginning a VAI verb lengthens to long “oo” when following a person prefix, as you see below. 
            </p>
            <table className='full-border'>
                <tr>
                    <td>niin</td>
                    <td>nindoojaanimiz</td>
                    <td>I am busy</td>
                </tr>
                <tr>
                    <td>giin</td>
                    <td>gidoojaanimiz</td>
                    <td>You are busy</td>
                </tr>
                <tr>
                    <td>wiin</td>
                    <td>ojaanimizi</td>
                    <td>S/he is busy</td>
                </tr>
            </table>
            <p>
                A very common <em>vai</em> verb to have on our list is <strong>anokii</strong>, “s/he is working.” And another frequent great <em>vai</em> to memorize is <strong>jiibaakwe</strong>, “s/he is cooking.” They both have long vowel endings (remember <strong>e</strong> is always long in Ojibwe), so there is no need to worry about dropping the ending vowel for first and second person.
            </p>
            <p>
                We also use the word <strong>abi</strong> in the dialogue. When talking about human beings, <strong>ayaa</strong> and <strong>abi</strong> can both be used to say that they are in a certain place, but <strong>ayaa</strong> is more general and refers to being anywhere that a person might be, whereas <strong>abi</strong> more specifically means “s/he is at home.” It sort of implies sitting down, resting. Some Eastern Dialects don’t use it unless referring to a dead body, but in our Western Ojibwe dialects taught here, it is a common word for saying that someone is home. Since B says “<strong>Endaayaan abi</strong>” – she’s (home) at my place, it implies that he and his sister live together. Otherwise he would have said “<strong>Endaayaan ayaa</strong>” – “she’s at my place (currently, visiting, etc). This might be even more clear if he had used a plural form to say “at our place,” and we could have written that, but we haven’t gotten into plurals yet.  
            </p>
        </div>
    )
}

export default Lesson2;