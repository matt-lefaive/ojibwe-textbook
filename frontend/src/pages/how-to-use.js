import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

const HowToUse = () => {
    useEffect(() => {
        document.title = 'How To Use';
    }, []);
    
    return (
        <div className='text-page-container'>
            <div className='button-container' style={{padding: '0'}}>
                <Link className='button' to='/'>Back</Link>
            </div>
            
            <h1>How to use this course</h1>
 
            <p>This course is intended as a guided curriculum for self-study of Ojibwe using spaced repetition software (SRS). SRS is an extremely powerful tool to help learners memorize vocabulary and grammar, and it is extensively used by language learners around the world, especially solo hobbyists, but it is increasingly used formally in educational contexts as well. The success of some high-profile language apps like Duolingo and Memrise has driven a new wave of interest in SRS. However, the lack of suitable materials for North American Indigenous languages has limited the adaptation of SRS within language revitalization communities. This course represents an attempt to change that situation, and encourage the development of suitable materials to help learners acquire Indigenous languages using SRS. We chose Ojibwe for the pilot project because it seemed to be in a certain “sweet spot” of feasibility – there is a wealth of material available for study (compared to other Indigenous languages), an eager community of adult learners wanting better resources for studying it, and an active community of scholars and teachers available to help us develop the course. We are excited to contribute to the revitalization of Ojibwe, but we also hope that this course will inspire language activists for other languages to create something similar.</p>
  
            <p>This course will not be very useful to you without SRS. SRS is the heart and soul of this project, and <b>our intention is that you will spend about 90% of your study time using SRS,</b> and only about 10% engaging directly with the written lessons and audio dialog. The course is mainly developed with solo learners in mind, but it can also be used in classes and community groups. We strongly encourage teachers to use this course as a way to get familiar with SRS, and consider making their own materials for their students that follow their own curriculum.</p>
  
            <p>This course is NOT sufficient on its own to teach you the Ojibwe language. It is intended to be used alongside other resources, ideally simultaneously. You cannot become a proficient speaker without practicing speaking with other speakers, working with a teacher, and using the language in your daily life. However, we believe that this course will help provide you with a knowledge base to build from, so that you will be able to get more out of the other resources that are available to you.</p>
  
            <p>This course is not tied to any specific app. We have striven here to provide materials in a neutral format (spreadsheets and plain text, along with accompanying audio files) that can be successfully imported into any SRS program that you want to use, including better programs that may come along in the future. Here is a list of some currently available programs:</p>
  
            <p><a href="https://en.wikipedia.org/wiki/List_of_flashcard_software">https://en.wikipedia.org/wiki/List_of_flashcard_software</a></p>
  
            <p>That said, as of 2023 we strongly recommend the program Anki. It is the most popular program among users who make their own material, although perhaps not as popular as some apps that provide entire pre-made language courses like Duolingo. Anki is extremely flexible and customizable, and there is a wealth of material on the internet showing how to use it (although very little of that is specific to Ojibwe or any other Indigenous language). We will provide templates for flashcards in Anki for you to use in this course. Anki is free for use on a computer (Windows, Mac, and Linux supported), and free on Android mobile devices. The iOS version (iPhone and iPad) costs $25 USD for a lifetime subscription – this is the main source of revenue for the developer of the software. Although Anki has one main developer (Damien Elmes), it is an open-source program, and many helpful add-ons and plug-ins for it have been developed by others. None of the add-ons are necessary for this course, but you might find some of them helpful if you really get into the Anki lifestyle.</p>
  
            <p>One very helpful feature of Anki, and many other SRS programs, is that it can be used on both a computer and a mobile device, and your progress can by synched across the devices. Also, the program can be used offline without an internet connection, which is very helpful if you want to practice on a mobile device during your commute, especially in a subway. We recommend that you use a computer for reading the lessons, downloading the material, and organizing your SRS flashcards. However, we recommend using a mobile device instead for the actual SRS studying that will occupy 90% of your study time. It is so much more convenient – you can pull out your phone and study some words whenever you have some free time during the day – commuting (if you’re not driving), waiting in line, cooking, etc. If you use the program offline, be sure to “sync” it once you have an internet connection, so that your progress will be copied to your other devices.</p>
  
            <p>Before you get started using the course, you will need to set up Anki (or other program) and become familiar with it. We will provide some instruction, but there are many well-produced videos out there illustrating Anki, for other languages. You can still learn from those videos and apply the same principles to our material. Here is a particularly good series:</p>
  
            <p><a href="https://mandarinmania.com/creating-anki-decks/">https://mandarinmania.com/creating-anki-decks/</a></p>
  
            <p>Here is our suggested workflow for each lesson of the course:</p>
  
            <p>
                <ol>
                    <li>Using a computer, listen to the dialog and read along. You will not understand anything for Lesson 1 (unless you already have some knowledge of the language), but in future lessons, you will understand some but not all of the dialog. Try listening to the dialog by itself without reading as well.</li>
                    <li>Read the grammar notes. Refer back to the dialog as you go through them. The dialogs are written specifically to illustrate the new elements of grammar that we introduce in each lesson, and also to introduce vocabulary in context. The grammar notes are pretty extensive and detailed. You may not understand everything perfectly. That is OK. They are there for you to refer to as you progress in the language. You may find that after going through many lessons, the grammar notes from the earlier lessons will make more sense to you.</li>
                    <li>Enable the new words in your Anki deck. If you bring up the “Browse” menu, you will see that all of the words are labelled by what lesson they are introduced in. By default, we provide the deck with the lesson 1 words all enabled, but the words from the subsequent lessons are “suspended.” When you get to lesson 2, you can “unsuspend” all the words for that lesson, and then they will start showing up in your daily studying.</li>
                    <li>Drill the material on your mobile device for about 30 minutes a day. You can do more or less if you want – whatever works for you. Anki will automatically assign certain cards to you to review every day. There is a default limit of 200 reviews per day per deck, although you will only reach that limit if you have a lot of material to review. If you find it’s too much, you can lower the limit; that is fine. If it’s not enough, you can go through the course faster and add more material. Of course, you can also add your own material not covered in the course – we expect you will do that eventually as you progress to become a more advanced learner.</li>
                    <li>Keep drilling every day until you feel you have mastered all the material. Anki will tell you which cards are “mature” – meaning that you know them well, according to its algorithm, and which are “young” – ones that you are still learning. You can wait until all the cards are mature before moving on to the next lesson, but you can also move a bit faster if you want. It’s up to you. If you’re doing this course on your own, you can move through it as fast or as slow as you want. The important thing is to establish a sustainable daily habit.</li>
                    <li>Go back to the dialog now and then to check your increasing understanding. When you have mastered the flashcards, listen to the dialog again without reading – you should understand it well at this point, at least 80%. If you don’t completely understand 100%, you can ask a teacher or friend for help with the sticking points, or you can just move on. There will always be some unclear points when you are learning a language.</li>
                    <li>Repeat all this with the next lesson.</li>
                </ol>
            </p>

  
            <h2>Anki decks:</h2>
  
            <p>Anki is very flexible and can be customized according to the material you are studying. Flashcards can include audio, pictures, even videos. Our decks are not too fancy – no videos, no pictures. There is audio provided but we have set up the decks so that the audio isn’t necessary, so you can use these templates to study material that is a mix of items with and without audio, and you can also use it in situations when you can’t use audio.</p>
  
            <p>They way we have set up the deck, it is a little different for Ojibwe→English cards vs. English→Ojibwe cards. For English→Ojibwe only, there is a box for typing the answer, i.e. the Ojibwe translation of the English word. Typing is optional. You can skip it, but we do recommend doing it as it will improve your memory for the material. Once you are finished typing it, click “show answer.” The program will show you which letters you got correct (in green), which ones are wrong (in red), and it will also indicate where there are missing letters. You then have to judge whether your answer was correct. You can select –</p>
  
            <p>Again – I got it wrong, I should see the word again quickly.</p>
  
            <p>Hard – I got it right, but it took me a long time and I feel like I just barely got it. If you choose this option, the word will be seen again sooner, but not as soon as if you had gotten it wrong.</p>
  
            <p>Good – Ideally this is the response you’ll select most of the time. This means that you got the word right, and it wasn’t too hard.</p>
  
            <p>Easy – I don’t use this much, but generally I select it if I got the word right, and I also feel that it’s a word I know very very well and I don’t really even need to study it ever. Selecting this option means you will see it less often going forward.</p>
  
            <p>Note that what matters for scheduling the repetitions is which option you select. The typing has no impact. So if you made an accidental typo, you can still mark yourself correct. We do recommend being strict with yourself though. It’s important to distinguish long and short vowels in Ojibwe, so for example if the answer was <b>gikaa</b> and you typed <b>gika</b>, you should mark yourself wrong (“Again”). Since the typing has no impact, you can also skip it entirely and just think the answer. Once you click “show answer,” you can decide if you were right.</p>
  
            <p>For the Ojibwe→English cards, there is no typing option. We figure people don’t want to waste time typing English words, since they already know English. Here, you just think the answer. For these, don’t worry too much about thinking the <i>exact</i> definition on the card. For example, if the Ojibwe word was <b>michaa</b> and you thought “It is little,” but then the official answer is “It is small,” you got it right. You don’t need the English definition verbatim.</p>
  
            <p>We provide part of speech on the cards as well. Whenever possible, this has been taken from the website <a href='https://ojibwe.lib.umn.edu/'>Ojibwe People’s Dictionary</a>.</p>
  
            <p>The complete key to Ojibwe Parts of Speech is available here: <a href='https://ojibwe.lib.umn.edu/help/ojibwe-parts-of-speech'>https://ojibwe.lib.umn.edu/help/ojibwe-parts-of-speech</a></p>
  
            <p>Note that this classification is very detailed, and you won’t necessarily understand the meaning of all the categories as you start out. They will make more sense as your knowledge of the language grows.</p>
  
            <h2>Steps to getting started with the Anki deck:</h2>
  
            <p>
                <ol>
                    <li>Download the Anki desktop program for Windows or Mac. Available here: <br/><a href='https://apps.ankiweb.net/'>https://apps.ankiweb.net/</a><br/> You can also download the manual for Anki there. It has lots of functionality, and we can’t cover it all in this language course.</li>
                    <li>Install the appropriate mobile App on your mobile device. For Android, it’s called <i>Ankidroid</i> and it’s free. For iPad and iPhone, it’s called <i>Ankimobile Flashcards</i>, and it costs $25USD or $35CAD. Please note, there are several other apps with “Anki” in their name that are flashcard programs – these are copycats and should be avoided as they will not sync properly with the Desktop program.</li>
                    <li>You will also need an account on Ankiweb – this is what stores your data to sync between devices. We are providing accounts to learners in our pilot courses, but if you’re learning entirely on your own, you’ll need to create your own account.</li>
                    <li>On the desktop program, select File→Import and then choose the Anki deck that was provided for you.</li>
                    <li>You can now drill words. We have set it up so that the words from lesson 1 are active and all the rest are “suspended.” You’ll have to “unsuspend” other words from the Browse menu to start drilling subsequent lessons. Please note that due to a bug in the alphabetical order, lessons 10, 11, and 12 appear on the list after lesson 1 and before lesson 2.</li>
                    <li>Once you’ve drilled some words, hit “sync.” Your progress should be saved to your Ankiweb account now. Then, on your mobile device, you can also hit sync. You may be asked to log into your Ankiweb account the first time. It should then download the whole deck, including the audio files, and you’ll be able to keep drilling on your phone. We recommend using your phone primarily for drilling</li>
                </ol>
            </p>
        </div>
    )
}

export default HowToUse;