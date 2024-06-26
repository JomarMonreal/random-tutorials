import { Paper } from '@mui/material';
import React from 'react';

export function NewsAside() {
    return <Paper component={"aside"} className='w-full md:w-64 bg-primary-100 text-white p-4'>
        <h4>Random Tutorials Alpha Release</h4>
        <p>We are thrilled to announce the official launch of the Random Tutorials website on July 1, 2024. Designed to be a hub of creativity and knowledge, Random Tutorials offers a unique platform where users can explore a wide variety of tutorials on virtually any subject. From DIY projects and tech tips to cooking recipes and art lessons, our site promises a rich array of content tailored to diverse interests.</p>
        <p>Whether you're a learner looking for new skills or an expert eager to share your knowledge, Random Tutorials provides an intuitive and engaging environment for all. Dive into the randomness, discover new passions, and join our growing community of curious minds today!</p>
    </Paper>;
}
