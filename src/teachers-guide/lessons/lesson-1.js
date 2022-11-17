import React from 'react';
import Title from '../../components/title';
import DialoguePlayer from '../../components/dialogue-player';

const Lesson1A = ({ colors }) => {
    return (
        <div>
            <Title lesson='1' text='Lesson 1' accent={colors[1]}/>
            <h2 id='dialogue'>Dialogue</h2>
            <DialoguePlayer src='/assets/audio/Dialogue-1.mp3'/>
            <table className='dialogue-table'>
                <tr>
                    <td>A. Nimbakade. Gibakade na?</td>
                    <td>A. I’m hungry. Are you hungry?</td>
                </tr>
                <tr>
                    <td>B. Eya’ Ningichi-bakade. Niwii-wiisin aapiji. </td>
                    <td>B. Yes. I’m very hungry. I would really like to eat.</td>
                </tr>
                <tr>
                    <td>A. Omaa na giwii-wiisin noongom? </td>
                    <td>A. Do you want to eat here now?</td>
                </tr>
                <tr>
                    <td>B. Gaawiin. Niwii-kiiwe akawe. Niwii-awi-wiisin endaayaan. </td>
                    <td>B. No. First I will go home. I want to go and eat at my place.</td>
                </tr>
                <tr>
                    <td>A. Ahaaw. Giga-waabamin  miinawaa. </td>
                    <td>A. OK. See you later (Lit: I will see you again.)</td>
                </tr>
                <tr>
                    <td>&nbsp;</td>
                    <td></td>
                </tr>
                <tr>
                    <td>A. Ningiishkaabaagwe. Gigiishkaabaagwe na?</td>
                    <td>A. I’m thirsty. Are you thirsty?</td>
                </tr>
                <tr>
                    <td>B. Eya’, aapiji ningiishkaabaagwe. Niwii-minikwe sa.</td>
                    <td>B. Yes, I am very thirsty. I need a drink.</td>
                </tr>
                <tr>
                    <td>A. Iwidi na giwii-minikwe wayiiba?</td>
                    <td>A. Do you want to drink over there soon?</td>
                </tr>
                <tr>
                    <td>B. Gaawiin. Imaa wiisiniiwigamigong niwii-minikwe.</td>
                    <td>B. No. I want to drink there at the restaurant.</td>
                </tr>
                <tr>
                    <td>A. Ahaaw ambe dash. Da-minwaagamin sa.</td>
                    <td>A. Ok come on then. It should taste good (liquid).</td>
                </tr>
                <tr>
                    <td>&nbsp;</td>
                    <td></td>
                </tr>
                <tr>
                    <td>A. Nindebisinii. Gidebisinii na?</td>
                    <td>A. I am full. Are you full?</td>
                </tr>
                <tr>
                    <td>B. Eya’, aapiji nindebisinii. Niwii-ishkwaa-wiisin.</td>
                    <td>B. Yes, I am very full. I want to finish eating.</td>
                </tr>
                <tr>
                    <td>A. Noongom ina giwii-ishkwaa-wiisin?</td>
                    <td>A. Now do you want to finish eating?</td>
                </tr>
                <tr>
                    <td>B. Gaawiin. Geyaabi bangii niwii-wiisin.</td>
                    <td>B. No. I still want to eat a little bit more.</td>
                </tr>
                <tr>
                    <td>A. Ahaaw. Giga-mazinaatesijigemin wayiiba.</td>
                    <td>A. Ok. We will watch t.v./film soon.</td>
                </tr>
            </table>
            <h2 id='vai-verbs'>VAI verbs</h2>  
            <p>
                Ojibwe is a language of verbs. Most of the information in a sentence is carried by verbs, and verbs also tend to carry out functions that are covered by other parts of speech in other languages. For example, <strong>Nimbakade</strong> – I am hungry. This is a verb. Ojibwe doesn’t really have adjectives. To express that someone or something is in a given state or has a certain property, you almost always use a verb. 
            </p>
            <p>
                Traditional analysis of the grammar of Ojibwe (and related languages) suggests that there are four major categories of verbs in the language. Each category has its own set of prefixes and suffixes. It adds up to a lot to memorize, but don’t worry, we will take you through it step by step, one lesson at a time. 
            </p>
            <p>
                To understand the four categories, it helps to know that Ojibwe nouns come in two kinds, or “genders.” These genders are not male and female as you might be familiar with in certain European languages, but rather animate and inanimate. Animate generally refers to living things and people, while inanimate refers to non-living objects. However, there are many exceptions. For example, in many dialects, the word for rock is animate. Some speakers of the language attribute spiritual significance to this, and some don’t. In this course, we won’t get too much into the philosophy, but we will teach this simply as a property of the language. It is similar to how in Spanish “table” is feminine but “book” is masculine. As you learn Ojibwe nouns, you will have to memorize whether they are animate or inanimate. As you’ll see, this distinction also affects what verbs you can use with different nouns. We’ll talk much more about this in time. 
            </p>
            <p>
                In this first lesson, we have not yet discussed anything inanimate – it is all just two people talking about their hunger and their plans to eat. Note that we are talking about them eating in general – “I want to eat,” not “I want to eat rice.” Rice would be an inanimate noun, and then we would have to start talking about verbs that interact with inanimate nouns, and we’re not there yet. 
            </p>
            <p>
                The first category of verbs that we will cover are called “VAI” for “Verb, Animate Intransitive.” 
            </p>
            <p>
                The word animate implies that this verb takes a subject who is an animate noun, typically but not always a person. Next, intransitive means that the verb has a subject but no object. Intransitive verbs in English only involve a subject: I eat, you sleep, he is running. Some verbs in English can be both transitive and intransitive - for example “run” is intransitive in “I run,” but if you say “I want to run a marathon,” then “run” is transitive; it has “marathon” as an object. In Ojibwe, there are often similarities between transitive and intransitive verbs with similar meanings, but they are distinct words that need to be memorized separately. 
            </p>
            <p>
                Ojibwe verbs are usually listed in a dictionary (the “citation form”) as a form with a bare minimum of prefixes or suffixes. For VAI verbs, an example would be <strong>bakade</strong>. By itself, this is a third-person singular form meaning “he or she is hungry.” We usually write “s/he” as an abbreviation for “she/he” so we would write “s/he is hungry” as the English definition for this word. This is also the form that you will find in most modern dictionaries. 
            </p>
            <p>
                We will get to plural forms later in the course, but for now we will teach the forms for 1<sup>st</sup>, 2<sup>nd</sup>, and 3<sup>rd</sup> person singular (sg). These are associated with personal pronouns in Ojibwe. 
            </p>
            <p>
                The list of vai verbs used in this lesson are: 
                <br/><strong>bakade</strong> - “s/he is hungry,”
                <br/><strong>wiisini</strong> - “s/he is eating,” 
                <br/><strong>giiwe</strong> - “s/he is going home,” 
                <br/><strong>daa</strong> - “s/he is living in a certain place,” 
                <br/><strong>giishkaabaagwe</strong> - “s/he is thirsty,” 
                <br/><strong>minikwe</strong> - “s/he drinks,” 
                <br/><strong>debisinii</strong> - “s/he is full from eating,” 
                <br/><strong>mazinaatesijige</strong> - “s/he is watching a movie/tv.” 
            </p>
            <p>
                <strong>Minikwe</strong> is labelled a <em>vai+o</em>, verb animate intransitive + object, which means it can be just a <em>vai</em> or it can relate to an object, like this example, <strong>doodooshaaboo niminikwen</strong> - “I am drinking milk,” In the majority of cases, you need to use an entirely different kind of verb (VTI) to talk about a person interacting with an object, but there are a few of these <em>vai+o</em> verbs that use a simple VAI form with an object, much like our English example of “run” and “run a marathon.” These are indicated as vai+o in the Ojibwe People’s Dictionary and some other dictionaries.  
            </p>
            <p>
                Personal pronouns: 
                <br/><strong>niin</strong> - I, me
                <br/><strong>giin</strong> – you (sg.) 
                <br/><strong>wiin</strong> – s/he 
            </p>
            <p>
                These pronouns are fairly equivalent to their English translations, but they actually aren’t used that much in Ojibwe in ordinary conversation. This is because verbs take prefixes to indicate 1<sup>st</sup> 2<sup>nd</sup> and 3<sup>rd</sup> person, so you don’t need to add a pronoun on top of that. Here are the verb forms with prefixes: 
            </p>

            <table className='full-border text-center'>
                <tr>
                    <th>bare pronoun</th>
                    <th>verb prefix</th>
                    <th>full verb</th>
                    <th>translation</th>
                </tr>
                <tr>
                    <td>niin</td>
                    <td>nim-</td>
                    <td>nimbakade</td>
                    <td>I am hungry.</td>
                </tr>
                <tr>
                    <td>giin</td>
                    <td>gi-</td>
                    <td>gibakade</td>
                    <td>You are hungry.</td>
                </tr>
                <tr>
                    <td>wiin</td>
                    <td>-----</td>
                    <td>bakade</td>
                    <td>S/he is hungry.</td>
                </tr>
            </table>

            <p>
                The prefix meaning “I” here is <strong>nim-</strong>, although the exact form of this prefix depends on the letters that follow it, for ease in pronunciation. You will also see it frequently as <strong>ni-</strong>. For “you,” we have the prefix <strong>gi-</strong>. This also comes in a few different forms. The exact pronunciation of these prefixes is subject to much variation - we will teach you one way and try to be consistent in our lessons, but you will encounter slightly different forms from town to town and from person to person (or even within one speaker). For the first person prefix, if you always pronounce it as <strong>ni-</strong>, you will be understood fine. 
            </p>
            <p>
                Here are two more examples. The dictionary forms for these verbs are <strong>maajaa</strong> and <strong>nibaa</strong>. Note that these are also the third-person singular forms (this only applies to VAI verbs – the other verb classes have their own dictionary forms, again the most minimal forms with no prefixes or suffixes). 
            </p>

            <table className='full-border text-center'>
                <tr>
                    <th>bare pronoun</th>
                    <th>full verb</th>
                    <th>translation</th>
                </tr>
                <tr>
                    <td>niin</td>
                    <td>nimaajaa</td>
                    <td>I leave</td>
                </tr>
                <tr>
                    <td>giin</td>
                    <td>gimaajaa</td>
                    <td>you leave</td>
                </tr>
                <tr>
                    <td>wiin</td>
                    <td>maajaa</td>
                    <td>s/he leaves</td>
                </tr>
                <tr>
                    <td>niin</td>
                    <td>ninibaa</td>
                    <td>I sleep</td>
                </tr>
                <tr>
                    <td>giin</td>
                    <td>ginibaa</td>
                    <td>you sleep</td>
                </tr>
                <tr>
                    <td>wiin</td>
                    <td>nibaa</td>
                    <td>s/he sleeps</td>
                </tr>
                <tr>
                    <td>niin</td>
                    <td>ningiishkaabaagwe</td>
                    <td>I am thirsty</td>
                </tr>
                <tr>
                    <td>giin</td>
                    <td>gigiishkaabaagwe</td>
                    <td>you are thirsty</td>
                </tr>
                <tr>
                    <td>wiin</td>
                    <td>giishkaabaagwe</td>
                    <td>s/he is thirsty</td>
                </tr>
            </table>

            <p>
                A note about the English translations: In this course, for simplicity we will consistently use the simple past tense (I sleep, I leave), but usually a more accurate translation is the present progressive (I am sleeping, I am leaving), meaning an action that is currently in progress rather than something repeated or habitual. Ojibwe does not generally distinguish between these two types of present tense (although it definitely distinguishes lots of things that English speakers don’t, as you’ll learn). 
            </p>
            <p>
                Again, the third-person singular form shown here is the citation form that you will find in a dictionary. We emphasize this point a lot because learning Ojibwe is much easier when you know how to figure out the citation form from a verb that you come across, so you can look it up in a dictionary. So if you came across <strong>ginibaa</strong>, and you didn’t know what it meant, you might be able to guess that it’s the second person prefix <strong>gi-</strong> attached to the verb stem <strong>nibaa</strong>, which would be the citation form, and then you could look up <strong>nibaa</strong> in the dictionary. If a dictionary listed every single form of each verb, it would be a million pages long. 
            </p>

            <h2 id='vii-verbs'>VII verbs</h2>
            <p>
                These are verbs for describing inanimate states of objects and other things such as weather. VII stands for verb, inanimate, intransitive. These verbs are labelled intransitive, because they only describe the verb of the one object, but not it relating to or accompanying another object. There are many of these verbs in the Ojibwe language. One interesting property of VII verbs is that there are often slightly different verbs for objects with different properties. In this dialog, we saw <strong>minwaagamin</strong>, meaning “it (a liquid) tastes good.” There is a similar verb <strong>minopogwad</strong> that means “it tastes good” for more general things, including most foods (as long as they are inanimate). But if you are talking about a liquid, you have to use <strong>minwaagamin</strong>. Since here the speakers are talking about getting something to drink, not to eat, they use this verb. You would also use it to say that coffee or tea tastes good, but for bread, it would be <strong>minopogwad</strong>. You will see various examples of this kind of specificity throughout the course. These verbs can be conjugated in many ways. Various prefixes, suffixes and forms (independent and conjunct), would be used to conjugate these types of verbs, which we will learn in future lessons. But the simplest form is the one used here, and it is also what you will find in a dictionary. 
            </p>

            <h2 id='adverbs'>Adverbs</h2>
            <p>    
                A few words in the dialog can be described as adverbs that modify the meaning of the verbs they accompany. Following the conventions in the Ojibwe People’s Dictionary (OPD) from which we draw much of our material, the part of speech for these words is given in more detail. Fortunately, adverbs in Ojibwe are fairly easy – they generally do not change their form in different contexts. Some adverbs taught in this lesson are termed <em>adv tmp</em> – a temporal adverb that describes <em>when</em> something happens. We have <strong>noongom</strong> a temporal adverb <em>adv tmp</em>, meaning “now” or “today,” and <strong>akawe</strong>, <em>adv tmp</em>, meaning “first, beforehand.” <strong>Omaa</strong> means “here,” and is termed <em>adv loc</em>, an adverb of location. We also have <strong>imaa</strong>, which is also an <em>adv loc</em>, it means ‘there’ and <strong>iwidi</strong>, which means “over there,” <em>adv loc</em>. There is <strong>geyaabi</strong>, which means “still, yet,” it is a temporal adverb, <em>adv tmp</em>. And <strong>bangii</strong>, which means “a little, a little bit, few,” and it is a quantitative adverb, <em>adv qnt</em>. <strong>Dash</strong> is a conjunctive adverb, <em>adv conj</em>, meaning “but, and, and then, then.” <strong>Wayiiba</strong> is a temporal adverb, <em>adv temp</em>, meaning “early, in a little while, soon.” <strong>Gaawiin</strong> is a negative adverb, <em>adv neg</em>, meaning “no” or “not.” In future lessons, we are not going to delve into all the different classes of adverbs in depth, but we will still tell you their part of speech as listed in the OPD. Just remember that you don’t have to memorize different forms for adverbs – they stay the same no matter what verb they are modifying. 
            </p>
            <p>
                Next, we have <strong>miinawaa</strong>, a conjunctive adverb, <em>adv conj</em>, meaning in this context “again,” and the common expression <strong>giga-waabamin miinawaa</strong>, which is a common way to say goodbye, meaning literally “I will see you again.” For now, we will ask you to memorize this whole expression as is. Later on, as you learn more about verbs, you will see how <strong>giga-waabamin</strong> comes from the citation form <strong>waabam</strong> to mean “I will see you.” But this is not a VAI verb, so we don’t cover it yet. <strong>Miinawaa</strong> could also mean “and, also.”
            </p>
            <p>
                One interesting word here is <strong>endaayaan</strong> – meaning “at home,” or “at my place” – it is functioning as an adverb, but actually this is another VAI verb, but in a fairly complicated form. It literally means something like “where I live.” The bare “citation form” of the verb is <strong>daa</strong>, “s/he lives at a certain place.” By the end of this course you will understand exactly how the form <strong>endaayaan</strong> is derived from the verb <strong>daa</strong>. 
            </p>

            <h2 id='particles'>Particles</h2> 
            <p>
                Particles are little words that fulfill specific grammatical functions. Again, the OPD distinguishes many different kinds, and we will tell you the part of speech as listed in the OPD, but we will not delve deeply into the meaning of those categories. For now, we will discuss <strong>na</strong> and <strong>enya’</strong>, both of which are classified as <em>pc disc</em>, or discourse particles. 
            </p>
            <p>
                <strong>Na</strong> is an important word that marks yes/no questions. To turn a statement into a question, you simply add <strong>na</strong> as the second word of the sentence. It may also be <strong>ina</strong>, if following a hard pronounced consonant. So we have: 
            </p>
            <table className='full-border'>
                <tr>
                    <td>Gibakade.</td>
                    <td>You are hungry.</td>
                </tr>
                <tr>
                    <td>Gibakade na?</td>
                    <td>Are you hungry?</td>
                </tr>
                <tr>
                    <td>Niwii-wiisin omaa.</td>
                    <td>I want to eat here.</td>
                </tr>
                <tr>
                    <td>Giwii-wiisin na omaa?</td>
                    <td>Do you want to eat here?</td>
                </tr>
            </table>
            <p>
                The rule that <strong>na</strong> is the second word of the sentence is very consistent, although it can take a while to get the hang of exactly where one “word” begins and another ends, as Ojibwe words can get quite long as we keep piling on prefixes and suffixes. You will see many examples. 
            </p>
            <p>
                <strong>Enya’</strong> means yes. Note the pronunciation – the n indicates that the vowel is “nasal” (much like in French), but there is not really a distinct “n” consonant in there. It’s not pronounced like the Irish singer Enya! Note: in some dialects, the word for “yes” differs for men and women, with <strong>henh</strong> used by men, and <strong>enya’</strong> by women. For the purposes of this course though, <strong>enya’</strong> can be used by anyone.  
            </p>
            <p>
                The other particles in this lesson are <strong>ahaaw</strong>, an interjection particle, <em>pc interj</em>, meaning “ok, alright, come on,” <strong>sa</strong> is a discourse particle, <em>pc disc</em>, it’s a little difficult to explain this meaning, it’s like probing for agreement, sort of like equivalent to “ay” in English.
            </p>

            <h2 id='preverbs'>Preverbs</h2> 
            <p>
                Finally, the preverbs in this lesson. A preverb is a kind of prefix that comes before the main verb, modifying its meaning. Here we use <strong>wii-</strong>, which is a kind of future tense marker. OPD labels it as <em>pv tns</em>, a preverb of tense. You use this when indicating that someone will probably do something, that they want to do something or are volunteering to do it, like when you say “I’ll get it” when the house phone rings. It is less definite than the other future tense marker <strong>ga</strong>, which indicates more certainty that something will happen – as in <strong>giga-waabamin</strong>. The hyphen at the end of <strong>wii-</strong> reminds you that it comes before the verb, and it is common to use that hyphen in writing but not always.  The preverb comes before the main verb, but after the prefix indicating person. So we have: 
            </p>
            <p>
                <strong>Niwii-wiisin</strong>, “I want to eat / I am going to eat / I will eat.”      
                <br/>With <strong>ni-</strong> indicating first person (niin), <strong>wii-</strong> indicating a desire or intention, and these are attached to the citation form <strong>wiisini</strong> as the intransitive VAI word for “to eat.” However, that verb loses its final vowel according to the following rule:
            </p>
            <p>
                Grammatical rule: For VAI verbs ending in <strong>-o</strong> or <strong>-i</strong>, that final short vowel is deleted for the first-person <strong>niin</strong> and second-person singular <strong>giin</strong> forms, but it remains for third person <strong>wiin</strong>. We will illustrate this for two VAI verbs whose citation forms are the third person singular: <strong>wiisini</strong> and <strong>giigido</strong>. The first-person prefix for verbs starting in <strong>g</strong> is <strong>nin-</strong>. So we have:
            </p>
            <table className='full-border'>
                <tr>
                    <td>niin</td>
                    <td>Niwiisin</td>
                    <td>I eat. I am eating</td>
                </tr>
                <tr>
                    <td>giin</td>
                    <td>Giwiisin</td>
                    <td>You eat. You are eating</td>
                </tr>
                <tr>
                    <td>wiin</td>
                    <td>Wiisini</td>
                    <td>S/he eats. S/he is eating</td>
                </tr>
                <tr>
                    <td>niin</td>
                    <td>Ningiigid</td>
                    <td>I speak. I am speaking</td>
                </tr>
                <tr>
                    <td>giin</td>
                    <td>Gigiigid</td>
                    <td>You speak. You are speaking</td>
                </tr>
                <tr>
                    <td>wiin</td>
                    <td>Giigido</td>
                    <td>S/he speaks. S/he is speaking</td>
                </tr>
            </table>
            <p>
                The addition of the preverb doesn’t change the fact that the final vowel is deleted, so we have <strong>niwiisin</strong> “I eat” and <strong>niwii-wiisin</strong> “I will eat.” For “s/he will eat,” there is no person prefix for third-person, so it’s <strong>wii-wiisini</strong>. Remember, the final i vowel in the verb <strong>wiisini</strong> does not disappear for the third person, so we still see it here. 
            </p>
            <p>
                There is one more grammatical rule to teach about certain preverbs – the preverbs <strong>wii-</strong> (future tense taught here) and <strong>gii-</strong> (past tense, taught in more detail later) can both cause a sound change on the next consonant in the verb stem that follows. For example, we have: 
            </p>
            <table className='full-border'>
                <tr>
                    <td>niin</td>
                    <td>Ningiiwe</td>
                    <td>I go home.</td>
                </tr>
                <tr>
                    <td>giin</td>
                    <td>Gigiiwe</td>
                    <td>You go home.</td>
                </tr>
                <tr>
                    <td>wiin</td>
                    <td>Giiwe</td>
                    <td>He goes home.</td>
                </tr>
                <tr>
                    <td>niin</td>
                    <td>Niwii-kiiwe</td>
                    <td>I will go home.</td>
                </tr>
                <tr>
                    <td>giin</td>
                    <td>Giwii-kiiwe</td>
                    <td>You will go home.</td>
                </tr>
                <tr>
                    <td>wiin</td>
                    <td>Wii-kiiwe</td>
                    <td>He will go home.</td>
                </tr>
            </table>
            <p>
                So the addition of the <strong>wii-</strong> prefix makes the <strong>g</strong> in <strong>giiwe</strong> change into a <strong>k</strong>. These prefixes sometimes cause a weak consonant that follows to change into a strong consonant. We have a whole supplementary lesson explaining what weak and strong consonants are, available <a href=''>here</a>. This sound change does not affect all weak consonants that follow the prefix – it is predictable, but the rules are a bit complex. We will explain them fully later in the course. 
            </p>
            <p>
                We also used another preverb in the dialog, <strong>awi-</strong>. This one is what linguists call a “directional preverb,” in that its meaning implies doing something in motion or in a certain place. Here, the sentence <strong>Niwii-awi-wiisin endaayaan</strong> means “I’m going to go eat at my place.” The preverb <strong>awi-</strong> functions a lot like the verb “go” in the English translation. If the speaker were already home, and were saying that they plan to remain at home and eat, they would simply say <strong>Niwii-wiisin endaayaan</strong>. But because they are currently somewhere else and are indicating that they will 1) go elsewhere and then 2) eat, the preverb <strong>awi-</strong> conveys that meaning. Directional preverbs go after tense markers, giving us <strong>niwii-awi-wiisin</strong>.
            </p>
            <p>
                One thing to note is that <strong>awi-</strong> sometimes gets shortened to <strong>o-</strong> in casual speech. So you might hear instead <strong>niwii-o-wiisin</strong>. This is sort of like an English speaker saying “gonna” instead of “going to” - completely normal. 
            </p>
            <p>
                <strong>Daa-</strong>, which is a tense/mode preverb, <em>pv tns</em>, meaning “can, could, would, should, must.” We have <strong>daa-minwaagamin</strong>, and translated it as “it (a liquid) should taste good.” This preverb can be used for VAIs or VIIs.
            </p>
            <p>
                <strong>Ishkwaa-</strong>, a lexical preverb, <em>pv lex</em>, means “stopped, is over, is done, after.” It can be used as the only preverb or with other preverbs. In this lesson we have a sample of it with <strong>wii-</strong>, <strong>niwii-ishkwaa-wiisin</strong>, “I want to finish/stop eating.” If we didn’t have that <strong>-wii</strong> part indicating volition / future tense, a simpler form of the sentence would be, <strong>nindishkwaa-wiisin</strong>, “I am done eating.”
            </p>
            <p>
                We also see the preverb <strong>gichi-</strong>. This one is a “lexical preverb,” the most general category, and it means “big, great, very.” So instead of saying <strong>nimbakade</strong> – I am hungry, the speaker says <strong>ningichi-bakade</strong> – I am very hungry. You can see here how the exact form of the 1<sup>st</sup> person prefix depends on what it immediately precedes – <strong>nim</strong> before <strong>b</strong>, but <strong>nin</strong> before <strong>g</strong>. 
            </p>

            <h2 id='nouns'>Nouns</h2>
            <p>
                You may have noticed that we haven’t taught you any nouns yet. Well, it’s hard to talk about nouns because we haven’t taught you any verbs that can go with nouns yet, since we started with VAI verbs. We will branch out from there soon. However there is one noun in this lesson, <strong>wiisiniiwigamig</strong>, “a restaurant.” You may recognize the verb <strong>wiisini</strong> “s/he eats” inside this word. Paired with the ending <strong>-wigamig</strong>, which means a place or structure used for something (this ending shows up in lots of place names - bank, store, school, etc), we get the inanimate noun <strong>wiisiniiwigamig</strong>. In the dialog, our speaker says that he wants to drink “in the restaurant,” and here we express “in the restaurant” using one adverb, <strong>wiisiniiwigamigong</strong>. The suffix <strong>-ong</strong> is a “locative suffix,” <em>sf loc</em> in the OPD, and it indicates the site or direction of an action, as translated by various prepositions in English. In general, one could translate <strong>wiisiniiwigamigong</strong> as “at, to, in, on, by the restaurant.” The locative prefix comes in a few different forms, but all of them end in <strong>-ng</strong>, and the vowel used is closely related to what vowel is used to form the plural of the inanimate noun. You will learn how to make plurals and locatives later in the course. 
            </p>

            <h2 id='use-of-pronouns-for-emphasis'>Use of pronouns for emphasis</h2>
            <p>As we mentioned, using the bare personal pronouns isn’t necessary most of the time. 
                <br/>So you can say: 
                <br/><strong>Ningii-wiisin zhigwa</strong>.     I ate already. <strong>Zhigwa</strong> is an adverb used here to mean “already,” although it can also mean simply “now, at this time” in other contexts. 
            </p>
            <p>
                But if you wanted to emphasize <em>I</em>, and contrast it with someone else, you can add the pronoun. 
                <br/><strong>Ningii-wiisin niin zhigwa. Giin dash?</strong> <em>I</em> already ate, did you? <strong>Dash</strong> is a particle meaning “and” in the sense of “what about?” <strong>Giin dash</strong> could translate as “And you? / Did you? / What about you?” <strong>Dash</strong> is used in many ways in Ojibwe, and doesn’t always translate as “and” – frequently it is more like “but” as you will see in other examples. It often involves contrasting two things. 
            </p>
        </div>
    );
}

export default Lesson1A;