import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

const DialectNotes = () => {
    useEffect(() => {
        document.title = 'Dialect Notes';
    }, []);
    
    return (
        <div className='text-page-container'>
            <div className='button-container' style={{padding: '0'}}>
                <Link className='button' to='/'>Back</Link>
            </div>

            <h1>Note on dialects – part 1.</h1>
 
            <p>There is an enormous amount of variability in spoken Ojibwe, mostly attributable to geographical location, but even within one location, there is still variability from speaker to speaker, more than what we are used to in English. This is normal for any language that is primarily oral, where people seldom read or write extensively in it. Dealing with this linguistic diversity is a challenge for anyone who wants to make written lessons.</p>
 
            <p>The Ojibwe taught in this course is not necessarily a “pure” example of any one particular dialect. We have tried to make all the material internally consistent and verify that it sounds natural to native speakers, but there are surely many differences between what we teach and how any one individual speaks.</p>
 
            <p>The language in this course is very heavily influenced by existing written material, especially what is already available on the internet. This means that the course is based mostly on the Southwestern dialect of Ojibwe, specifically on varieties spoken in the US state of Minnesota, and nearby communities in Northwestern Ontario. This dialect is not necessarily more standardized, more correct, or more prestigious than any other, but it is better documented, giving us more source material to work with. That said, there are significant dialect differences even within this geographical region, especially between more Southern communities (e.g. Mille Lacs, which has produced several excellent books) and more Northern ones (Leech Lake, Red Lake, Ponemah). In some cases, we have had to make difficult choices about exactly what to teach. Where applicable, we will point out some major differences among these dialects, but we have generally chosen to “pick and stick” and teach you some specific forms rather than try to teach you all possible variations simultaneously. Overall, we have tried to make most of this course very consistent with the written material published by the Mille Lacs band of Ojibwe and by academics at Bemidji State University, since much of that material is readily available online to learners. However, we have been influenced as well by speakers from more Northerly areas, and some Northern usages have surely crept into our lessons.</p>
 
            <p>This course is intended to give you a foundation in the basics of Ojibwe, and should enable you to benefit from more advanced resources, including immersion opportunities, when you are ready for them. Wherever you go to further your knowledge of Ojibwe, you will have to adjust your knowledge of the language to match the local dialect. Some of the things you learn in this course may not make sense to all speakers, and you should expect that you will have to do some unlearning and relearning. However, the dialects are certainly mutually intelligible, and the greatest risk is simply that you will sound weird, not that you won’t be understood.</p>
 
            <p>The largest difference in dialects is between what some people call “Western” and “Eastern” versions of Ojibwe (although these categories themselves encompass many dialects). This course is clearly Western Ojibwe. If you aim to use the language in more Easterly regions like Southern Ontario, Manitoulin Island, Sudbury, Quebec, etc., then you will find that the differences between this course and those dialects are more extreme. This course may still be a useful background for you, especially since learning materials for Eastern Ojibwe are more rare, but you will have more adjustment to do. We do eventually hope to adopt this course into another version specifically for Eastern Ojibwe.</p>
 
            <p>Eastern Ojibwe is characterized by a heavy degree of “vowel syncope,” or vowel deletion. Words are shorter and seem to be “missing” vowels that are present in their Western Ojibwe counterparts. For example, <b>apabiwin</b> “chair” in Western Ojibwe is <b>pabwin</b> on Manitoulin Island. The rules for vowel syncope are fairly regular and predictable, so if you learn Western Ojibwe first, it may not be so hard to learn to “convert” it to Eastern later on. It might be harder to go in the other direction, since you wouldn’t know what the missing vowels are. This is part of the logic behind our decision to develop a Western Ojibwe course first. However, as this course was developed by researchers in Toronto, in the middle of several communities that use Eastern Ojibwe, it wasn’t an easy decision!</p>
 
            <p>We plan to add a second note specifically addressing some major dialect differences between Northern and Southern Minnesota (with the Northern version extending up into Manitoba and Western Ontario). This is not quite ready yet, and will require some intermediate knowledge of Ojibwe on your part for it to be useful, so no need to worry about it yet.</p>
        </div>
    );
}

export default DialectNotes;