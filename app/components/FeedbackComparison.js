// components/FeedbackForm.js

'use client'

import React, { useState } from 'react';
import Image from 'next/image';
import { useSearchParams } from "next/navigation";


// Temporary hardcoded data before API connected

/* 
    Data shape: 
        question1: {
            researchQuestion: 'Evaluate the prevalence of medically resistant focal epilepsy in children at King Fahd University Hospital between January 2017 and December 2018.?',
            answers: [
                { answer: 'Poor rigor within a field can result in higher clinical trial failure rates.', user: 'Jack Liddy', date: '2024-03-15' },
                { answer: 'Non-rigorous studies can misrepresent diagnostic efficacy.', user: 'Jane Doe', date: '2024-03-15' },
                { answer: 'More cowbell!', user: 'Christopher Walken', date: '2024-03-15' },
                { answer: 'Use a more rigorous statistical test.', user: 'John Doe' },
            ]
        }
        question2: {
            researchQuestion: 'Assess the prevalence of type 1 diabetes mellitus among children attending King Fahd University Hospital from January 2017 to December 2018.',
            answers: [
                { answer: 'Poor rigor within a field can result in higher clinical trial failure rates.', user: 'Jack Liddy', date: '2024-03-15' },
                { answer: 'Non-rigorous studies can misrepresent diagnostic efficacy.', user: 'Jane Doe', date: '2024-03-15' },
                { answer: 'More cowbell!', user: 'Christopher Walken', date: '2024-03-15' },
                { answer: 'Use a more rigorous statistical test.', user: 'John Doe' },
            ]
        }
        question3: {
            researchQuestion: 'Evaluate the prevalence of medically resistant focal epilepsy in children at King Fahd University Hospital between January 2017 and December 2018?',
            answers: [
                { answer: 'Poor rigor within a field can result in higher clinical trial failure rates.', user: 'Jack Liddy', date: '2024-03-15' },
                { answer: 'Non-rigorous studies can misrepresent diagnostic efficacy.', user: 'Jane Doe', date: '2024-03-15' },
                { answer: 'More cowbell!', user: 'Christopher Walken', date: '2024-03-15' },
                { answer: 'Use a more rigorous statistical test.', user: 'John Doe' },
            ]
        }
*/
// Without hardcoding answers
// const data = {
//     question1: {
//         researchQuestion: 'Evaluate the prevalence of medically resistant focal epilepsy in children at King Fahd University Hospital between January 2017 and December 2018.?',
//         answers: []
//     },
//     question2: {
//         researchQuestion: 'Assess the prevalence of type 1 diabetes mellitus among children attending King Fahd University Hospital from January 2017 to December 2018.',
//         answers: []
//     },
//     question3: {
//         researchQuestion: 'Evaluate the prevalence of medically resistant focal epilepsy in children at King Fahd University Hospital between January 2017 and December 2018?',
//         answers: []
//     }
// }
// With hardcoded answers
// const data = {
//     question1: {
//         researchQuestion: 'Evaluate the prevalence of medically resistant focal epilepsy in children at King Fahd University Hospital between January 2017 and December 2018.?',
//         answers: [
//             { answer: 'Poor rigor within a field can result in higher clinical trial failure rates.', user: 'Jack Liddy', date: '2024-03-15' },
//             { answer: 'Non-rigorous studies can misrepresent diagnostic efficacy.', user: 'Jane Doe', date: '2024-03-15' },
//             { answer: 'More cowbell!', user: 'Christopher Walken', date: '2024-03-15' },
//             { answer: 'Use a more rigorous statistical test.', user: 'John Doe' },
//         ]
//     },
//     question2: {
//         researchQuestion: 'Assess the prevalence of type 1 diabetes mellitus among children attending King Fahd University Hospital from January 2017 to December 2018.',
//         answers: [
//             { answer: 'Poor rigor within a field can result in higher clinical trial failure rates.', user: 'Jack Liddy', date: '2024-03-15' },
//             { answer: 'Non-rigorous studies can misrepresent diagnostic efficacy.', user: 'Jane Doe', date: '2024-03-15' },
//             { answer: 'More cowbell!', user: 'Christopher Walken', date: '2024-03-15' },
//             { answer: 'Use a more rigorous statistical test.', user: 'John Doe' },
//         ]
//     },
//     question3: {
//         researchQuestion: 'Evaluate the prevalence of medically resistant focal epilepsy in children at King Fahd University Hospital between January 2017 and December 2018?',
//         answers: [
//             { answer: 'Poor rigor within a field can result in higher clinical trial failure rates.', user: 'Jack Liddy', date: '2024-03-15' },
//             { answer: 'Non-rigorous studies can misrepresent diagnostic efficacy.', user: 'Jane Doe', date: '2024-03-15' },
//             { answer: 'More cowbell!', user: 'Christopher Walken', date: '2024-03-15' },
//             { answer: 'Use a more rigorous statistical test.', user: 'John Doe' },
//         ]
//     }
// }

const FeedbackComparison = () => {

    
    return (
        <div>
            <h1>FeedbackComparison</h1>
        </div>
    );
};

export default FeedbackComparison;