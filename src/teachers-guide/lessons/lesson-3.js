import React from 'react';
import Title from '../../components/title';
import DialoguePlayer from '../../components/dialogue-player';

const Lesson3 = () => {
    return (
        <div>
            <Title lesson='3' text='Lesson 3' />
            <h2 id='dialogue'>Dialogue</h2>
            <DialoguePlayer src='/assets/audio/Dialogue-3.mp3'/>
        
            <table className='dialogue-table'>
                <tr>
                    <td>A: Aaniin! Gibakade na? Ninjiibaakwe. </td>
                    <td>A. Hello! Are you hungry? I’m cooking.</td>
                </tr>
                <tr>
                    <td>B: Geget na? Miigwech, ningichi-bakade. Zhemaag niwii-wiisin.</td>
                    <td>B. Really? Thank you, I’m very hungry. I want to eat right now. </td>
                </tr>
                <tr>
                    <td>A: Ambe omaa, adoopowining ate onaagan. </td>
                    <td>A. Come here, there’s a plate on the table.</td>
                </tr>
                <tr>
                    <td>B: Aapiji agaasaa i’iw onaagan!</td>
                    <td>B. That plate is very small!</td>
                </tr>
                <tr>
                    <td>A: Haha. Ahaaw. Na o’ow, nawaj michaa i’iw onaagan.</td>
                    <td>A. Haha, OK. Here is one, that plate is bigger.</td>
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
                    <td>B: Mmmm, minomaate sa.</td>
                    <td>B: Mmmm, the cooking smells good.</td>
                </tr>
                <tr>
                    <td>A: Eya’, aapiji da-minopogwad.</td>
                    <td>A: Yes, it will really taste good.</td>
                </tr>
                <tr>
                    <td>B: Maamakaaj, giga-minopijigemin.</td>
                    <td>B: Amazing, we (incl.) will enjoy the taste.</td>
                </tr>
                <tr>
                    <td>A: Gegaa go nindishkwaa-jiibaakwe.</td>
                    <td>A: I am almost done cooking.</td>
                </tr>
                <tr>
                    <td>&nbsp;</td>
                    <td></td>
                </tr>
                <tr>
                    <td>B: Ahaaw sa! Ninga-ozhisijige.</td>
                    <td>B: Ok! I will set the table.</td>
                </tr>
                <tr>
                    <td>A: Ooh daa-ate minikwewin gaye.</td>
                    <td>A: Ooh there should be a drink also.</td>
                </tr>
                <tr>
                    <td>B: Ahaaw sa, ningii-ozhisijige.</td>
                    <td>B: Ok, I set the table.</td>
                </tr>
                <tr>
                    <td>A: Ahaaw nindishkwaa-jiibaakwe go.</td>
                    <td>A: Ok I am finished cooking.</td>
                </tr>
                <tr>
                    <td>B: Onizhishin sa, wiisinidaa!</td>
                    <td>B: Good, let’s eat!</td>
                </tr>
            </table>

            <h2 id='inanimate-nouns'>Inanimate nouns</h2>
            <p>
                We have taught you your first inanimate nouns now. These are fairly simple to deal with – the dictionary form is the singular form, and unlike for these simple non-dependant nouns, there are no mandatory possessor prefixes to deal with. You <em>can</em> use possessive prefixes - for example, <strong>nindonaagan</strong> “my plate” instead of simply <strong>onaagan</strong> “plate, the plate.” But that is something you will learn more about later. You will also learn how to derive plurals and a few other special forms using suffixes. We have gone ahead and used one derived form, called the “locative form,” which we also mentioned in Lesson 1. We have a basic inanimate noun <strong>adoopowin</strong>, “table.” To indicate “on the table” we add the suffix <strong>-ing</strong>, forming <strong>adoopowining</strong>. Note that the exact preposition used to translate locative forms into English can vary. Another example would be <strong>ataasowin</strong> “closet,” and <strong>ataasowining</strong> “in the closet.” Does this mean you can’t say something is “in the table,” like describing where your grandfather hid his treasure map? Sure, you can describe that, but you’ll need more advanced language than what we’re teaching you in Lesson 3. 
            </p>

            <h2 id='vai-verbs'>VAI verbs</h2>
            <p>
                Three new <em>vai</em> verbs were used in this lesson, including one that was turned into a noun. The first one <strong>minopijige</strong> means “s/he enjoys the taste of things,” the second is <strong>ozhisijige</strong>, which means “s/he sets things,” like the table or even the bed. And then <strong>minikwe</strong> with <strong>-win</strong> as a suffix. <strong>Minikwe</strong> is s/he is drinking, after <strong>-win</strong> is added for <strong>minikwewin</strong>, it means “the act of drinking or a drink”, as an inanimate noun. The suffix <strong>-win</strong> can be added to just about all <em>vai</em> verbs to turn them into nouns. Note that the verb <strong>ozhisijige</strong> undergoes “o lengthening” after the <strong>ni-</strong> or <strong>gi-</strong> personal prefixes, as we saw in the last lesson as well. 
            </p>

            <table className='full-border text-center'>
                <tr>
                    <th>Person</th>
                    <th>VAI Verb and Person</th>
                    <th>Translation</th>
                </tr>
                <tr>
                    <td>niin</td>
                    <td>niminopijige</td>
                    <td>I am enjoying the taste of things</td>
                </tr>
                <tr>
                    <td>giin</td>
                    <td>giminopijige</td>
                    <td>you are enjoying the taste of things</td>
                </tr>
                <tr>
                    <td>wiin</td>
                    <td>minopijige</td>
                    <td>s/he is enjoying the taste of things</td>
                </tr>
                <tr>
                    <td>niin</td>
                    <td>nindoozhisijige</td>
                    <td>I am setting things</td>
                </tr>
                <tr>
                    <td>giin</td>
                    <td>gidoozhisijige</td>
                    <td>you are setting things</td>
                </tr>
                <tr>
                    <td>wiin</td>
                    <td>ozhisijige</td>
                    <td>s/he is setting things</td>
                </tr>
            </table>

            <h2 id='vii-verbs'>VII verbs</h2>
            <p>
                We now introduce the second major verb class in Ojibwe, VII, for Verb, Inanimate Intransitive. These are verbs in which an inanimate noun is the subject. These are fairly simple verbs to conjugate, since they don’t have any first-person <strong>niin</strong> or second-person <strong>giin</strong> form, and therefore rarely take any prefixes. Some of these verbs function like adjectives in English, describing the properties of objects, while some actually do describe actions that objects can take, like “The ball rolls down the hill.” VII verbs do take a variety of suffixes for different conjugations, but we haven’t introduced any of those conjugations yet so for now the citation form is the only one you need to memorize. This is the plain, singular, inanimate form. We’ve introduced six of them in this lesson. Two of them have the function of adjectives – 
            </p>
            <p>
                <strong>agaasaa</strong> – it is small
                <br/><strong>michaa</strong> – it is big
            </p>
            <p>
                Note that these verbs can only be used with inanimate nouns. If you want to say that a person is big or small, you need to use different verbs from the VAI family. 
            </p>
            <p>
                <strong>Minomaate</strong> means, “it smells good burning or cooking.” This word, because of its more accurate description, would be preferred when describing the smell of cooking, as opposed to just saying <strong>minomaagwad</strong>, “it smells good.” These differences are great to learn when heading towards becoming a fluent Ojibwe speaker. <strong>Minopogwad</strong> is used to say “it (solid) tastes good.” Knowing that this <em>vii</em> verb is only used for solids is very important, many young learners often make that mistake around the dining table, and say <strong>minopogwad</strong> for a drink or soup, which is incorrect, the verb for liquids that taste good is <strong>minwaagamin</strong>.
            </p>
            <p>
                We used two preverbs with <em>vii</em> verbs in this lesson, let’s have a look at them in this table to get a better idea of how to use them and the meanings they add. 
            </p>

            <table className='full-border text-center'>
                <tr>
                    <th>Preverb</th>
                    <th>VII with Preverb</th>
                    <th>Translation</th>
                </tr>
                <tr>
                    <td>da- - definite future tense</td>
                    <td>da-minomaate</td>
                    <td>the cooking will smell good</td>
                </tr>
                <tr>
                    <td>daa- - “could, should”</td>
                    <td>daa-minomaate</td>
                    <td>the cooking should smell good</td>
                </tr>
                <tr>
                    <td>da- - definite future tense</td>
                    <td>da-minopogwad</td>
                    <td>it will taste good (solid)</td>
                </tr>
                <tr>
                    <td>daa- - “could, should”</td>
                    <td>daa-minopogwad</td>
                    <td>it should taste good (solid)</td>
                </tr>
            </table>
            
            <p>
                Finally, we introduced <strong>onizhishin</strong>.      This VII means “it is nice, is pretty.” But it is also commonly used as a simple expression, similar to how we’d say “Great!” in English. We will go ahead and teach you this word’s VAI counterpart. <strong>Onizhishi</strong> is the VAI for “s/he is pretty.” So in the previous lesson, where one guy was hinting at some romantic interest in the other guy’s sister, he might have been thinking <strong>Onizhishi gimisenh</strong> – “Your older sister is pretty.” 
            </p>
            <p>
                These two verbs <strong>onizhishin</strong> and <strong>onizhishi</strong> are a pair, the VII and VAI verbs for a similar concept. Many such pairs exist in Ojibwe. Unfortunately we can’t give you one perfect rule for predicting the VAI from the VII, and not all of them come in pairs like this, but there are some reliable patterns and you will pick up on them over time. 
            </p>
            <p>
                This lesson introduces the VII verb <strong>ate</strong> to describe the location of an inanimate object. Most commonly, we use <strong>ate</strong> for inanimate objects, and <strong>ayaa</strong> for people. These are not exactly a pair though. <strong>Ayaa</strong> can actually be either VAI or VII, as we describe in the next lesson. Linguists who study Ojibwe consider the “paired” counterpart of the VII <strong>ate</strong> to be the VAI <strong>abi</strong>, which as we explained above generally refers to someone being at home. The verb <strong>ate</strong> has a connotation that the object was placed somewhere by a person, whereas <strong>ayaa</strong> doesn’t.
            </p>

            <h2 id='demonstrative-pronouns'>Demonstrative pronouns</h2>
            <p>
                The demonstrative pronouns (English: this, that, these, those) are used somewhat similarly in Ojibwe as they are in English. They come before a noun (this car, that cat) and help identify what you’re talking about. These words are extremely common in Ojibwe, even more than in English, especially since they do some of the work that “a” and “the” do in English. Unfortunately, these words are also highly variable across dialects. We will teach you a consistent set of pronouns based on our source material, but you may ultimately need to relearn these words if you are using Ojibwe in another community.
            </p>
            <p>
                Like English, the Ojibwe demonstrative pronouns separate into “closer” ones (like this, these) and farther ones (like that, those), and also have plural forms (like this vs. these). They also come in animate and inanimate forms, as well as animate obviative which we haven’t even mentioned yet so don’t worry about that for now. 
            </p>
            <p>
                We start today with just two demonstrative pronouns: 
                <br/><strong>i’iw</strong> – farther, inanimate, singular. Equivalent to “that'' for inanimate nouns. 
                <br/><strong>o’ow</strong> – closer, inanimate, singular. Equivalent to “this” for inanimate nouns.
            </p>
            <p>
                Examples: 
                <br/><strong>i’iw adoopowin</strong> – that table
                <br/><strong>o’ow adoopowin</strong> – this table
                <br/><strong>i’iw onaagan</strong> – that dish
                <br/><strong>o’ow onaagan</strong> – this dish
            </p>
            <p>
                Depending on the word order, these pronouns can be used in two distinct ways, both of which correspond to English usage of similar words. 
            </p>
            <table className='no-border'>
                <tr>
                    <td>1)</td>
                    <td>Q. <strong>Wegonen i’iw?</strong> What is that? A. <strong>Adoopowin i’iw.</strong> That is a table</td>
                </tr>
                <tr>
                    <td></td>
                    <td>Q. <strong>Wegonen o’ow?</strong> What is this? A. <strong>Adoopowin o’ow.</strong> This is a table..</td>
                </tr>
            </table>
            <p>
                <strong>Wegonen</strong> is a question word meaning “what?” We’ll need to learn a bit more verb grammar before we can ask more questions besides yes/no questions and “what is this?”
            </p>
            <table className='no-border'>
                <tr>
                    <td>2)</td>
                    <td><strong>Agaasaa i’iw adoopowin.</strong> That table is small.</td>
                </tr>
                <tr>
                    <td></td>
                    <td><strong>Michaa o’ow onaagan.</strong> This plate is big.</td>
                </tr>
            </table>

            <h2 id='particles'>Particles</h2>
            <p>
                There are a few particles in this lesson, let’s discuss <strong>go</strong>. The OPD just lists it as an emphatic particle of discourse, which doesn’t describe the meaning. From looking at texts that were transcribed from speakers and listening to speakers, <strong>go</strong> or <strong>igo</strong> when coming after a hard consonant, is a particle emphasizing “certainty” or “affirmation,” more definite. Also the old Baraga dictionary gives a more descriptive definition. For example, if I wanted to say “I certainly am hungry,” <strong>nimbakade go</strong>. Or “I certainly need to go there,” <strong>imaa niwii-izhaa go</strong>. In this sentence you can move the <strong>go</strong> to, <strong>imaa go niwii-izhaa</strong>, meaning “certainly there I need to go,” but with <strong>nimbakade go</strong>, if you said <strong>go nimbakade</strong>, that would be incorrect. 
            </p>

            <h2 id='adverbs'>Adverbs</h2>
            <p>
                We’ve introduced <strong>zhemaag, geget, aapiji, nawaj, gaye, gegaa</strong>. These are mostly used in a very similar way as their English equivalents. <strong>Nawaj</strong> for “more” is used in comparative expressions like “He is bigger than you” – we will see some examples once we have learned more words. 
            </p>
            <p>
                <strong>Ambe</strong> is a common little word used like “come on, come here, let’s go.” We’ll encounter a lot of little emphatic words like this in our journey through Ojibwe, and they are not always easy to translate. 
            </p>
            <p>
                <strong>Miigwech</strong> – One of the most well known Ojibwe words, for “thank you” or “thanks.” It originally comes from <strong>“mii gwech”</strong> meaning ‘that is sufficient’ but it is now a root word on its own, and it also shows up in longer forms as verbs meaning ‘to thank,’ ‘to be grateful,’ etc., as you will learn later.  To make the thanks more intense, we add the prefix <strong>Chi-</strong>. This is like saying “Thanks a lot.” Strictly speaking, <strong>chi-</strong> is a short form for <strong>gichi-</strong>, which will you see in many places, but when thanking someone, <strong>chi-miigwech</strong> is a very common way to say it. 
            </p>
        </div>
    )
}

export default Lesson3;