import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

const Introduction = () => {
    useEffect(() => {
        document.title = 'Introduction'
    }, []);
    
    return (
        <div className='text-page-container'>
            <div className='button-container' style={{padding: '0'}}>
                <Link className='button' to='/'>Back</Link>
            </div>
            
            <h1>Learn Ojibwe by Spaced Repetition.</h1>
            
            <p>Course conceived and drafted by Jed Meltzer, Ph.D.
            <br/>Additional material and editing by Perry Bebamash.
            <br/>Editors and consultants: Michael Sullivan, Ph.D.; Gordon Jourdain, Ed.D.</p>
 
            <p>Welcome to “Learn Ojibwe by Spaced Repetition.” This is a demonstration project designed to illustrate the approach of teaching a North American Indigenous language through the use of spaced repetition software (SRS). This course may be used for self-study by those learning entirely on their own, and we have tried to provide enough information to make it stand alone if necessary. But we hope that Ojibwe learners will also find it useful as a supplement to classroom exercises. The idea is that learners can drill vocabulary and grammar on their own when they are not in class, and will be well prepared to make good use of their classroom time to spend on other activities besides drilling.</p>
 
            <p>This course contains extensive written material, with dialogs, example sentences, vocabulary lists, and grammatical notes. The notes can get long-winded at times. Since we have no plans to turn them into a printed book that people would have to carry around, we did not feel constrained by length. This comes from our desire to make this material stand alone. These notes can also be used by teachers to help plan out longer lectures on how the language works. For learners, we recommend that you spend about 90% of your study time actually drilling the vocabulary and grammar using SRS, and only 10% of your time reading the notes. You can refer back to the notes for reference when questions arise. If you attempt to learn Ojibwe from the notes alone, without using SRS, you will probably not get very far.</p>
 
            <p>This project arose from a particular philosophy of language learning. We believe that acquiring a strong base of vocabulary is the most important element of learning a new language. It may not be sufficient without other kinds of learning, but it is necessary, and no language learner can proceed to high levels of proficiency without spending many hours memorizing vocabulary. Spaced Repetition Software offers an effective and efficient method for learning hundreds of words over many months, so that you will retain them in the long run. Good SRS is optimized for long-term retention, not for cramming, and should be used every day for an amount of time that you can reasonably sustain – perhaps 15-30 minutes.</p>
 
            <p>In my own attempts to learn Ojibwe, I found a wealth of material on the internet, enough to make learning the language largely by self-study a realistic goal. However, I found it difficult to acquire enough vocabulary to really progress. Most lectures, whether online or in person, focus on the grammar. This makes sense, because it would be extremely boring to watch a teacher simply recite word lists. But in the end, we need to memorize those word lists, and we need guidance on how to do that. This project attempts to provide that.</p>
 
            <p>Besides lectures, one can find a wealth of real language material for Ojibwe these days – stories old and new, newsletters, original videos of actual conversations, translated TV programs – the list of resources is ever growing. But most learners will struggle to get anything out of this wealth of material. Reading a text can be a wonderful learning experience if you already understand over half of the words in it. If you have to look up every word in a dictionary, it gets overwhelming very quickly. And with a polysynthetic language like Ojibwe, in which long words are made up of several parts, it is hard for a beginner to even identify the parts that they can look up. With this project, we aim to provide beginners a realistic path to get to the point where they can learn from reading a text.</p>
 
            <p>For those considering participation in an immersion program, we believe that SRS is an excellent way to prepare. If you go into an immersion program with 1000 words memorized, you will come out of it knowing how to make good sentences out of those words. But if you go in without much vocabulary, you will struggle to follow along and spend much more of your time trying to seize onto a few words that you know. We believe that immersion is essential to producing good speakers, but for beginners, memorizing a base of vocabulary and fundamental grammar may be a better use of your time. This is especially the case if you have only a few weeks to devote to immersion, and need to plan out when to include it in your language learning journey.</p>
 
            <p>There are many software options available for SRS, and we expect the list to grow over time. We have therefore made efforts to provide our material in a neutral format that you can import into any software that you want, especially once the software that we use now has gone obsolete as it surely will. Currently, we are making heavy use of the open source program Anki. We will provide examples for using that program, but if you have another favourite, feel free to use it.</p>
 
            <p>SRS can be used either on a computer or a mobile device. We favour a hybrid approach – use a computer to make your “flashcards” and organize them, but use a mobile device to actually do your drilling. This is very practical, as you can find little bits of time throughout the day to drill on your mobile device – waiting in line, stirring a pot on the stove, keeping one eye on your kids at the playground, - essentially, all the times when we are staring at our cell phone already anyway. Many SRS programs, including Anki, have good functionality for syncing your progress across multiple devices, including both a computer and a cell phone.</p>
 
            <h2>How SRS works</h2>
            <p>Spaced repetition software is used to learn large amounts of arbitrary verbal material, especially useful for memorizing vocabulary in foreign languages. Medical students are another example of a group of people who use it a lot to memorize information. SRS is based on several principles derived from psychology experiments studying how people learn. These include:</p>
 
            <p>
                <ol>
                    <li>Active recall. SRS generally gives you a prompt (a question), and asks you for the answer. Rather than simply telling you the answer. The act of actively trying to recall the answer makes you more likely to remember it later, even if you don’t get it right.</li>
                    <li>Instant feedback. It’s best to find out right away if your answer was right, instead of submitting a whole quiz and waiting for a teacher to grade it several days later.</li>
                    <li>Spacing effect. Extensive research on the timecourse of forgetting information shows that there is an optimal time to review something. If you have just seen a word and it’s still fresh in your mind, there is little benefit in reviewing it again. If you have completely forgotten a word, then seeing it again is not much better than seeing it for the first time. In between these two extremes, there is a “sweet spot” in which reviewing a word can really help it stick in your long-term memory. If you are learning hundreds of words over many months, then it is worth your while to really optimize, and review each word at just the right time to get the most bang for your buck. SRS keeps track of how well you know every word, and uses a specific algorithm to repeat words at just the right time so that you get the biggest benefit from your limited study time.</li>
                </ol>
            </p>
 
            <p>In this course, we give you material to drill with SRS. That is the main benefit of using this program. The grammar notes are there to provide context, but you can certainly find the same concepts covered in other courses and in various books. If you use SRS to thoroughly memorize the vocabulary and grammar patterns that we teach here, you will be in a good position to progress with your knowledge of Ojibwe and benefit from more advanced resources like videos, texts, and immersion camps.</p>
        </div>
    )
}

export default Introduction;